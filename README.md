# AG-Spiel Statistiken

Dieses Projekt sammelt und visualisiert öffentlich zugängliche Daten des [AG-Spiels](www.ag-spiel.de) bzw. von Userprojekten des AG-Spiels.

Ziel ist es, dass dieses Projekt zukünftig Daten verschiedener Userprojekte auf einer Website bündelt und visualisiert.

Gebaut mit [VueJS](www.vuejs.org) und über [github-pages](https://pages.github.com/) gehosted.

Damit das Hosting dieses Projektes möglichst unabhängig und dezentralisiert möglich ist, wurde Github-Pages als Hosting-Dienst gewählt. So können auch andere Entwickler dieses Projekt mit wenig Aufwand forken, weiterentwicklen und selbst hosten, ohne das dabei laufende Kosten anfallen. 

## Inhaltsverzeichnis
- [AG-Spiel Statistiken](#ag-spiel-statistiken)
  - [Inhaltsverzeichnis](#inhaltsverzeichnis)
  - [Funktionsumfang](#funktionsumfang)
  - [Contributing](#contributing)
  - [Limitierungen](#limitierungen)

## Funktionsumfang
- Treemap aller Indizes (nach MK, BW, Aktien, Anleihen, Krediten, Bargeld)
- Treemap aller AGs (nach MK, BW, Aktien, Anleihen, Krediten, Bargeld)
- Liste aller Indizes (seit Aufzeichnungsbeginn am 16.09.2019)
- Liste aller AGs (seit Aufzeichnungsbeginn am 17.02.2019)
- **AG-Statistiken:**
  - Entwicklung BW/Aktie und Kurs/Aktie
  - Depot Entwicklung (Aktien, Bargeld, Anleihen, Kredite, Zertis)
  - Orderbuch-Entwicklung (Sell-/Buy-Orders)
  - Handelsaktivität-Entwickung
  - AGSX-P.-Entwicklung
- **Index-Statistiken:**
  - Entwicklung des summierter Buchwert und Börsenwert je Index
  - Entwicklung aller summierten Depots im Index(Aktien, Bargeld, Anleihen, Kredite, Zertis)
  - Entwicklung aller summierten Orderbücher im Index (Sell-/Buy-Orders)
- **Marktweite Statistiken:**
  - Entwicklung von verschiedenen Kennzahlen (Marktkapitalisierung, BW, BBW, SW, FP)
  - Entwicklung aller Depots (Aktien, Anleihen, Kredite, Zertis, Bargeld, Nettcash)
  - Entwicklung aller Orderbücher (Sell- und Buy-Orders, Bargeld)
  - Entwicklung des Übernahmeschutzes und der Spielerzahl
  - Entwickung der Anzahl an Premiumspieler (Premium, Kein Premium, Gold-P., Silber-P., Spieleranzahl)

## Contributing
1. Projekt Setup: `npm install`
2. Development compiling: `npm run serve`
3. Production compiling: `npm run build`
4. Run Unittests: `npm run test:unit` (noch nicht implementiert)
5. Run e2e-tests: `npm run test:e2e` (noch nicht implementiert)
6. Check linting: `npm run lint`


## Limitierungen
Um das kostenlose und einfache hosten der App über Github-Pages zu ermöglichen, wurde eine Singlepage-App mit VueJS erstellt. Einer der Nachteile von SPAs ist jedoch eine etwas schlechtere Performance, die auch nochmal verstärkt durch das jeweilige Endgerät beeinträchtigt werden kann. 
