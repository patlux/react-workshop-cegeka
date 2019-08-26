# React Basics Cegeka Workshop ![Node CI](https://github.com/patlux/react-workshop-cegeka/workflows/Node%20CI/badge.svg) [![CircleCI](https://circleci.com/gh/patlux/react-workshop-cegeka.svg?style=svg&circle-token=26dad7dcf2b6ed73116c4a6cb9b1ba7980607e5f)](https://circleci.com/gh/patlux/react-workshop-cegeka)

## Willkommen

In diesem Workshop werden wir folgendes zusammen lernen:

- Aufsetzen eines neuen Projekts mit [npm](https://www.npmjs.com/)
- Abhängigkeiten wie z.B. `react` mit `npm` installieren
- Die Basics von [React](https://reactjs.org/): Components, JSX, Props & State, Event-Handling
- Anbindung einer REST-Schnittstelle
- Testing

## System Requirements

- [git](https://git-scm.com/)
- [Nodejs-Laufzeitumgebung](https://nodejs.org/)

Die o.g. Abhängigkeiten müssen alle in der `PATH` Variable eures Systems vorhanden sein.
Um zu überprüfen, ob dass der Fall ist, führe folgende Befehle auf deiner Konsole aus:

```bash
git --version
node --version
npm --version
```

Wenn du Probleme damit hast, dann schau dir am besten an, wie neue Einträge zur `PATH` hinzugefügt werden können für [Windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/) oder [MacOS/Linux](http://stackoverflow.com/a/24322978/971592).

## Setup

```
git clone -b step-01 https://github.com/patlux/react-workshop-cegeka.git
cd react-workshop-cegeka
```

Der Ordner wird leer sein. Keine Sorge, das ist Absicht. :)

### Schritt wechseln

Der Workshop ist in einzelne Schritt aufgeteilt, dadurch wird es nötig sein, dass nach erfolgreichen Absolvieren eines Schrittes, du zum nächsten Schritt wechseln musst.

Um zum Beispiel von Schritt 1. zu Schritt 2. zu gelangen, führe folgenden Befehl auf deiner Konsole aus:

```
git checkout step-02
```

Oder wähle in deiner git-Oberfläche den Wechsel zum jeweiligen Schritt durch.

## Project

#### Abhängigkeiten installieren:

```bash
npm install
```

#### Anwendung starten:

```bash
npm start
```

##### API_URL

Die Anwendung akzeptiert (optional) die Umgebungsvariable `API_URL`. Diese definiert, an welchen Endpunkt die REST-Schnittstelle aufgerufen wird.

```bash
API_URL=http://localhost:8080 npm start
```

Ohne Angabe von `API_URL` laufen die API-Anfragen über den gleichen Host wie die Frontend-Anwendung. => `http://localhost:1234/api`

#### Anwendung öffnen im Browser:

http://localhost:1234

#### Tests starten:

```bash
npm start
```

## Troubleshooting

#### CORS

```
Access to fetch at 'http://localhost:8080/api/time/timezones' from origin 'http://localhost:1234' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

Wenn die Umgebungsvariable `API_URL` angegeben wurde, muss die REST-Schnittstelle die `CORS`-Header setzen, um Anfragen anderer Domains zu akzeptieren.


#### API-Anfragen weiterleiten (Proxy)

Ohne Angabe von `API_URL` laufen die API-Anfragen über den gleichen Host wie die Frontend-Anwendung. => `http://localhost:1234/api`.

Um alle Anfragen an `/api` an den REST-Endpunkt weiterzuleiten, kann das Tool [http-proxy-cli](https://github.com/foss-haas/http-proxy-cli) verwendet werden.

Das Tool kann wie folgt installiert werden:

```bash
npm install -g http-proxy-cli
```

Danach kann der Proxy-Server mit folgender Konfiguration gestartet werden:

```bash
http-proxy -p 1235 /api=localhost:8080/api 1234
```

Beschreibung:

Wir gehen davon aus, dass das Backend auf `localhost:8080` hört.

Der Proxy-Server wird auf Port `1235` gestartet und leitet alle Anfragen an Port `1234` weiter.
Desweiteren werden alle Anfragen an `/api` nach `localhost:8080/api` weitergeleitet.
