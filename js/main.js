let currentLang = "ar";

const translations = {
 ar:{
  logo:"الزاجل",
  nav_home:"الرئيسية",
  nav_services:"الخدمات",
  nav_security:"الأمان",
  nav_contact:"تواصل",
  hero_title:"شركة الزاجل للحوالات المالية",
  hero_sub:"أمان • سرعة • ثقة",
  hero_btn:"تواصل معنا",
    contact1:"📍 اليمن",
  stat_clients:"عميل",
  stat_transfers:"حوالة",
  authorized_agent:"وكيل معتمد",
  services_title:"خدماتنا",
  service1:"حوالات داخلية",
  service2:"حوالات خارجية",
  service3:"صرف العملات",
  security_title:"الأمان والثقة",
  sec1:"حماية بيانات العملاء",
  sec10:"نستخدم أنظمة متقدمة لحماية معلومات العملاء",
  sec2:"الالتزام باللوائح",
  sec20:"ملتزمون بجميع اللوائح المالية المحلية",
  sec3:"تنفيذ سريع وآمن",
  sec30:"تحويلات تتم خلال دقائق بأمان كامل",
  trust1:"✔ معاملات مشفّرة",
  trust2:"✔ التزام باللوائح",
  trust3:"✔ دعم فني مستمر",
    footer_title:"© 2026 شركة الزاجل للحوالات المالية",
    footer_company: "شركة الزاجل",
footer_desc: "شركة رائدة في مجال الحوالات المالية الداخلية والخارجية، نلتزم بأعلى معايير الأمان والسرعة.",
footer_links: "روابط سريعة",
footer_contact: "تواصل معنا",
footer_trust: "الثقة والأمان",
    footer_trust_desc: "نحن ملتزمون بحماية بيانات عملائنا وضمان تنفيذ الحوالات بسرعة وأمان تامين."
 },
 en:{
  logo:"Al Zajel",
  nav_home:"Home",
  nav_services:"Services",
  nav_security:"Security",
  nav_contact:"Contact",
  hero_title:"Al Zajel Financial Transfers",
  hero_sub:"Security • Speed • Trust",
  hero_btn:"Contact Us",
  contact1:"📍 Yemen",
  stat_clients:"Clients",
  stat_transfers:"Transfers",
  authorized_agent:"Authorized Agent",
  services_title:"Our Services",
  service1:"Local Transfers",
  service2:"International Transfers",
  service3:"Currency Exchange",
  security_title:"Security & Trust",
  sec1:"Client Data Protection",
  sec10:"We use advanced systems to protect client information",
  sec2:"Regulatory Compliance",
  sec20:"We comply with all local financial regulations",
  sec3:"Fast & Secure Execution",
  sec30:"Transfers completed within minutes with full security",
    trust1:"✔ Encrypted Transactions",
    trust2:"✔ Regulatory Compliance",
    trust3:"✔ 24/7 Support",
    footer_title:"© 2026 Al Zajel Financial Transfers",
    footer_company: "Al Zajel",
footer_desc: "A leading company in local and international money transfers, committed to security and speed.",
footer_links: "Quick Links",
footer_contact: "Contact Us",
footer_trust: "Trust & Security",
    footer_trust_desc: "We are committed to protecting our clients' data and ensuring fast and secure transfer execution."
 }
};

document.getElementById("langBtn").onclick=()=>{
 currentLang=currentLang==="ar"?"en":"ar";
 document.documentElement.lang=currentLang;
 document.documentElement.dir=currentLang==="ar"?"rtl":"ltr";

 document.querySelectorAll("[data-key]").forEach(el=>{
  el.textContent=translations[currentLang][el.dataset.key];
 });

 document.getElementById("langImg").src=
  currentLang==="ar"
   ?"assets/images/flag-en.png"
   :"assets/images/flag-ar.png";

 document.querySelector(".nav").classList.remove("active");
};

/* Dark Mode */
document.getElementById("darkToggle").onclick=()=>{
 document.body.classList.toggle("dark");
};

/* Header Scroll */
const header=document.querySelector(".header");
window.addEventListener("scroll",()=>{
 header.classList.toggle("scrolled",window.scrollY>50);
});

/* Reveal */
const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{
  if(e.isIntersecting)e.target.classList.add("active");
 });
},{threshold:.2});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

/* Counters on View */
const counters=document.querySelectorAll(".counter");
const counterObserver=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
  if(entry.isIntersecting){
   let c=entry.target;
   let target=parseInt(c.dataset.target);
   let i=0,step=target/80;

   function run(){
    i+=step;
    if(i<target){
     c.textContent=Math.floor(i);
     requestAnimationFrame(run);
    }else c.textContent=target;
   }
   run();
   counterObserver.unobserve(c);
  }
 });
},{threshold:.6});

counters.forEach(c=>counterObserver.observe(c));


// Menu toggle for mobile
document.querySelector(".menu-toggle").onclick=()=>{
 document.querySelector(".nav").classList.toggle("active");
};
document.querySelectorAll(".nav a").forEach(link=>{
 link.onclick=()=>{
  document.querySelector(".nav").classList.remove("active");
 };
});