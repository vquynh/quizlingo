# Patterns and Frameworks (TH Lübeck W21/22) - Gruppe J
# Projekt: quizlingo 
[![Build and deploy to Heroku](https://github.com/vquynh/quizlingo/actions/workflows/deploy-to-heroku.yml/badge.svg)](https://github.com/vquynh/quizlingo/actions/workflows/deploy-to-heroku.yml)

In unserem Multiplayer-Game möchten wir den Lernprozess der französischen Sprache spielerisch vorantreiben. Als User kann ich die App nutzen, um gegen andere Spielenden aus der Welt oder Leute aus dem Bekanntenkreis anzutreten und mein Wissen in Sachen Wortschatz und Grammatik unter Beweis stellen. Dabei sollen beide Spieler gleichzeitig an einer Spielrunde teilnehmen können und auf Schnelligkeit die Fragen aus unterschiedlichen Kategorien beantworten. Die Fragen umfassen mehrere Disziplinen, wie zum Beispiel das Hörverständnis oder Grammatik in mehreren Schwierigkeitsstufen. Die Mitspielenden erhalten sofort das Feedback ihres Mitspielenden und können ihren gemeinsamen Lernfortschritt beurteilen.

## Autoren
- Jörn Kogerup	
- Thi Viet Quynh Nguyen

## Installation 
Voraussetzung: Docker-Desktop
- Falls noch nicht installiert, [Docker-Desktop](https://www.docker.com/get-started) herunterladen und installieren. 
Nach der Installation Docker Version prüfen mit dem Befehl ```docker version```
- Repository klonen mit ```git clone git@github.com:vquynh/quizlingo.git```
- Im Hauptverzeichnis ```docker-compose up``` ausführen und warten bis die Services gestartet sind. 
Beim ersten Installieren könnte es bis zu 7 Minuten dauern. Wenn fertig, kann das Backend unter http://localhost:8080 erreicht werden.
- Eine API Dokumentation ist unter http://localhost:8080/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config zu finden

## Architekturdiagramm
![alt text](diagram/architecture%20diagram.png "architecture diagram")

## Klassendiagramm
![alt text](diagram/class%20diagram.png "class diagram")
*Klassendiagramm der Entitäten*

![alt text](diagram/Class%20diagram%20with%20controllers%20and%20repositories.png "class diagram extended")
*Provisorisches Klassendiagramm des Java Web Servers mit Controllern, Data Entitäten und Repositories*
