const Rover = (() => {
 const maps = [
  {name:'First delivery',start:[1,6],heading:0,goal:[5,3],walls:[[3,5],[3,4],[2,2],[6,5]],hint:'One solution: forward three, right, forward four.'},
  {name:'Around the corner',start:[1,6],heading:0,goal:[5,6],walls:[[1,4],[2,4],[3,4],[4,4],[3,6]],hint:'One solution: forward, right, forward four, right, forward.'},
  {name:'Sensor decision',start:[1,6],heading:0,goal:[5,5],walls:[[1,4],[3,3],[4,3]],hint:'Try forward, then an if-blocked decision, then forward four.'}
 ];
 const labels={F:'Forward 1',L:'Turn left',R:'Turn right',I:'If blocked: right; else: forward',S:'Stop'};
 const dirs=[[0,-1],[1,0],[0,1],[-1,0]];
 function initial(map=0){const m=maps[map];return {map,x:m.start[0],y:m.start[1],h:m.heading,pc:0,steps:0,status:'ready',message:'Predict your route, then step or run.',trace:[]};}
 function blocked(s){const d=dirs[s.h],x=s.x+d[0],y=s.y+d[1];return x<0||y<0||x>7||y>7||maps[s.map].walls.some(p=>p[0]===x&&p[1]===y);}
 function step(state,program){const s={...state,trace:[...state.trace]};if(['collision','finished','stopped'].includes(s.status))return s;if(s.pc>=program.length){s.status='finished';s.message=atGoal(s)?'Delivery complete. Save your test result.':'Program ended outside the delivery space. Change one step.';return s;}const cmd=program[s.pc];if(!labels[cmd])throw Error('Unknown command');const sensed=blocked(s);let action=cmd==='I'?(sensed?'R':'F'):cmd;s.pc++;s.steps++;s.status='running';if(action==='S'){s.status='stopped';s.message=atGoal(s)?'Stopped in the delivery space. Success!':'Stopped before reaching the delivery space.';}else if(action==='F'){if(sensed){s.status='collision';s.message='A wall or edge is ahead. The robot cannot move there. Start over and change a step.';}else{s.x+=dirs[s.h][0];s.y+=dirs[s.h][1];s.message='Moved one square.';}}else{s.h=(s.h+(action==='R'?1:3))%4;s.message=action==='R'?'Turned right a quarter-turn in place.':'Turned left a quarter-turn in place.';}if(cmd==='I')s.message=(sensed?'Sensor: blocked → turn right. ':'Sensor: clear → move forward. ')+s.message;s.trace.push({step:s.steps,command:labels[cmd],sensor:sensed?'blocked':'clear',x:s.x,y:s.y,heading:['N','E','S','W'][s.h],result:s.message});if(s.status==='running'&&s.pc>=program.length){s.status='finished';s.message+=atGoal(s)?' Delivery complete!':' Program ended outside the delivery space.';}return s;}
 function atGoal(s){return s.x===maps[s.map].goal[0]&&s.y===maps[s.map].goal[1];}
 return {maps,labels,initial,blocked,step,atGoal};
})();
if(typeof module!=='undefined')module.exports=Rover;
