# Übungsaufgabe: React, Node Express und Mongo Atlas

In dieser Übungsaufgabe sollen Sie eine Anwendung entwickeln, die die folgenden Themen abdeckt: React, Node Express Server und Mongo Atlas. Die App soll in der Lage sein, Daten zu speichern, zu laden und zu filtern.

## Backend

1. erzeuge einen Server Datei und initialisiere das Projekt, damit du express, mongo, nodemon und cors installieren kannst. Denke daran, dass nodemon nicht unter den normalen dependencises stehent sollte ;)
2. Erstelle das Grundgerüst eines Express Servers
3. Erstelle eine API für die Homeroute ('/'), die die Nachricht "Hallo World" ausgibt (überprüfen im Browser)
4. Erstelle zwei POST API´s ('login') und ('register') mit console.log("Login/Register" req.body.username)
5. Teste ob deine API´s soweit ansprechbar sind mit Thunder-Client
6. KÜMMERE DICH NUN UM DAS FRONTEND!!!
7. Nachdem dein Frontend erfolgreich mit dem Backend kommunizieren kann verknüpfe dein Backend mit der Datenbank.
8. Baue die nötigen Controller auf:

- /register => Beim registrieren soll in der Datenbank geschaut werden ob die Email Adresse bereits vorhanden ist, wenn nicht soll der User angelegt werden.
- /login => Auch beim Loginversuch soll überprüft werden ob die Email vorhanden ist, wenn der User vorhanden ist vergleiche die Passwörter miteinander.

9. Register sollte eine Nachricht an das Frontend senden

- Success: {registerMessage: "Der Account wurde erfolgreich angelegt!"}
- Fail: {registerMessage: "Es scheint bereits einen Account mit dieser Email zu geben."}

10. Login sollte eine Nachricht an das Frontend senden (Finde einen passenden CODE 400+)

- Success: {staus: 200}
- Fail: {staus: [CODE](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses)}

**Benötigste Techniken:**

- express
- mongoDB (connect, schemas)

**BONUSAUFGABE**

Das Thema Security ist ein wichtiges Thema um Passwörter und andere sensiblen Userdaten zu schützen. Ein kleiner, aber sehr wichtiger Schritt, im Punkt Sicherheit ist das npm package bcrypt. Mit bcrypt lass sich passwörter hashen (verschlüsseln), wodurch bei eienm Daten-Leck keine Klarpasswörter in Umlauf kommen.

1. Informiere dich über bcrypt

- [npm bcrypt](https://www.npmjs.com/package/bcrypt)
- webDev Webseite
- [Github bcrypt](https://github.com/dcodeIO/bcrypt.js/blob/master/README.md)

2. Leere die Datenbank, dass keine User mehr mit Klarpasswörtern enthalten sind
3. Baue eine bcrypt Funktion auf zum Vergleichen und verschlüsseln des Passwortes
4. Registriere ein paar User mit hashed Passwort

**Benötigste Techniken:**

- bcrypt

## Frontend

1. Erzeuge ein neues React-Projekt (create vite@latest)
2. Erstelle zwei Components mit je einem Form für Login und Register
3. Erstelle eine Fetch Funktion, die in beiden Components verwenden kann (props können helfen)
4. Lese die Daten aus den Inputs aus

- register: username, password & email
- login: email & password

5. Teste ob die Daten nach dem Fetch im Backend ankommen.
6. Gebe die Daten aus dem Backend im Frontend aus (extra Komponents)

**Benötigste Techniken:**

- react
- fetch
- useState/useEffect
- router

Viel Erfolg bei der Bearbeitung der Aufgaben!
