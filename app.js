/* ── Thabat Holding Dashboard – Static JS ── */

// ── Colour palette ──────────────────────────────────────────────────────────
const B={
  teal:"#2D8B72",tealDark:"#1e6b56",tealLight:"#4aab8e",tealPale:"#d4ece5",
  bg:"#f0f4f2",bgLight:"#f7faf8",card:"#ffffff",border:"#dde8e3",
  gold:"#9B8B6E",goldLight:"#c4b49a",
  text:"#1a2e25",sub:"#4a6b5a",muted:"#8aaa98",red:"#c0392b",redLight:"#fdf0ef",
  blue:"#2d6b8b"
};
const CHART_COLORS=["#2D8B72","#9B8B6E","#4aab8e","#c4b49a","#1e6b56","#2d6b8b","#6b8b7a","#8b6b2d","#2d5b8b","#8b5b2d"];

// ── Formatters ───────────────────────────────────────────────────────────────
function fmt(n){return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(n||0);}
function fmtM(n){
  if(!n)return"—";
  const abs=Math.abs(n),neg=n<0;
  if(abs>=1e6)return(neg?"-":"")+fmt(abs/1e6)+"M";
  if(abs>=1e3)return(neg?"-":"")+fmt(abs/1e3)+"K";
  return fmt(n);
}

// ── Static data ──────────────────────────────────────────────────────────────
const SHAREHOLDERS=[
  {id:"sh1",name:"Abdullah Almunif",role:"Chairman & Group CEO",pct:17.5,color:B.teal},
  {id:"sh2",name:"Ali Almunif",role:"Board Member & Partner",pct:16.5,color:B.gold},
  {id:"sh3",name:"Ibrahim Almunif",role:"Board Member & Partner",pct:16.5,color:B.tealLight},
  {id:"sh4",name:"Maha Almunif",role:"Partner",pct:16.5,color:B.goldLight},
  {id:"sh5",name:"Mari Almunif",role:"Board Member & Partner",pct:16.5,color:B.tealDark},
  {id:"sh6",name:"Munif Almunif",role:"Board Member & Partner",pct:16.5,color:"#b8a882"},
];

const CATEGORIES={
  "Retail":{icon:"🛍️",color:B.teal},"Funds":{icon:"📈",color:B.gold},
  "Real Estate":{icon:"🏗️",color:B.blue},"Logistics":{icon:"🚛",color:"#5b8b2d"},
  "SAAS":{icon:"💻",color:"#6b2d8b"},"Education":{icon:"🎓",color:"#8b2d2d"},
  "Hospitality":{icon:"🏨",color:"#2d5b8b"},"Entertainment":{icon:"🎮",color:"#8b5b2d"},
};

const HISTORICAL={
  i01:{label:"Anoosh",currency:"SAR",
    years:["2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025-Q3"],
    revenue:[69019049,73305869,78796067,74075054,89500965,61468058,81938821,93650941,121442426,145085226,131707848],
    netProfit:[21903723,20932824,17242286,9464703,5343064,6033699,11183640,10232210,16976839,27966530,22614493],
    grossProfit:[67,66,65,66,55,60,60,56,56,55,62],
    kpis:[{label:"Expenses / Revenue",value:"47%"},{label:"Profitability ratio",value:"17%"},{label:"Gross profit",value:"62%"},{label:"Fair value",value:"323M SAR"},{label:"Stores",value:"75"},{label:"Employees",value:"+400"}]},
  i04:{label:"9 Round",currency:"SAR",
    years:["2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025-Q3"],
    revenue:[542222,4712967,11819714,20189834,32807522,30790071,48751407,58526295,51041251,56025794,41390476],
    netProfit:[-389557,169130,2179258,-405358,1483025,-1686957,5950870,2653111,-11719367,6512957,2916835],
    grossProfit:[38,68,42,20,27,14,21,18,5,27,19],
    kpis:[{label:"Expenses / Revenue",value:"14%"},{label:"Profitability ratio",value:"7%"},{label:"Gross profit",value:"19%"},{label:"Fair value",value:"160M SAR"},{label:"Branches",value:"61"},{label:"Trainees",value:"25K"}]},
  i05:{label:"Road Logistics",currency:"SAR",
    years:["2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025-Q3"],
    revenue:[2492186,2808238,5397958,9306083,11704990,14830697,20557519,26052941,32344743,39547994,37332736],
    netProfit:[-803168,-159089,517530,1136106,638266,1535612,-673323,1484685,738486,2243212,1853095],
    grossProfit:[43,44,46,53,52,43,26,30,27,28,26],
    kpis:[{label:"Expenses / Revenue",value:"20%"},{label:"Profitability ratio",value:"5%"},{label:"Gross profit",value:"26%"},{label:"Fair value",value:"59M SAR"},{label:"Trucks",value:"195"},{label:"Cities",value:"140"}]},
  i06:{label:"Matajer Alarabiah",currency:"SAR",
    years:["2015","2016","2017","2018","2019","2020","2021","2022","2023","2024"],
    revenue:[26794890,28211553,27502245,26646494,33155421,27039746,14165493,10042206,5598922,8667383],
    netProfit:[3400475,2824430,1171408,658108,665296,1674524,442250,-1819729,-2111434,-704819],
    grossProfit:[39,36,32,32,28,36,32,18,-4,22],
    kpis:[{label:"Expenses / Revenue",value:"37%"},{label:"Profitability ratio",value:"-8%"},{label:"Gross profit",value:"22%"},{label:"Customers",value:"650+"},{label:"Brands",value:"20+"},{label:"Experience",value:"20+ yrs"}]},
  i07:{label:"Bedayaat",currency:"SAR",
    years:["2015","2016","2017","2018","2019","2020","2021","2022","2023","2024","2025-Q3"],
    revenue:[4252111,4356830,2937480,3714394,3911316,759749,2153314,3986101,5820596,8367518,6894040],
    netProfit:[-434310,-794360,-1473145,-973524,388922,-619295,-121583,-1306335,-2104954,-575123,-347464],
    grossProfit:[-0.4,-13,-0.2,20,27,4,29,4,-2,21,23],
    kpis:[{label:"Expenses / Revenue",value:"28%"},{label:"Profitability ratio",value:"-5%"},{label:"Gross profit",value:"23%"},{label:"Branches",value:"13"},{label:"Subscribers",value:"350+"},{label:"2026 plan",value:"+7 branches"}]},
  i09:{label:"Salasa Holding",currency:"SAR",
    years:["2018","2019","2020","2021","2022","2023","2024","2025-H1"],
    revenue:[8539280,15284530,35738213,44562866,81757691,106258541,109600241,56058330],
    netProfit:[-845449,-1653199,-6067886,-15635066,-6580673,-2630501,-5923050,-3953224],
    grossProfit:[35,37,15,13,35,26,28,28],
    kpis:[{label:"Expenses / Revenue",value:"35%"},{label:"Profitability ratio",value:"-7%"},{label:"Gross profit",value:"28%"},{label:"Fair value",value:"$180M"},{label:"Services",value:"Logistics, Fulfillment"}]},
  i13:{label:"We Found 404",currency:"SAR",
    years:["2022","2023","2024","2025-Q3"],
    revenue:[893048,2259945,1874400,1424096],
    netProfit:[-4401,255970,115506,320034],
    grossProfit:[65,39,49,53],
    kpis:[{label:"Expenses / Revenue",value:"30%"},{label:"Profitability ratio",value:"22%"},{label:"Gross profit",value:"53%"},{label:"Subscriptions",value:"40K+"},{label:"Customer retention",value:"63%"}]},
  i10:{label:"Kease",currency:"SAR",
    years:["2021","2022","2023","2024","2025-Q3"],
    revenue:[1684334,7262941,14322659,19093788,10490982],
    netProfit:[-1011591,-2404509,-2135778,-2589084,-2932517],
    grossProfit:[-25,16.5,27,27,19],
    kpis:[{label:"Expenses / Revenue",value:"48%"},{label:"Profitability ratio",value:"-28%"},{label:"Gross profit",value:"19%"},{label:"Units",value:"300+"}]},
  i11:{label:"PREFAB",currency:"SAR",
    years:["2022","2023","2024","2025-Q3"],
    revenue:[0,3888066,6690864,827316],
    netProfit:[-606500,-518338,-387157,-2200384],
    grossProfit:[0,5,15,-165],
    kpis:[{label:"Gross profit",value:"15%"},{label:"Invested",value:"330K SAR"},{label:"Share",value:"12%"}]},
};

const INVESTMENTS=[
  {id:"i01",name:"Anoosh",sector:"Retail",geo:"KSA",year:2003,pct:70,status:"active",invested:148014360,fvCharter:226380000,fvMarket:226380000,moic:null,unrealGain:226014360,dividends:224457337,website:"anoosh.sa",notes:"Saudi luxury chocolate & baked goods. 75 stores, +400 employees.",owners:[{name:"Thabat Holding",pct:70},{name:"Abdullah A.A.",pct:5.25},{name:"Ibrahim A.A.",pct:4.95},{name:"Ali A.A.",pct:4.95},{name:"Munif A.A.",pct:4.95},{name:"Marree A.A.",pct:4.95},{name:"Maha A.A.",pct:4.95}],docs:[]},
  {id:"i02",name:"Seedra Fund I",sector:"Funds",geo:"KSA",year:2020,pct:21.08,status:"active",invested:18299730,fvCharter:18299730,fvMarket:38953296,moic:2.13,unrealGain:20653566,dividends:1502972,notes:"VC fund. 27 portfolio companies. Target 30% IRR.",owners:[{name:"Thabat Holding",pct:21.08}],docs:[]},
  {id:"i03",name:"Seedra Fund II",sector:"Funds",geo:"KSA",year:2024,pct:3.84,status:"active",invested:1070272,fvCharter:1070272,fvMarket:951200,moic:0.89,unrealGain:-119073,dividends:0,notes:"Launched June 2024. Target 250M SAR.",owners:[{name:"Thabat Holding",pct:3.84}],docs:[]},
  {id:"i04",name:"9 Round",sector:"Retail",geo:"KSA",year:2015,pct:47.95,status:"active",invested:2524417,fvCharter:1359319,fvMarket:76720000,moic:30.39,unrealGain:74195583,dividends:3173373,notes:"US fitness franchise. 61 branches, 25K trainees.",owners:[{name:"Thabat Holding",pct:38.96},{name:"Abdullah A.A.",pct:4.05},{name:"MAF Investment Co.",pct:9},{name:"Others",pct:48}],docs:[]},
  {id:"i05",name:"Road Logistics",sector:"Logistics",geo:"KSA",year:2010,pct:25,status:"active",invested:850000,fvCharter:4946274,fvMarket:14750000,moic:17.35,unrealGain:13900000,dividends:822385,notes:"Refrigerated transport. 195 trucks, 235 employees, 140 cities.",owners:[{name:"Thabat Holding",pct:25},{name:"Loay Saad Alzuheer",pct:25},{name:"Abdalrahman Alaqeel",pct:25},{name:"Mothna Albabuteen",pct:25}],docs:[]},
  {id:"i06",name:"Matajer Alarabiah",sector:"Logistics",geo:"KSA",year:2008,pct:50,status:"active",invested:0,fvCharter:0,fvMarket:0,moic:null,unrealGain:0,dividends:0,notes:"Food distribution. 650+ wholesale customers, 20+ brands.",owners:[{name:"Thabat Holding",pct:50},{name:"Salman Mansour Bin Gomaa",pct:50}],docs:[]},
  {id:"i07",name:"Bedayaat",sector:"Education",geo:"KSA",year:2013,pct:17,status:"active",invested:2441284,fvCharter:0,fvMarket:2500000,moic:1.02,unrealGain:58716,dividends:0,notes:"Modern nurseries. 13 branches, 350+ subscribers.",owners:[{name:"Thabat Holding",pct:17},{name:"Osama Daghestani",pct:25},{name:"Ahmed Badarees",pct:11},{name:"Nabeel Alsubaiee",pct:11},{name:"Abdulmalik Almunaif",pct:10},{name:"Others",pct:26}],docs:[]},
  {id:"i08",name:"Jisr",sector:"SAAS",geo:"KSA",year:2016,pct:4.55,status:"active",invested:300000,fvCharter:6000523,fvMarket:68250000,moic:227.5,unrealGain:67950000,dividends:4737548,notes:"HR SAAS. 3000+ companies, 280K employees.",owners:[{name:"Thabat Holding",pct:4.55},{name:"Others",pct:95.45}],docs:[]},
  {id:"i09",name:"Salasa Holding",sector:"Logistics",geo:"KSA",year:2017,pct:6.32,status:"active",invested:1184211,fvCharter:0,fvMarket:42660000,moic:36.02,unrealGain:41475789,dividends:5649529,notes:"E-commerce logistics & fulfillment. Fair value $180M.",owners:[{name:"Thabat Holding",pct:6.32},{name:"Abdulmajed Alyemni",pct:10.85},{name:"Hasan Alhazmi",pct:10.85},{name:"Ghassan Ahmed Co.",pct:20.77},{name:"Artal Capital",pct:13.33},{name:"Saudi Aramco Ventures",pct:6.03},{name:"Others",pct:31.85}],docs:[]},
  {id:"i10",name:"Kease",sector:"Hospitality",geo:"KSA",year:2021,pct:16,status:"active",invested:630000,fvCharter:0,fvMarket:3200000,moic:5.08,unrealGain:2570000,dividends:0,notes:"Luxury residential booking. 300+ units.",owners:[{name:"Abdullah Almunaif",pct:16},{name:"Abdulrahman Bahshwan",pct:42.37},{name:"Alitihad company",pct:20},{name:"Thari Company",pct:7.34},{name:"Others",pct:14.29}],docs:[]},
  {id:"i11",name:"Housing Solutions – PREFAB",sector:"Real Estate",geo:"KSA",year:2021,pct:12,status:"active",invested:330000,fvCharter:0,fvMarket:2400000,moic:7.27,unrealGain:2070000,dividends:0,notes:"Prefabricated buildings specialist.",owners:[{name:"Thabat Holding",pct:12},{name:"Omaima Alansary",pct:59},{name:"Hassan Alansary",pct:12},{name:"Raz Investment Co.",pct:12},{name:"Faisal Albrikan",pct:5}],docs:[]},
  {id:"i12",name:"Signit",sector:"SAAS",geo:"KSA",year:2022,pct:1,status:"active",invested:187950,fvCharter:0,fvMarket:1302083,moic:6.93,unrealGain:1114133,dividends:0,notes:"Arabic-first e-signature. 600K+ accounts, 76K+ signatures.",owners:[{name:"Thabat Holding",pct:1},{name:"Others",pct:99}],docs:[]},
  {id:"i13",name:"We Found 404",sector:"Entertainment",geo:"KSA",year:2022,pct:50,status:"active",invested:1500000,fvCharter:0,fvMarket:1500000,moic:1.0,unrealGain:0,dividends:0,notes:"Gaming & entertainment hub. 40K+ subscriptions.",owners:[{name:"Thabat Holding",pct:50},{name:"Turky Alrouq",pct:22.8},{name:"Yazeed Ahumaid",pct:22.4},{name:"Maram Alqahtani",pct:4.8}],docs:[]},
  {id:"i14",name:"18 Degree",sector:"Retail",geo:"KSA",year:2022,pct:30,status:"active",invested:804925,fvCharter:0,fvMarket:804925,moic:1.0,unrealGain:0,dividends:0,notes:"Frozen food specialty retailer.",owners:[{name:"Thabat Holding",pct:25},{name:"Badr Akily",pct:63},{name:"Ahmed Moufti",pct:2.5},{name:"Others",pct:9.5}],docs:[]},
  {id:"i15",name:"Pipe",sector:"SAAS",geo:"USA",year:2021,pct:null,status:"active",invested:1875000,fvCharter:0,fvMarket:937500,moic:0.5,unrealGain:-937500,dividends:0,notes:"Embedded financial OS for SMBs. Uber Eats partnership.",owners:[{name:"Thabat Holding",pct:null}],docs:[]},
  {id:"i16",name:"Any Move",sector:"SAAS",geo:"Germany",year:2022,pct:null,status:"active",invested:403390,fvCharter:0,fvMarket:0,moic:null,unrealGain:-403390,dividends:0,notes:"100% electric digital car rental tech. 8 German cities.",owners:[{name:"Thabat Holding",pct:null}],docs:[]},
];

const REAL_ESTATE=[
  {id:"r1",name:"RE SH2 Alkhobar",location:"Al Khobar, KSA",date:"Before 2017",cost:1200000,val:1200000,share:"33.33%",sqm:"2,500 M²"},
  {id:"r2",name:"RE Ammaria Land – Hamad Alissa",location:"Riyadh, KSA",date:"Before 2017",cost:1692142,val:5927078,share:"11.21%",sqm:"176,243 M²"},
  {id:"r3",name:"RE Amirayah Land 1 – Salman",location:"Riyadh, KSA",date:"Mar-17",cost:1321126,val:1321126,share:"50%",sqm:"10,000 M²"},
  {id:"r4",name:"RE New Project Maather",location:"Riyadh, KSA",date:"Jan-23",cost:1660487,val:1660487,share:"33.33%",sqm:"3,187 M²",note:"Cancelled"},
  {id:"r5",name:"RE Alzahraa – Turkey Alyahia",location:"Riyadh, KSA",date:"Feb-24",cost:6391074,val:6391074,share:"50%",sqm:"1,250 M²"},
  {id:"r6",name:"Property Ottawa, Canada",location:"Ottawa, Canada",date:"May-16",cost:2022942,val:2000000,share:"100%",sqm:"403,317 M²",rent:155451},
];

// ── State ────────────────────────────────────────────────────────────────────
let state={
  authed:false,role:"",page:"overview",
  selInvId:null,catFilter:"All",search:"",
  investments:[...INVESTMENTS.map(i=>({...i,docs:[...i.docs]}))],
  modal:null,form:{},
};
const CREDS={admin:"thabat2024",viewer:"view123"};

// ── Active chart instances (to destroy on re-render) ─────────────────────────
const chartInstances={};

function destroyChart(id){
  if(chartInstances[id]){chartInstances[id].destroy();delete chartInstances[id];}
}

// ── Computed helpers ─────────────────────────────────────────────────────────
function totalInvested(){return state.investments.reduce((s,i)=>s+(i.invested||0),0);}
function totalFVMarket(){return state.investments.reduce((s,i)=>s+(i.fvMarket||0),0);}
function totalGain(){return state.investments.reduce((s,i)=>s+(i.unrealGain||0),0);}
function totalDividends(){return state.investments.reduce((s,i)=>s+(i.dividends||0),0);}
function gainColor(n){return n>0?B.teal:n<0?B.red:B.muted;}
function currentInv(){return state.investments.find(i=>i.id===state.selInvId);}
function filteredInvs(){
  return state.investments.filter(i=>{
    const sectorOk=(state.catFilter==="All"||i.sector===state.catFilter);
    const searchOk=i.name.toLowerCase().includes(state.search.toLowerCase());
    return sectorOk&&searchOk;
  });
}

// ── HTML builders ────────────────────────────────────────────────────────────
function tag(text,color){
  return `<span class="tag" style="background:${color}20;color:${color};border:1px solid ${color}30">${text}</span>`;
}
function bar(pct,color){
  const w=Math.min(100,Math.max(0,pct||0));
  return `<div class="bar-track"><div class="bar-fill" style="width:${w}%;background:${color}"></div></div>`;
}
function btn(text,cls,attrs="",style=""){
  return `<button class="btn ${cls}" ${attrs} style="${style}">${text}</button>`;
}
function pieChartSVG(slices,size=130){
  const total=slices.reduce((s,x)=>s+(x.pct||0),0);
  if(!total)return"";
  const cx=size/2,cy=size/2,r=size/2-6;
  let cum=0,paths="";
  slices.forEach((s,i)=>{
    const pct=(s.pct||0)/total;
    const st=cum,en=cum+pct*360; cum=en;
    const toR=d=>((d-90)*Math.PI)/180;
    const x1=cx+r*Math.cos(toR(st)),y1=cy+r*Math.sin(toR(st));
    const x2=cx+r*Math.cos(toR(en)),y2=cy+r*Math.sin(toR(en));
    if(Math.abs(en-st)<0.1)return;
    const col=s.color||CHART_COLORS[i%CHART_COLORS.length];
    paths+=`<path d="M${cx},${cy}L${x1.toFixed(2)},${y1.toFixed(2)}A${r},${r} 0 ${en-st>180?1:0} 1 ${x2.toFixed(2)},${y2.toFixed(2)}Z" fill="${col}" opacity="0.92"/>`;
  });
  return `<svg class="pie-wrap" width="${size}" height="${size}">${paths}<circle cx="${cx}" cy="${cy}" r="${(r*0.44).toFixed(1)}" fill="${B.card}"/></svg>`;
}

// ── AUTH SCREEN ──────────────────────────────────────────────────────────────
function renderAuth(){
  document.getElementById("auth-screen").classList.remove("hidden");
  document.getElementById("app").classList.add("hidden");
}

// ── MAIN APP RENDER ──────────────────────────────────────────────────────────
function renderApp(){
  document.getElementById("auth-screen").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");

  // nav active
  document.querySelectorAll(".nav-btn[data-page]").forEach(b=>{
    b.classList.toggle("active",b.dataset.page===state.page);
  });
  document.getElementById("nav-user-label").textContent="👤 "+state.role;

  const adminBtn=document.getElementById("nav-admin-btn");
  if(adminBtn) adminBtn.style.display=state.role==="admin"?"inline-block":"none";

  // back button only shown on detail page
  const backBtn=document.getElementById("back-btn");
  if(backBtn){
    backBtn.style.display=state.page==="detail"?"inline-block":"none";
  }

  const content=document.getElementById("main-content");
  // destroy all old charts
  Object.keys(chartInstances).forEach(destroyChart);

  if(state.page==="detail"){
    content.innerHTML=renderDetailPage();
    bindDetailEvents();
    initDetailCharts();
  } else if(state.page==="overview"){
    content.innerHTML=renderOverview();
    bindOverviewEvents();
    setTimeout(()=>initOverviewChart(),50);
  } else if(state.page==="investments"){
    content.innerHTML=renderInvestments();
    bindInvEvents();
  } else if(state.page==="realestate"){
    content.innerHTML=renderRealEstate();
  } else if(state.page==="shareholders"){
    content.innerHTML=renderShareholders();
  } else if(state.page==="structure"){
    content.innerHTML=renderStructure();
    bindStructureEvents();
  } else if(state.page==="admin"){
    content.innerHTML=renderAdmin();
    bindAdminEvents();
  }

  if(state.modal) renderModal();
}

// ── OVERVIEW ─────────────────────────────────────────────────────────────────
function renderOverview(){
  const tvfm=totalFVMarket(),ti=totalInvested(),tg=totalGain(),td=totalDividends();
  const reValTotal=REAL_ESTATE.reduce((s,r)=>s+r.val,0);

  // sector allocation
  let secRows="";
  Object.keys(CATEGORIES).forEach(sec=>{
    const secInvs=state.investments.filter(x=>x.sector===sec);
    const val=secInvs.reduce((s,x)=>s+(x.fvMarket||0),0);
    if(!val)return;
    const cat=CATEGORIES[sec];
    secRows+=`<div class="sec-row">
      <div class="sec-row meta" style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
        <span>${cat.icon}</span><span style="flex:1;font-size:13px;font-weight:500">${sec}</span>
        ${tag(secInvs.length,cat.color)}
        <span style="font-weight:700;font-size:13px;color:${cat.color}">${fmtM(val)}</span>
      </div>
      ${bar((val/tvfm)*100,cat.color)}
    </div>`;
  });

  // top moic
  const topMoic=[...state.investments].filter(i=>i.moic&&i.moic>1).sort((a,b)=>b.moic-a.moic).slice(0,8);
  let moicRows="";
  topMoic.forEach(inv=>{
    const cat=CATEGORIES[inv.sector]||CATEGORIES["Retail"];
    const mc=inv.moic>10?B.teal:inv.moic>2?B.gold:B.muted;
    moicRows+=`<div class="moic-row" data-inv="${inv.id}">
      <div class="moic-icon" style="background:${cat.color}15">${cat.icon}</div>
      <span style="flex:1;font-size:13px;font-weight:500">${inv.name}</span>
      ${tag(inv.moic+"x",mc)}
    </div>`;
  });

  // shareholders strip
  let shStrip="";
  SHAREHOLDERS.forEach(sh=>{
    shStrip+=`<div style="text-align:center;min-width:90px">
      <div style="width:46px;height:46px;border-radius:50%;background:${sh.color}20;border:2px solid ${sh.color};display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:${sh.color};margin:0 auto 6px">${sh.name[0]}</div>
      <div style="font-size:12px;font-weight:700;color:${B.text}">${sh.name.split(" ")[0]}</div>
      <div style="font-size:11px;color:${B.sub}">${sh.role.split(" ").slice(0,2).join(" ")}</div>
      <div style="margin-top:4px">${tag(sh.pct+"%",sh.color)}</div>
    </div>`;
  });

  return `
  <div class="grid-4 mb-20">
    ${statCard("Total Portfolio (Market FV)",fmtM(tvfm)+" SAR","",B.teal,"💼")}
    ${statCard("Total Invested",fmtM(ti)+" SAR","",B.gold,"💰")}
    ${statCard("Unrealised Gain",fmtM(tg)+" SAR","",gainColor(tg),"📈")}
    ${statCard("Total Dividends & Exits",fmtM(td)+" SAR","",B.blue,"💸")}
  </div>
  <div class="grid-3 mb-20">
    <div class="card row" style="display:flex;gap:14px;align-items:center">
      <div style="width:46px;height:46px;background:${B.teal}15;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0">🚀</div>
      <div><div style="font-size:12px;color:${B.sub}">Portfolio MOIC</div><div style="font-size:20px;font-weight:800;color:${B.teal}">15X</div></div>
    </div>
    <div class="card row" style="display:flex;gap:14px;align-items:center">
      <div style="width:46px;height:46px;background:${B.gold}15;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0">🏗️</div>
      <div><div style="font-size:12px;color:${B.sub}">Active Holdings</div><div style="font-size:20px;font-weight:800;color:${B.gold}">${state.investments.filter(i=>i.status==="active").length}</div></div>
    </div>
    <div class="card row" style="display:flex;gap:14px;align-items:center">
      <div style="width:46px;height:46px;background:${B.blue}15;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0">🏢</div>
      <div><div style="font-size:12px;color:${B.sub}">Real Estate Portfolio</div><div style="font-size:20px;font-weight:800;color:${B.blue}">${fmtM(reValTotal)} SAR</div></div>
    </div>
  </div>
  <div class="grid-2 mb-20">
    <div class="card">
      <div class="card-header">Portfolio allocation by sector</div>
      ${secRows}
    </div>
    <div class="card">
      <div class="card-header">Top holdings by MOIC</div>
      ${moicRows}
    </div>
  </div>
  <div class="card mb-20" id="overview-anoosh-card">
    <div class="card-header" style="display:flex;align-items:center;justify-content:space-between">
      <span>📊 Anoosh — Revenue &amp; Net Profit 2015–2025 (SAR) &nbsp;<span style="font-size:12px;color:${B.muted};font-weight:400">Largest holding · 70%</span></span>
      <button class="btn small" id="anoosh-detail-btn" data-inv="i01">Full detail →</button>
    </div>
    <div class="chart-legend">
      <span class="legend-item"><span class="legend-dot" style="background:${B.teal}"></span>Revenue</span>
      <span class="legend-item"><span class="legend-dot" style="background:${B.gold}"></span>Net Profit</span>
      <span class="legend-item"><span class="legend-dot" style="background:${B.red}"></span>Net Loss</span>
    </div>
    <div style="position:relative;width:100%;height:220px"><canvas id="chart_overview_anoosh"></canvas></div>
  </div>
  <div class="card">
    <div class="card-header">👥 Board Members &amp; Shareholders</div>
    <div style="display:flex;gap:16px;flex-wrap:wrap">${shStrip}</div>
  </div>`;
}

function statCard(lbl,val,sub,color,icon){
  return `<div class="stat-card" style="border-top-color:${color}">
    <div class="icon">${icon}</div>
    <div class="lbl">${lbl}</div>
    <div class="val" style="color:${color}">${val}</div>
    ${sub?`<div class="sub-val">${sub}</div>`:""}
  </div>`;
}

function bindOverviewEvents(){
  document.querySelectorAll(".moic-row[data-inv]").forEach(el=>{
    el.addEventListener("click",()=>{state.selInvId=el.dataset.inv;state.page="detail";renderApp();});
  });
  const ab=document.getElementById("anoosh-detail-btn");
  if(ab) ab.addEventListener("click",()=>{state.selInvId="i01";state.page="detail";renderApp();});
}

function initOverviewChart(){
  if(!window.Chart||!HISTORICAL.i01)return;
  const ctx=document.getElementById("chart_overview_anoosh");
  if(!ctx)return;
  destroyChart("overview_anoosh");
  chartInstances["overview_anoosh"]=new Chart(ctx,barChartConfig(HISTORICAL.i01));
}

// ── INVESTMENTS PAGE ─────────────────────────────────────────────────────────
function renderInvestments(){
  const fi=filteredInvs();
  const fTi=fi.reduce((s,i)=>s+(i.invested||0),0);
  const fFV=fi.reduce((s,i)=>s+(i.fvMarket||0),0);
  const fG=fi.reduce((s,i)=>s+(i.unrealGain||0),0);
  const fD=fi.reduce((s,i)=>s+(i.dividends||0),0);

  let chips=`<button class="chip${state.catFilter==="All"?" active":""}" data-cat="All">All</button>`;
  Object.keys(CATEGORIES).forEach(c=>{
    chips+=`<button class="chip${state.catFilter===c?" active":""}" data-cat="${c}">${CATEGORIES[c].icon} ${c}</button>`;
  });

  let cards="";
  fi.forEach(inv=>{
    const cat=CATEGORIES[inv.sector]||CATEGORIES["Retail"];
    const gain=inv.unrealGain||0;
    const hasChart=!!HISTORICAL[inv.id];
    cards+=`<div class="inv-card" data-inv="${inv.id}" style="border-color:${B.border}">
      <div class="row mb-16" style="display:flex;align-items:center;gap:8px">
        <span style="font-size:16px">${cat.icon}</span>
        ${tag(inv.sector,cat.color)}
        <span style="margin-left:auto;font-size:11px;color:${B.muted}">${inv.year}</span>
        ${inv.geo!=="KSA"?tag(inv.geo,B.gold):""}
      </div>
      <div style="font-weight:700;font-size:15px;margin-bottom:4px">${inv.name}</div>
      ${inv.pct?`<div style="font-size:12px;color:${B.sub};margin-bottom:10px">Stake: <b style="color:${B.teal}">${inv.pct}%</b></div>`:""}
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">
        <div><div style="font-size:10px;color:${B.muted}">FV Market</div><div style="font-weight:700;color:${cat.color};font-size:13px">${inv.fvMarket?fmtM(inv.fvMarket)+" SAR":"—"}</div></div>
        <div><div style="font-size:10px;color:${B.muted}">Unrealised</div><div style="font-weight:700;color:${gainColor(gain)};font-size:13px">${inv.unrealGain?fmtM(inv.unrealGain)+" SAR":"—"}</div></div>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between">
        ${inv.moic?tag("MOIC "+inv.moic+"x",inv.moic>=1?B.teal:B.red):""}
        ${hasChart?`<span style="font-size:11px;color:${B.muted}">📊 charts available</span>`:""}
      </div>
    </div>`;
  });

  return `
  <div class="row mb-16" style="display:flex;align-items:center;flex-wrap:wrap;gap:10px">
    <div style="font-weight:800;font-size:20px">📂 Investment Portfolio</div>
    <input class="search-input" id="inv-search" placeholder="Search…" value="${state.search}" style="margin-left:auto">
  </div>
  <div class="filter-chips">${chips}</div>
  <div class="grid-4 mb-20">
    <div style="background:${B.card};border-radius:10px;padding:14px 16px;border:1px solid ${B.border};border-left:3px solid ${B.gold}">
      <div style="font-size:11px;color:${B.sub};margin-bottom:3px">Total Invested</div>
      <div style="font-size:18px;font-weight:800;color:${B.gold}">${fmtM(fTi)} SAR</div>
    </div>
    <div style="background:${B.card};border-radius:10px;padding:14px 16px;border:1px solid ${B.border};border-left:3px solid ${B.teal}">
      <div style="font-size:11px;color:${B.sub};margin-bottom:3px">Total FV Market</div>
      <div style="font-size:18px;font-weight:800;color:${B.teal}">${fmtM(fFV)} SAR</div>
    </div>
    <div style="background:${B.card};border-radius:10px;padding:14px 16px;border:1px solid ${B.border};border-left:3px solid ${gainColor(fG)}">
      <div style="font-size:11px;color:${B.sub};margin-bottom:3px">Unrealised Gain</div>
      <div style="font-size:18px;font-weight:800;color:${gainColor(fG)}">${fmtM(fG)} SAR</div>
    </div>
    <div style="background:${B.card};border-radius:10px;padding:14px 16px;border:1px solid ${B.border};border-left:3px solid ${B.blue}">
      <div style="font-size:11px;color:${B.sub};margin-bottom:3px">Dividends</div>
      <div style="font-size:18px;font-weight:800;color:${B.blue}">${fmtM(fD)} SAR</div>
    </div>
  </div>
  <div class="grid-3">${cards}</div>`;
}

function bindInvEvents(){
  document.querySelectorAll(".inv-card").forEach(el=>{
    el.addEventListener("mouseenter",()=>{
      const inv=state.investments.find(i=>i.id===el.dataset.inv);
      if(!inv)return;
      const cat=CATEGORIES[inv.sector]||CATEGORIES["Retail"];
      el.style.borderColor=cat.color;
      el.style.boxShadow=`0 4px 16px ${cat.color}22`;
    });
    el.addEventListener("mouseleave",()=>{el.style.borderColor=B.border;el.style.boxShadow="none";});
    el.addEventListener("click",()=>{state.selInvId=el.dataset.inv;state.page="detail";renderApp();});
  });
  document.querySelectorAll(".chip").forEach(el=>{
    el.addEventListener("click",()=>{state.catFilter=el.dataset.cat;renderApp();});
  });
  const si=document.getElementById("inv-search");
  if(si) si.addEventListener("input",e=>{state.search=e.target.value;renderApp();});
}

// ── DETAIL PAGE ──────────────────────────────────────────────────────────────
function renderDetailPage(){
  const inv=currentInv();
  if(!inv)return`<p>Not found.</p>`;
  const cat=CATEGORIES[inv.sector]||CATEGORIES["Retail"];
  const gain=inv.unrealGain||0;
  const hist=HISTORICAL[inv.id];

  // ownership
  let ownersHtml="";
  if(inv.owners?.length){
    const pie=pieChartSVG(inv.owners.filter(o=>o.pct).map((o,i)=>({pct:o.pct,color:CHART_COLORS[i%CHART_COLORS.length]})),130);
    let ownerList="";
    inv.owners.slice(0,8).forEach((o,i)=>{
      ownerList+=`<div class="owner-row">
        <div class="owner-row meta" style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
          <span class="owner-dot" style="background:${CHART_COLORS[i%CHART_COLORS.length]}"></span>
          <span style="flex:1;font-size:12px">${o.name}</span>
          <span style="font-weight:700;font-size:12px;color:${CHART_COLORS[i%CHART_COLORS.length]}">${o.pct?o.pct+"%":"—"}</span>
        </div>
        ${o.pct?bar(o.pct,CHART_COLORS[i%CHART_COLORS.length]):""}
      </div>`;
    });
    ownersHtml=`<div style="display:flex;gap:20px;flex-wrap:wrap;align-items:center">${pie}<div style="flex:1;min-width:160px">${ownerList}</div></div>`;
  } else {
    ownersHtml=`<div style="color:${B.muted}">No ownership data.</div>`;
  }

  // docs
  let docsHtml=inv.docs.length===0
    ?`<div style="color:${B.muted};font-size:13px">No documents.${state.role==="admin"?" Click 📎 Upload.":""}</div>`
    :`<div style="display:flex;flex-wrap:wrap;gap:10px">${inv.docs.map(d=>`<div style="display:flex;align-items:center;gap:10px;background:${B.bgLight};border-radius:8px;padding:10px 14px;border:1px solid ${B.border}"><span style="font-size:18px">📄</span><div><div style="font-size:13px;font-weight:600">${d.name}</div><div style="font-size:11px;color:${B.muted}">${d.date} · ${d.size}</div></div></div>`).join("")}</div>`;

  // charts section
  let chartsHtml="";
  if(hist){
    let kpiTiles="";
    if(hist.kpis){
      hist.kpis.forEach((k,i)=>{
        kpiTiles+=`<div class="kpi-tile" style="border-left-color:${CHART_COLORS[i%CHART_COLORS.length]}">
          <div class="kl">${k.label}</div>
          <div class="kv" style="color:${CHART_COLORS[i%CHART_COLORS.length]}">${k.value}</div>
        </div>`;
      });
    }
    chartsHtml=`<div class="grid-2 mb-20">
      <div class="card">
        <div class="card-header">📊 Revenue &amp; Net Profit — Historical (SAR)</div>
        <div class="chart-legend">
          <span class="legend-item"><span class="legend-dot" style="background:${B.teal}"></span>Revenue</span>
          <span class="legend-item"><span class="legend-dot" style="background:${B.gold}"></span>Net Profit</span>
          <span class="legend-item"><span class="legend-dot" style="background:${B.red}"></span>Net Loss</span>
        </div>
        <div style="position:relative;width:100%;height:220px"><canvas id="chart_bar_${inv.id}"></canvas></div>
      </div>
      <div class="card">
        <div class="card-header">📈 Gross Profit % — Trend</div>
        <div style="position:relative;width:100%;height:160px"><canvas id="chart_gp_${inv.id}"></canvas></div>
        ${hist.kpis?`<div style="font-weight:600;font-size:13px;color:${B.sub};margin:14px 0 8px;padding-top:10px;border-top:1px solid ${B.border}">Latest Period KPIs</div><div class="kpi-grid">${kpiTiles}</div>`:""}
      </div>
    </div>`;
  }

  // admin edit buttons
  let adminBtns="";
  if(state.role==="admin"){
    adminBtns=`<div style="display:flex;gap:8px;flex-wrap:wrap">
      <button class="btn small outline" id="edit-info-btn" style="border-color:${B.teal};color:${B.teal}">✏️ Edit</button>
      <button class="btn small" id="upload-doc-btn">📎 Upload</button>
    </div>`;
  }

  return `
  <div class="detail-header">
    <div style="display:flex;align-items:flex-start;flex-wrap:wrap;gap:16px">
      <div style="width:52px;height:52px;background:${cat.color}15;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:26px;flex-shrink:0">${cat.icon}</div>
      <div style="flex:1">
        <div style="display:flex;gap:8px;margin-bottom:6px;flex-wrap:wrap">
          ${tag(inv.sector,cat.color)} ${tag(inv.geo,B.sub)}
          ${inv.pct?tag("Thabat "+inv.pct+"%",B.teal):""}
        </div>
        <h1 style="margin:0;font-size:20px;color:${B.text};font-weight:800">${inv.name}</h1>
        <div style="font-size:13px;color:${B.sub};margin-top:4px">${inv.notes}</div>
      </div>
      ${adminBtns}
    </div>
  </div>

  <div class="grid-4 mb-20">
    <div class="detail-fin-card" style="border-top-color:${B.teal}">
      <div class="lbl">Cumulative Invested</div>
      <div class="val" style="color:${B.teal}">${fmtM(inv.invested)} SAR</div>
    </div>
    <div class="detail-fin-card" style="border-top-color:${B.blue}">
      <div class="lbl">Fair Value (Market)</div>
      <div class="val" style="color:${B.blue}">${fmtM(inv.fvMarket)} SAR</div>
    </div>
    <div class="detail-fin-card" style="border-top-color:${gainColor(gain)}">
      <div class="lbl">Unrealised Gain/Loss</div>
      <div class="val" style="color:${gainColor(gain)}">${fmtM(inv.unrealGain)} SAR</div>
      ${inv.moic?`<div style="font-size:12px;color:${B.muted};margin-top:2px">MOIC: ${inv.moic}x</div>`:""}
    </div>
    <div class="detail-fin-card" style="border-top-color:${B.gold}">
      <div class="lbl">Dividends / Exits</div>
      <div class="val" style="color:${B.gold}">${fmtM(inv.dividends)} SAR</div>
    </div>
  </div>

  ${chartsHtml}

  <div class="grid-2">
    <div class="card">
      <div class="card-header">👥 Ownership Structure</div>
      ${ownersHtml}
    </div>
    <div class="card">
      <div class="card-header">📁 Documents</div>
      ${docsHtml}
    </div>
  </div>`;
}

function bindDetailEvents(){
  const eb=document.getElementById("edit-info-btn");
  const ub=document.getElementById("upload-doc-btn");
  const inv=currentInv();
  if(!inv)return;
  if(eb) eb.addEventListener("click",()=>{
    state.form={notes:inv.notes,invested:inv.invested,fvMarket:inv.fvMarket,dividends:inv.dividends};
    state.modal="editInfo"; renderModal();
  });
  if(ub) ub.addEventListener("click",()=>{state.modal="uploadDoc"; renderModal();});
}

function initDetailCharts(){
  const inv=currentInv();
  if(!inv||!window.Chart)return;
  const hist=HISTORICAL[inv.id];
  if(!hist)return;
  setTimeout(()=>{
    const barCtx=document.getElementById(`chart_bar_${inv.id}`);
    if(barCtx){destroyChart("bar_"+inv.id);chartInstances["bar_"+inv.id]=new Chart(barCtx,barChartConfig(hist));}
    const gpCtx=document.getElementById(`chart_gp_${inv.id}`);
    if(gpCtx){destroyChart("gp_"+inv.id);chartInstances["gp_"+inv.id]=new Chart(gpCtx,gpChartConfig(hist));}
  },50);
}

// ── CHART CONFIGS ────────────────────────────────────────────────────────────
function barChartConfig(d){
  return {
    type:"bar",
    data:{
      labels:d.years,
      datasets:[
        {label:"Revenue",data:d.revenue,backgroundColor:B.teal+"cc",borderRadius:3,order:2},
        {label:"Net Profit",data:d.netProfit,backgroundColor:d.netProfit.map(v=>v>=0?B.gold+"cc":"#c0392b99"),borderRadius:3,order:1},
      ]
    },
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>(ctx.dataset.label||"")+": "+fmtM(ctx.raw)+" SAR"}}},
      scales:{
        x:{ticks:{font:{size:10},color:"#4a6b5a",maxRotation:45,autoSkip:false},grid:{display:false}},
        y:{position:"left",ticks:{font:{size:10},color:"#4a6b5a",callback:v=>fmtM(v)},grid:{color:"#dde8e322"}},
      }
    }
  };
}
function gpChartConfig(d){
  return {
    type:"line",
    data:{labels:d.years,datasets:[{label:"Gross Profit %",data:d.grossProfit,borderColor:B.tealLight,backgroundColor:B.tealPale+"88",borderWidth:2,fill:true,tension:0.3,pointRadius:3,pointBackgroundColor:B.teal}]},
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>ctx.raw.toFixed(1)+"%"}}},
      scales:{
        x:{ticks:{font:{size:10},color:"#4a6b5a",maxRotation:45,autoSkip:false},grid:{display:false}},
        y:{ticks:{font:{size:10},color:"#4a6b5a",callback:v=>v+"%"},grid:{color:"#dde8e322"}},
      }
    }
  };
}

// ── REAL ESTATE ──────────────────────────────────────────────────────────────
function renderRealEstate(){
  const ksaProps=REAL_ESTATE.filter(r=>!r.location.includes("Canada"));
  const intlProps=REAL_ESTATE.filter(r=>r.location.includes("Canada"));

  let ksaRows="";
  ksaProps.forEach((r,i)=>{
    ksaRows+=`<tr style="background:${i%2===0?B.bgLight:B.card};border-bottom:1px solid ${B.border}">
      <td style="padding:10px 12px;color:${B.muted}">${i+1}</td>
      <td style="padding:10px 12px;font-weight:500">${r.name}${r.note?`<span style="color:${B.red};font-size:11px;margin-left:4px">(${r.note})</span>`:""}</td>
      <td style="padding:10px 12px;color:${B.sub}">${r.location}</td>
      <td style="padding:10px 12px;color:${B.sub}">${r.date}</td>
      <td style="padding:10px 12px;font-weight:600">${fmt(r.cost)}</td>
      <td style="padding:10px 12px;font-weight:700;color:${B.teal}">${fmt(r.val)}</td>
      <td style="padding:10px 12px">${tag(r.share,B.teal)}</td>
      <td style="padding:10px 12px;color:${B.sub}">${r.sqm}</td>
    </tr>`;
  });

  let intlRows="";
  intlProps.forEach(r=>{
    intlRows+=`<tr style="background:${B.bgLight}">
      <td style="padding:10px 12px;font-weight:500">${r.name}</td>
      <td style="padding:10px 12px;color:${B.sub}">${r.location}</td>
      <td style="padding:10px 12px;color:${B.sub}">${r.date}</td>
      <td style="padding:10px 12px;font-weight:600">${fmt(r.cost)}</td>
      <td style="padding:10px 12px;font-weight:700;color:${B.blue}">${fmt(r.val)}</td>
      <td style="padding:10px 12px;color:${B.gold};font-weight:600">${r.rent?fmt(r.rent):"—"}</td>
      <td style="padding:10px 12px">${tag(r.share,B.blue)}</td>
      <td style="padding:10px 12px;color:${B.sub}">${r.sqm}</td>
    </tr>`;
  });

  return `
  <div class="page-title">🏗️ Real Estate Portfolio</div>
  <div class="grid-3 mb-20">
    ${statCard("Total Cost (KSA+Intl)",fmtM(14287770)+" SAR","",B.teal,"💰")}
    ${statCard("Total Valuation",fmtM(18499764)+" SAR","",B.blue,"📈")}
    ${statCard("Annual Rent (Ottawa)",fmtM(155451)+" SAR","",B.gold,"🏠")}
  </div>
  <div class="card mb-20">
    <div class="card-header">🇸🇦 Inside KSA</div>
    <div class="table-wrap">
      <table class="data-table">
        <thead><tr style="background:${B.teal};color:#fff">${["#","Description","Location","Date","Cost (SAR)","Valuation (SAR)","Share","Area"].map(h=>`<th style="padding:10px 12px">${h}</th>`).join("")}</tr></thead>
        <tbody>
          ${ksaRows}
          <tr style="background:${B.tealPale};font-weight:700;border-top:2px solid ${B.teal}">
            <td colspan="4" style="padding:10px 12px;color:${B.teal}">Total KSA</td>
            <td style="padding:10px 12px;color:${B.teal}">${fmt(12264828)}</td>
            <td style="padding:10px 12px;color:${B.teal}">${fmt(16499764)}</td>
            <td colspan="2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="card">
    <div class="card-header">🌍 Outside KSA</div>
    <div class="table-wrap">
      <table class="data-table">
        <thead><tr style="background:${B.blue};color:#fff">${["Description","Location","Date","Cost (SAR)","Valuation (SAR)","Rent/yr","Share","Area"].map(h=>`<th style="padding:10px 12px">${h}</th>`).join("")}</tr></thead>
        <tbody>${intlRows}</tbody>
      </table>
    </div>
  </div>`;
}

// ── SHAREHOLDERS ─────────────────────────────────────────────────────────────
function renderShareholders(){
  const tvfm=totalFVMarket();
  let shCards="";
  SHAREHOLDERS.forEach(sh=>{
    shCards+=`<div class="sh-card" style="border-top-color:${sh.color};border-color:${sh.color}30">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
        <div class="sh-avatar" style="background:${sh.color}15;border:2px solid ${sh.color};color:${sh.color}">${sh.name[0]}</div>
        <div><div style="font-weight:700;font-size:14px">${sh.name}</div><div style="font-size:12px;color:${B.sub}">${sh.role}</div></div>
      </div>
      <div style="display:flex;justify-content:space-between;margin-bottom:10px">
        <div><div style="font-size:11px;color:${B.muted}">Ownership</div><div style="font-size:22px;font-weight:800;color:${sh.color}">${sh.pct}%</div></div>
        <div style="text-align:right"><div style="font-size:11px;color:${B.muted}">Portfolio share</div><div style="font-size:15px;font-weight:700;color:${B.teal}">${fmtM(tvfm*sh.pct/100)} SAR</div></div>
      </div>
      ${bar(sh.pct,sh.color)}
    </div>`;
  });

  let pieList="";
  SHAREHOLDERS.forEach(sh=>{
    pieList+=`<div style="margin-bottom:10px">
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
        <span style="width:9px;height:9px;border-radius:50%;background:${sh.color};flex-shrink:0;display:inline-block"></span>
        <span style="flex:1;font-size:13px">${sh.name}</span>
        <span style="font-weight:700;color:${sh.color}">${sh.pct}%</span>
      </div>
      ${bar(sh.pct,sh.color)}
    </div>`;
  });

  const pie=pieChartSVG(SHAREHOLDERS.map(sh=>({pct:sh.pct,color:sh.color})),150);

  const stats=[
    {l:"Founded",v:"1998"},{l:"Employees",v:"+700"},{l:"Retail Stores",v:"+130"},
    {l:"Clients",v:"+20,000"},{l:"Investments",v:"+40"},
    {l:"Countries",v:"KSA, UAE, Canada, Germany, USA, Egypt, Jordan, Kuwait"},
  ];
  let statsHtml="";
  stats.forEach(s=>{
    statsHtml+=`<div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid ${B.border}">
      <span style="flex:1;font-size:13px;color:${B.sub}">${s.l}</span>
      <span style="font-weight:700;font-size:13px;color:${B.teal}">${s.v}</span>
    </div>`;
  });

  return `
  <div class="page-title">👥 Board Members &amp; Shareholders</div>
  <div class="grid-3 mb-20">${shCards}</div>
  <div class="grid-2">
    <div class="card">
      <div class="card-header">Ownership breakdown</div>
      <div style="display:flex;gap:24px;align-items:center">
        ${pie}
        <div style="flex:1">${pieList}</div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">Key stats</div>
      ${statsHtml}
    </div>
  </div>`;
}

// ── STRUCTURE ────────────────────────────────────────────────────────────────
function renderStructure(){
  let shNodes="";
  SHAREHOLDERS.forEach(sh=>{
    shNodes+=`<div style="text-align:center">
      <div style="width:42px;height:42px;border-radius:50%;background:${sh.color}20;border:2px solid ${sh.color};display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:${sh.color};margin:0 auto 4px">${sh.name[0]}</div>
      <div style="font-size:11px;font-weight:600;color:${B.text}">${sh.name.replace("Almunif","").trim()}</div>
      ${tag(sh.pct+"%",sh.color)}
    </div>`;
  });

  let sectors="";
  Object.entries(CATEGORIES).forEach(([sec,conf])=>{
    const secInvs=state.investments.filter(i=>i.sector===sec);
    if(!secInvs.length)return;
    let invItems="";
    secInvs.forEach(inv=>{
      invItems+=`<div class="struct-inv" data-inv="${inv.id}" data-color="${conf.color}" style="border-color:${conf.color}33">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:12px;font-weight:500">${inv.name}</span>
          ${inv.pct?tag(inv.pct+"%",conf.color):""}
        </div>
        ${HISTORICAL[inv.id]?`<span style="font-size:10px;color:${B.muted}">📊 charts</span>`:""}
      </div>`;
    });
    sectors+=`<div>
      <div class="sector-box" style="background:${conf.color};box-shadow:0 3px 12px ${conf.color}44">
        <div style="font-size:20px">${conf.icon}</div>
        <div style="font-weight:700;color:#fff;font-size:13px">${sec}</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.8)">${secInvs.length} investments</div>
      </div>
      ${invItems}
    </div>`;
  });

  return `
  <div class="page-title">🌳 Ownership Structure</div>
  <div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-bottom:20px">${shNodes}</div>
  <div style="text-align:center;color:${B.teal};font-size:18px;margin-bottom:12px">↓</div>
  <div style="display:flex;justify-content:center;margin-bottom:20px">
    <div class="holding-box">
      <div style="font-size:22px">🏛️</div>
      <div style="font-weight:800;font-size:18px;color:#fff">Thabat Holding</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.7)">Since 1998 · KSA</div>
    </div>
  </div>
  <div style="text-align:center;color:${B.teal};font-size:18px;margin-bottom:20px">↓</div>
  <div class="grid-4">${sectors}</div>`;
}

function bindStructureEvents(){
  document.querySelectorAll(".struct-inv[data-inv]").forEach(el=>{
    const color=el.dataset.color;
    el.addEventListener("mouseenter",()=>{el.style.borderColor=color;});
    el.addEventListener("mouseleave",()=>{el.style.borderColor=color+"33";});
    el.addEventListener("click",()=>{state.selInvId=el.dataset.inv;state.page="detail";renderApp();});
  });
}

// ── ADMIN ────────────────────────────────────────────────────────────────────
function renderAdmin(){
  let rows="";
  state.investments.forEach(inv=>{
    const cat=CATEGORIES[inv.sector]||CATEGORIES["Retail"];
    rows+=`<div class="admin-inv-row">
      <span style="font-size:14px">${cat.icon}</span>
      <span style="flex:1;font-size:13px;font-weight:500">${inv.name}</span>
      ${tag(inv.sector,cat.color)}
      ${inv.geo!=="KSA"?tag(inv.geo,B.gold):""}
      ${inv.moic?tag(inv.moic+"x",inv.moic>=1?B.teal:B.red):""}
      ${HISTORICAL[inv.id]?tag("📊",B.sub):""}
      <button class="btn small" data-inv="${inv.id}" style="margin-left:8px">Open</button>
    </div>`;
  });
  return `
  <div class="page-title">⚙️ Admin Panel</div>
  <div class="card">
    <div style="font-weight:700;color:${B.teal};margin-bottom:12px;font-size:15px">All Investments (${state.investments.length})</div>
    ${rows}
  </div>`;
}
function bindAdminEvents(){
  document.querySelectorAll("#main-content .btn[data-inv]").forEach(el=>{
    el.addEventListener("click",()=>{state.selInvId=el.dataset.inv;state.page="detail";renderApp();});
  });
}

// ── MODAL ────────────────────────────────────────────────────────────────────
function renderModal(){
  let existing=document.getElementById("modal-overlay");
  if(existing)existing.remove();
  if(!state.modal)return;
  const inv=currentInv();
  if(!inv)return;

  let inner="";
  if(state.modal==="editInfo"){
    inner=`<h3>Edit — ${inv.name}</h3>
    ${[{k:"notes",l:"Notes",t:"text"},{k:"invested",l:"Invested (SAR)",t:"number"},{k:"fvMarket",l:"Fair Value Market (SAR)",t:"number"},{k:"dividends",l:"Dividends (SAR)",t:"number"}].map(f=>`
      <div style="margin-bottom:12px">
        <label class="modal-label">${f.l}</label>
        <input class="modal-input" data-key="${f.k}" type="${f.t}" value="${state.form[f.k]||""}">
      </div>`).join("")}
    <div class="modal-actions">
      <button class="btn outline" id="modal-cancel">Cancel</button>
      <button class="btn" id="modal-save-info">Save</button>
    </div>`;
  } else if(state.modal==="uploadDoc"){
    inner=`<h3>Upload Document</h3>
    <input type="file" id="hidden-file-input" style="display:none">
    <button class="btn" id="choose-file-btn" style="width:100%;padding:12px;margin-bottom:10px">📂 Choose File</button>
    <button class="btn outline" id="modal-cancel" style="width:100%;padding:12px">Cancel</button>`;
  }

  const div=document.createElement("div");
  div.className="modal-overlay";
  div.id="modal-overlay";
  div.innerHTML=`<div class="modal-box">${inner}</div>`;
  document.body.appendChild(div);

  // bind
  const cancelBtn=div.querySelector("#modal-cancel");
  if(cancelBtn) cancelBtn.addEventListener("click",()=>{state.modal=null;div.remove();});
  div.addEventListener("click",e=>{if(e.target===div){state.modal=null;div.remove();}});

  if(state.modal==="editInfo"){
    div.querySelectorAll(".modal-input").forEach(inp=>{
      inp.addEventListener("input",e=>{state.form[e.target.dataset.key]=e.target.value;});
    });
    const saveBtn=div.querySelector("#modal-save-info");
    if(saveBtn) saveBtn.addEventListener("click",()=>{
      state.investments=state.investments.map(i=>{
        if(i.id!==inv.id)return i;
        return {...i,
          notes:state.form.notes||i.notes,
          invested:parseFloat(state.form.invested)||i.invested,
          fvMarket:parseFloat(state.form.fvMarket)||i.fvMarket,
          dividends:parseFloat(state.form.dividends)||i.dividends,
          unrealGain:(parseFloat(state.form.fvMarket)||i.fvMarket)-(parseFloat(state.form.invested)||i.invested),
        };
      });
      state.modal=null;div.remove();renderApp();
    });
  } else if(state.modal==="uploadDoc"){
    const fileInput=div.querySelector("#hidden-file-input");
    const chooseBtn=div.querySelector("#choose-file-btn");
    if(chooseBtn) chooseBtn.addEventListener("click",()=>fileInput.click());
    if(fileInput) fileInput.addEventListener("change",e=>{
      const f=e.target.files[0];
      if(!f)return;
      state.investments=state.investments.map(i=>{
        if(i.id!==inv.id)return i;
        return {...i,docs:[...i.docs,{name:f.name,date:new Date().toISOString().slice(0,10),size:(f.size/1024).toFixed(1)+"KB"}]};
      });
      state.modal=null;div.remove();renderApp();
    });
  }
}

// ── AUTH LOGIC ───────────────────────────────────────────────────────────────
function attemptLogin(){
  const u=document.getElementById("username-input").value.trim();
  const p=document.getElementById("password-input").value;
  if(CREDS[u]===p){
    state.authed=true;state.role=u;state.page="overview";
    document.getElementById("auth-screen").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
    renderApp();
  } else {
    const errEl=document.getElementById("auth-error");
    errEl.textContent="Invalid credentials — try admin / thabat2024";
    errEl.classList.remove("hidden");
  }
}

// ── BOOT ─────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded",()=>{
  // Auth events
  document.getElementById("login-btn").addEventListener("click",attemptLogin);
  ["username-input","password-input"].forEach(id=>{
    document.getElementById(id).addEventListener("keydown",e=>{if(e.key==="Enter")attemptLogin();});
  });

  // Nav events
  document.querySelectorAll(".nav-btn[data-page]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      if(btn.dataset.page==="admin"&&state.role!=="admin")return;
      state.page=btn.dataset.page;
      state.search="";state.catFilter="All";
      renderApp();
    });
  });
  document.getElementById("signout-btn").addEventListener("click",()=>{
    state.authed=false;state.role="";state.page="overview";
    document.getElementById("app").classList.add("hidden");
    document.getElementById("auth-screen").classList.remove("hidden");
    document.getElementById("username-input").value="";
    document.getElementById("password-input").value="";
    document.getElementById("auth-error").classList.add("hidden");
  });

  // Back button (detail page)
  document.getElementById("back-btn").addEventListener("click",()=>{
    state.page="investments";renderApp();
  });

  renderAuth();
});
