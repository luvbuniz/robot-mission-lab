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
for(const [input,expected] of [['white','move'],['red','delivery'],['unknown','check'],['blue','check'],[null,'check']])assert.equal(logic.color(input),expected);
console.log('Eight slide decks, grading, invalid numeric answers, ordering, selections and color decisions passed.');
