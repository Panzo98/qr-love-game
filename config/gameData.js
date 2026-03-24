const cards = [
  {
    id: "1",
    chapter: "Poglavlje 1",
    intro: "Dobrodošla u igru! Ovo je tvoja prva kartica. Svaki odgovor otkriva nešto novo...",
    question: "Kako bi voljela da počnemo ovu avanturu?",
    choiceOrder: ["emotional", "flirty", "funny"],
    responses: {
      emotional: {
        label: "Nježno, korak po korak",
        reaction: "Baš kao ti - pažljivo i s puno srca.",
        text: "Svaki veliki put počinje malim korakom. A ovaj put je poseban jer ga prolazimo zajedno. Okreni stranicu i zalijepi sljedeće QR naljepnice."
      },
      flirty: {
        label: "S malo iskre u očima",
        reaction: "Vidim da voliš igru... i ja isto.",
        text: "Ova iskra će nas voditi kroz stranice. Svaki QR kod krije nešto samo za tebe. Nastavi - obećavam da se isplati."
      },
      funny: {
        label: "Bez plana, yolo!",
        reaction: "Haha, ok! Onda se drži čvrsto!",
        text: "Plan je precijenjen. Spontanost je ono što nas čini posebnima. Ajmo vidjeti kuda nas ovo vodi!"
      }
    },
    nextCardId: "2"
  },
  {
    id: "2",
    chapter: "Poglavlje 1",
    intro: "Sjećaš li se kako smo se upoznali? Ponekad mislim o tome...",
    question: "Šta ti je prvi put privuklo pažnju kod mene?",
    choiceOrder: ["flirty", "emotional", "funny"],
    responses: {
      emotional: {
        label: "Tvoj osmijeh",
        reaction: "To mi znači više nego što misliš.",
        text: "Osmijeh je ono što prvo vidimo, ali ono što ostaje je osjećaj koji donosi. Hvala ti što si to primijetila."
      },
      flirty: {
        label: "Tvoj pogled - nisi mogao sakriti",
        reaction: "Busted! Da, nisam mogao odvojiti oči.",
        text: "Što da ti kažem... Postoje stvari koje se ne mogu sakriti. A pogled prema tebi je jedna od njih."
      },
      funny: {
        label: "Bio si čudno simpatičan",
        reaction: "Čudno simpatičan? To ću uzeti kao kompliment!",
        text: "Hej, 'čudno simpatičan' je moja najbolja osobina. Barem je funkcionisalo, jel da?"
      }
    },
    nextCardId: "3"
  },
  {
    id: "3",
    chapter: "Poglavlje 1",
    intro: "Svaki par ima svoj poseban momenat...",
    question: "Koji naš zajednički trenutak ti je najdraži?",
    choiceOrder: ["funny", "flirty", "emotional"],
    responses: {
      emotional: {
        label: "Onaj tihi trenutak kad smo samo bili zajedno",
        reaction: "Tišina s tobom govori glasnije od bilo čega.",
        text: "Najljepši trenuci nisu uvijek najglasniji. Ponekad je dovoljno samo biti tu, jedno pored drugog, i znati da si na pravom mjestu."
      },
      flirty: {
        label: "Kad si me prvi put poljubio/la",
        reaction: "Taj trenutak se ponavlja u mojoj glavi kao omiljena pjesma.",
        text: "Neki poljupci promijene sve. Naš prvi je bio upravo takav. I svaki sljedeći je bio jednako poseban."
      },
      funny: {
        label: "Kad smo se zajedno izgubili",
        reaction: "Haha! Avantura za pamćenje!",
        text: "Izgubiti se s pravom osobom je bolje nego znati put bez nje. Plus, najbolje priče počinju s 'e, onda smo skrenuli pogrešno'..."
      }
    },
    nextCardId: "4"
  },
  {
    id: "4",
    chapter: "Poglavlje 2",
    intro: "Hajmo zaroniti malo dublje...",
    question: "Šta te kod mene nasmije čak i kad ti nije do smijeha?",
    choiceOrder: ["emotional", "funny", "flirty"],
    responses: {
      emotional: {
        label: "Način na koji pokušavaš da me razveseliš",
        reaction: "Tvoja sreća mi je najvažnija.",
        text: "Kad vidim da ti nije lako, sve bih dao da te nasmijem. Drago mi je da to primjećuješ i cijeniš."
      },
      flirty: {
        label: "Tvoj smješni izraz lica kad nešto zezneš",
        reaction: "Hej! Ali da, znam o čemu pričaš...",
        text: "Priznajem, imam talent za smiješne izraze lica. Barem te to zabavlja - win-win situacija!"
      },
      funny: {
        label: "Tvoji očajni vicevi",
        reaction: "OČAJNI?! To su vrhunski vicevi!",
        text: "Ok, možda jesu malo cringe, ali upravo zato funkcionišu! Loš vic + tvoj smijeh = savršena kombinacija."
      }
    },
    nextCardId: "5"
  },
  {
    id: "5",
    chapter: "Poglavlje 2",
    intro: "Ponekad su male stvari najbitnije...",
    question: "Koji mali gest ti najviše znači?",
    choiceOrder: ["flirty", "emotional", "funny"],
    responses: {
      emotional: {
        label: "Kad me zagrliš bez razloga",
        reaction: "Zagrljaj kaže ono što riječi ne mogu.",
        text: "Svaki zagrljaj je mali dom. Nema razloga jer je svaki trenutak s tobom razlog sam po sebi."
      },
      flirty: {
        label: "Kad mi pošalješ poruku usred dana",
        reaction: "Jer si mi non-stop u mislima.",
        text: "Svaka poruka je mali podsjetnik da nisam sam u ovome. A ti si razlog zašto volim pogledati telefon."
      },
      funny: {
        label: "Kad mi dozvoliš zadnji komad pizze",
        reaction: "To je PRAVI znak ljubavi!",
        text: "Zaboravi dijamante i cvijeće. Prava ljubav se mjeri u žrtvovanim komadima pizze. I ti si šampion!"
      }
    },
    nextCardId: "6"
  },
  {
    id: "6",
    chapter: "Poglavlje 2",
    intro: "Svaka veza ima svoj jezik...",
    question: "Kako bi opisala naš odnos u tri riječi?",
    choiceOrder: ["funny", "emotional", "flirty"],
    responses: {
      emotional: {
        label: "Siguran, topao, iskren",
        reaction: "Upravo to gradimo svaki dan.",
        text: "Sigurnost, toplina i iskrenost - temelji svega lijepog. Hvala ti što s tobom imam sve troje."
      },
      flirty: {
        label: "Vatren, neizvjestan, uzbudljiv",
        reaction: "Ooh, sviđa mi se kako razmišljaš!",
        text: "S tobom nikad nije dosadno. Svaki dan je nova avantura i ne bih to mijenjao ni za šta na svijetu."
      },
      funny: {
        label: "Čudan, smiješan, savršen",
        reaction: "Čudan i smiješan? Savršen opis!",
        text: "Normalni parovi su dosadni. Mi smo nivo iznad - čudni i smiješni, a to je recept za vječnost."
      }
    },
    nextCardId: "7"
  },
  {
    id: "7",
    chapter: "Poglavlje 3",
    intro: "Vrijeme je za malo misterije...",
    question: "Da možeš pročitati jednu moju misao, koju bi izabrala?",
    choiceOrder: ["emotional", "flirty", "funny"],
    responses: {
      emotional: {
        label: "Šta osjećaš kad me gledaš",
        reaction: "Osjećam mir. Kao da je sve na svom mjestu.",
        text: "Kad te gledam, svijet se uspori. Sve brige nestanu i ostaje samo osjećaj da sam tačno tamo gdje trebam biti."
      },
      flirty: {
        label: "O čemu maštaš kad smo zajedno",
        reaction: "Hmm, to ostaje moja mala tajna... za sad.",
        text: "Neke misli su previše lijepe za riječi. Ali obećavam ti - svaka je o tebi i o nama."
      },
      funny: {
        label: "Zašto toliko dugo biraš šta ćeš jesti",
        reaction: "Haha! Jer je to ŽIVOTNA ODLUKA!",
        text: "Izbor jela je ozbiljna stvar! Ali ok, priznajem da pretjerujem. Sljedeći put biram za 5 minuta. Možda."
      }
    },
    nextCardId: "8"
  },
  {
    id: "8",
    chapter: "Poglavlje 3",
    intro: "Putovanje kroz sjećanja...",
    question: "Kad bi mogla ponovo proživjeti jedan naš dan, koji bi bio?",
    choiceOrder: ["flirty", "funny", "emotional"],
    responses: {
      emotional: {
        label: "Dan kad smo rekli 'volim te'",
        reaction: "Rekao bih ti to ponovo hiljadu puta.",
        text: "Neki dani promijene sve. Taj dan je bio jedan od njih. I svaki dan nakon toga nosi tu istu toplinu."
      },
      flirty: {
        label: "Naš prvi spoj",
        reaction: "Nervoza, leptirići, i ti... savršeno.",
        text: "Sjećam se svakog detalja. Tvoj osmijeh, nervozni smijeh, onaj prvi dodir. Vratio bih se u taj trenutak bez razmišljanja."
      },
      funny: {
        label: "Onaj dan kad smo napravili totalni haos",
        reaction: "Ah da! Legendarna priča!",
        text: "Svaki par treba barem jednu priču od koje se crvene pred prijateljima. Mi imamo kolekciju!"
      }
    },
    nextCardId: "9"
  },
  {
    id: "9",
    chapter: "Poglavlje 3",
    intro: "Maštarija na djelu...",
    question: "Da smo likovi iz filma, koji žanr bi bio naš?",
    choiceOrder: ["funny", "flirty", "emotional"],
    responses: {
      emotional: {
        label: "Romantična drama sa srećnim krajem",
        reaction: "Naš srećni kraj tek počinje.",
        text: "Svaka dobra priča ima svoje izazove, ali ono što nas čini posebnima je kako ih zajedno prolazimo. I kraj je uvijek srećan."
      },
      flirty: {
        label: "Akcija sa puno hemije",
        reaction: "Eksplozivna hemija, to stoji!",
        text: "Između nas uvijek ima iskri. Dodaj malo avanture i imaš blockbuster koji se nikad ne završava!"
      },
      funny: {
        label: "Komedija zabune - 100%",
        reaction: "Scenario piše sam sebe, haha!",
        text: "Iskreno, naš svakodnevni život je smiješniji od većine komedija. Netflix, javi se!"
      }
    },
    nextCardId: "10"
  },
  {
    id: "10",
    chapter: "Poglavlje 4",
    intro: "Malo ozbiljnije, ali i dalje s osmijehom...",
    question: "Šta sam te naučio što prije nisi znala?",
    choiceOrder: ["emotional", "funny", "flirty"],
    responses: {
      emotional: {
        label: "Da je ok biti ranjiva",
        reaction: "Tvoja hrabrost me svaki dan iznenadi.",
        text: "Ranjivost nije slabost - to je najhrabrija stvar koju neko može pokazati. I ti si najhrabrija osoba koju znam."
      },
      flirty: {
        label: "Da leptirići u stomaku stvarno postoje",
        reaction: "I meni ih ti svaki put izazoveš.",
        text: "Mislio sam da su leptirići u stomaku mit. Onda sam te sreo i shvatio da je to blaga verzija onoga što osjećam."
      },
      funny: {
        label: "Da neko može toliko krkljati u snu",
        reaction: "EJ! To je... ok, istina je.",
        text: "Hej, to je moj nocturni koncert! Ekskluzivno za jednog slušaoca. VIP karta uključena u vezu."
      }
    },
    nextCardId: "11"
  },
  {
    id: "11",
    chapter: "Poglavlje 4",
    intro: "Emotivni checkpoint...",
    question: "Koja naša uspomena ti zagrije srce?",
    choiceOrder: ["flirty", "emotional", "funny"],
    responses: {
      emotional: {
        label: "Kad si bio tu u mom teškom trenutku",
        reaction: "Uvijek ću biti tu. Obećavam.",
        text: "Najvažnije stvari se ne mjere riječima, nego prisustvom. I nikad neću prestati biti tu za tebe."
      },
      flirty: {
        label: "Naše kasne noćne razgovore",
        reaction: "Oni su mi najdraži dio dana.",
        text: "Kad se svijet utiša, ostajemo mi i naši razgovori. I svaki put otkrijem nešto novo o tebi što me još više privuče."
      },
      funny: {
        label: "Kad smo se takmičili ko je bolji kuhar",
        reaction: "I dalje tvrdim da sam pobijedio!",
        text: "Taj kuharski dvoboj je bio epski. Okej, možda je tvoje jelo bilo malo bolje. MALO. Ne govori nikome."
      }
    },
    nextCardId: "12"
  },
  {
    id: "12",
    chapter: "Poglavlje 4",
    intro: "Red za malo kreativnosti...",
    question: "Kad bi nam pisala pjesmu, kako bi se zvala?",
    choiceOrder: ["funny", "emotional", "flirty"],
    responses: {
      emotional: {
        label: "Tiho, ali zauvijek",
        reaction: "Najljepši naslov koji sam čuo.",
        text: "Tiho, ali zauvijek. Kao naša ljubav - ne viče, ne dokazuje, ali je tu. Svaki dan, svaki trenutak."
      },
      flirty: {
        label: "Vatra i šapat",
        reaction: "Poetično i tačno.",
        text: "Između vatre i šapata - tu smo mi. Strast i nježnost u savršenom balansu. To je naša melodija."
      },
      funny: {
        label: "Opet kasnim jer sam birala outfit",
        reaction: "HAHA! Autobiografska himna!",
        text: "To bi bio hit! Top lista 40 tjedana. Svaka osoba u vezi bi se pronašla u toj pjesmi."
      }
    },
    nextCardId: "13"
  },
  {
    id: "13",
    chapter: "Poglavlje 5",
    intro: "Escape room mode: aktiviran!",
    question: "Zaključani smo u sobi. Šta je tvoj prvi potez?",
    choiceOrder: ["emotional", "flirty", "funny"],
    responses: {
      emotional: {
        label: "Uhvatim te za ruku - zajedno ćemo naći izlaz",
        reaction: "S tobom bih našao izlaz iz bilo čega.",
        text: "Tim smo. I u escape roomu i u životu. Dok smo zajedno, svaka zagonetka ima rješenje."
      },
      flirty: {
        label: "Tko kaže da želim izaći?",
        reaction: "Hmmm, zaključani sami... ima potencijala!",
        text: "Zašto bismo žurili s izlaskom? Ponekad je ljepše ostati zaključan s pravom osobom nego biti slobodan bez nje."
      },
      funny: {
        label: "Provjeravam ima li WiFi",
        reaction: "Prioriteti na mjestu! Haha!",
        text: "Prvo WiFi, pa onda spašavanje. Trebamo googolati 'kako izaći iz escape rooma'. Ili naručiti dostavu dok čekamo."
      }
    },
    nextCardId: "14"
  },
  {
    id: "14",
    chapter: "Poglavlje 5",
    intro: "Nastavak escape room izazova...",
    question: "Pronašli smo kutiju sa šifrom. Koji broj probaš prvi?",
    choiceOrder: ["flirty", "funny", "emotional"],
    responses: {
      emotional: {
        label: "Datum kad smo se upoznali",
        reaction: "To je i moj odgovor. Kutija se otvara.",
        text: "Neki datumi su upisani u srce. Naš je jedan od njih. I naravno da je to bila šifra - ljubav otvara sve brave."
      },
      flirty: {
        label: "1234 - nekad najjednostavnije rješenje radi",
        reaction: "Hakerski um! Ali ne, nije 1234...",
        text: "Jednostavnost je podcijenjeni superlativ. Ali za neke brave trebaš ključ koji ima samo srce. Probaj ponovo!"
      },
      funny: {
        label: "0000 - jer uvijek zaboravim šifre",
        reaction: "Klasika! Ali kutija se ne otvara!",
        text: "Hahaha, 0000 je šifra za kofere, ne za romantične kutije! Ali tvoj pristup rješavanju problema je... jedinstven."
      }
    },
    nextCardId: "15"
  },
  {
    id: "15",
    chapter: "Poglavlje 5",
    intro: "Zadnji escape room izazov...",
    question: "Našli smo poruku u boci! Šta piše?",
    choiceOrder: ["funny", "flirty", "emotional"],
    responses: {
      emotional: {
        label: "Pravi blago si već našla",
        reaction: "I ti si moje blago.",
        text: "Ponekad tražimo odgovore daleko, a oni su tu - u osobi pored nas. Ti si sve blago koje mi treba."
      },
      flirty: {
        label: "Slijedi zvijezde... i osobu pored tebe",
        reaction: "Zvijezde vode ka tebi. Uvijek.",
        text: "Navigacija po zvijezdama je romantična, ali ja imam bolji kompas - osjećaj koji me uvijek vodi ka tebi."
      },
      funny: {
        label: "Izlaz je bio otključan cijelo vrijeme",
        reaction: "NEEEE! Hahaha, klasični plot twist!",
        text: "Čekaj... znači proveli smo sve ovo vrijeme tražeći izlaz koji je bio otvoren?! Barem smo se zabavili!"
      }
    },
    nextCardId: "16"
  },
  {
    id: "16",
    chapter: "Poglavlje 6",
    intro: "Putovanje u budućnost...",
    question: "Gdje se vidiš sa mnom za 5 godina?",
    choiceOrder: ["emotional", "flirty", "funny"],
    responses: {
      emotional: {
        label: "U toplom domu punom ljubavi",
        reaction: "Gradimo ga zajedno, cigle po cigle.",
        text: "Dom nije mjesto - dom je osjećaj. I s tobom je svako mjesto dom. Jedva čekam da vidim šta ćemo izgraditi."
      },
      flirty: {
        label: "Na plaži, sami, bez briga",
        reaction: "Morski zrak i ti... savršenstvo.",
        text: "Zaslužujemo miris mora, topli pijesak i beskonačne zalaze sunca. I zaslužujemo to zajedno."
      },
      funny: {
        label: "S dva psa i Netflix pretplatom",
        reaction: "Psi, Netflix i ti? Potpisao!",
        text: "Plan je jednostavan ali savršen: dva psa (jedan veliki, jedan mali), neograničen Netflix, i vikend maraton serija. Šta više treba?"
      }
    },
    nextCardId: "17"
  },
  {
    id: "17",
    chapter: "Poglavlje 6",
    intro: "Da li smijem biti iskren?",
    question: "Šta me čini drugačijim od svih ostalih?",
    choiceOrder: ["flirty", "emotional", "funny"],
    responses: {
      emotional: {
        label: "Kako me slušaš kad pričam",
        reaction: "Svaka tvoja riječ mi je važna.",
        text: "Slušanje je najrjeđi dar koji neko može dati. Potpuna pažnja, bez provjere telefona, bez žurbe. To je ljubav u praksi."
      },
      flirty: {
        label: "Hemija koju ne mogu objasniti",
        reaction: "Neke stvari ne trebaju objašnjenje.",
        text: "Nauka može objasniti gravitaciju, ali ne može objasniti zašto me privlačiš ovako jako. I to je u redu."
      },
      funny: {
        label: "Tvoja sposobnost da uvijek nađeš parking",
        reaction: "To JE rijetki talent, priznajem!",
        text: "Dok drugi kruže satima, ja nađem parking u prvom krugu. Supermoć? Možda. Ali hej, to je praktično!"
      }
    },
    nextCardId: "18"
  },
  {
    id: "18",
    chapter: "Poglavlje 6",
    intro: "Hipoteza za dvoje...",
    question: "Da možemo teleportovati se sada, kuda idemo?",
    choiceOrder: ["funny", "emotional", "flirty"],
    responses: {
      emotional: {
        label: "Na mjesto gdje smo se prvi put sreli",
        reaction: "Vratio bih se tamo sa tobom u sekundi.",
        text: "Neka mjesta nose magiju. Mjesto gdje smo se sreli je jedno od njih. Svaki put kad prođem tuda, osjetim leptiriće."
      },
      flirty: {
        label: "Pariz, grad svjetlosti",
        reaction: "Eiffelov toranj, ti i ja... uskoro!",
        text: "Pariz je za ljubavnike, a mi smo definitivno to. Jednog dana ćemo šetati pored Seine i sjetiti se ovog trenutka."
      },
      funny: {
        label: "U krevet, umorna sam",
        reaction: "Hahaha! Najiskreniji odgovor ikad!",
        text: "Zaboravi Pariz i tropska ostrva. Najluksuznija destinacija je topao krevet u nedjelju ujutro. S tobom, naravno."
      }
    },
    nextCardId: "19"
  },
  {
    id: "19",
    chapter: "Poglavlje 7",
    intro: "Iskrenost na djelu...",
    question: "Koja je moja najslađa mana?",
    choiceOrder: ["emotional", "funny", "flirty"],
    responses: {
      emotional: {
        label: "Previše se brineš za druge",
        reaction: "Jer mi je stalo. Posebno do tebe.",
        text: "Brinuti se je moj način da kažem 'volim te'. Možda pretjerujem, ali radije bih pretjerao u brizi nego da propustim da budem tu."
      },
      flirty: {
        label: "Kad se praviš cool, a zapravo si nježan",
        reaction: "Shhh! Čuvaš mi tajnu?",
        text: "Ok, priznato je. Ispod cool fasade je neko ko se topi kad ga ti zagrliš. Ali to ostaje između nas!"
      },
      funny: {
        label: "Tvoja opsesija redom u frižideru",
        reaction: "Frižider MORA biti organiziran!",
        text: "Gledaj, povrće ide u ladicu, mlijeko na vrata, ostaci od ručka na srednju policu. To je SISTEM. Poštuj sistem!"
      }
    },
    nextCardId: "20"
  },
  {
    id: "20",
    chapter: "Poglavlje 7",
    intro: "Duboko udahni...",
    question: "Kad ti je najteže, šta ti treba od mene?",
    choiceOrder: ["flirty", "emotional", "funny"],
    responses: {
      emotional: {
        label: "Samo da budeš tu, tiho, pored mene",
        reaction: "Tu sam. Uvijek.",
        text: "Ponekad riječi nisu potrebne. Dovoljno je znati da nisi sam. I ja ću uvijek biti ta tišina koja grli."
      },
      flirty: {
        label: "Zagrljaj koji traje malo duže nego inače",
        reaction: "Moji zagrljaji nemaju vremensko ograničenje.",
        text: "Zagrljaj je lijek za sve. I moji za tebe uvijek traju toliko koliko ti treba - plus malo više, za svaki slučaj."
      },
      funny: {
        label: "Donesi čokoladu i ne postavljaj pitanja",
        reaction: "Čokolada je na putu! Zero pitanja!",
        text: "Razumijem zadatak: čokolada, ćutanje, prisutnost. To je formular koji sam savladao. Bonus: dobijaš i čaj."
      }
    },
    nextCardId: "21"
  },
  {
    id: "21",
    chapter: "Poglavlje 7",
    intro: "Malo igre uloga...",
    question: "Da sam superheroj, koja bi bila moja supermoć?",
    choiceOrder: ["funny", "flirty", "emotional"],
    responses: {
      emotional: {
        label: "Moć da liječiš tugu jednim dodirom",
        reaction: "Kad bih mogao, koristio bih je samo za tebe.",
        text: "Nažalost, nemam supermoć. Ali imam dvije ruke za zagrljaj i srce koje te voli. I to je blizu dovoljno."
      },
      flirty: {
        label: "Moć da zaustaviš vrijeme kad smo zajedno",
        reaction: "Svaki trenutak s tobom je prekratak.",
        text: "Da mogu zaustaviti vrijeme, zaustavio bih ga u svakom trenutku koji provedemo zajedno. Jer nikad nije dovoljno."
      },
      funny: {
        label: "Moć da uvijek pogodi šta želiš za večeru",
        reaction: "TO bi bila najkorisnija supermoć IKAD!",
        text: "Zamislite: 'Šta ćemo večeras?' i ja ODMAH znam odgovor. Spašavamo 45 minuta diskusije dnevno. Nobelova nagrada!"
      }
    },
    nextCardId: "22"
  },
  {
    id: "22",
    chapter: "Poglavlje 8",
    intro: "Prepolovili smo igru! Bravo!",
    question: "Kako ti se sviđa ova igra do sad?",
    choiceOrder: ["emotional", "flirty", "funny"],
    responses: {
      emotional: {
        label: "Svaka kartica me nasmije ili rasplače",
        reaction: "To je i bio cilj - da osjetiš.",
        text: "Ova igra je ogledalo naše veze. Svaka kartica je mali prozor u ono što dijelimo. I to je najljepše."
      },
      flirty: {
        label: "Ne mogu prestati čitati!",
        reaction: "Drago mi je... nastavak je još bolji!",
        text: "Ovo je tek pola! Druga polovina donosi još više iznenađenja, emocija i smijeha. Spremi se!"
      },
      funny: {
        label: "Šta je sljedeće, kviz iz matematike?",
        reaction: "2+2 = ti i ja! Eto, prošla si!",
        text: "Haha, obećavam da nema matematike. Ali ima još puno pitanja, smijeha i možda koji plot twist!"
      }
    },
    nextCardId: "23"
  },
  {
    id: "23",
    chapter: "Poglavlje 8",
    intro: "Tajne, tajne...",
    question: "Koja je tvoja tajna želja za nas dvoje?",
    choiceOrder: ["flirty", "emotional", "funny"],
    responses: {
      emotional: {
        label: "Da nikad ne prestanemo pričati ovako",
        reaction: "Razgovor je kisik naše veze.",
        text: "Dok pričamo, živimo. Dok slušamo, volimo. Obećavam ti da ću uvijek imati vrijeme za naše razgovore."
      },
      flirty: {
        label: "Iznenadi me nečim - ne kažem čim!",
        reaction: "Iznenađenja su u pripremi... strpljenje!",
        text: "Volim iznenađenja koliko i ti. I obećavam da ću nastaviti da te iznenađujem - kad najmanje očekuješ."
      },
      funny: {
        label: "Da konačno naučiš plesati!",
        reaction: "Hej! Moj ples je... jedinstven!",
        text: "Ok, priznajem da moji plesni pokreti nisu za MTV. Ali dok te nasmiju, mislim da rade savršeno!"
      }
    },
    nextCardId: "24"
  },
  {
    id: "24",
    chapter: "Poglavlje 8",
    intro: "Zamišljamo zajedno...",
    question: "Da gradimo kuću od nule, šta je MUST HAVE?",
    choiceOrder: ["funny", "emotional", "flirty"],
    responses: {
      emotional: {
        label: "Veliki prozor s pogledom na zalazak sunca",
        reaction: "Gledat ćemo ih zajedno svaku večer.",
        text: "Zamisliti zajedničku kuću je zamisliti zajedničku budućnost. I u njoj, najljepši detalj je pogled koji dijelimo."
      },
      flirty: {
        label: "Ogromnu kadu za dvoje",
        reaction: "Sad pričamo! S mjehurićima?",
        text: "Velika kada, svijeće, i apsolutno nikakva žurba. To je naš mali raj u vlastitom domu."
      },
      funny: {
        label: "Tajnu sobu za grickalice",
        reaction: "GENIJALNO! S automatom za kokice!",
        text: "Tajna soba puna čipsa, čokolade i kokica. Sa zaključavanjem na otisak prsta. I kauč. I TV. Ok, to je drugi dnevni boravak."
      }
    },
    nextCardId: "25"
  },
  {
    id: "25",
    chapter: "Poglavlje 9",
    intro: "Približavamo se kraju, ali emocije rastu...",
    question: "Šta bi mi rekla da imam samo 60 sekundi da te slušam?",
    choiceOrder: ["emotional", "flirty", "funny"],
    responses: {
      emotional: {
        label: "Hvala ti što postojiš u mom životu",
        reaction: "Ti si razlog zašto sve ima smisla.",
        text: "60 sekundi je premalo za sve što osjećam. Ali ovo je dovoljno: ti si najbolja stvar koja mi se desila."
      },
      flirty: {
        label: "Ne puštaj me nikad",
        reaction: "Nikad. To je obećanje.",
        text: "Tri riječi, ali nose težinu svemira. Ne puštam te. Ni danas, ni sutra, ni ikad."
      },
      funny: {
        label: "Zapravo trebam 5 minuta, ne 60 sekundi",
        reaction: "Haha! Za tebe, neograničeno vrijeme!",
        text: "Evo, ukidam tajmer. Govori koliko hoćeš, slušam te. Doslovno - uvijek imam vrijeme za tebe."
      }
    },
    nextCardId: "26"
  },
  {
    id: "26",
    chapter: "Poglavlje 9",
    intro: "Muzički kutak...",
    question: "Koja pjesma te podsjeti na nas?",
    choiceOrder: ["flirty", "funny", "emotional"],
    responses: {
      emotional: {
        label: "Nešto tiho i duboko, kao naša veza",
        reaction: "Pusti je. Plesat ćemo u dnevnom boravku.",
        text: "Najljepše pjesme su one koje te podsjete na nekoga. I svaka tiha melodija me vodi natrag ka tebi."
      },
      flirty: {
        label: "Nešto sa bass-om i energijom!",
        reaction: "Naša energija je zarazna!",
        text: "Između nas nikad ne fali energije. Svaki dan je novi beat, nova avantura, novi razlog za ples."
      },
      funny: {
        label: "Macarena, naravno",
        reaction: "HEEEY MACARENA! Haha, zašto?!",
        text: "Ne znam kako smo od romantične igre došli do Macarene, ali ovdje smo i sviđa mi se! Heeey!"
      }
    },
    nextCardId: "27"
  },
  {
    id: "27",
    chapter: "Poglavlje 9",
    intro: "Iskrenost bez filtera...",
    question: "Šta nikad ne želiš da se promijeni kod nas?",
    choiceOrder: ["funny", "emotional", "flirty"],
    responses: {
      emotional: {
        label: "Kako se osjećam sigurno s tobom",
        reaction: "Čuvat ću tu sigurnost kao najveće blago.",
        text: "Sigurnost u vezi je svetinja. I obećavam ti da ću uvijek raditi na tome da se osjećaš voljeno i zaštićeno."
      },
      flirty: {
        label: "Iskra između nas",
        reaction: "Ta iskra ne gasi se nikad.",
        text: "Vatra se mora održavati, ali naša iskra je drugačija - što duže gorimo, to smo jači. To je naša magija."
      },
      funny: {
        label: "Naše unutrašnje šale koje niko ne razumije",
        reaction: "Tajni jezik: aktiviran zauvijek!",
        text: "Naše inside jokes su svetinja. Pogled, jedna riječ, i oboje se smijemo dok svi ostali gledaju zbunjeno. Savršeno!"
      }
    },
    nextCardId: "28"
  },
  {
    id: "28",
    chapter: "Poglavlje 10",
    intro: "Posljednje poglavlje... ali ne i kraj.",
    question: "Da ti pišem pismo, kako bi počelo?",
    choiceOrder: ["emotional", "flirty", "funny"],
    responses: {
      emotional: {
        label: "Draga moja, ovo sam trebao napisati odavno...",
        reaction: "I evo ga... iz srca.",
        text: "Neka pisma se pišu godinama u glavi prije nego što dođu na papir. Ovo je jedno od njih. Svaka riječ je iskrena."
      },
      flirty: {
        label: "Hej ti, da, ti s tim osmijehom...",
        reaction: "Uvijek ću te oslovljavati s osmijehom.",
        text: "Od svih ljudi na svijetu, tvoj osmijeh je onaj koji tražim. I svaki put kad ga vidim, znam da sam na pravom mjestu."
      },
      funny: {
        label: "HITNO: Pročitaj dok je čokolada još topla",
        reaction: "Haha! Uz pismo ide i čokolada, naravno!",
        text: "Svako pismo treba pratiti čokolada. To je zakon. Moj zakon. I ti si ga upravo odobrila."
      }
    },
    nextCardId: "29"
  },
  {
    id: "29",
    chapter: "Poglavlje 10",
    intro: "Pred sam kraj...",
    question: "Šta je najvažnija stvar koju si naučila iz ove igre?",
    choiceOrder: ["flirty", "emotional", "funny"],
    responses: {
      emotional: {
        label: "Da nas male stvari čine velikima",
        reaction: "Male stvari, veliki osjećaji.",
        text: "Ova igra je dokaz da ne trebaju veliki gestovi da pokažeš ljubav. Trebaju pažnja, trud i QR kodovi. Ok, možda ne QR kodovi, ali prvih dvoje sigurno."
      },
      flirty: {
        label: "Da si pun iznenađenja",
        reaction: "A tek šta sve planiram...",
        text: "Iznenađenja ne prestaju ovdje. Ovo je samo početak. Imam još toliko toga za podijeliti s tobom."
      },
      funny: {
        label: "Da previše vremena provodiš za kompjuterom",
        reaction: "Hej, ovo sam pravio ZA TEBE!",
        text: "Ok, DA, proveo sam sate praveći ovo. Ali svaka sekunda je bila posvećena tebi. Uračunaj to u romantiku!"
      }
    },
    nextCardId: "30"
  },
  {
    id: "30",
    chapter: "Poglavlje 10",
    intro: "Ovo je posljednja kartica. Ali naša priča tek počinje...",
    question: "Kako završavamo ovu avanturu?",
    choiceOrder: ["emotional", "funny", "flirty"],
    responses: {
      emotional: {
        label: "Sa suzom sreće i zagrljajom",
        reaction: "Dođi tu. Zagrljaj čeka.",
        text: "Svaka stranica ove sveske je dio naše priče. Hvala ti što si je prošla do kraja. Volim te - i to nikad neće biti posljednja kartica."
      },
      flirty: {
        label: "Ovo nije kraj, nego nastavak...",
        reaction: "Sezona 2 je u pripremi!",
        text: "Kraj? Kakav kraj? Ovo je tek uvod u sve avanture koje nas čekaju. Spremi se za sequel!"
      },
      funny: {
        label: "Sa pitanjem: ima li još kartica?!",
        reaction: "Za sad ne, ali... ko zna?",
        text: "Zvanično: ovo je posljednja kartica. Nezvanično: nikad ne reci nikad. Možda se ova sveska jednog dana nastavi. A do tada - volim te, ludačo!"
      }
    },
    nextCardId: null
  }
];

function getCard(id) {
  return cards.find(c => c.id === id) || null;
}

function getAllCards() {
  return cards;
}

module.exports = { getCard, getAllCards };
