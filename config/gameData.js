const cards = [
  {
    id: "1",
    chapter: "Poglavlje 1",
    intro: "Dobro dosla. Ovo nije obican kviz - ima pitanja, izjava, provala i mozda nesto zbog cega ces se crvenjeti. Krecemo.",
    question: "Ako bi opisala nas dvoje u jednoj rijeci, koja bi bila?",
    choiceOrder: ["emotional", "flirty", "funny"],
    responses: {
      emotional: {
        label: "Seks dok ne pocrkamo",
        reaction: "Znao sam da je do njega!!!!",
        text: "I ne kaze se seks nego vodjenje ljubavi! Samo sto smo mi umjetnici izgleda xD"
      },
      flirty: {
        label: "Ego kotlic",
        reaction: "Aman obaraj malo taj ego, ja sam svoj sravnio xD",
        text: "Udarilo trnovo na glogovo, svako zapne za nesto svoje i sve vrijedno ispasta, ovo nije pravi odgovor!!."
      },
      funny: {
        label: "Dvoje ludjaka koji se mnogo vole",
        reaction: "XD Najiskreniiji odgovor.",
        text: "Prvo smo pricali na speedu, onda nismo znali nista izgovoriti da se ne posvadjamo, al brt ljubav iznad svega tkd sve cemo rijesiti"
      }
    },
    nextCardId: "2"
  },
 {
  id: "2",
  chapter: "Poglavlje 1",
  intro: "ne lazi sad",
  question: "je l te malo radilo kad sam ti rekao 'samo da znas, sad sam te indirektno poljubio'",
  choiceOrder: ["flirty", "funny", "emotional"],
  responses: {
    flirty: {
      label: "iskr ne",
      reaction: "postujem",
      text: "svakako sam ja tad vec uveliko letio da se to sve desi xDD"
    },
    funny: {
      label: "moozda malo, al sad je kasno xd",
      reaction: "e jebiga",
      text: "sad si zaglavila, nema nazad"
    },
    emotional: {
      label: "osjetila sam ali nisam htjela priznati",
      reaction: "to je to",
      text: "nekad znas ali svejedno ides dalje"
    }
  },
  nextCardId: "3"
},
  {
    id: "3",
    chapter: "Poglavlje 1",
    intro: "Pricu znas, ali pitam te svejedno...",
    question: "Koji nas zajednicki gaming momenat ti je najdrazi?",
    choiceOrder: ["funny", "emotional", "flirty"],
    responses: {
      emotional: {
        label: "Kad smo sjedili zajedno i slusali muziku u Avataru bez da smo nista pricali",
        reaction: "I ja tu scenu vracam cesto.",
        text: "Ima nesto u tome kad dvoje ljudi moze biti zajedno bez da ista mora biti receno. To je jedan od mojih omiljenih nasih trenutaka."
      },
      flirty: {
        label: "Sve sto smo radili kad su ostali zaspali",
        reaction: "Hm. Znam tacno na sta mislis XD",
        text: "Kasne noci, discord, game, smijeh - i na kraju uvijek ostanemo samo ti i ja. I to mi je omiljeni dio."
      },
      funny: {
        label: "Kad kazes 'jedno jos' a igramo do 4 ujutru XD",
        reaction: "Klasika. Uvijek.",
        text: "Plan: jedan game. Stvarnost: alarm u 7. Pouka: nema 'jednog gama' kad smo zajedno. I ne zalim."
      }
    },
    nextCardId: "photo1"
  },
  {
    id: "4",
    chapter: "Poglavlje 1",
    intro: "Ovo moram pitati. Mora se.",
    question: "Dakle. 'Vojim te.' Slucajno ili namjerno?",
    choiceOrder: ["emotional", "funny", "flirty"],
    responses: {
      emotional: {
        label: "Slucajno, ali sad mi je draze od pravog XD",
        reaction: "Isto meni, iskreno.",
        text: "Volis me - vojis me - u svakom obliku i svakom slucajnom slovu. I ne zelim to mijenjati."
      },
      flirty: {
        label: "Mozda namjerno da vidim hoces li primijetiti",
        reaction: "Primijetio sam. I otopilo me.",
        text: "Ta jedna typo je rekla vise od sto ispravnih poruka. Vojim te isto, mackic."
      },
      funny: {
        label: "Slucajno!! I sad ne mogu promijeniti XD",
        reaction: "Kanonicno. Postoji vecno.",
        text: "Sad kad god napisem 'volim' osjecam da je nesto pogresno. 'Vojim' je postalo nase. I to ne mijenjamo."
      }
    },
    nextCardId: "5"
  },
  {
    id: "5",
    chapter: "Poglavlje 2",
    intro: "Male stvari. Koje zapravo nisu male.",
    question: "Sta od mojih malih gesta ti najvise znaci?",
    choiceOrder: ["flirty", "emotional", "funny"],
    responses: {
      emotional: {
        label: "Kad vidim da si umoran/a i ne pitam nista - samo budem tu",
        reaction: "To mi treba ponekad vise od svega.",
        text: "Nije uvijek lako reci sta trebas. Nekad je dovoljno da neko bude tu bez pitanja i bez zahtjeva. I ti to znas."
      },
      flirty: {
        label: "Poruke usred radnog dana kad me najmanje ocekujes",
        reaction: "Jer si mi stalno u glavi. Doslo il ne.",
        text: "Ima nesto u tome - sredi dan, telefon zazvoni - i odma je bolje. To si ti."
      },
      funny: {
        label: "Kad mi napravis kafu bez da te pitam i pogodis kako cu je XD",
        reaction: "Kapucino za tebe - uvijek tacno XD",
        text: "Ozbiljno, to je vjestacstvo. Pogoditi sta hoce neko za kafu - to ucim godinama. Za tebe mi je odmah doslo."
      }
    },
    nextCardId: "6"
  },
  {
    id: "6",
    chapter: "Poglavlje 2",
    intro: "Malo zaronimo...",
    question: "Sta ti je najteze kada smo u svadici?",
    choiceOrder: ["emotional", "flirty", "funny"],
    responses: {
      emotional: {
        label: "Kad znam da si u pravu al mi je tesko to izgovoriti",
        reaction: "I meni je. Zato pitaj uvijek direktno.",
        text: "Nije lako. Ali ono sto nam se desava kad to konacno kazemo - vrijedi. Uvijek."
      },
      flirty: {
        label: "Kad se svadjam a jedino hocu da me zagrlis XD",
        reaction: "Sljedeci put reci to rece XD",
        text: "Ima nesto suludo u tome - svadjamo se a oboje znamo kako se to zavrsava. Mozda bismo mogli preskociti sredinu."
      },
      funny: {
        label: "Kad mi se bude smijati a mora biti ljuta XD",
        reaction: "XD Vidim to na licu uvijek!",
        text: "Ozbiljno taj smijeh dok si ljuta - to je kraj svake svadije kod mene. Ne mogu se drzati. Ti si jaca."
      }
    },
    nextCardId: "photo2"
  },
  {
    id: "7",
    chapter: "Poglavlje 2",
    intro: "Budi iskrena. Nikad ne kaznjavam iskrenost.",
    question: "Da mozes procitati jednu moju misao u ovom trenutku, koju bi odabrala?",
    choiceOrder: ["emotional", "flirty", "funny"],
    responses: {
      emotional: {
        label: "Sta osjeca kad me gleda dok ne znam da me gleda",
        reaction: "Mir. Kao da sve sjedi na svom mjestu.",
        text: "Ima taj momenat kad te gledam i ne primjecujes - samo si tu. I u tim momentima je sve savrseno tacno."
      },
      flirty: {
        label: "O cemu misli kad mu kasno pisem laku noc",
        reaction: "Uvijek ista misao XD",
        text: "Kasne noci, laku noc poruke - i misao koja ne da mira. Nije za pisanje ali znas o cemu se radi."
      },
      funny: {
        label: "Da li mu je glupo sto voli sve te igrice XD",
        reaction: "Ne, ali mu je glupo sto ih ne moze prestati igrati XD",
        text: "Odgovor je ne. Ali hvala sto pitaš. I hvala sto igras sa mnom umjesto da se salijes."
      }
    },
    nextCardId: "8"
  },
  {
    id: "8",
    chapter: "Poglavlje 3",
    intro: "Ajmo u masineriju uspomena...",
    question: "Koji nas dan bi voljela jos jednom prozivjeti?",
    choiceOrder: ["flirty", "funny", "emotional"],
    responses: {
      emotional: {
        label: "Onaj dan kad si bio bolestan a ja dosla i sjedila pored tebe",
        reaction: "Bio sam sretniji bolestan nego zdrav bez tebe.",
        text: "Nemam rijeci za to. Samo znam da u tom trenutku nisam brinuo ni o cemu osim da ces ostati malo duze."
      },
      flirty: {
        label: "Neka od kasnih noci samo nas dvoje",
        reaction: "Ima ih vise nego sto mislis. I svaka je bila savrsena.",
        text: "Ne moram precizirati koji. Znas. Ja znam. I oboje znamo da su to bili nasi trenuci."
      },
      funny: {
        label: "Onaj dan kad smo narudili s Temua i nisam znala sta stize XD",
        reaction: "Klasicno! 'Naruci nesto a vidi sta stize' - nasa disciplina.",
        text: "Temu isporuke su iskustvo za sebe. Svaki paket je misterija. Zajedno to gledamo ko djeca o Bozicu XD"
      }
    },
    nextCardId: "9"
  },
  {
    id: "9",
    chapter: "Poglavlje 3",
    intro: "Malo kreativnosti...",
    question: "Da smo likovi u seriji, koji zanr bi bio nas?",
    choiceOrder: ["funny", "flirty", "emotional"],
    responses: {
      emotional: {
        label: "Romantika sa dosta realnosti - bez pretjerivanja",
        reaction: "Taman. Bez filtera, sa svim.",
        text: "Nema savrsenih scenarija. Ima samo dvoje ljudi koji se trude. I nas scenario je i dalje moj omiljeni."
      },
      flirty: {
        label: "Thriller sa puno napetosti i jos vise hemije",
        reaction: "Ne mogu se ponositi koliko ovo stoji XD",
        text: "Napetost, hemija, cas svadja cas ne - to bi bio hit. Netflix bi se javio do srijede."
      },
      funny: {
        label: "Reality show koji niko ne bi vjerovao da je stvaran XD",
        reaction: "Produkcija bi otkazala. Pre-nerealisticno.",
        text: "Svaka epizoda: novi problem, novi game, nova kafa u 2 ujutru, nova izjava ljubavi. Publika ne bi mogla pratiti. Mi jedva."
      }
    },
    nextCardId: "photo3"
  },
  {
    id: "10",
    chapter: "Poglavlje 3",
    intro: "Malo ozbiljnije, ali i dalje nase...",
    question: "Sta si naucila od mene sto nisi znala ranije?",
    choiceOrder: ["emotional", "funny", "flirty"],
    responses: {
      emotional: {
        label: "Da je ok traziti pomoc i ne biti uvijek jaka",
        reaction: "I ti si mene naucila isto. Isla nam u isto vrijeme XD",
        text: "Nije slabost pitati. Niti je slabost pustiti nekoga da pomogne. Nekad nam treba neko ko ce biti tu bez da objasnjava."
      },
      flirty: {
        label: "Da sam ljepsa kad sam opustena nego kad se trudim XD",
        reaction: "Tacno. Uvijek.",
        text: "Nema frke, nema perfekcije, nema pokazivanja - samo ti, takva kakva jesi. I to je uvijek najljepse."
      },
      funny: {
        label: "Da ne treba pola sata birati sta cemo jesti XD",
        reaction: "I dalje naucavas tu lekciju, ali hvala na trudu.",
        text: "Napredak: sad je samo 20 minuta. Cilj: 10. Vjerujem da cemo do kraja godine biti ispod tog praga. Mozda."
      }
    },
    nextCardId: "11"
  },
  {
    id: "11",
    chapter: "Poglavlje 4",
    intro: "Emocionalni checkpoint XD",
    question: "Koja nasa uspomena ti zagrije srce?",
    choiceOrder: ["flirty", "emotional", "funny"],
    responses: {
      emotional: {
        label: "Kad si mi rekao da mu je vazno sta mislis - i zaista to mislio",
        reaction: "Mislio sam. I mislim.",
        text: "Postoje rijeci koje se kazu, i postoje rijeci koje se osjete. Kad sam to rekao, znao sam da cu uvijek misliti isto."
      },
      flirty: {
        label: "Nasi kasni razgovori kad se sve utisalo i ostali samo mi",
        reaction: "Ti i ja, kasno, bez filtera - to je moja omiljena verzija svega.",
        text: "Kad se svijet smiri, razgovor postane drugaciji. Iskrenost dodje sama. I u tim trenucima otkrijem uvijek nesto novo o tebi."
      },
      funny: {
        label: "Kad smo Peri pokazali Discord i on nije skontao nista XD",
        reaction: "Pero je hobi koji dijelimo XD",
        text: "Pero je na svom putu razumijevanja gaming-a. Mi smo pratnja na tom putu. I to ce trajati jos dugo."
      }
    },
    nextCardId: "12"
  },
  {
    id: "12",
    chapter: "Poglavlje 4",
    intro: "Malo seksi, malo iskreno. Budi iskrena.",
    question: "Da mozes raditi sta hoces sa mnom cijelu noc - sta bi bilo?",
    choiceOrder: ["flirty", "emotional", "funny"],
    responses: {
      emotional: {
        label: "Razgovarali do zore kao sto smo radili",
        reaction: "Neke noci ne treba nista drugo.",
        text: "Ima noci kad je razgovor bolje od svega drugog. Bez telefona, bez serija - samo rijeci koje ne bi rekli danju."
      },
      flirty: {
        label: "Nesto sto cu ti reci uzivo, ne ovdje XD",
        reaction: "Drzi taj odgovor. I dodi.",
        text: "Neki odgovori nisu za kartice. Sacuvaj ga. Dodji. I reci mi."
      },
      funny: {
        label: "Avatar, caj, ti i ja - nista ostalo ne treba XD",
        reaction: "Plan prihvacen. Sutra?",
        text: "Osnovna formula srecnog zivota: dobra igra, caj, ti, kasno u noc. Dodaj cips. Savrseno."
      }
    },
    nextCardId: "photo4"
  },
  {
    id: "13",
    chapter: "Poglavlje 5",
    intro: "Malo maste...",
    question: "Zakljucani smo sami negdje. Sta je tvoj prvi potez?",
    choiceOrder: ["emotional", "flirty", "funny"],
    responses: {
      emotional: {
        label: "Uhvatim te za ruku i kazem sve sto nisam stigla",
        reaction: "Imam listu cekanja za taj razgovor.",
        text: "Ima rijeci koje cekaju pravi trenutak. Mozda je taj trenutak uvijek bio samo mi i cetiri zida."
      },
      flirty: {
        label: "Ko kaze da zelim izaci? XD",
        reaction: "Moj tip razmisljanja tacno.",
        text: "Zasto bi zeljela izaci? Zatvorenost sa pravom osobom je bolja od slobode bez nje."
      },
      funny: {
        label: "Gledam ima li wifi i narudzba za hranu XD",
        reaction: "Prioriteti na broju jedan!",
        text: "Nema razloga za paniku ako ima wifi i nesto za jesti. Ostalo cemo smisliti."
      }
    },
    nextCardId: "14"
  },
  {
    id: "14",
    chapter: "Poglavlje 5",
    intro: "Ljetovanje. Muzika. Mi.",
    question: "Da mozemo sutra ici na Awakenings - sta bi bio nas plan?",
    choiceOrder: ["flirty", "emotional", "funny"],
    responses: {
      emotional: {
        label: "Samo nas dvoje, muzika, bez briga i bez telefona",
        reaction: "To je plan. Konkretno.",
        text: "Postoje dogadjaji koji ti ostanu. Posebno kad si tamo s nekim ko ti je vazan. Jedva cekam da imamo taj dogadjaj."
      },
      flirty: {
        label: "Pegassi, ti uz mene, sve ostalo ne postoji",
        reaction: "Zvuci ko nesto sto bi se desilo XD",
        text: "Pegassi, muzika, ti blizu - ne treba mi vise od toga. To bi bio jedan od nasih dana."
      },
      funny: {
        label: "Ja bi tancala, ti bi gledao XD",
        reaction: "Ili oboje tancamo, ne sudim XD",
        text: "Na kraju uvijek zakljucimo isto - vibe dobar, muzika dobra, bili smo zajedno. I to je sve sto treba."
      }
    },
    nextCardId: "15"
  },
  {
    id: "15",
    chapter: "Poglavlje 5",
    intro: "Nesto za buducnost...",
    question: "Koji nas zajednicki plan ti je najdrazi?",
    choiceOrder: ["funny", "flirty", "emotional"],
    responses: {
      emotional: {
        label: "Da jednog dana ne moramo raditi za nekoga drugog",
        reaction: "Radimo na tome.",
        text: "Nije samo san. Ima ideja, ima planova, ima koraka. I ima nas dvoje koji to radimo zajedno."
      },
      flirty: {
        label: "Nesto sto bi nas stavilo na istu adresu 24/7",
        reaction: "Rado XD",
        text: "Neke ideje su jednostavne. Ova je mozda i najjednostavnija."
      },
      funny: {
        label: "Onaj biznis koji smislimo u 2 ujutru i zaboravimo do jutra XD",
        reaction: "Sve bisnis ideje u 2 ujutru su genius XD",
        text: "Slucaj: smislimo nesto, kazemo 'ovo je to', zaspimo, zaboravimo. Ali neka ta energija bude za nesto stvarno jednog dana."
      }
    },
    nextCardId: "photo5"
  },
  {
    id: "16",
    chapter: "Poglavlje 6",
    intro: "Malo u buducnost...",
    question: "Gdje se vidis sa mnom za 5 godina?",
    choiceOrder: ["emotional", "flirty", "funny"],
    responses: {
      emotional: {
        label: "Na nekoj kafi, jutro, sunce, nismo ni pricali nista a opet sretni",
        reaction: "Jedno od mojih omiljenih mjesta je tacno to.",
        text: "Nije potreban dogadjaj. Nije potrebno nista posebno. Jutarnja kafa sa nekim ko ti znaci je ponekad vise od svega."
      },
      flirty: {
        label: "Bilo gdje dok smo zajedno, iskreno",
        reaction: "Onda je sve destinacija.",
        text: "Ne zamaram se adresom. Zamara me ko ce biti pored mene. I vec znam odgovor."
      },
      funny: {
        label: "Ista soba, isti game, mozda veci TV XD",
        reaction: "To je jedina evolucija koja nam treba XD",
        text: "Plan se ne mijenja drasticno - samo upgrade na hardver. I mozda malo veci kauc."
      }
    },
    nextCardId: "17"
  },
  {
    id: "17",
    chapter: "Poglavlje 6",
    intro: "Reci mi iskreno...",
    question: "Sta me cini razlicitim od svih ostalih?",
    choiceOrder: ["flirty", "emotional", "funny"],
    responses: {
      emotional: {
        label: "Sto ne bjezis od teskih razgovora iako ih ne volis",
        reaction: "Tesko, al vridi svaki put.",
        text: "Nije uvijek lako. Ali uvijek se pokazalo da je bolje kad se kaze nego kad ostane u sebi. To me naucila upravo ti."
      },
      flirty: {
        label: "Hemija koja nema objasnjenja i ne treba ga imati",
        reaction: "Nauka ne moze to izmjeriti.",
        text: "Postoje stvari koje se osjete a ne analiziraju. I ja te volim bas ovako - bez potrebe za dokazivanjem."
      },
      funny: {
        label: "Jedini si koji ne sudi kad narudzba stigne s Temua XD",
        reaction: "Nikad sudim. Pratim radoznalo XD",
        text: "Naprotiv - cekam s uzbudenjem svaki paket. To je nase zajednicko iskustvo sad."
      }
    },
    nextCardId: "18"
  },
  {
    id: "18",
    chapter: "Poglavlje 6",
    intro: "Zamislimo zajedno...",
    question: "Da mozemo teleportovati odmah - kuda idemo?",
    choiceOrder: ["funny", "emotional", "flirty"],
    responses: {
      emotional: {
        label: "Na neko mirno place, bez telefona, samo mi",
        reaction: "Morski zrak i ti. Jedno od mojih cestih misli.",
        text: "Zasluzujemo mirno. Zasluzujemo bez alarma, bez posla, bez ikoga. I zasluzujemo to zajedno."
      },
      flirty: {
        label: "Kod mene. Ili kod tebe. Svejedno XD",
        reaction: "Najkraci teleport moguc.",
        text: "Nekad najkraca distanca je i dalje premala. Ali ide se."
      },
      funny: {
        label: "U krevet jer sam umorna i to je sve XD",
        reaction: "Najiskreniiji moguc odgovor.",
        text: "Ponekad je najluksuznija destinacija - topao krevet u srijedu popodne. Rado pratim."
      }
    },
    nextCardId: "photo6"
  },
  {
    id: "19",
    chapter: "Poglavlje 7",
    intro: "Iskrenost bez filtera...",
    question: "Koja moja navika te nasmije iako ne bi smjela?",
    choiceOrder: ["emotional", "flirty", "funny"],
    responses: {
      emotional: {
        label: "Kad probas biti ozbiljan al te izda smijeh XD",
        reaction: "Uvijek me izda u najgorem trenutku.",
        text: "Ne mogu kontrolisati taj smijeh. Pogotovo kad bi trebalo biti ozbiljno. I nekako uvijek dodje u pravom trenutku."
      },
      flirty: {
        label: "Kad se pravis hladan al onda napravis nesto preslatko XD",
        reaction: "Ne dogadja se. Ne znam o cemu pricas. XD",
        text: "Ok mozda ponekad. Mozda. Al to ostaje izmedju nas."
      },
      funny: {
        label: "Kad planiras nesto mega detaljno a onda improviziras sve XD",
        reaction: "Plan je dekoracija. Impro je zivot.",
        text: "Planiram detaljno zato sto mi je interesantan proces. Sto ne znaci da ce se isto desiti. Eto."
      }
    },
    nextCardId: "20"
  },
  {
    id: "20",
    chapter: "Poglavlje 7",
    intro: "Duboko udahni...",
    question: "Kad ti je najteze, sta ti od mene treba?",
    choiceOrder: ["flirty", "emotional", "funny"],
    responses: {
      emotional: {
        label: "Da budes tu bez pitanja i bez savjeta - samo tu",
        reaction: "Tu sam. Uvijek cu biti.",
        text: "Nije uvijek potrebna rijec. Ponekad je samo prisutnost - bez pritiska, bez ocekivanja. I to cu uvijek znati dati."
      },
      flirty: {
        label: "Zagrljaj koji nema vremensko ogranicenje",
        reaction: "Moji zagrljaji nemaju tajmer. Narocito tvoji.",
        text: "Svaki zagrljaj traje koliko treba. Ponekad vise, ponekad samo sekund duze. Al nikad premalo."
      },
      funny: {
        label: "Caj, cutanje i da me pusti na miru da se naljutim XD",
        reaction: "Caj vec kuhano. Cutim. Cekam. XD",
        text: "Formula prihvacena i savladana. Caj bez pitanja, prisutnost bez komentara. I onda kad budes htjela pricati - tu sam."
      }
    },
    nextCardId: "21"
  },
  {
    id: "21",
    chapter: "Poglavlje 7",
    intro: "Malo igre uloga...",
    question: "Da sam superheroj - koja bi bila moja supermoc?",
    choiceOrder: ["funny", "flirty", "emotional"],
    responses: {
      emotional: {
        label: "Sposobnost da uvijek znas kad mi nesto nije dobro iako nisam rekla",
        reaction: "To nije supermoc - to je paznja. I trudim se.",
        text: "Ne citam misli. Ali pazim. I kad pazis na nekog, neke stvari dodu same od sebe."
      },
      flirty: {
        label: "Moc da zaustavi vrijeme kad smo zajedno",
        reaction: "Svaki put kad si tu, prode prebrzo.",
        text: "Da imam tu moc - zaustavio bih dosta trenutaka. Uglavnom ovih mirnih, obicnih, kojih nismo ni svjesni."
      },
      funny: {
        label: "Sposobnost da uvijek nadje parking XD",
        reaction: "PRESUPERMOC. Ne salis se XD",
        text: "Dok ostali kruze 20 minuta - ja vec sjedim i cekam. To je talenat koji je potcjenjen."
      }
    },
    nextCardId: "photo7"
  },
  {
    id: "22",
    chapter: "Poglavlje 8",
    intro: "Polovina! Bravo, macak 🫶🏻",
    question: "Kako ti se svidja igra do sad?",
    choiceOrder: ["emotional", "flirty", "funny"],
    responses: {
      emotional: {
        label: "Svaka kartica me nasmije ili gane malo",
        reaction: "To je i bio cilj. Bas to.",
        text: "Ova igra je mali prozor u nas. Nista nije izmisljeno. Sve je nesto nase. I drago mi je da prolazis kroz to."
      },
      flirty: {
        label: "Ne mogu prestati citati XD",
        reaction: "A nastavak je jos bolji.",
        text: "Ovo je tek polovina. Ima jos pitanja, izjava i mozda neke provale. Ostani uz igru."
      },
      funny: {
        label: "Rekla bi da je pretjerano romanticno al me 'vojim te' kartica ubila XD",
        reaction: "XD Sve je po planu.",
        text: "Kad je 'vojim te' postalo romantika onda znaci da smo to mi napravili. I to nije lose."
      }
    },
    nextCardId: "23"
  },
  {
    id: "23",
    chapter: "Poglavlje 8",
    intro: "Tajne, tajne...",
    question: "Koja ti je tajna zelja za nas dvoje?",
    choiceOrder: ["flirty", "emotional", "funny"],
    responses: {
      emotional: {
        label: "Da imamo bar jedan dan sedmicno koji je samo nas",
        reaction: "To nije zelja - to je plan.",
        text: "Jedan dan sedmicno. Bez ostalih, bez obaveza, bez planova. Samo mi. Radimo na tome."
      },
      flirty: {
        label: "Nesto sto cu ti saptati jedan dan XD",
        reaction: "Drzi tu zelju. I saptaj je uskoro.",
        text: "Neke zelje su lose u kartici. Ali dobro uzivo. Sacuvaj je."
      },
      funny: {
        label: "Da Pero jednog dana skonta sta je 'gg' XD",
        reaction: "To je zelja svih nas XD",
        text: "Pero napreduje. Polako, ali napreduje. Vjerujemo u Pera."
      }
    },
    nextCardId: "24"
  },
  {
    id: "24",
    chapter: "Poglavlje 8",
    intro: "Gradimo nesto...",
    question: "Da gradimo kucu od nule, koji je MUST HAVE?",
    choiceOrder: ["funny", "emotional", "flirty"],
    responses: {
      emotional: {
        label: "Veliki balkon gdje mozemo sjest ujutru i pit kafu",
        reaction: "Kapucino, jutarnje sunce, ti - sve je tu.",
        text: "Jutarnja kafa na balkonu. Nije glamurozno ali je jedno od mojih najomiljenijih zamisljenih trenutaka."
      },
      flirty: {
        label: "Neka soba gdje nema telefona, samo mi XD",
        reaction: "Ime te sobe je 'plan'.",
        text: "Jedna soba. Bez interneta. Bez notifikacija. Samo mi dvoje i sta god odlucimo raditi s tim vremenom."
      },
      funny: {
        label: "Tajna soba za grickalice i cips XD",
        reaction: "MUST HAVE. Otisak prsta za ulaz.",
        text: "Soba zakljucana, puna cips, cokolade, slusalica i dobrog wi-fi. Dnevni boravak broj 2. Prihvaceno."
      }
    },
    nextCardId: "photo8"
  },
  {
    id: "25",
    chapter: "Poglavlje 9",
    intro: "Priblizavamo se kraju - ali osjeci rastu...",
    question: "Sta bi mi rekla da imam samo 60 sekundi da te slusam?",
    choiceOrder: ["emotional", "flirty", "funny"],
    responses: {
      emotional: {
        label: "Hvala ti sto ostajes iako nije uvijek lako",
        reaction: "I tebi hvala. Za isto.",
        text: "Nije uvijek lako. I oboje znamo to. Ali uvijek se doslo do sutra. I sutra je uvijek bilo bolje."
      },
      flirty: {
        label: "Ne pustaj me XD",
        reaction: "Nikad. To je obecanje.",
        text: "Tri rijeci. Kratke. I nose vise od mnogo dugih. Ne pustam. Ni danas ni sutra."
      },
      funny: {
        label: "Zapravo treba mi 5 minuta ne 60 sekundi XD",
        reaction: "Za tebe - neograniceno. Reci.",
        text: "Ukidam tajmer. Govori koliko hoces. Slusam uvijek."
      }
    },
    nextCardId: "26"
  },
  {
    id: "26",
    chapter: "Poglavlje 9",
    intro: "Muzicki kutak...",
    question: "Koja bi muzika bila soundtrack naseg filma?",
    choiceOrder: ["flirty", "funny", "emotional"],
    responses: {
      emotional: {
        label: "Nesto tiho i duboko za mirne trenutke",
        reaction: "Znam tacno koji zvuk mislis.",
        text: "Ima muzike koja te odvede u momenat bez da pokusavas. Svaki put kad je cujem, tu si."
      },
      flirty: {
        label: "Anelie Lens ili Pegassi - ne znas dok ih ne cujes uzivo",
        reaction: "Aj idemo na Awakenings i dozivimo to.",
        text: "Neka muzika trazis uzivo. I tamo cemo biti. Jednog dana."
      },
      funny: {
        label: "Ona Gregorova pjesma kojoj se ne mozes otresti XD",
        reaction: "Svi je pjevaju protiv svoje volje XD",
        text: "Jebem ti refren koji se zalijepi za glavu. Ako nam je to soundtrack - bar je pamtljiv."
      }
    },
    nextCardId: "27"
  },
  {
    id: "27",
    chapter: "Poglavlje 9",
    intro: "Iskrenost bez filtera...",
    question: "Sta nikad ne zelis da se promijeni kod nas?",
    choiceOrder: ["funny", "emotional", "flirty"],
    responses: {
      emotional: {
        label: "Kako mozemo pricati o svemu bez straha",
        reaction: "I to gradimo svaki dan. Vrijedi.",
        text: "Bez straha od reakcije. Bez hodanja po jajima. Samo rijeci. To je ono sto zelim cuvati."
      },
      flirty: {
        label: "Iskra - ona koje nema objasnjenja",
        reaction: "Ona ne gasi. I ne dam joj.",
        text: "Sve se mijenja. Ali ono sto nas privlaci jedno drugom - to nije za mijenjanje. Ni ne zelim."
      },
      funny: {
        label: "Nase inside joke koje niko drugi ne razumije XD",
        reaction: "Tajni jezik: aktivan zauvijek.",
        text: "Pogled, jedna rijec, i oboje razumijemo sta je receno a niko oko nas ne zna. To je nasa stvar. Cuvamo je."
      }
    },
    nextCardId: "photo9"
  },
  {
    id: "28",
    chapter: "Poglavlje 10",
    intro: "Zadnje poglavlje. Ali ne i kraj.",
    question: "Da ti pisem pismo, kako bi pocelo?",
    choiceOrder: ["emotional", "flirty", "funny"],
    responses: {
      emotional: {
        label: "'Vojim te' - i to je jedini uvod koji odgovara",
        reaction: "I ja vojim tebe. Uvijek.",
        text: "Nema boljeg uvoda. Jednostavno, nase, iskreno. Vojim te - i sve sto dolazi posle tog pocinje dobro."
      },
      flirty: {
        label: "Hej ti, da, ti s tim osmijehom...",
        reaction: "Uvijek te prepoznam po osmjehu XD",
        text: "Od svih osmijeh koji vidim - tvoj je onaj koji trazim. I svaki put kad ga nadjem, znam gdje trebam biti."
      },
      funny: {
        label: "HITNO: Procitaj dok je caj jos topao XD",
        reaction: "Uz pismo ide i caj. Zakon.",
        text: "Svako moje pismo tebi dolazi s cajem. Ili kafom. Ili oboje. To je sada tradicija."
      }
    },
    nextCardId: "29"
  },
  {
    id: "29",
    chapter: "Poglavlje 10",
    intro: "Jos malo...",
    question: "Sta je najvaznije sto si naucila iz ove igre?",
    choiceOrder: ["flirty", "emotional", "funny"],
    responses: {
      emotional: {
        label: "Da mi male stvari znace vise nego sto sam mislila",
        reaction: "I meni su male stvari uvijek bile sve.",
        text: "Ova igra je samo skup malih stvari. I male stvari su ono sto pamtimo duze od svega."
      },
      flirty: {
        label: "Da si pun iznenadjenja - i da vise nece biti XD",
        reaction: "Ima jos. Budi sigurna.",
        text: "Ovo je bio samo pocetni nivo. Ima jos kartice, jos iznenadjenja, jos svega. Strpljenje."
      },
      funny: {
        label: "Da si proveo previse vremena pravecu ovo XD",
        reaction: "Svaka sekunda za tebe.",
        text: "OK da. Proveo sam dosta vremena. Ali svaka sekunda je bila cisto zadovoljstvo. I drago mi je sto si do kraja."
      }
    },
    nextCardId: "30"
  },
  {
    id: "30",
    chapter: "Poglavlje 10",
    intro: "Ovo je zadnja kartica. Nasa prica tek pocinje.",
    question: "Kako zavrsavamo ovu avanturu?",
    choiceOrder: ["emotional", "funny", "flirty"],
    responses: {
      emotional: {
        label: "Sa zagrljajom i svim rijecima koje smo nekad propustili reci",
        reaction: "Dodi tu. Zagrljaj ceka.",
        text: "Svaka stranica ove sveske je dio nase price. Hvala ti sto si prosla do kraja. Vojim te - i to nece biti zadnja kartica nikad."
      },
      flirty: {
        label: "Ovo nije kraj, ovo je jos jedan pocetak",
        reaction: "Sezona 2 se pise XD",
        text: "Kraj? Kakav kraj. Ovo je uvod. Ima jos avantura, jos kasnih noci, jos gaming sesija, jos casica, jos svega. Spremi se."
      },
      funny: {
        label: "Sa pitanjem - ima li bonus kartice XD",
        reaction: "Za sad nema. Ko zna sutra XD",
        text: "Zvanicno: zadnja kartica. Nezvanicno: ne reci nikad nikad. A do tada - vojim te, mackic 🫶🏻"
      }
    },
    nextCardId: "photo10"
  },
  // ↓↓↓ ZADNJA KARTICA — promijeni tbc na false kad dodas vise karata ↓↓↓
  { id: "photo1",  type: "photo", image: "1.jpg",  nextCardId: null, tbc: true  },
  // ↑↑↑ ————————————————————————————————————————————————————————————— ↑↑↑
  { id: "photo2",  type: "photo", image: "2.jpg",  nextCardId: "7"  },
  { id: "photo3",  type: "photo", image: "3.jpg",  nextCardId: "10" },
  { id: "photo4",  type: "photo", image: "4.jpg",  nextCardId: "13" },
  { id: "photo5",  type: "photo", image: "5.jpg",  nextCardId: "16" },
  { id: "photo6",  type: "photo", image: "6.jpg",  nextCardId: "19" },
  { id: "photo7",  type: "photo", image: "7.jpg",  nextCardId: "22" },
  { id: "photo8",  type: "photo", image: "8.jpg",  nextCardId: "25" },
  { id: "photo9",  type: "photo", image: "9.jpg",  nextCardId: "28" },
  { id: "photo10", type: "photo", image: "10.jpg", nextCardId: null, tbc: true }
];

function getCard(id) {
  return cards.find(c => c.id === id) || null;
}

function getAllCards() {
  return cards;
}

module.exports = { getCard, getAllCards };
