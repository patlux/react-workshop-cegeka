# React Basics Cegeka Workshop ![Node CI](https://github.com/patlux/react-workshop-cegeka/workflows/Node%20CI/badge.svg)

[Live Demo](https://react-demo-api.herokuapp.com/)

## Willkommen

In diesem Workshop werden wir folgendes zusammen lernen:

- Projekt aufsetzen mit [create-react-app](https://github.com/facebook/create-react-app)
- Grundlegende [React](https://reactjs.org/)-Kenntnisse:
- - Components
- - JSX
- - Props
- - State & Hooks
- - Event-Handling
- - Hooks
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

#### Entwicklungsmodus starten:

```bash
npm run dev
```

> Falls sich der Browser nicht automatisch öffnet, kannst du die Adresse http://localhost:3000 manuell aufrufen

#### Anwendung kompilieren:

```bash
npm run build
```

#### Server für die kompilierte Anwendung starten:

> Die Anwendung muss vorher mittels `npm run build` kompiliert werden

```bash
npm start
```

##### REACT_APP_API_URL

Die Anwendung akzeptiert (optional) die Umgebungsvariable `REACT_APP_API_URL`. Diese definiert, an welchen Endpunkt die REST-Schnittstelle aufgerufen wird.

```bash
REACT_APP_API_URL=http://localhost:8080 npm start
```

Ohne Angabe von `REACT_APP_API_URL` laufen die API-Anfragen über den gleichen Host wie die Frontend-Anwendung. => `http://localhost:3000/api`

## Troubleshooting

#### CORS

```
Access to fetch at 'http://localhost:8080/api/time/timezones' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

Wenn die Umgebungsvariable `REACT_APP_API_URL` angegeben wurde, muss die REST-Schnittstelle die `CORS`-Header setzen, um Anfragen anderer Domains zu akzeptieren.

#### API-Anfragen weiterleiten (Proxy)

Ohne Angabe von `REACT_APP_API_URL` laufen die API-Anfragen über den gleichen Host wie die Frontend-Anwendung. => `http://localhost:3000/api`.

Um alle Anfragen die an `/api` gehen, an einen anderen Endpunkt weiterzuleiten, kann ein Eintrag in die `package.json` hinzugefügt werden. Hierzu einfach wie folgt vorgehen:

```diff
+  "proxy": "https://api.example.com",
```

Mit dem o.g. Eintrag werden alle Anfragen an `/api` nach `https://api.example.com` weitergeleitet.
