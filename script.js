function visaSektion(namn) {
  document.querySelectorAll(".sektion").forEach(s => s.classList.remove("aktiv"));
  document.getElementById("sektion-" + namn).classList.add("aktiv");
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  document.getElementById("btn-" + namn).classList.add("active");
  if (namn === "ova") initOva();
  if (namn === "flashcards") initFlashcards();
}

const alleFlashcards = [
  { kategori: "Äldre Medeltiden", fraga: "Vad brukar anses vara starten på medeltiden?", svar: "När Västromerska riket föll år 476 – den siste kejsaren avsattes av germanska stammar." },
  { kategori: "Äldre Medeltiden", fraga: "Hur förändrades samhället när Västromerska riket föll?", svar: "Central makt försvann och samhället blev mer lokalt styrt. Europa fragmenterades i småkungadömen." },
  { kategori: "Äldre Medeltiden", fraga: "Vad är feodalism och hur fungerade systemet?", svar: "Hierarkiskt system: Kung gav mark (len) till adelsmän i utbyte mot militärt stöd. Kung → Adel → Bönder." },
  { kategori: "Äldre Medeltiden", fraga: "Varför var feodalsystemet en lösning på ett samhällsproblem?", svar: "Det gav skydd och ordning när starka centrala stater saknades. Kyrkan legitimerade strukturen – lärde att samhällsordningen var bestämd av Gud." },
  { kategori: "Äldre Medeltiden", fraga: "Vilken roll spelade kyrkan under äldre medeltiden?", svar: "Stor makt – ägde mark, drev skolor och sjukhus, samlade tionde. Monopol på läskunnighet – munkar kopierade böcker." },
  { kategori: "Äldre Medeltiden", fraga: "Vem var Karl den Store och varför var han betydelsefull?", svar: "Frankisk kung, kronad till kejsare av påven år 800. Enade Västeuropa, stödde utbildning. Lade grunden för Frankrike, Tyskland och det Heliga Romerska riket." },
  { kategori: "Äldre Medeltiden", fraga: "Hur expanderade islam och vilka områden togs över?", svar: "Via erövringar och handel från Arabien efter 632. Tog över Mellanöstern, Nordafrika, Persien och delar av Spanien." },
  { kategori: "Äldre Medeltiden", fraga: "Vad hände vid Lindisfarne år 793?", svar: "Vikingar attackerade och plundrade klostret på ön Lindisfarne i England. Traditionellt vikingatidens start." },
  { kategori: "Högmedeltiden", fraga: "Vilka två jordbruksframsteg gjordes under Högmedeltiden?", svar: "1) Treskiftesbruk – tre åkrar med höstgröda, vårgröda, träda. 2) Den tunga hjulplogen – bröt upp tyngre bördiga jordar." },
  { kategori: "Högmedeltiden", fraga: "Vad är Hansan?", svar: "Handelsförbund mellan städer runt Östersjön och Nordsjön som samarbetade för handel och skydd." },
  { kategori: "Högmedeltiden", fraga: "Vad menas med 'borgare' under medeltiden?", svar: "Ny samhällsklass – människor som bodde i städer och arbetade som hantverkare eller handelsmän." },
  { kategori: "Högmedeltiden", fraga: "Varför genomfördes korstågen?", svar: "Ta tillbaka Jerusalem från muslimerna. Motiverades av religion och politik (makt, land, rikedom)." },
  { kategori: "Senmedeltiden", fraga: "Hur spred sig Digerdöden till Europa?", svar: "Via handelsfartyg från Asien. Råttor och loppor bar bakterien Yersinia pestis längs handelsvägarna." },
  { kategori: "Senmedeltiden", fraga: "Vilka konsekvenser fick Digerdöden?", svar: "Ca 1/3 av Europas befolkning dog. Brist på arbetskraft → bönder fick bättre villkor. Kyrkans auktoritet ifrågasattes." },
  { kategori: "Senmedeltiden", fraga: "Vad var Hundraårskriget?", svar: "Krig (1337–1453) mellan England och Frankrike om den franska tronen. Pågick 116 år." },
  { kategori: "Senmedeltiden", fraga: "Vem var Jeanne d'Arc och vad hände henne?", svar: "Fransk bondflicka som ledde armén mot England. Vann Orléans 1429. Fångades och brändes på bål. Kanoniserades 1920." },
  { kategori: "Senmedeltiden", fraga: "Vem uppfann boktryckarkonsten och vilka konsekvenser fick det?", svar: "Johann Gutenberg ca 1440. Kunskap spreds snabbare, fler kunde läsa. Möjliggjorde reformationen." },
  { kategori: "Svensk Medeltid", fraga: "Vem var Sveriges första kristna kung?", svar: "Olof Skötkonung." },
  { kategori: "Svensk Medeltid", fraga: "Vem var Birger Jarl och vad betydde han?", svar: "Grundade Stockholm ca 1250. Stärkte kungamakten, stiftade fridslagar." },
  { kategori: "Svensk Medeltid", fraga: "Vad är Kalmarunionen och varför föll den?", svar: "Union (1397–1523) mellan Sverige, Danmark och Norge. Föll för att svenskar var missnöjda med danskt styre – Gustav Vasa vann frihetskriget 1523." },
  { kategori: "Svensk Medeltid", fraga: "Vad innebar det svenska frälset?", svar: "Adelns och kyrkans skattefrihet i utbyte mot krigstjänst. Formaliserades av Magnus Ladulås 1280." },
  { kategori: "Personer", fraga: "Karl den Store – vem och vilken historisk betydelse?", svar: "Frankisk kung, kejsare från 800. Enade Västeuropa. Lade grunden för Frankrike, Tyskland och det Heliga Romerska riket." },
  { kategori: "Personer", fraga: "Jeanne d'Arc – vem och vilken roll i historien?", svar: "Fransk bondflicka (ca 1412–1431). Ledde armén, vann Orléans 1429. Brändes på bål. Nationell symbol för Frankrike." },
  { kategori: "Personer", fraga: "Drottning Margareta – vem och vilken roll?", svar: "Dansk (1353–1412). Arkitekt bakom Kalmarunionen 1397. Styrde Sverige, Danmark och Norge." },
  { kategori: "Personer", fraga: "Ansgar – varför 'Nordens apostel'?", svar: "Missionär (801–865). Missionerade i Sverige, besökte Birka. Lade tidig grund för kristnandet av Skandinavien." },
  { kategori: "Personer", fraga: "Magnus Ladulås – vem och viktigaste gärning?", svar: "Kung 1275–1290. Alsnö stadga (1280) formaliserade det svenska frälset. Förbjöd adeln ta härbärge hos bönder." },
];

let fcKort = [];
let fcIndex = 0;
let fcStartad = false;

function initFlashcards() {
  if (!fcStartad) {
    fcStartad = true;
    fcKort = [...alleFlashcards];
    visaFcKort();
  }
}

function filterKategori(kat, knapp) {
  document.querySelectorAll(".fc-filter-btn").forEach(b => b.classList.remove("active"));
  knapp.classList.add("active");
  fcKort = kat === "alla" ? [...alleFlashcards] : alleFlashcards.filter(k => k.kategori === kat);
  fcIndex = 0;
  document.getElementById("fc-kort").classList.remove("vandad");
  visaFcKort();
}

function visaFcKort() {
  if (fcKort.length === 0) return;
  const k = fcKort[fcIndex];
  document.getElementById("fc-etikett").textContent = k.kategori;
  document.getElementById("fc-fraga").textContent = k.fraga;
  document.getElementById("fc-svar").textContent = k.svar;
  document.getElementById("fc-counter").textContent = `${fcIndex + 1} / ${fcKort.length}`;
  document.getElementById("fc-kort").classList.remove("vandad");
}

function fcVandKort() {
  document.getElementById("fc-kort").classList.toggle("vandad");
}

function fcNavigera(riktning) {
  fcIndex = (fcIndex + riktning + fcKort.length) % fcKort.length;
  visaFcKort();
}

function fcBlanda() {
  for (let i = fcKort.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [fcKort[i], fcKort[j]] = [fcKort[j], fcKort[i]];
  }
  fcIndex = 0;
  document.getElementById("fc-kort").classList.remove("vandad");
  visaFcKort();
}

// ── QUIZ ──
// Frågetyper: "fakta" = kort svar, "resonemang" = längre resonemang
const fragor = [
  // ── FAKTAFRÅGOR ──
  {
    typ: "fakta",
    kategori: "Äldre Medeltiden",
    fraga: "Vilket år föll Västromerska riket?",
    ledtradLatt: "Det skedde på 400-talet...",
    ledtradSvar: "Tänk: 4_6",
    svar: ["476","år 476"],
    forklaring: "År 476 avsattes den siste västromerske kejsaren – traditionellt medeltidens start."
  },
  {
    typ: "fakta",
    kategori: "Äldre Medeltiden",
    fraga: "Vad är feodalism?",
    ledtradLatt: "Det handlar om ett hierarkiskt system med kung, adel och bönder.",
    ledtradSvar: "Kungen gav mark (len) i utbyte mot något från adeln...",
    svar: ["system där kung gav mark till adelsmän i utbyte mot militär tjänst","hierarkiskt system","len i utbyte mot krigstjänst"],
    forklaring: "Kungen gav mark (len) till vasaller som i utbyte gav militär tjänst. Bönder var bundna till marken."
  },
  {
    typ: "fakta",
    kategori: "Äldre Medeltiden",
    fraga: "Vilket kloster plundrade vikingarna år 793?",
    ledtradLatt: "Det låg på en ö i England.",
    ledtradSvar: "Börjar på L – nära den skotska gränsen.",
    svar: ["lindisfarne"],
    forklaring: "Lindisfarne 793 markerar traditionellt vikingatidens start."
  },
  {
    typ: "fakta",
    kategori: "Äldre Medeltiden",
    fraga: "Vem var Karl den Store?",
    ledtradLatt: "Han var kung av ett europeiskt rike på 700-800-talet.",
    ledtradSvar: "Frankisk kung – påven krönte honom till kejsare år 800.",
    svar: ["frankisk kung kronad till kejsare 800","frankisk kejsare","kung av frankerna"],
    forklaring: "Karl den Store kröntes till kejsare av påven år 800. Enade Västeuropa."
  },
  {
    typ: "fakta",
    kategori: "Högmedeltiden",
    fraga: "Vad är treskiftesbruk?",
    ledtradLatt: "Det handlar om hur man delade upp åkrarna.",
    ledtradSvar: "Tre åkrar: en med höstgröda, en med vårgröda och en som fick vila.",
    svar: ["åkern delades i tre","höstgröda vårgröda och träda","tre delar"],
    forklaring: "Treskiftesbruk: höstgröda, vårgröda, träda. Ökade skörden kraftigt."
  },
  {
    typ: "fakta",
    kategori: "Högmedeltiden",
    fraga: "Vad är Hansan?",
    ledtradLatt: "Det var ett samarbete mellan städer kring handel.",
    ledtradSvar: "Handelsförbund runt vilket hav?",
    svar: ["handelsförbund","förbund mellan städer","handelsförbund runt östersjön"],
    forklaring: "Hansan var ett handelsförbund mellan städer runt Östersjön och Nordsjön."
  },
  {
    typ: "fakta",
    kategori: "Högmedeltiden",
    fraga: "Varför genomfördes korstågen?",
    ledtradLatt: "Det handlade om en helig stad.",
    ledtradSvar: "Syftet var att ta tillbaka en stad i Mellanöstern från muslimerna.",
    svar: ["ta tillbaka jerusalem","erövra det heliga landet","religiösa och politiska skäl"],
    forklaring: "Korstågen motiverades av religion (återerövra Jerusalem) och politik (makt, land, rikedom)."
  },
  {
    typ: "fakta",
    kategori: "Senmedeltiden",
    fraga: "Hur spred sig Digerdöden till Europa?",
    ledtradLatt: "Det kom med handeln från Asien.",
    ledtradSvar: "Tänk: fartyg, råttor, och ett litet krypdjur som bär smittan.",
    svar: ["via handelsfartyg","råttor och loppor","från asien via handel"],
    forklaring: "Spreds via handelsfartyg från Asien – råttor och loppor bar bakterien Yersinia pestis."
  },
  {
    typ: "fakta",
    kategori: "Senmedeltiden",
    fraga: "Hur stor del av Europas befolkning dog av Digerdöden?",
    ledtradLatt: "Mer än en fjärdedel men inte hälften.",
    ledtradSvar: "Ungefär en tredjedel – 1 av 3 dog.",
    svar: ["en tredjedel","1/3","ca en tredjedel"],
    forklaring: "Ca 1/3 av Europas befolkning dog under 1347–1351."
  },
  {
    typ: "fakta",
    kategori: "Senmedeltiden",
    fraga: "Vilka länder stred i Hundraårskriget?",
    ledtradLatt: "Det var två grannländer i Nordvästeuropa.",
    ledtradSvar: "E... och F... – de slogs om den franska tronen.",
    svar: ["england och frankrike"],
    forklaring: "Hundraårskriget (1337–1453) stod mellan England och Frankrike om den franska tronen."
  },
  {
    typ: "fakta",
    kategori: "Senmedeltiden",
    fraga: "Vad hände Jeanne d'Arc till slut?",
    ledtradLatt: "Hon fångades av fienden.",
    ledtradSvar: "Hon avrättades på ett brutalt sätt – eld.",
    svar: ["brändes på bål","fångades och brändes"],
    forklaring: "Jeanne d'Arc fångades av engelsmännen och brändes på bål 1431."
  },
  {
    typ: "fakta",
    kategori: "Senmedeltiden",
    fraga: "Vem uppfann boktryckarkonsten?",
    ledtradLatt: "Det var en tysk uppfinnare runt år 1440.",
    ledtradSvar: "Efternamnet börjar på G...",
    svar: ["gutenberg","johann gutenberg"],
    forklaring: "Johann Gutenberg uppfann boktryckeriet ca 1440. Revolutionerade kunskapsspridning."
  },
  {
    typ: "fakta",
    kategori: "Svensk Medeltid",
    fraga: "Vem var Sveriges första kristna kung?",
    ledtradLatt: "Han levde på 900–1000-talet.",
    ledtradSvar: "Förnamnet börjar på O och han hade ett speciellt smeknamn.",
    svar: ["olof skötkonung"],
    forklaring: "Olof Skötkonung var Sveriges första kristna kung."
  },
  {
    typ: "fakta",
    kategori: "Svensk Medeltid",
    fraga: "Vad grundade Birger Jarl ca 1250?",
    ledtradLatt: "Det är en stad i Sverige.",
    ledtradSvar: "Det är Sveriges huvudstad idag.",
    svar: ["stockholm"],
    forklaring: "Birger Jarl grundade Stockholm ca 1250."
  },
  {
    typ: "fakta",
    kategori: "Svensk Medeltid",
    fraga: "Vad är Kalmarunionen?",
    ledtradLatt: "Det var ett politiskt samarbete på 1300–1400-talen.",
    ledtradSvar: "En union mellan tre nordiska länder grundad 1397.",
    svar: ["union mellan sverige danmark och norge","nordisk union 1397"],
    forklaring: "Kalmarunionen (1397–1523) förenade Sverige, Danmark och Norge under Drottning Margaretas ledning."
  },
  {
    typ: "fakta",
    kategori: "Viktiga personer",
    fraga: "Vilket år kröntes Karl den Store till kejsare?",
    ledtradLatt: "Det var i början av 800-talet.",
    ledtradSvar: "Exakt år: 8_0",
    svar: ["800","år 800"],
    forklaring: "Påven krönte Karl den Store till kejsare år 800 i Rom."
  },
  {
    typ: "fakta",
    kategori: "Viktiga personer",
    fraga: "Vilket slag vann Jeanne d'Arc 1429?",
    ledtradLatt: "Det var en stad i Frankrike.",
    ledtradSvar: "Börjar på O – en stad längs floden Loire.",
    svar: ["orléans","orleans","slaget vid orléans"],
    forklaring: "Jeanne d'Arc ledde fransmännen till seger vid Orléans 1429."
  },
  {
    typ: "fakta",
    kategori: "Viktiga personer",
    fraga: "Vem var arkitekten bakom Kalmarunionen?",
    ledtradLatt: "Det var en kvinna med stor politisk makt.",
    ledtradSvar: "En drottning – hennes förnamn börjar på M.",
    svar: ["drottning margareta","margareta"],
    forklaring: "Drottning Margareta (1353–1412) grundade Kalmarunionen och styrde Norden."
  },

  // ── RESONEMANGSFRÅGOR ──
  {
    typ: "resonemang",
    kategori: "Resonemang",
    fraga: "Varför var det viktigt för feodalsystemet att kyrkan sa att samhällsordningen var bestämd av Gud? Vad skulle hända utan den legitimiteten?",
    ledtradLatt: "Tänk på vad som håller ihop ett system där folk inte har lika rättigheter.",
    ledtradSvar: "Om folk trodde att systemet var orättvist och gjort av människor – vad skulle de kanske vilja göra?",
    svar: ["folk accepterade sin plats","bönder protesterade inte","legitimerade makten","utan det skulle folk ifrågasätta","revolt","uppror"],
    forklaring: "Utan kyrkans legitimering kunde bönder och lägre klasser ifrågasätta varför de måste lyda adeln. Kyrkan skapade en gudomlig ordning som fick folk att acceptera ojämlikheten som naturlig och oföränderlig."
  },
  {
    typ: "resonemang",
    kategori: "Resonemang",
    fraga: "Digerdöden dödade en tredjedel av Europas befolkning – ändå sägs det att den förbättrade livet för de som överlevde. Förklara hur det är möjligt.",
    ledtradLatt: "Tänk på tillgång och efterfrågan: om det finns färre arbetare men lika mycket arbete att utföra...",
    ledtradSvar: "Brist på något gör det mer värdefullt. Vad var det brist på efter pesten?",
    svar: ["brist på arbetare","lönerna steg","bönder fick bättre villkor","förhandlingsstyrka","arbetskraft"],
    forklaring: "När en tredjedel av befolkningen dog uppstod stor brist på arbetskraft. De bönder och hantverkare som överlevde kunde plötsligt ställa krav på bättre lön och villkor – annars gick de bara till en annan jordägare. Feodalsystemets makt över bönderna försvagades."
  },
  {
    typ: "resonemang",
    kategori: "Resonemang",
    fraga: "Korstågen misslyckades militärt – men hade de ändå positiva konsekvenser för Europa? Förklara med minst ett exempel.",
    ledtradLatt: "Tänk bortom krig – vad händer när folk från olika kulturer möts?",
    ledtradSvar: "Europeerna kom i kontakt med islamisk vetenskap, matematik och handel. Vad kan det ha lett till?",
    svar: ["handel ökade","kunskap spreds","islamisk vetenskap","kulturkontakt","idéer spreds","medicin","matematik"],
    forklaring: "Trots militära misslyckanden ökade handeln kraftigt och européerna fick kontakt med islamisk vetenskap, matematik och medicin. Kunskapsöverföring från arabisk kultur bidrog till grunden för renässansen."
  },
  {
    typ: "resonemang",
    kategori: "Resonemang",
    fraga: "Varför undergrävde handeln och städernas framväxt feodalsystemet? Vem förlorade makt och vem vann?",
    ledtradLatt: "Tänk på vem som tjänade på handel och vem som baserade sin makt på jordägande.",
    ledtradSvar: "Borgare och kungar fick mer pengar – vad hände med feodalherrarnas roll?",
    svar: ["kungarna stärktes","borgarna fick makt","feodalherrar förlorade","adeln försvagades","skatteintäkter","ny medelklass"],
    forklaring: "Handel skapade rikedomar utanför feodalsystemet. Borgare och kungar fick mer pengar och makt. Feodalherrarnas militära och ekonomiska roll minskade gradvis eftersom pengar ersatte byteshandel och nationella arméer ersatte riddarväsendet."
  },
  {
    typ: "resonemang",
    kategori: "Resonemang",
    fraga: "Varför är boktryckarkonsten en rimlig brytpunkt för medeltidens slut? Vad förändrades i samhället när kunskap kunde spridas snabbt?",
    ledtradLatt: "Vem hade tidigare kontroll över vad folk läste och lärde sig?",
    ledtradSvar: "Kyrkan hade monopol på skrift – vad händer när vem som helst kan trycka och sprida idéer?",
    svar: ["kyrkan förlorade monopol","reformationen","idéer spreds","fler kunde läsa","kyrkans makt minskade","kunskap demokratiserades"],
    forklaring: "Innan Gutenberg kopierade munkar böcker för hand – kyrkan kontrollerade information. Med boktryckarkonsten spreds idéer explosionsartat, vilket direkt möjliggjorde reformationen (1517) och ifrågasättandet av kyrkans auktoritet. Det är en tydlig brytpunkt mot en ny tid."
  },
  {
    typ: "resonemang",
    kategori: "Resonemang",
    fraga: "Varför uppstod ingen livegenskap i Sverige, till skillnad från många andra delar av Europa?",
    ledtradLatt: "Tänk på om svenska bönder hade mer eller mindre frihet än kontinentens bönder.",
    ledtradSvar: "Svenska bönder ägde ofta sin mark – vad innebär det för deras relation till adeln?",
    svar: ["bönder ägde mark","mer frihet","ingen stark feodal tradition","självständiga bönder","fri odalbonde"],
    forklaring: "I Sverige ägde många bönder sin mark (odalbönder) och var inte juridiskt bundna till en herreman. Den svenska feodala traditionen var svagare än i Centraleuropa, och bönder hade mer rättigheter – vilket Magnus Ladulås fridslagar också visade."
  },
  {
    typ: "resonemang",
    kategori: "Resonemang",
    fraga: "Jämför Jeanne d'Arc och Drottning Margareta – båda var inflytelserika kvinnor under medeltiden. På vilket sätt var deras makt av olika slag?",
    ledtradLatt: "En ledde armén, den andra styrde tre länder politiskt.",
    ledtradSvar: "Tänk på skillnaden mellan militär ledning och politisk/diplomatisk makt.",
    svar: ["jeanne militär margareta politisk","olika typer av makt","ena krigare andra diplomat","symbolisk vs institutionell","nationell symbol vs statskvinna"],
    forklaring: "Jeanne d'Arc hade karismatisk och militär makt – hon inspirerade soldater och vände ett krig, men hennes makt var kortlivad och symbolisk. Drottning Margareta hade institutionell politisk makt och styrde formellt tre länder under lång tid genom Kalmarunionen."
  },
];

let fragorBlandade = [];
let qIndex = 0;
let poang = 0;
let qStartad = false;

function initOva() {
  if (qStartad) return;
  qStartad = true;
  startaOm();
}

function startaOm() {
  fragorBlandade = blanda([...fragor]);
  qIndex = 0; poang = 0;
  document.getElementById("klar-box").classList.add("dold");
  document.getElementById("fraga-container").classList.remove("dold");
  document.getElementById("total-fragor").textContent = fragorBlandade.length;
  visaFraga();
}

function blanda(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function visaFraga() {
  const f = fragorBlandade[qIndex];
  document.getElementById("fraga-nr").textContent = qIndex + 1;
  document.getElementById("fraga-kategori").textContent = f.kategori;

  const typBadge = document.getElementById("fraga-typ-badge");
  if (f.typ === "resonemang") {
    typBadge.textContent = "🧠 Resonemang";
    typBadge.classList.add("resonemang");
    typBadge.classList.remove("fakta-badge");
  } else {
    typBadge.textContent = "📌 Faktafråga";
    typBadge.classList.remove("resonemang");
    typBadge.classList.add("fakta-badge");
  }

  document.getElementById("fraga-text").textContent = f.fraga;
  document.getElementById("progress-fill").style.width = (qIndex / fragorBlandade.length * 100) + "%";

  // Återställ ledtrådar
  document.getElementById("ledtrad-latt-box").classList.add("dold");
  document.getElementById("ledtrad-latt-box").textContent = "";
  document.getElementById("ledtrad-svar-box").classList.add("dold");
  document.getElementById("ledtrad-svar-box").textContent = "";
  document.getElementById("ledtrad-latt-btn").disabled = false;
  document.getElementById("ledtrad-svar-btn").disabled = false;
  document.getElementById("ledtrad-latt-btn").classList.remove("visad");
  document.getElementById("ledtrad-svar-btn").classList.remove("visad");

  const input = document.getElementById("svar-input");
  input.value = ""; input.disabled = false; input.focus();
  document.getElementById("kolla-btn").style.display = "inline-block";
  document.getElementById("svar-area").style.display = "flex";
  const fb = document.getElementById("feedback-box");
  fb.classList.add("dold"); fb.classList.remove("ratt","fel");
  input.onkeydown = e => { if (e.key === "Enter") kollaSvar(); };
}

function visaLedtrad(niva) {
  const f = fragorBlandade[qIndex];
  if (niva === "latt") {
    const box = document.getElementById("ledtrad-latt-box");
    box.textContent = "💡 " + f.ledtradLatt;
    box.classList.remove("dold");
    document.getElementById("ledtrad-latt-btn").classList.add("visad");
    document.getElementById("ledtrad-latt-btn").disabled = true;
  } else {
    const box = document.getElementById("ledtrad-svar-box");
    box.textContent = "🔍 " + f.ledtradSvar;
    box.classList.remove("dold");
    document.getElementById("ledtrad-svar-btn").classList.add("visad");
    document.getElementById("ledtrad-svar-btn").disabled = true;
  }
}

function norm(s) {
  return s.toLowerCase().trim().replace(/\s+/g," ").replace(/[.,;:!?']/g,"");
}

function kollaSvar() {
  const input = document.getElementById("svar-input");
  const svar = norm(input.value);
  if (!svar) return;
  const f = fragorBlandade[qIndex];
  const ratt = f.svar.some(s => {
    const n = norm(s);
    return svar === n || svar.includes(n) || n.includes(svar);
  });
  input.disabled = true;
  document.getElementById("kolla-btn").style.display = "none";
  const fb = document.getElementById("feedback-box");
  fb.classList.remove("dold","ratt","fel");
  fb.classList.add(ratt ? "ratt" : "fel");
  document.getElementById("feedback-rubrik").textContent = ratt ? "✅ Rätt!" : "❌ Inte riktigt...";
  document.getElementById("feedback-text").textContent = ratt
    ? f.forklaring
    : `Rätt svar: ${f.svar[0]}\n\n${f.forklaring}`;
  if (ratt) poang++;
}

function nastaFraga() {
  qIndex++;
  if (qIndex >= fragorBlandade.length) visaKlar();
  else visaFraga();
}

function visaKlar() {
  document.getElementById("fraga-container").classList.add("dold");
  document.getElementById("klar-box").classList.remove("dold");
  document.getElementById("progress-fill").style.width = "100%";
  const p = Math.round(poang / fragorBlandade.length * 100);
  const emoji = p >= 80 ? "🔥" : p >= 60 ? "👍" : "📖";
  document.getElementById("poang-text").textContent =
    `Du fick ${poang} av ${fragorBlandade.length} rätt (${p}%) ${emoji}`;
  qStartad = false;
}
