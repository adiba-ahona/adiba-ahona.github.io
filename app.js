document.documentElement.classList.add('js');

const projects = [
  {id:'agent-bi',name:'Agentic BI Studio',monogram:'AI',category:'ai',subtitle:'Five AI agents. One continuous decision workflow.',type:'MULTI-AGENT AI / FULL STACK',color:'#25473f',description:'An AI-powered business intelligence platform that moves from CSV ingestion to trend analysis, forecasting and executive reporting.',tags:['Python','FastAPI','TypeScript','Gemini','ReactFlow'],build:'Designed five specialized agents for data processing, analysis and report generation, with real-time workflow orchestration and a visual ReactFlow interface.',limit:'The project is an exploratory full-stack system. Production use would require broader evaluation, observability, access controls and careful validation of generated business conclusions.',caseStudy:'https://www.linkedin.com/posts/adiba-anbar-ahona_ai-powered-multi-agent-business-intelligence-activity-7461066272450035713-TsXz'},
  {id:'campus',name:'Campus Compass',monogram:'NLP',category:'ai',subtitle:'A clearer answer to a student’s next question.',type:'NLP / RETRIEVAL',color:'#214251',description:'A student FAQ assistant that ranks relevant answers and falls back when it cannot find a strong match.',tags:['Python','Flask','NLTK','TF-IDF'],build:'Built a preprocessing and retrieval pipeline over 18 curated FAQs using stemming, unigram/bigram TF-IDF features and cosine similarity, then connected it to a responsive chat interface.',limit:'Similarity measures text overlap, not calibrated answer confidence. The FAQ set needs broader evaluation before official campus use.',repo:'https://github.com/adiba-ahona/codealpha_tasks/tree/main/campus_compass_faq_chatbot'},
  {id:'flowlens',name:'FlowLens',monogram:'CV',category:'ai',subtitle:'Turn video into tracks and movement counts.',type:'COMPUTER VISION',color:'#37315d',description:'A video analysis application with persistent object IDs, movement trails and directional line-crossing counts.',tags:['Python','YOLO11','ByteTrack','OpenCV'],build:'Integrated pretrained YOLO detections with ByteTrack, then added live FPS, class filtering, movement counters and annotated MP4 export.',limit:'Track IDs belong to one session and can change after occlusion. Performance depends on model size, hardware and video complexity.',repo:'https://github.com/adiba-ahona/codealpha_tasks/tree/main/object_detection'},
  {id:'lingualleaf',name:'LinguaLeaf',monogram:'LL',category:'ai',subtitle:'Translation with room for the reader.',type:'AI APPLICATION',color:'#2c4a39',description:'A multilingual workspace with provider-based translation, language detection, speech playback and session history.',tags:['Python','Streamlit','Translation APIs'],build:'Created a provider layer with Google Cloud and MyMemory support, plus input validation, retry handling, caching and a side-by-side interface.',limit:'Quality depends on the provider and context. Specialist language still needs human review, and quotas affect availability.',repo:'https://github.com/adiba-ahona/codealpha_tasks/tree/main/language_translation'},
  {id:'museforge',name:'MuseForge',monogram:'♪',category:'ai',subtitle:'Explore the structure behind a melody.',type:'DEEP LEARNING',color:'#573d50',description:'A symbolic music generation pipeline with MIDI preprocessing, LSTM training and MIDI/WAV export.',tags:['PyTorch','LSTM','music21','Streamlit'],build:'Implemented note and duration tokenization, a two-layer LSTM, seeded temperature sampling and a lightweight WAV renderer.',limit:'The public repository provides training code but no trained checkpoint or listening evaluation; generation does not establish musical originality.',repo:'https://github.com/adiba-ahona/codealpha_tasks/tree/main/music_generation'},
  {id:'roomfit',name:'RoomFit',monogram:'3D',category:'web',subtitle:'Try the layout before moving the furniture.',type:'INTERACTIVE 3D WEB',color:'#4c4028',description:'A 3D room-planning prototype with draggable furniture, room dimensions, footprint checks and a scroll-controlled camera.',tags:['JavaScript','Three.js','Responsive UI'],build:'Built an AI-assisted browser prototype with 12 furniture and decor models, rotation controls, use-zone overlays and downloadable plans.',limit:'Furniture dimensions are fixed. Clearance uses approximate footprints and does not model walking routes or architectural requirements.',repo:'https://github.com/adiba-ahona/RoomFit_byAstra-6',demo:'https://adiba-ahona.github.io/RoomFit_byAstra-6/'},
  {id:'sentiment',name:'Banglish Sentiment Analysis',monogram:'BN',category:'research',subtitle:'Studying sentiment across mixed-language text.',type:'NLP / UNDERGRADUATE RESEARCH',color:'#35445b',description:'Undergraduate research into sentiment classification for Banglish e-commerce text using a hybrid deep-learning approach.',tags:['Python','NLP','CNN–GRU','10K+ samples'],build:'Collected and preprocessed more than 10,000 text samples, analyzed and labeled over 8,000, and implemented a hybrid CNN–GRU model.',limit:'The public repository contains partial research materials. A complete reproducible setup and consolidated evaluation report would strengthen the evidence.',repo:'https://github.com/adiba-ahona/UG_Thesis'}
];

const list = document.getElementById('project-list');
projects.forEach((project, index) => {
  const article = document.createElement('article');
  article.className = 'project reveal';
  article.id = project.id;
  article.dataset.category = project.category;
  article.style.setProperty('--card-color', project.color);
  const links = [
    project.repo && `<a href="${project.repo}" target="_blank" rel="noopener noreferrer" aria-label="View ${project.name} source code">View source ↗</a>`,
    project.demo && `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" aria-label="Open ${project.name} live demo">Live demo ↗</a>`,
    project.caseStudy && `<a href="${project.caseStudy}" target="_blank" rel="noopener noreferrer" aria-label="Read ${project.name} build note">Build note ↗</a>`
  ].filter(Boolean).join('');
  article.innerHTML = `<div class="project-visual" data-monogram="${project.monogram}"><div class="project-top"><span class="project-number">${String(index + 1).padStart(2,'0')} / ${String(projects.length).padStart(2,'0')}</span><span class="project-type">${project.type}</span></div></div><div class="project-body"><h3>${project.name}</h3><p class="project-subtitle">${project.subtitle}</p><p class="project-description">${project.description}</p><div>${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div><details><summary>Implementation & honest scope</summary><p><strong>What I built.</strong> ${project.build}</p><p><strong>Current scope.</strong> ${project.limit}</p></details><div class="project-links">${links}</div></div>`;
  list.append(article);
});

const filters = document.querySelectorAll('[data-filter]');
filters.forEach(button => button.addEventListener('click', () => {
  const value = button.dataset.filter;
  filters.forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('.project').forEach(card => {
    const visible = value === 'all' || card.dataset.category === value;
    if (window.gsap) {
      if (visible) {
        card.hidden = false;
        gsap.fromTo(card, {opacity:0, y:18}, {opacity:1, y:0, duration:.38, clearProps:'opacity,transform'});
      } else {
        gsap.to(card, {opacity:0, y:10, duration:.18, onComplete:() => { card.hidden = true; }});
      }
    } else card.hidden = !visible;
  });
}));

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('open', !open);
  document.body.classList.toggle('menu-open', !open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded','false');
  document.body.classList.remove('menu-open');
}));

const progress = document.querySelector('.scroll-progress span');
const updateScroll = () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${max > 0 ? scrollY / max * 100 : 0}%`;
};
addEventListener('scroll', updateScroll, {passive:true});
updateScroll();

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('nav a')];
const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
}), {rootMargin:'-40% 0px -50%'});
sections.forEach(section => sectionObserver.observe(section));

function initMotion() {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    document.querySelectorAll('.reveal').forEach(element => { element.style.opacity = 1; element.style.transform = 'none'; });
    return;
  }
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.hero-title .line', {yPercent:110, opacity:0, duration:1, stagger:.12, ease:'power4.out', delay:.15});
    gsap.to('.glow-one', {y:180, scrollTrigger:{trigger:'.hero', start:'top top', end:'bottom top', scrub:1}});
    gsap.to('.glow-two', {y:-120, x:-60, scrollTrigger:{trigger:'.hero', start:'top top', end:'bottom top', scrub:1}});
    document.querySelectorAll('.reveal').forEach(element => {
      if (element.closest('.hero-title')) return;
      gsap.fromTo(element, {opacity:0, y:32}, {opacity:1, y:0, duration:.75, ease:'power3.out', scrollTrigger:{trigger:element, start:'top 88%', once:true}});
    });
    document.querySelectorAll('.project').forEach(card => {
      gsap.to(card.querySelector('.project-visual'), {backgroundPosition:'50% 90%', scrollTrigger:{trigger:card, start:'top bottom', end:'bottom top', scrub:.6}});
    });
  } else {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.style.opacity = 1; entry.target.style.transform = 'none'; observer.unobserve(entry.target); }
    }), {threshold:.08});
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  }
}

function initNeuralCanvas() {
  const canvas = document.getElementById('neural-canvas');
  const stage = canvas.parentElement;
  const context = canvas.getContext('2d');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let width = 0, height = 0, pointer = {x:-1000,y:-1000};
  const nodes = Array.from({length:28}, (_, i) => ({x:(i * 71 % 97) / 100,y:(i * 43 % 91) / 100,phase:i*.7}));
  function resize() { const ratio = Math.min(devicePixelRatio,2); width=stage.clientWidth;height=stage.clientHeight;canvas.width=width*ratio;canvas.height=height*ratio;context.setTransform(ratio,0,0,ratio,0,0); }
  function draw(time=0) {
    context.clearRect(0,0,width,height);
    const points = nodes.map(node => ({x:node.x*width + Math.sin(time*.00035+node.phase)*8,y:node.y*height + Math.cos(time*.0003+node.phase)*7}));
    points.forEach((a,i) => points.slice(i+1).forEach(b => {
      const distance = Math.hypot(a.x-b.x,a.y-b.y);
      if (distance < 105) { context.strokeStyle=`rgba(99,212,255,${(1-distance/105)*.16})`;context.lineWidth=.7;context.beginPath();context.moveTo(a.x,a.y);context.lineTo(b.x,b.y);context.stroke(); }
    }));
    points.forEach(point => { const near=Math.hypot(point.x-pointer.x,point.y-pointer.y)<120;context.fillStyle=near?'rgba(185,255,102,.9)':'rgba(143,177,200,.48)';context.beginPath();context.arc(point.x,point.y,near?2.7:1.7,0,Math.PI*2);context.fill(); });
    if (!reduced) requestAnimationFrame(draw);
  }
  stage.addEventListener('pointermove', event => { const rect=stage.getBoundingClientRect();pointer={x:event.clientX-rect.left,y:event.clientY-rect.top}; });
  stage.addEventListener('pointerleave', () => {pointer={x:-1000,y:-1000};});
  addEventListener('resize',resize);resize();draw();
}

function initMagneticButtons() {
  if (matchMedia('(pointer: coarse)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.magnetic').forEach(button => {
    button.addEventListener('pointermove', event => { const rect=button.getBoundingClientRect();button.style.transform=`translate(${(event.clientX-rect.left-rect.width/2)*.08}px,${(event.clientY-rect.top-rect.height/2)*.12}px)`; });
    button.addEventListener('pointerleave', () => {button.style.transform='';});
  });
}

initMotion();
initNeuralCanvas();
initMagneticButtons();
