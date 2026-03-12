function visaSektion(namn) {
    document.querySelectorAll(".sektion").forEach(s => s.classList.remove("aktiv"));
    document.getElementById("sektion-" + namn).classList.add("aktiv");
    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    document.getElementById("btn-" + namn).classList.add("active");
    if (namn === "ova") initOva();
    if (namn === "flashcards") initFlashcards();
  }
  
  const alleFlashcards = [
    // Äldre Medeltiden
    { kategori: "Äldre Medeltiden", fraga: "Vad brukar anses vara starten på medeltiden?", svar: "När Västromerska riket föll år 476 – den siste kejsaren avsattes av germanska stammar." },
    { kategori: "Äldre Medeltiden", fraga: "Hur förändrades samhället när Västromerska riket föll?", svar: "Central makt försvann och samhället blev mer lokalt styrt. Europa fragmenterades i småkungadömen." },
    { kategori: "Äldre Medeltiden", fraga: "Vad är feodalism och hur fungerade systemet?", svar: "Hierarkiskt system: Kung gav mark (len) till adelsmän i utbyte mot militärt stöd. Kung → Adel (fick mark, skyddade landet) → Bönder (arbetade på marken)." },
    { kategori: "Äldre Medeltiden", fraga: "Varför var feodalsystemet en lösning på ett samhällsproblem?", svar: "Det gav skydd och ordning när starka centrala stater saknades. Kyrkan legitimerade strukturen – lärde att samhällsordningen var bestämd av Gud." },
    { kategori: "Äldre Medeltiden", fraga: "Vilken roll spelade kyrkan under äldre medeltiden?", svar: "Stor makt – ägde mark, drev skolor och sjukhus, samlade tionde. Monopol på läskunnighet – munkar kopierade böcker. Påven hade enorm politisk makt." },
    { kategori: "Äldre Medeltiden", fraga: "Varför härstammar så många källor från medeltiden från kyrkan?", svar: "Kyrkan var en av de få platser där människor kunde läsa och skriva. Munkar kopierade böcker för hand i kloster." },
    { kategori: "Äldre Medeltiden", fraga: "Vem var Karl den Store och varför var han betydelsefull?", svar: "Frankisk kung, kronad till kejsare av påven år 800. Enade Västeuropa, skapade central administration, stödde utbildning. Lade grunden för Frankrike, Tyskland och det Heliga Romerska riket." },
    { kategori: "Äldre Medeltiden", fraga: "Hur expanderade islam och vilka områden togs över?", svar: "Via erövringar och handel från Arabien efter 632. Tog över Mellanöstern, Nordafrika, Persien och delar av Spanien." },
    { kategori: "Äldre Medeltiden", fraga: "Vad hände vid Lindisfarne år 793?", svar: "Vikingar attackerade och plundrade klostret på ön Lindisfarne i England. Traditionellt vikingatidens start." },
    { kategori: "Äldre Medeltiden", fraga: "Hur bidrog vikingarna till både oro och utveckling i Europa?", svar: "Plundrade och skapade rädsla (t.ex. Lindisfarne). Men bidrog också till handel, kulturkontakt och utforskning av nya områden." },
    { kategori: "Äldre Medeltiden", fraga: "Varför kallas medeltiden ibland en 'mörk period'?", svar: "Mindre utbildning, många krig och sjukdomar, mindre teknisk utveckling jämfört med antiken. Men bilden är förenklad." },
  
    // Högmedeltiden
    { kategori: "Högmedeltiden", fraga: "Vilka orsaker fanns till att befolkningen ökade under Högmedeltiden?", svar: "Bättre jordbruk gav mer mat, varmare klimat, färre krig. Fler överlevde och befolkningstillväxten ökade." },
    { kategori: "Högmedeltiden", fraga: "Vilka två jordbruksframsteg gjordes under Högmedeltiden?", svar: "1) Treskiftesbruk – tre åkrar med höstgröda, vårgröda, träda. 2) Den tunga hjulplogen – bröt upp tyngre bördiga jordar." },
    { kategori: "Högmedeltiden", fraga: "Vilken orsak var viktigast för Europas tillväxt under Högmedeltiden?", svar: "Jordbrukets utveckling – mer mat → fler överlevde → befolkningstillväxt → urbanisering och handel." },
    { kategori: "Högmedeltiden", fraga: "Varför ökade handeln under Högmedeltiden?", svar: "Fler behövde varor, jordbruket gav mer mat och städer växte som marknadsplatser." },
    { kategori: "Högmedeltiden", fraga: "Vad är Hansan?", svar: "Handelsförbund mellan städer runt Östersjön och Nordsjön som samarbetade för handel och skydd av handelsmän." },
    { kategori: "Högmedeltiden", fraga: "Vad menas med 'borgare' under medeltiden?", svar: "Ny samhällsklass – människor som bodde i städer och arbetade som hantverkare eller handelsmän." },
    { kategori: "Högmedeltiden", fraga: "Tjänade alla på städernas framväxt?", svar: "Nej. Handelsmän och hantverkare tjänade. Men många bönder levde fortfarande fattigt på landsbygden." },
    { kategori: "Högmedeltiden", fraga: "Varför grundades städer ofta vid vattendrag?", svar: "Lättare att transportera varor. Handel gick snabbare med båt än på land. Hav och floder var medeltidens transportleder." },
    { kategori: "Högmedeltiden", fraga: "Varför genomfördes korstågen?", svar: "Ta tillbaka Jerusalem från muslimerna. Motiverades av religion (sprida kristendomen, syndernas förlåtelse) och politik (makt, land, rikedom)." },
    { kategori: "Högmedeltiden", fraga: "Vad var målet med det första korståget?", svar: "Erövra Jerusalem och göra staden kristen igen. Det lyckades 1099 men Jerusalem gick förlorat igen 1187." },
    { kategori: "Högmedeltiden", fraga: "Hur påverkade korstågen de europeiska samhällena?", svar: "Handeln ökade, nya idéer och kunskap spreds från andra kulturer. Kontakt med islams vetenskap. Men skapade också djupare religionskonflikter." },
    { kategori: "Högmedeltiden", fraga: "Hur påverkade handeln feodalsystemet?", svar: "Kungar fick mer skatteintäkter, borgare fick makt. Feodalherrarnas makt minskade gradvis." },
  
    // Senmedeltiden
    { kategori: "Senmedeltiden", fraga: "Mellan vilka år räknas Senmedeltiden?", svar: "Cirka 1300–1500 e.Kr." },
    { kategori: "Senmedeltiden", fraga: "Vilka förhållanden rådde i början av Senmedeltiden?", svar: "Svält, krig och sjukdomar. Klimatförsämring (Lilla Istiden) och överbefolkning skapade stora problem." },
    { kategori: "Senmedeltiden", fraga: "Hur spred sig Digerdöden till Europa?", svar: "Via handelsfartyg från Asien. Råttor och loppor bar bakterien Yersinia pestis längs handelsvägarna." },
    { kategori: "Senmedeltiden", fraga: "Vilka konsekvenser fick Digerdöden?", svar: "Ca 1/3 av Europas befolkning dog. Brist på arbetskraft → bönder fick bättre villkor och löner. Kyrkans auktoritet ifrågasattes." },
    { kategori: "Senmedeltiden", fraga: "Varför var Digerdöden gynnsam på lång sikt för lägre samhällsskikt?", svar: "Brist på arbetare → de som överlevde kunde kräva bättre lön och arbetsvillkor. Böndernas ställning stärktes." },
    { kategori: "Senmedeltiden", fraga: "Vad var Hundraårskriget?", svar: "Krig (1337–1453) mellan England och Frankrike om den franska tronen. Pågick 116 år." },
    { kategori: "Senmedeltiden", fraga: "Vilka faktorer gjorde Englands armé stark i Hundraårskriget?", svar: "Bättre taktik och effektiva långbågar mot pansrade riddare." },
    { kategori: "Senmedeltiden", fraga: "Vem var Jeanne d'Arc och vad hände henne?", svar: "Fransk bondflicka som ledde armén mot England. Vann Orléans 1429. Fångades och brändes på bål av engelsmännen. Kanoniserades 1920." },
    { kategori: "Senmedeltiden", fraga: "Vad var Slaget vid Orléans och vilken betydelse hade det?", svar: "Fransmännen vann under Jeanne d'Arcs ledning 1429. Vände krigets riktning och gav Frankrike nytt hopp." },
    { kategori: "Senmedeltiden", fraga: "Hur försvagade Hundraårskriget feodalismen?", svar: "Kungar använde nationella arméer istället för riddare. Adelns militära roll och makt minskade." },
    { kategori: "Senmedeltiden", fraga: "Vem uppfann boktryckarkonsten och vilka konsekvenser fick det?", svar: "Johann Gutenberg ca 1440. Kunskap spreds snabbare, fler kunde läsa. Möjliggjorde reformationen. Rimlig brytpunkt för medeltidens slut." },
    { kategori: "Senmedeltiden", fraga: "Vilka händelser ses traditionellt som medeltidens slut?", svar: "Boktryckarkonsten (ca 1440), Östromerska rikets fall (1453) och Columbus resa till Amerika (1492)." },
    { kategori: "Senmedeltiden", fraga: "Hur stärktes kungamakten medan adelns makt minskade?", svar: "Kungar fick mer pengar från handel och skatter, byggde starkare nationella arméer." },
  
    // Svensk Medeltid
    { kategori: "Svensk Medeltid", fraga: "Mellan vilka år räknas den svenska medeltiden?", svar: "Cirka 1050–1520 e.Kr." },
    { kategori: "Svensk Medeltid", fraga: "Varför börjar den svenska medeltiden senare än i övriga Europa?", svar: "Kristendomen och nya samhällssystem kom senare till Sverige. Landet var länge uppdelat i lösa stamsamhällen." },
    { kategori: "Svensk Medeltid", fraga: "Vilka var vikingarna och vad gjorde de?", svar: "Nordiska sjöfarare som reste, handlade, plundrade och utforskade. Birka var en viktig handelsstad under vikingatiden." },
    { kategori: "Svensk Medeltid", fraga: "Hur gick kristnandet av Sverige till?", svar: "Gradvis process via missionärer och kungar under 800–1100-talen. Ansgar missionerade på 800-talet. Olof Skötkonung var första kristna kungen." },
    { kategori: "Svensk Medeltid", fraga: "Vem var Ansgar och varför kallas han 'Nordens apostel'?", svar: "Missionär som missionerade i Sverige och besökte Birka på 800-talet. Lade tidig grund för kristnandet av Skandinavien." },
    { kategori: "Svensk Medeltid", fraga: "Vem var Sveriges första kristna kung?", svar: "Olof Skötkonung." },
    { kategori: "Svensk Medeltid", fraga: "Vem var Birger Jarl och vad betydde han?", svar: "Svensk ledare på 1200-talet. Stärkte kungamakten, grundade Stockholm ca 1250. Stiftade fridslagar som skyddade kvinnor, kyrkor och ting." },
    { kategori: "Svensk Medeltid", fraga: "Hur växte den svenska adeln fram?", svar: "Kungen gav mark och privilegier till riddare. Formaliserades i Alsnö stadga (1280) – adeln fick skattefrihet (frälset) i utbyte mot krigstjänst." },
    { kategori: "Svensk Medeltid", fraga: "Vem var Magnus Ladulås och vad är Alsnö stadga?", svar: "Kung 1275–1290. Alsnö stadga (1280) formaliserade det svenska frälset – adelns skattefrihet i utbyte mot krigstjänst. Smeknamnet: förbjöd adeln ta härbärge hos bönder." },
    { kategori: "Svensk Medeltid", fraga: "Vad är Kalmarunionen och varför föll den?", svar: "Union (1397–1523) mellan Sverige, Danmark och Norge. Grundad av Drottning Margareta. Föll för att svenskar var missnöjda med danskt styre – Gustav Vasa vann frihetskriget 1523." },
    { kategori: "Svensk Medeltid", fraga: "Vad var Engelbrektupproret?", svar: "Uppror mot den danske kungen och danskt styre i Sverige. Engelbrekt Engelbrektsson ledde bondeupproret ca 1434–1436." },
    { kategori: "Svensk Medeltid", fraga: "Varför uppstod ingen livegenskap i Sverige?", svar: "Många svenska bönder ägde sin mark och hade mer frihet. Ingen stark feodal livegenskapstradition etablerades." },
  
    // Personer
    { kategori: "Personer", fraga: "Karl den Store – vem och vilken historisk betydelse?", svar: "Frankisk kung, kejsare från 800. Enade Västeuropa, stödde utbildning. Lade grunden för Frankrike, Tyskland och det Heliga Romerska riket." },
    { kategori: "Personer", fraga: "Jeanne d'Arc – vem och vilken roll i historien?", svar: "Fransk bondflicka (ca 1412–1431). Ledde armén, vann Orléans 1429. Brändes på bål. Kanoniserades 1920 – nationell symbol för Frankrike." },
    { kategori: "Personer", fraga: "Birger Jarl – vem och varför viktig för Sverige?", svar: "Jarl på 1200-talet. Grundade Stockholm ca 1250, stärkte kungamakten, stiftade fridslagar." },
    { kategori: "Personer", fraga: "Ansgar – vem och varför 'Nordens apostel'?", svar: "Missionär (801–865). Missionerade i Sverige, besökte Birka. Lade tidig grund för kristnandet av Skandinavien." },
    { kategori: "Personer", fraga: "Magnus Ladulås – vem och viktigaste gärning?", svar: "Kung 1275–1290. Alsnö stadga (1280) formaliserade det svenska frälset. Smeknamnet: förbjöd adeln ta härbärge hos bönder." },
    { kategori: "Personer", fraga: "Drottning Margareta – vem och vilken roll?", svar: "Dansk (1353–1412). Arkitekt bakom Kalmarunionen 1397. Styrde Sverige, Danmark och Norge – mäktigaste politikern i Norden i sin tid." },
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
  const fragor = [
    { kategori: "Äldre Medeltiden", fraga: "Vilket år föll Västromerska riket?", hint: "4__", svar: ["476","år 476"], forklaring: "År 476 avsattes den siste västromerske kejsaren – traditionellt medeltidens start." },
    { kategori: "Äldre Medeltiden", fraga: "Vad är feodalism?", hint: "Kung gav mark i utbyte mot...", svar: ["system där kung gav mark till adelsmän i utbyte mot militär tjänst","hierarkiskt system","len i utbyte mot krigstjänst"], forklaring: "Kungen gav mark (len) till vasaller som i utbyte gav militär tjänst. Bönder var bundna till marken." },
    { kategori: "Äldre Medeltiden", fraga: "Hur legitimerade kyrkan feodalsystemet?", hint: "Guds...", svar: ["lärde att ordningen var bestämd av gud","guds vilja"], forklaring: "Kyrkan lärde att samhällets ordning var bestämd av Gud – vilket fick folk att acceptera sin plats." },
    { kategori: "Äldre Medeltiden", fraga: "Vilket kloster plundrade vikingarna år 793?", hint: "L...", svar: ["lindisfarne"], forklaring: "Lindisfarne 793 markerar traditionellt vikingatidens start." },
    { kategori: "Äldre Medeltiden", fraga: "Vem var Karl den Store?", hint: "Frankisk kung, kejsare år...", svar: ["frankisk kung kronad till kejsare 800","frankisk kejsare"], forklaring: "Karl den Store kröntes till kejsare av påven år 800. Enade Västeuropa." },
    { kategori: "Högmedeltiden", fraga: "Vad är treskiftesbruk?", hint: "Tre åkrar...", svar: ["åkern delades i tre","höstgröda vårgröda och träda","tre delar"], forklaring: "Treskiftesbruk: höstgröda, vårgröda, träda. Ökade skörden kraftigt." },
    { kategori: "Högmedeltiden", fraga: "Vad är Hansan?", hint: "Handels...", svar: ["handelsförbund","förbund mellan städer","handelsförbund runt östersjön"], forklaring: "Hansan var ett handelsförbund mellan städer runt Östersjön och Nordsjön." },
    { kategori: "Högmedeltiden", fraga: "Vad kallas de som bodde i städer och arbetade som hantverkare?", hint: "B...", svar: ["borgare"], forklaring: "Borgare var den nya stadsklassen som växte fram under Högmedeltiden." },
    { kategori: "Högmedeltiden", fraga: "Varför grundades städer vid vattendrag?", hint: "Transport...", svar: ["lättare transportera varor","handel med båt","vattenvägar"], forklaring: "Handel gick snabbare och billigare med båt än på land." },
    { kategori: "Högmedeltiden", fraga: "Varför genomfördes korstågen?", hint: "Jerusalem...", svar: ["ta tillbaka jerusalem","erövra det heliga landet","religiösa och politiska skäl"], forklaring: "Korstågen motiverades av religion (återerövra Jerusalem) och politik (makt, land, rikedom)." },
    { kategori: "Senmedeltiden", fraga: "Hur spred sig Digerdöden till Europa?", hint: "Handelsfartyg...", svar: ["via handelsfartyg","råttor och loppor","från asien via handel"], forklaring: "Spreds via handelsfartyg från Asien – råttor och loppor bar bakterien Yersinia pestis." },
    { kategori: "Senmedeltiden", fraga: "Hur stor del av Europas befolkning dog av Digerdöden?", hint: "En...", svar: ["en tredjedel","1/3","ca en tredjedel"], forklaring: "Ca 1/3 av Europas befolkning dog under 1347–1351." },
    { kategori: "Senmedeltiden", fraga: "Varför var Digerdöden gynnsam för lägre samhällsskikt?", hint: "Brist på...", svar: ["brist på arbetare gav bättre lön","bönder fick bättre villkor","löner steg"], forklaring: "Brist på arbetskraft → de som överlevde kunde kräva bättre lön och villkor." },
    { kategori: "Senmedeltiden", fraga: "Vilka länder stred i Hundraårskriget?", hint: "E... och F...", svar: ["england och frankrike"], forklaring: "Hundraårskriget (1337–1453) stod mellan England och Frankrike om den franska tronen." },
    { kategori: "Senmedeltiden", fraga: "Vad hände Jeanne d'Arc till slut?", hint: "Bränd...", svar: ["brändes på bål","fångades och brändes"], forklaring: "Jeanne d'Arc fångades av engelsmännen och brändes på bål 1431." },
    { kategori: "Senmedeltiden", fraga: "Vem uppfann boktryckarkonsten?", hint: "G... ca 1440", svar: ["gutenberg","johann gutenberg"], forklaring: "Johann Gutenberg uppfann boktryckeriet ca 1440. Revolutionerade kunskapsspridning." },
    { kategori: "Senmedeltiden", fraga: "Hur försvagade Hundraårskriget feodalismen?", hint: "Nationella arméer...", svar: ["nationella arméer ersatte riddare","adelns militära roll minskade"], forklaring: "Kungarna använde nationella arméer istället för feodala riddare." },
    { kategori: "Svensk Medeltid", fraga: "Vem var Sveriges första kristna kung?", hint: "O...", svar: ["olof skötkonung"], forklaring: "Olof Skötkonung var Sveriges första kristna kung." },
    { kategori: "Svensk Medeltid", fraga: "Vad grundade Birger Jarl ca 1250?", hint: "St...", svar: ["stockholm"], forklaring: "Birger Jarl grundade Stockholm ca 1250." },
    { kategori: "Svensk Medeltid", fraga: "Vad innebar det svenska frälset?", hint: "Skattefrihet...", svar: ["skattefrihet för adel i utbyte mot krigstjänst","adelns privilegier"], forklaring: "Frälset = skattefrihet för adeln och kyrkan i utbyte mot krigstjänst. Formaliserades av Magnus Ladulås 1280." },
    { kategori: "Svensk Medeltid", fraga: "Vad är Kalmarunionen?", hint: "1397...", svar: ["union mellan sverige danmark och norge","nordisk union 1397"], forklaring: "Kalmarunionen (1397–1523) förenade Sverige, Danmark och Norge under Drottning Margaretas ledning." },
    { kategori: "Svensk Medeltid", fraga: "Varför föll Kalmarunionen?", hint: "Gustav Vasa...", svar: ["missnöje med danskt styre","gustav vasa","sverige bröt sig ur"], forklaring: "Missnöje med danskt styre och Gustav Vasas frihetskrig 1523." },
    { kategori: "Viktiga personer", fraga: "Vilket år kröntes Karl den Store till kejsare?", hint: "8__", svar: ["800","år 800"], forklaring: "Påven krönte Karl den Store till kejsare år 800 i Rom." },
    { kategori: "Viktiga personer", fraga: "Vilket slag vann Jeanne d'Arc 1429?", hint: "O...", svar: ["orléans","slaget vid orléans"], forklaring: "Jeanne d'Arc ledde fransmännen till seger vid Orléans 1429 – vände krigets riktning." },
    { kategori: "Viktiga personer", fraga: "Vem var arkitekten bakom Kalmarunionen?", hint: "Drottning...", svar: ["drottning margareta","margareta"], forklaring: "Drottning Margareta (1353–1412) grundade Kalmarunionen och styrde Norden." },
    { kategori: "Viktiga personer", fraga: "Varför kallas Ansgar 'Nordens apostel'?", hint: "Missionerade...", svar: ["missionerade i norden","missionerade i sverige","besökte birka"], forklaring: "Ansgar missionerade i Sverige och Danmark på 800-talet och besökte Birka." },
    { kategori: "Viktiga personer", fraga: "Vad är Magnus Ladulås smeknamn känt för att syfta på?", hint: "Lad...", svar: ["förbjöd adeln ta härbärge hos bönder","låste ladorna"], forklaring: "Smeknamnet syftar på att han förbjöd adeln ta härbärge hos bönder utan tillstånd." },
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
    document.getElementById("fraga-text").textContent = f.fraga;
    document.getElementById("fraga-hint").textContent = f.hint;
    document.getElementById("progress-fill").style.width = (qIndex / fragorBlandade.length * 100) + "%";
    const input = document.getElementById("svar-input");
    input.value = ""; input.disabled = false; input.focus();
    document.getElementById("kolla-btn").style.display = "inline-block";
    document.getElementById("svar-area").style.display = "flex";
    const fb = document.getElementById("feedback-box");
    fb.classList.add("dold"); fb.classList.remove("ratt","fel");
    input.onkeydown = e => { if (e.key === "Enter") kollaSvar(); };
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
