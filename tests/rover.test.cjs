const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),{stripTypeScriptTypes}=require('node:module');
const R=require('../dist/engine.js');
for(const [map,program] of [[0,'FFFRFFFF'],[1,'FRFFFFRF'],[2,'FIFFFF']]){let s=R.initial(map);for(const c of program)s=R.step(s,program.split(''));assert(R.atGoal(s));assert.equal(s.status,'finished');}
let s=R.initial(0);s=R.step(s,['L','F','F']);s=R.step(s,['L','F','F']);s=R.step(s,['L','F','F']);assert.equal(s.status,'collision');assert.equal(s.x,0);assert.deepEqual(R.step(s,['F']),s);
s=R.step(R.initial(),['S','F']);assert.equal(s.status,'stopped');assert.deepEqual(R.step(s,['S','F']),s);
let original=R.initial();R.step(original,['F']);assert.equal(original.y,6);assert.equal(original.trace.length,0);
for(const map of [0,1,2]){let q=R.initial(map);for(let i=0;i<40;i++){q=R.step(q,Array(40).fill('I'));assert(q.x>=0&&q.x<8&&q.y>=0&&q.y<8);}}
console.log('Simulator: all maps solvable; wall/boundary collision, stopped-state latch, immutability and 40-step bounds passed.');
for(const lesson of [1,2,3,4,5,6,7,8]){
 const ts=fs.readFileSync(`dist/code/lesson-${lesson}.ts`,'utf8');const js=stripTypeScriptTypes(ts);
 for(const scenario of ['normal','button-stop','invalid-sensor','close-sensor','stop-during-measure']){
  let now=0,moving=false,cancelled=false,afterStop=0,moves=0,events={},forever;
  const tick=ms=>{now+=ms;if((scenario==='button-stop'&&now>=100)||(scenario==='stop-during-measure'&&now>=30)){if(!cancelled){cancelled=true;events.B?.();}}};
  const ctx={input:{runningTime:()=>now,onButtonPressed:(b,fn)=>events[b]=fn},Button:{A:'A',B:'B'},IconNames:{Yes:1,No:0},basic:{showIcon:()=>{},clearScreen:()=>{},showNumber:()=>{},pause:tick,forever:fn=>forever=fn},Kitronik_Move_Motor:{stop:()=>moving=false,setUltrasonicUnits:()=>{},Units:{Centimeters:0},DriveDirections:{Forward:0},SpinDirections:{Right:1},move:()=>{moving=true;moves++;if(cancelled)afterStop++;},spin:()=>{moving=true;moves++;if(cancelled)afterStop++;},measure:()=>{tick(30);return scenario==='invalid-sensor'?0:scenario==='close-sensor'?10:100;}}};
  vm.runInNewContext(js,ctx);events.A();if(lesson===4)forever();assert(!moving,`Lesson ${lesson} left motors running`);assert.equal(afterStop,0,`Lesson ${lesson} restarted after B`);assert(now<=10080,`Lesson ${lesson} exceeded time bound`);if([1,4].includes(lesson))assert.equal(moves,0);if(lesson>=6&&['invalid-sensor','close-sensor','stop-during-measure'].includes(scenario))assert.equal(moves,0);
 }
}
console.log('Starter source: TypeScript parsing and 40 mocked scenarios passed (stops, invalid/close readings, cancellation during measurement, time limit). Actual MakeCode compile and physical testing still required.');
const C=require('../dist/course.js');assert.equal(C.lessons.length,8);for(const l of C.lessons){assert(fs.existsSync(`dist/code/lesson-${l.id}.ts`));assert(l.narration&&l.answer&&l.success);}
console.log('Eight complete lesson records and matching source downloads verified.');
