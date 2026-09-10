const MissionRewards = {
  targets: [8, 8, 6],
  earned(state, atGoal, recorded = false) {
    if (!atGoal || !['finished', 'stopped'].includes(state.status)) return 0;
    return 1 + Number(state.steps <= this.targets[state.map]) + Number(recorded);
  }
};
if (typeof module !== 'undefined') module.exports = MissionRewards;

const BrickGame = (() => {
  const stats = Array.from({length: 3}, () => ({tries: 0, stars: 0, prediction: ""}));
  const stories = [
    'Carry the supply parcel to the yellow delivery space. Plan around the blue barriers.',
    'The direct road is closed. Find a safe route around the corner to the delivery space.',
    'Use “If blocked” to help your robot choose its next move. Deliver the parcel in six steps.'
  ];
  let sound = false, context, boardMap = -1, rotation = 0, previousHeading = 0, effectTimer;
  const el = id => document.getElementById(id);
  function tone(kind) {
    if (!sound || !context || document.hidden) return;
    try {
      if (context.state === 'suspended') context.resume().catch(() => {});
      const notes = kind === 'win' ? [523,659,784] : kind === 'bump' ? [130,85] : kind === 'turn' ? [330] : [440];
      notes.forEach((frequency, i) => {
        const start = context.currentTime + i * .12;
        const osc = context.createOscillator(), gain = context.createGain();
        osc.type = kind === 'bump' ? 'triangle' : 'sine'; osc.frequency.value = frequency;
        gain.gain.setValueAtTime(0,start); gain.gain.linearRampToValueAtTime(.055,start+.01);
        gain.gain.exponentialRampToValueAtTime(.001,start+.1);
        osc.connect(gain); gain.connect(context.destination); osc.start(start); osc.stop(start+.11);
      });
    } catch (_) { sound = false; if(el('game-sound')) el('game-sound').textContent = 'Sound unavailable'; }
  }
  function setup() {
    const heading = document.querySelector('#lab-view h1');
    heading.textContent = 'Brick Robot Mission Lab';
    heading.nextElementSibling.textContent = 'Plan a route. Send your robot. Learn from every try.';
    const board = el('board');
    board.insertAdjacentHTML('beforebegin', `<div class="game-mission"><p id="game-story"></p><div class="game-hud"><span id="game-stars" aria-label="No stars yet">☆ ☆ ☆</span><span id="game-attempts">Try 0</span><span id="game-target"></span><button class="btn mini" id="game-sound" aria-pressed="false">Sound off</button></div></div>`);
    board.insertAdjacentHTML('afterend', `<div class="game-outcome" id="game-outcome" role="status" aria-live="polite"></div><div class="game-legend"><span>S = start</span><span>★ = delivery</span><span>Blue bricks = barriers</span></div><details class="game-help"><summary>How to earn three stars</summary><ol><li>Deliver the parcel and finish the program on the yellow space.</li><li>Use no more than the challenge’s target number of steps.</li><li>Write your prediction, then save a successful test result.</li></ol><p>There is no timer or penalty for trying again. Stars show progress in this screen game, not a grade for your real robot. Progress lasts while this page is open.</p></details>`);
    el('game-sound').onclick = () => {
      try {
        if (!context) { const Audio = window.AudioContext || window.webkitAudioContext; if (!Audio) throw Error('Unavailable'); context = new Audio(); }
        sound = !sound; context.resume().catch(() => {});
        el('game-sound').textContent = sound ? 'Sound on' : 'Sound off'; el('game-sound').setAttribute('aria-pressed',String(sound));
        if(sound)tone('turn');
      } catch (_) { el('game-sound').textContent = 'Sound unavailable'; sound = false; }
    };
  }
  function paintBoard(map, state) {
    const board = el('board'), newBoard = boardMap !== state.map || !board.querySelector('.robot-sprite');
    if (newBoard) {
      boardMap = state.map; rotation = state.h * 90; previousHeading = state.h;
      board.innerHTML = Array.from({length:64},(_,i)=>{
        const x=i%8,y=Math.floor(i/8),wall=map.walls.some(p=>p[0]===x&&p[1]===y),goal=x===map.goal[0]&&y===map.goal[1],start=x===map.start[0]&&y===map.start[1];
        return `<div class="cell ${wall?'wall':''} ${goal?'goal':''} ${start?'start':''}" data-square="${x},${y}" aria-hidden="true">${goal?'★':start?'S':''}</div>`;
      }).join('') + '<div class="robot-layer" aria-hidden="true"><div class="robot-sprite"><img src="images/robot-sprite.png" alt=""></div></div>';
    }
    const robot=board.querySelector('.robot-sprite'), image=robot.querySelector('img');
    let difference=(state.h-previousHeading+4)%4; if(difference===3)difference=-1;
    rotation+=difference*90;previousHeading=state.h;
    robot.style.left=`calc(${state.x*12.5}% + ${state.x*3/8}px)`;
    robot.style.top=`calc(${state.y*12.5}% + ${state.y*3/8}px)`;
    image.style.transform=`rotate(${rotation}deg)`;
    if(state.steps===0){board.classList.remove('game-win','game-bump');robot.classList.remove('bump');clearTimeout(effectTimer);el('game-outcome').textContent='Your robot is ready. Add a route, then choose Run or One step.';}
    paintHud(state.map);
  }
  function paintHud(map) {
    el('game-story').textContent=stories[map];
    el('game-stars').textContent='★ '.repeat(stats[map].stars)+'☆ '.repeat(3-stats[map].stars);
    el('game-stars').setAttribute('aria-label',`${stats[map].stars} of 3 stars earned for this challenge`);
    el('game-attempts').textContent=`Tries: ${stats[map].tries}`;
    el('game-target').textContent=`Route goal: ${MissionRewards.targets[map]} steps`;
  }
  function begin(state) { if(state.steps===0 && state.status==='ready'){stats[state.map].tries++;stats[state.map].prediction=el('prediction').value.trim();} }
  function react(before,state) {
    if(state.steps===before.steps)return;
    const board=el('board'), robot=board.querySelector('.robot-sprite'), result=el('game-outcome');
    clearTimeout(effectTimer);board.classList.remove('game-win','game-bump');robot.classList.remove('bump');
    const won=MissionRewards.earned(state,Rover.atGoal(state));
    if(state.status==='collision') {
      board.classList.add('game-bump');robot.classList.add('bump');tone('bump');
      result.textContent='Bump! Your robot stopped. Find the blocked step, change your route and try again. You keep the stars you already earned.';
      result.className='game-outcome retry';
      effectTimer=setTimeout(()=>{board.classList.remove('game-bump');robot.classList.remove('bump');},650);
    } else if(won) {
      stats[state.map].stars=Math.max(stats[state.map].stars,won);board.classList.add('game-win');tone('win');
      result.className='game-outcome success';result.textContent='Parcel delivered! '+(won===2?'You met the route goal. ':'Try a shorter route for another star. ')+'Save this run if you predicted first. Otherwise, write your prediction before the next try for the recording star.';
      if(state.map<2){const next=document.createElement('button');next.className='btn';next.textContent='Next challenge →';next.onclick=()=>{el('map').value=String(state.map+1);el('map').dispatchEvent(new Event('change'));};result.appendChild(next);}
    } else {
      tone(before.h!==state.h?'turn':'move');result.className='game-outcome';
      result.textContent=['finished','stopped'].includes(state.status)?'The parcel has not arrived yet. Change one step and try again.':before.h!==state.h?'Turn made. Which square is ahead now?':'Rolling to the next square…';
    }
    paintHud(state.map);
  }
  function record(state,trial) {
    const stars=MissionRewards.earned(state,Rover.atGoal(state),Boolean(stats[state.map].prediction && trial.prediction.trim()===stats[state.map].prediction));
    stats[state.map].stars=Math.max(stats[state.map].stars,stars);paintHud(state.map);
    if(stars){el('game-outcome').textContent=stats[state.map].prediction && trial.prediction.trim()===stats[state.map].prediction?'Successful test saved. Your recording star is earned!':'Test saved. Add your prediction before the next try to earn the recording star.';}
  }
  return {setup,paintBoard,begin,react,record};
})();
