// Keep earlier scripts from playing while the replacement narration is prepared.
(()=>{
 let ready=false;
 function apply(){if(ready)return;document.querySelectorAll('audio').forEach(a=>{a.pause();a.hidden=true;});}
 const note=document.createElement('p');note.className='note';note.setAttribute('role','status');note.textContent='Checking the new narration…';
 document.querySelector('#course-view .mission-strip').after(note);
 const observer=new MutationObserver(apply);observer.observe(document.querySelector('#lesson'),{childList:true,subtree:true});apply();
 async function update(){try{const r=await fetch('audio-status.json',{cache:'no-store'});if(!r.ok)return;const s=await r.json();note.textContent=s.message;if(s.state==='ready'){ready=true;observer.disconnect();document.querySelectorAll('audio').forEach(a=>{const u=new URL(a.src);u.searchParams.set('v','chipper-20260910');a.src=u.href;a.hidden=false;});clearInterval(tick);}}catch(e){note.textContent='The audio is being updated. You can read the lesson words below.';}}
 const tick=setInterval(update,30000);update();
})();
