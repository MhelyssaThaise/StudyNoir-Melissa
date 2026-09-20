
const EXAMS = {
  "Fisiologia Animal II": "2026-09-28",
  "Patologia Geral Veterinária": "2026-10-06"
};

const DEFAULT_TASKS = [
 ["2026-09-20","Fisiologia Animal II","Funções motoras e secretoras do tubo digestivo","Alta"],
 ["2026-09-20","Patologia Geral Veterinária","Lesão celular reversível x irreversível","Alta"],
 ["2026-09-21","Fisiologia Animal II","Digestão e absorção no trato gastrointestinal","Alta"],
 ["2026-09-21","Patologia Geral Veterinária","Necrose x apoptose","Alta"],
 ["2026-09-22","Fisiologia Animal II","Digestão em ruminantes","Alta"],
 ["2026-09-22","Patologia Geral Veterinária","Acúmulos intracelulares e degenerações","Média"],
 ["2026-09-23","Fisiologia Animal II","Fígado, vesícula biliar e pâncreas exócrino","Alta"],
 ["2026-09-23","Patologia Geral Veterinária","Alterações do crescimento celular e calcificações","Média"],
 ["2026-09-24","Fisiologia Animal II","Introdução ao sistema respiratório e mecânica respiratória","Alta"],
 ["2026-09-24","Patologia Geral Veterinária","Hiperemia, congestão, edema e hemorragia","Média"],
 ["2026-09-25","Fisiologia Animal II","Regulação respiratória","Alta"],
 ["2026-09-25","Patologia Geral Veterinária","Trombose, embolia, isquemia e infarto","Alta"],
 ["2026-09-26","Fisiologia Animal II","Revisão geral: gastrointestinal","Alta"],
 ["2026-09-26","Patologia Geral Veterinária","Inflamação aguda","Média"],
 ["2026-09-27","Fisiologia Animal II","Simulado completo + correção dos erros","Urgente"],
 ["2026-09-27","Patologia Geral Veterinária","Revisão leve de 20–30 min","Baixa"],
 ["2026-09-28","Fisiologia Animal II","PROVA P1","Urgente"],
 ["2026-09-29","Patologia Geral Veterinária","Inflamação crônica, reparação, regeneração, cicatrização e choque","Alta"],
 ["2026-09-30","Patologia Geral Veterinária","Revisão: lesão celular + necrose/apoptose","Alta"],
 ["2026-10-01","Patologia Geral Veterinária","Revisão: acúmulos + degenerações + calcificações","Alta"],
 ["2026-10-02","Patologia Geral Veterinária","Revisão: distúrbios hemodinâmicos","Alta"],
 ["2026-10-03","Patologia Geral Veterinária","Revisão: inflamação aguda e crônica","Alta"],
 ["2026-10-04","Patologia Geral Veterinária","Revisão: reparação, cicatrização e choque","Alta"],
 ["2026-10-05","Patologia Geral Veterinária","Simulado final + mapa dos erros","Urgente"],
 ["2026-10-06","Patologia Geral Veterinária","PROVA P1","Urgente"]
].map((t,i)=>({id:"seed-"+i,date:t[0],subject:t[1],topic:t[2],priority:t[3],done:false}));

const CHAPTERS = {
  pato: [
    {
      no:"CAPÍTULO I",
      title:"A primeira agressão",
      subtitle:"Lesão celular reversível × irreversível",
      story:`A célula não cai de uma vez. Primeiro, ela tenta sobreviver.

Quando a agressão é pequena ou breve, ela perde eficiência, incha, altera seu metabolismo e luta para manter a membrana e a produção de energia. Se o estímulo cessa a tempo, ela ainda pode voltar ao equilíbrio.

Mas existe um ponto sem retorno. Quando a produção de ATP entra em colapso, a membrana perde sua integridade, o cálcio invade o citoplasma e mecanismos destrutivos se acumulam, a recuperação deixa de ser possível. A lesão agora é irreversível — e a morte celular se aproxima.`,
      academic:`Lesão reversível: alterações celulares funcionais e morfológicas que ainda podem regredir se a causa for removida. Achados clássicos incluem tumefação celular e alteração gordurosa em determinados tecidos.

Lesão irreversível: ocorre quando a célula não consegue recuperar a função mitocondrial e perde de forma grave a integridade das membranas. O processo culmina em morte celular.`,
      memory:"REVERSÍVEL = ainda existe caminho de volta. IRREVERSÍVEL = ultrapassou o ponto de retorno."
    },
    {
      no:"CAPÍTULO II",
      title:"Duas maneiras de morrer",
      subtitle:"Apoptose × necrose",
      story:`A apoptose é uma despedida organizada. A célula se encolhe, fragmenta seu conteúdo em corpos apoptóticos e sai de cena sem derramar tudo ao redor.

A necrose chega de outra forma. Há dano intenso, perda de membrana, extravasamento do conteúdo celular e reação inflamatória. O que começou em uma célula afeta o território ao redor.`,
      academic:`Apoptose é morte celular regulada, dependente de vias moleculares específicas, com fragmentação ordenada e pouca ou nenhuma inflamação.

Necrose envolve perda de integridade da membrana, digestão enzimática e extravasamento do conteúdo celular, geralmente acompanhado de inflamação.`,
      memory:"APOPTOSE = morte organizada. NECROSE = ruptura + inflamação."
    },
    {
      no:"CAPÍTULO III",
      title:"Aquilo que ficou guardado",
      subtitle:"Acúmulos intracelulares e degenerações",
      story:`Nem toda célula destruída explode. Algumas começam a guardar coisas que não deveriam estar ali: gordura, glicogênio, pigmentos ou substâncias que o metabolismo não conseguiu eliminar. O excesso ocupa espaço, altera a função e denuncia que alguma rota metabólica deixou de funcionar como deveria.`,
      academic:`Acúmulos intracelulares resultam de metabolismo anormal, incapacidade de degradar ou transportar substâncias, produção excessiva ou deposição de materiais exógenos. Lipídios, glicogênio e pigmentos são exemplos importantes.`,
      memory:"Se a célula não consegue USAR, TRANSPORTAR ou DEGRADAR, ela pode ACUMULAR."
    },
    {
      no:"CAPÍTULO IV",
      title:"Pedra onde havia vida",
      subtitle:"Calcificações patológicas",
      story:`Às vezes o cálcio escolhe o lugar errado. Em tecidos mortos ou lesionados, ele pode se depositar mesmo quando o cálcio sanguíneo está normal. Em outras situações, o problema está no próprio sangue: cálcio elevado favorece depósitos em tecidos antes normais.`,
      academic:`Calcificação distrófica: depósito de cálcio em tecidos lesionados ou necróticos, geralmente com calcemia normal.

Calcificação metastática: depósito em tecidos relativamente normais associado a hipercalcemia ou distúrbio do metabolismo do cálcio.`,
      memory:"DISTRÓFICA = tecido doente. METASTÁTICA = cálcio do sangue alterado."
    },
    {
      no:"CAPÍTULO V",
      title:"O sangue que não deveria parar",
      subtitle:"Hiperemia, congestão, edema e hemorragia",
      story:`O sangue pode chegar demais porque o tecido pediu — hiperemia. Pode também não conseguir sair — congestão. O líquido pode abandonar os vasos e ocupar o interstício — edema. E, quando a barreira vascular se rompe ou falha, o sangue deixa o espaço onde deveria permanecer — hemorragia.`,
      academic:`Hiperemia é processo ativo por aumento do fluxo arterial. Congestão é processo passivo relacionado à dificuldade de drenagem venosa. Edema é excesso de líquido no interstício ou cavidades. Hemorragia é extravasamento de sangue do sistema cardiovascular.`,
      memory:"HIPEREMIA = entra mais. CONGESTÃO = sai menos."
    },
    {
      no:"CAPÍTULO VI",
      title:"O coágulo que aprendeu a viajar",
      subtitle:"Trombose → embolia → isquemia → infarto",
      story:`O trombo nasce dentro da circulação e se prende à parede. Mas um fragmento pode se soltar. A partir daí, vira viajante: um êmbolo.

Ele segue a corrente até encontrar um vaso estreito demais. Ao bloquear o caminho, reduz o suprimento sanguíneo do território. É a isquemia. Se ela for intensa e persistente, o tecido morre: surge o infarto.`,
      academic:`Trombose é formação de uma massa sólida a partir dos componentes do sangue dentro do sistema cardiovascular em vida. Embolia é o transporte intravascular de material capaz de obstruir um vaso à distância. Isquemia é redução do fluxo sanguíneo; infarto é área de necrose isquêmica.`,
      memory:"TROMBO nasce → ÊMBOLO viaja → ISQUEMIA priva → INFARTO mata."
    },
    {
      no:"CAPÍTULO VII",
      title:"A guerra começa",
      subtitle:"Inflamação aguda",
      story:`Quando o tecido percebe a agressão, ele abre suas fronteiras. Vasos se dilatam, a permeabilidade aumenta e leucócitos são convocados. O objetivo não é criar dor ou edema por crueldade: é levar defesa ao local, conter o agressor e preparar o reparo.`,
      academic:`Inflamação aguda é resposta rápida caracterizada por alterações vasculares, aumento de permeabilidade e recrutamento de leucócitos, especialmente neutrófilos. Seus sinais decorrem de mediadores inflamatórios e alterações hemodinâmicas.`,
      memory:"AGUDA = vaso abre + líquido sai + neutrófilo chega."
    },
    {
      no:"CAPÍTULO VIII",
      title:"Quando a guerra não termina",
      subtitle:"Inflamação crônica e reparação",
      story:`Se o agressor permanece, a batalha muda de rosto. Macrófagos, linfócitos e processos de destruição e reparação passam a coexistir. O tecido tenta reconstruir enquanto ainda luta. Às vezes regenera; às vezes precisa substituir o que perdeu por cicatriz.`,
      academic:`Inflamação crônica envolve inflamação persistente, destruição tecidual e tentativas de reparo simultâneas. Regeneração restaura células semelhantes às perdidas quando possível; cicatrização deposita tecido conjuntivo quando a restituição completa não ocorre.`,
      memory:"CRÔNICA = agressão persiste + destruição + reparo ao mesmo tempo."
    }
  ],
  fisio: [
    {
      no:"CAPÍTULO I",
      title:"A mansão digestiva desperta",
      subtitle:"Funções motoras e secretoras",
      story:`O alimento entra, mas nenhum órgão trabalha sozinho. Distensão, composição química e sinais nervosos despertam circuitos do trato gastrointestinal. Músculos misturam e propulsionam; glândulas secretam ácido, enzimas, muco e bicarbonato. O sistema nervoso entérico conduz boa parte dessa coreografia.`,
      academic:`A função gastrointestinal integra motilidade, secreção, digestão e absorção. Reflexos locais do sistema nervoso entérico e modulação autonômica coordenam movimentos e secreções conforme a presença e a composição do alimento.`,
      memory:"DIGESTÓRIO = mover + secretar + digerir + absorver."
    },
    {
      no:"CAPÍTULO II",
      title:"O banquete dos mensageiros",
      subtitle:"Gastrina, secretina e CCK",
      story:`A gastrina recebe a chegada do alimento como um convite para intensificar a atividade gástrica. Mais adiante, quando o quimo ácido alcança o duodeno, a secretina pede bicarbonato. Se gordura e proteína entram na cena, a CCK convoca pâncreas e bile e desacelera a saída do estômago.`,
      academic:`Gastrina estimula funções gástricas, incluindo secreção ácida e motilidade em contextos apropriados. Secretina é liberada em resposta ao ácido duodenal e favorece secreções ricas em bicarbonato. CCK responde principalmente a lipídios e aminoácidos, estimulando secreção pancreática e contração da vesícula biliar.`,
      memory:"GASTRINA agita. SECRETINA neutraliza. CCK chama pâncreas e bile."
    },
    {
      no:"CAPÍTULO III",
      title:"O reino das quatro câmaras",
      subtitle:"Digestão em ruminantes",
      story:`No rúmen, o animal entrega o alimento a uma sociedade microscópica. Microrganismos fermentam substratos e produzem ácidos graxos voláteis, aproveitados pelo hospedeiro.

O retículo participa da mistura e da ruminação. O omaso absorve água e eletrólitos. O abomaso assume o papel glandular, com ácido e enzimas.`,
      academic:`Rúmen e retículo formam a principal câmara fermentativa. Os ácidos graxos voláteis resultantes da fermentação microbiana constituem importante fonte energética. O omaso participa de absorção e o abomaso realiza digestão glandular semelhante ao estômago dos monogástricos.`,
      memory:"RÚMEN fermenta. RETÍCULO rumina. OMASO absorve. ABOMASO digere com secreção glandular."
    },
    {
      no:"CAPÍTULO IV",
      title:"O conselho do fígado",
      subtitle:"Fígado, bile e pâncreas exócrino",
      story:`O fígado recebe, transforma e distribui. A bile ajuda a lidar com lipídios; a vesícula a concentra e libera quando chamada. O pâncreas exócrino responde com enzimas digestivas e bicarbonato, preparando o intestino para quebrar nutrientes sem ser destruído pela acidez que veio do estômago.`,
      academic:`A bile participa da emulsificação e absorção de lipídios. O pâncreas exócrino fornece enzimas digestivas e bicarbonato ao duodeno. O fígado exerce funções metabólicas amplas, além de produzir bile.`,
      memory:"BILE ajuda a gordura. PÂNCREAS traz enzimas + bicarbonato."
    },
    {
      no:"CAPÍTULO V",
      title:"O pacto com o ar",
      subtitle:"Mecânica respiratória",
      story:`Respirar é mover pressão. Quando o tórax se expande, a pressão alveolar cai e o ar entra. Quando o volume diminui, a pressão sobe e o ar sai. O pulmão acompanha a parede torácica graças à relação entre pleuras e às forças elásticas do sistema.`,
      academic:`A ventilação depende de gradientes de pressão criados por mudanças no volume torácico. Inspiração e expiração resultam da interação entre músculos respiratórios, complacência, resistência das vias aéreas e forças elásticas.`,
      memory:"VOLUME sobe → PRESSÃO cai → AR entra."
    },
    {
      no:"CAPÍTULO VI",
      title:"Quem manda respirar",
      subtitle:"Regulação respiratória",
      story:`O cérebro não espera você lembrar de respirar. Centros respiratórios ajustam o ritmo enquanto quimiorreceptores vigiam alterações relevantes de CO₂, pH e O₂. Quando o equilíbrio ameaça mudar, o comando ventilatório se adapta.`,
      academic:`A ventilação é regulada por centros nervosos e aferências de quimiorreceptores centrais e periféricos. Alterações em CO₂ e pH exercem papel importante no controle ventilatório, enquanto hipóxia significativa também estimula respostas periféricas.`,
      memory:"CO₂/pH avisam o cérebro; o cérebro ajusta a ventilação."
    }
  ]
};

const QUIZ = [
 {s:"Patologia", q:"Qual associação descreve melhor hiperemia e congestão?", a:["Ambas são processos passivos","Hiperemia é ativa; congestão é passiva","Hiperemia é venosa; congestão é arterial","Ambas significam hemorragia"], c:1, exp:"Hiperemia decorre de aumento ativo do fluxo arterial; congestão ocorre por redução da drenagem venosa."},
 {s:"Patologia", q:"Uma célula perde integridade de membrana, extravasa conteúdo e provoca inflamação. O processo é:", a:["Apoptose","Atrofia","Necrose","Metaplasia"], c:2, exp:"Ruptura de membrana e inflamação são características clássicas da necrose."},
 {s:"Patologia", q:"Deposição de cálcio em tecido necrótico com calcemia normal corresponde a:", a:["Calcificação metastática","Calcificação distrófica","Degeneração hidrópica","Hemossiderose"], c:1, exp:"A calcificação distrófica ocorre em tecido lesionado/necrótico, mesmo com níveis séricos de cálcio normais."},
 {s:"Patologia", q:"Qual sequência representa uma progressão possível?", a:["Infarto → trombo → isquemia → êmbolo","Trombo → êmbolo → isquemia → infarto","Isquemia → hiperemia → trombo → edema","Êmbolo → edema → hiperemia → infarto"], c:1, exp:"Um trombo pode originar um êmbolo; a obstrução pode causar isquemia e, se persistente, infarto."},
 {s:"Fisiologia", q:"Quando o volume torácico aumenta durante a inspiração, a pressão alveolar tende a:", a:["Aumentar e expulsar ar","Diminuir e favorecer entrada de ar","Permanecer igual","Tornar-se independente do fluxo"], c:1, exp:"A expansão reduz a pressão alveolar em relação à atmosfera, favorecendo a entrada de ar."},
 {s:"Fisiologia", q:"Qual associação está correta nos ruminantes?", a:["Rúmen—digestão glandular principal","Omaso—principal local de secreção de HCl","Abomaso—estômago glandular","Retículo—produção de bile"], c:2, exp:"O abomaso é o compartimento glandular, funcionalmente semelhante ao estômago de monogástricos."},
 {s:"Fisiologia", q:"A secretina é especialmente associada à resposta a:", a:["Quimo ácido no duodeno","Distensão pulmonar","Hipercalcemia","Hemorragia"], c:0, exp:"A presença de ácido no duodeno estimula secretina, que favorece secreções ricas em bicarbonato."},
 {s:"Fisiologia", q:"A CCK participa principalmente de qual resposta?", a:["Contração da vesícula e secreção pancreática","Produção de hemácias","Redução absoluta de toda motilidade intestinal","Secreção de renina"], c:0, exp:"CCK responde a nutrientes, especialmente gorduras e aminoácidos, e estimula vesícula e pâncreas exócrino."}
];

function loadTasks(){
  const saved = localStorage.getItem("studyNoirTasks");
  return saved ? JSON.parse(saved) : DEFAULT_TASKS;
}
let tasks = loadTasks();
let currentFilter = "all";
let chapterSubject = "pato";
let quizIndex = Number(localStorage.getItem("studyNoirQuizIndex")||0) % QUIZ.length;
let xp = Number(localStorage.getItem("studyNoirXP")||0);
let errors = JSON.parse(localStorage.getItem("studyNoirErrors")||"[]");

function saveTasks(){ localStorage.setItem("studyNoirTasks", JSON.stringify(tasks)); }
function isoToday(){
  const d = new Date();
  const y=d.getFullYear(), m=String(d.getMonth()+1).padStart(2,"0"), day=String(d.getDate()).padStart(2,"0");
  return `${y}-${m}-${day}`;
}
function parseLocalDate(s){ const [y,m,d]=s.split("-").map(Number); return new Date(y,m-1,d); }
function daysUntil(s){
  const now = new Date(); now.setHours(0,0,0,0);
  const d = parseLocalDate(s); d.setHours(0,0,0,0);
  return Math.round((d-now)/86400000);
}
function dayLabel(n){
  if(n>1) return `${n} dias`;
  if(n===1) return "AMANHÃ";
  if(n===0) return "HOJE";
  return "Concluída";
}
function subjectShort(s){return s.startsWith("Fisiologia")?"Fisio":"Pato"}
function formatDate(s){
  return parseLocalDate(s).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"});
}
function weekDay(s){
  return parseLocalDate(s).toLocaleDateString("pt-BR",{weekday:"long"}).replace("-feira","");
}
function escapeHTML(str){return String(str).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}

function renderHome(){
  document.querySelector("#fisioDays").textContent = dayLabel(daysUntil(EXAMS["Fisiologia Animal II"]));
  document.querySelector("#patoDays").textContent = dayLabel(daysUntil(EXAMS["Patologia Geral Veterinária"]));

  const today = isoToday();
  const todays = tasks.filter(t=>t.date===today);
  const box = document.querySelector("#todayTasks");
  if(!todays.length){
    box.innerHTML = `<div class="muted">Nenhuma missão cadastrada para hoje. Use o + no cronograma para adicionar.</div>`;
  } else {
    box.innerHTML = todays.map(t=>`
      <div class="task ${t.done?"done":""}">
        <button class="task-check" onclick="toggleTask('${t.id}')">${t.done?"✓":""}</button>
        <div>
          <div class="task-title">${escapeHTML(t.topic)}</div>
          <div class="task-meta">${subjectShort(t.subject)} • prioridade ${t.priority}</div>
        </div>
      </div>`).join("");
  }
  document.querySelector("#todayProgress").textContent = `${todays.filter(t=>t.done).length}/${todays.length}`;
  const done = tasks.filter(t=>t.done).length;
  const pct = tasks.length ? Math.round(done/tasks.length*100):0;
  document.querySelector("#overallPct").textContent = `${pct}%`;
  document.querySelector("#overallBar").style.width = `${pct}%`;

  const nxt = tasks.filter(t=>!t.done && t.date>=today).sort((a,b)=>a.date.localeCompare(b.date))[0];
  document.querySelector("#nextFocus").textContent = nxt ? `Próximo foco: ${formatDate(nxt.date)} • ${subjectShort(nxt.subject)} — ${nxt.topic}` : "Cronograma concluído. 🖤";

  const dF = daysUntil(EXAMS["Fisiologia Animal II"]);
  const dP = daysUntil(EXAMS["Patologia Geral Veterinária"]);
  const ht = document.querySelector("#heroTitle");
  const hp = document.querySelector("#heroText");
  if(dF >= 0){
    ht.textContent = dF===0 ? "Hoje é dia de Fisio." : "Fisio está no trono.";
    hp.textContent = dF===0 ? "Revisão curta, confiança alta. Nada de inventar matéria nova." : "A prioridade é Fisiologia, sem abandonar Patologia. Um bloco de cada vez.";
  } else if(dP >=0){
    ht.textContent = "Agora Patologia assume.";
    hp.textContent = "Fisio ficou para trás. Vamos transformar lesão, inflamação e hemodinâmica em uma história impossível de esquecer.";
  } else {
    ht.textContent = "Missão encerrada.";
    hp.textContent = "As duas provas passaram. Hora de registrar o que funcionou e preparar a próxima fase.";
  }
}

function renderSchedule(){
  const list = document.querySelector("#scheduleList");
  const filtered = tasks.filter(t=>currentFilter==="all" || t.subject===currentFilter).sort((a,b)=>a.date.localeCompare(b.date));
  const grouped = {};
  filtered.forEach(t=>(grouped[t.date] ||= []).push(t));
  list.innerHTML = Object.entries(grouped).map(([date,items])=>`
    <div class="day-group">
      <div class="day-head">
        <div class="day-date">${formatDate(date)}</div>
        <div class="day-week">${weekDay(date)}</div>
      </div>
      ${items.map(t=>`
        <div class="timeline-item">
          <div class="dot ${t.subject.startsWith("Patologia")?"pato":""}"></div>
          <div>
            <div class="timeline-title">${escapeHTML(t.topic)}</div>
            <div class="timeline-sub">${subjectShort(t.subject)} • ${t.priority}</div>
          </div>
          <button class="timeline-check ${t.done?"done":""}" onclick="toggleTask('${t.id}')">${t.done?"✓":""}</button>
        </div>`).join("")}
    </div>`).join("") || `<div class="muted">Nenhuma tarefa neste filtro.</div>`;
}

window.toggleTask = function(id){
  const t = tasks.find(x=>x.id===id);
  if(t){t.done=!t.done;saveTasks();renderHome();renderSchedule();}
}

function renderChapters(){
  const el=document.querySelector("#chapterList");
  el.innerHTML=CHAPTERS[chapterSubject].map((c,i)=>`
    <article class="chapter-card">
      <div class="chapter-no">${c.no}</div>
      <h3>${c.title}</h3>
      <p>${c.subtitle}</p>
      <button class="ghost" onclick="openChapter('${chapterSubject}',${i})">Abrir capítulo</button>
    </article>`).join("");
}
window.openChapter=function(subject,index){
  const c=CHAPTERS[subject][index];
  document.querySelector("#chapterContent").innerHTML=`
    <span class="eyebrow">${c.no}</span>
    <h2>${c.title}</h2>
    <p class="muted">${c.subtitle}</p>
    <div class="story">${c.story.split("\n").map(p=>`<p>${p}</p>`).join("")}</div>
    <div class="academic">
      <span class="eyebrow">AGORA SEM ROMANCE</span>
      ${c.academic.split("\n").map(p=>`<p>${p}</p>`).join("")}
    </div>
    <div class="memory"><strong>🧠 Gancho de memória</strong><br>${c.memory}</div>`;
  document.querySelector("#chapterDialog").showModal();
}

function renderQuiz(){
  const item=QUIZ[quizIndex];
  document.querySelector("#quizSubject").textContent=item.s;
  document.querySelector("#xpLabel").textContent=`${xp} XP`;
  document.querySelector("#questionText").textContent=item.q;
  document.querySelector("#answers").innerHTML=item.a.map((a,i)=>`<button class="answer-btn" data-i="${i}">${a}</button>`).join("");
  document.querySelector("#feedback").classList.add("hidden");
  document.querySelector("#nextQuestionBtn").classList.add("hidden");
  document.querySelectorAll(".answer-btn").forEach(btn=>btn.addEventListener("click",()=>answerQuestion(Number(btn.dataset.i))));
  renderErrors();
}
function answerQuestion(i){
  const item=QUIZ[quizIndex];
  const buttons=[...document.querySelectorAll(".answer-btn")];
  buttons.forEach(b=>b.disabled=true);
  buttons[item.c].classList.add("correct");
  const fb=document.querySelector("#feedback");
  if(i===item.c){
    xp+=5; localStorage.setItem("studyNoirXP",xp);
    fb.innerHTML=`<strong>Acertou. +5 XP 🖤</strong><br>${item.exp}`;
  }else{
    buttons[i].classList.add("wrong");
    errors.unshift({q:item.q,subject:item.s});
    errors=errors.slice(0,20);
    localStorage.setItem("studyNoirErrors",JSON.stringify(errors));
    fb.innerHTML=`<strong>Essa te pegou.</strong><br>${item.exp}<br><small>Foi para o mapa de erros.</small>`;
  }
  fb.classList.remove("hidden");
  document.querySelector("#nextQuestionBtn").classList.remove("hidden");
  document.querySelector("#xpLabel").textContent=`${xp} XP`;
  renderErrors();
}
function renderErrors(){
  const el=document.querySelector("#errorMap");
  el.innerHTML=errors.length?errors.map(e=>`<div class="error-item"><strong>${e.subject}</strong><br>${escapeHTML(e.q)}</div>`).join(""):`<div class="muted">Nenhum erro registrado ainda. Ou você está indo muito bem... ou ainda não começou o quiz 😌</div>`;
}

document.querySelectorAll(".nav-item").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".nav-item").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.querySelector("#"+btn.dataset.target).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}));

document.querySelectorAll(".seg").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".seg").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active"); currentFilter=btn.dataset.filter; renderSchedule();
}));
document.querySelectorAll(".subject-chip").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".subject-chip").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active"); chapterSubject=btn.dataset.subject; renderChapters();
}));

document.querySelector("#closeChapter").onclick=()=>document.querySelector("#chapterDialog").close();
document.querySelector("#addTaskBtn").onclick=()=>{
  document.querySelector("#newDate").value=isoToday();
  document.querySelector("#taskDialog").showModal();
};
document.querySelector("#closeTask").onclick=()=>document.querySelector("#taskDialog").close();
document.querySelector("#saveTask").onclick=()=>{
  const date=document.querySelector("#newDate").value;
  const subject=document.querySelector("#newSubject").value;
  const topic=document.querySelector("#newTopic").value.trim();
  const priority=document.querySelector("#newPriority").value;
  if(!date||!topic){alert("Coloque a data e o conteúdo.");return;}
  tasks.push({id:"user-"+Date.now(),date,subject,topic,priority,done:false});
  saveTasks();renderHome();renderSchedule();
  document.querySelector("#newTopic").value="";
  document.querySelector("#taskDialog").close();
};

document.querySelector("#nextQuestionBtn").onclick=()=>{
  quizIndex=(quizIndex+1)%QUIZ.length;
  localStorage.setItem("studyNoirQuizIndex",quizIndex);
  renderQuiz();
};
document.querySelector("#clearErrors").onclick=()=>{
  if(confirm("Limpar seu mapa de erros?")){errors=[];localStorage.setItem("studyNoirErrors","[]");renderErrors();}
};

// Timer
let timerSeconds=25*60, timerHandle=null, timerRunning=false;
function drawTimer(){
  const m=Math.floor(timerSeconds/60), s=timerSeconds%60;
  document.querySelector("#timerDisplay").textContent=`${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
}
function stopTimer(){ clearInterval(timerHandle); timerHandle=null; timerRunning=false; document.querySelector("#timerToggle").textContent="Começar"; }
document.querySelector("#timerToggle").onclick=()=>{
  if(timerRunning){stopTimer();return;}
  timerRunning=true; document.querySelector("#timerToggle").textContent="Pausar";
  timerHandle=setInterval(()=>{
    timerSeconds--;
    if(timerSeconds<=0){
      timerSeconds=0;drawTimer();stopTimer();
      if(navigator.vibrate) navigator.vibrate([250,100,250]);
      alert("Pomodoro concluído. 🖤 Hora de uma pausa curta.");
      return;
    }
    drawTimer();
  },1000);
};
document.querySelector("#timerReset").onclick=()=>{stopTimer();const a=document.querySelector(".preset.active");timerSeconds=Number(a.dataset.min)*60;drawTimer();};
document.querySelectorAll(".preset").forEach(btn=>btn.onclick=()=>{
  stopTimer();document.querySelectorAll(".preset").forEach(b=>b.classList.remove("active"));btn.classList.add("active");
  timerSeconds=Number(btn.dataset.min)*60;drawTimer();
});

// Notes
const note=document.querySelector("#quickNote");
note.value=localStorage.getItem("studyNoirQuickNote")||"";
document.querySelector("#saveNote").onclick=()=>{
  localStorage.setItem("studyNoirQuickNote",note.value);
  const msg=document.querySelector("#noteSaved");msg.textContent="Salvo neste aparelho. 🖤";setTimeout(()=>msg.textContent="",1800);
};

// Install
let deferredPrompt=null;
window.addEventListener("beforeinstallprompt",(e)=>{
  e.preventDefault();deferredPrompt=e;
  document.querySelector("#installBtn").classList.remove("hidden");
});
document.querySelector("#installBtn").onclick=async()=>{
  if(!deferredPrompt)return;
  deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;
  document.querySelector("#installBtn").classList.add("hidden");
};

// PWA
if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
}

const lines=[
 "A célula sempre conta uma história antes de morrer.",
 "Trombo nasce. Êmbolo viaja. Isquemia priva. Infarto mata.",
 "Volume sobe, pressão cai, o ar entra.",
 "Você não precisa decorar tudo de uma vez. Precisa ligar uma coisa à outra.",
 "Hoje não é sobre estudar horas. É sobre dominar uma missão."
];
document.querySelector("#dailyLine").textContent=lines[new Date().getDate()%lines.length];

renderHome();renderSchedule();renderChapters();renderQuiz();drawTimer();
