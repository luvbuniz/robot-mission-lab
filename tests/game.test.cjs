const assert=require('node:assert/strict');
const Rover=require('../dist/engine.js');
const Rewards=require('../dist/game.js');
function run(map,program){let s=Rover.initial(map);for(let n=0;n<program.length;n++)s=Rover.step(s,program);return s;}
const failed=run(0,['F','F','R','F','F']);
assert.equal(failed.status,'collision');
assert.equal(Rewards.earned(failed,false,true),0,'A collision never earns delivery stars.');
for(const [map,program] of [[0,['F','F','F','R','F','F','F','F']],[1,['F','R','F','F','F','F','R','F']],[2,['F','I','F','F','F','F']]]){
 const s=run(map,program);assert.ok(Rover.atGoal(s));
 assert.equal(Rewards.earned(s,true,false),2);
 assert.equal(Rewards.earned(s,true,true),3);
 assert.equal(Rewards.earned({...s,status:'running'},true,true),0,'Passing over the goal during a running program is not a completed delivery.');
}
const long=run(0,['L','R','F','F','F','R','F','F','F','F']);
assert.equal(Rewards.earned(long,true,false),1,'A longer correct route still earns a delivery star.');
assert.equal(Rewards.earned(long,true,true),2,'Recording credit does not require the shortest route.');
console.log('Game rewards: successful routes, collision, in-progress goal and longer-route feedback passed.');
