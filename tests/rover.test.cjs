const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),{stripTypeScriptTypes}=require('node:module');
const R=require('../dist/engine.js');
for(const [map,program] of [[0,'FFFRFFFF'],[1,'FRFFFFRF'],[2,'FIFFFF']]){let s=R.initial(map);for(const c of program)s=R.step(s,program.split(''));assert(R.atGoal(s));assert.equal(s.status,'finished');}
let s=R.initial(0);s=R.step(s,['L','F','F']);s=R.step(s,['L','F','F']);s=R.step(s,['L','F','F']);assert.equal(s.status,'collision');assert.equal(s.x,0);assert.deepEqual(R.step(s,['F']),s);
s=R.step(R.initial(),['S','F']);assert.equal(s.status,'stopped');assert.deepEqual(R.step(s,['S','F']),s);
let original=R.initial();R.step(original,['F']);assert.equal(original.y,6);assert.equal(original.trace.length,0);
for(const map of [0,1,2]){let q=R.initial(map);for(let i=0;i<40;i++){q=R.step(q,Array(40).fill('I'));assert(q.x>=0&&q.x<8&&q.y>=0&&q.y<8);}}
console.log('Simulator: all maps solvable; wall/boundary collision, stopped-state latch, immutability and 40-step bounds passed.');
