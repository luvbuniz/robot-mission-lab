const assert=require('node:assert/strict');
const lessons=require('../dist/slides-data.js');
const logic=require('../dist/slides.js');
assert.equal(lessons.length,8);
for(const l of lessons){
 assert.equal(l.explore.length,3);
 for(const q of [l.prediction,l.exit]){assert.equal(q.options.length,3);assert.equal(q.feedback.length,3);assert(q.correct>=0&&q.correct<3);assert(q.q.length>10);}
 const p=l.practice;
 if(p.type==='order'){assert.equal(new Set(p.correct).size,p.items.length);assert(logic.order(p.correct,p.correct));assert(!logic.order([...p.correct].reverse(),p.correct));assert(!logic.order([],p.correct));}
 if(p.type==='select'){assert(logic.selection([...p.correct].reverse(),p.correct));assert(!logic.selection([0,1,2,3],p.correct));assert(!logic.selection([],p.correct));}
 if(p.type==='number'){assert(logic.number(String(p.value),p.value));assert(!logic.number('',p.value));assert(!logic.number('Infinity',p.value));assert(!logic.number('bad',p.value));assert(!logic.number(p.value+1,p.value));}
}
assert.equal(logic.sensor(30,20,false),'clear');assert.equal(logic.sensor(20,20,false),'close');assert.equal(logic.sensor(15,20,false),'close');assert.equal(logic.sensor(0,20,false),'invalid');assert.equal(logic.sensor(50,20,true),'invalid');
console.log('All eight slide decks: content structure, correct/wrong grading, empty answers, ordering, selections and sensor thresholds passed.');
