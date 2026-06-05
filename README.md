# 🌍 FIFA Weltmeisterschaft 2026 - Website

Eine interaktive Website zur FIFA Weltmeisterschaft 2026 mit umfangreichen Features zur Verwaltung und Anzeige aller Spiele.

## ✨ Features

### 🔍 Suchfunktion
- Suche nach **Teamnamen** (z.B. "Deutschland", "Brasilien")
- Suche nach **Datum** (z.B. "2026-06-15")
- Suche nach **Stadion** oder **Ort** (z.B. "MetLife", "Dallas")
- Echtzeit-Filterung während der Eingabe

### ❤️ Favoritensystem
- Markiere deine Lieblingsspiele mit einem Herz-Button
- Zeige nur deine Favoriten an, indem du auf das Herz in der Kopfleiste klickst
- Favoriten werden lokal gespeichert (Browser-Speicher)
- Zähler zeigt die Anzahl deiner Favoriten

### 🎨 Anpassbare Einstellungen
Öffne das Einstellungsmenü (⚙️-Button) um folgende Farben anzupassen:
- 🎨 **Hintergrundfarbe** - Gesamter Seitenhintergrund
- 📦 **Kartenfarbe** - Farbe der Spielkarten
- 📍 **Kopfleistenfarbe** - Farbe der oberen Navigation
- ✍️ **Textfarbe** - Farbe des Textes

Die Einstellungen werden automatisch gespeichert!

### 📊 Spielanzeige
Jede Spielkarte enthält:
- 🏆 **Turnierphase** (Gruppenphase, Achtelfinale, etc.) und Gruppe
- 🚩 **Teams mit Flaggen-Emojis** auf beiden Seiten
- 📅 **Datum** (deutsche Formatierung)
- ⏰ **Uhrzeit**
- 📍 **Stadion** mit voller Adresse

## 🎯 Alle Spiele

Die Website enthält Spiele aus verschiedenen Phasen:
- **Gruppenphase** - 16 Gruppenspiele mit Gruppenzuordnung
- **Achtelfinale** - K.O.-Phase
- **Viertelfinale** - Vier verbleibende Teams
- **Semifinale** - Die beiden finalen Duelle
- **Finale** - Das Meisterschaftsspiel

## 🌎 Spielorte

Die WM 2026 findet in **drei Ländern** statt:

### 🇺🇸 USA (11 Stadien)
- MetLife Stadium, New Jersey
- AT&T Stadium, Dallas
- Arrowhead Stadium, Kansas City
- Mercedes-Benz Stadium, Atlanta
- Hard Rock Stadium, Miami
- NRG Stadium, Houston
- Empower Field, Denver
- Lumen Field, Seattle
- SoFi Stadium, Los Angeles
- Allegiant Stadium, Las Vegas
- State Farm Stadium, Phoenix

### 🇲🇽 Mexiko (3 Stadien)
- Estadio Jalisco, Guadalajara
- Estadio Azteca, Mexico City
- Estadio BBVA, Monterrey

### 🇨🇦 Kanada (2 Stadien)
- BMO Field, Toronto
- BC Place, Vancouver

## 🏳️ Teilnehmende Teams (32)

Die Website unterstützt alle 32 teilnehmenden Teams mit:
- Vollständiger deutscher Name
- Flaggen-Emoji für schnelle Erkennung

Beispiele: 🇩🇪 Deutschland, 🇧🇷 Brasilien, 🇬🇧 England, 🇫🇷 Frankreich, 🇦🇷 Argentinien, uvm.

## 💾 Datenspeicherung

- **Favoriten**: Werden im Browser-LocalStorage gespeichert
- **Einstellungen**: Farbeinstellungen werden automatisch gespeichert
- **Keine Server erforderlich**: Alles läuft lokal im Browser

## 📱 Responsive Design

Die Website funktioniert perfekt auf:
- 💻 Desktop-Computern
- 📱 Tablets
- 📲 Smartphones

## 🚀 Verwendung

1. Öffne die `index.html` Datei im Browser
2. Stöbere durch alle Spiele oder nutze die Suchfunktion
3. Klicke auf das Herz 🤍 um Spiele zu Favoriten hinzuzufügen
4. Klicke auf das Herz in der Kopfleiste um nur deine Favoriten anzuzeigen
5. Klicke auf ⚙️ um die Farben anzupassen

## 📁 Dateienstruktur

```
DustinWM/
├── index.html          # Hauptseite (HTML-Struktur)
├── styles.css          # Styling & Design
├── data.js             # Alle Spieldaten, Teams und Stadien
├── app.js              # Hauptanwendungslogik
└── README.md           # Diese Datei
```

## 🛠️ Technologie

- **HTML5** - Struktur
- **CSS3** - Styling mit CSS-Variablen für Farbwechsel
- **JavaScript (ES6+)** - Interaktivität und Logik
- **LocalStorage API** - Persistente Datenspeicherung

## 🎉 Viel Spaß!

Genießt die WM 2026 und organisiert eure Lieblingsspiele mit dieser Website! ⚽🏆

---

**Erstellt mit ❤️ für WM-Fans**