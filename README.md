# React Basics Cegeka Workshop [![CircleCI](https://circleci.com/gh/patlux/react-workshop-cegeka.svg?style=svg)](https://circleci.com/gh/patlux/react-workshop-cegeka)

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

Dadurch dass der Workshop in einzelne Schritt aufgeteilt ist, wird es nötig sein, dass du nach erfolgreichen Absolvieren des aktuellen Schrittes zum nächsten Schritt wechseln solltest.

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

#### Anwendung öffnen im Browser:

http://localhost:1234

#### Tests starten:

```bash
npm start
```

## Troubleshooting

#### CORS

