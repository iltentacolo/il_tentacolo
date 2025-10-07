# Il Tentacolo 🐙

Sito web per la rivista aperiodica "Il Tentacolo" degli anni '80.

## Descrizione

Questo progetto ricrea digitalmente l'esperienza della rivista aperiodica "Il Tentacolo", pubblicata negli anni '80 da Francesco e il suo amico. Il sito cattura lo spirito vintage dell'epoca con un design ispirato all'estetica cyberpunk e synthwave degli anni '80.

## Caratteristiche

- **Design Vintage**: Stile visivo ispirato agli anni '80 con colori neon e gradienti
- **Navigazione Semplice**: Menu intuitivo con React Router
- **Responsive**: Ottimizzato per desktop e mobile
- **Contenuti Storici**: Pagine dedicate alla storia della rivista e ai numeri pubblicati

## Tecnologie Utilizzate

- **React 18** - Framework frontend
- **React Router** - Navigazione tra pagine
- **Vite** - Build tool e dev server
- **CSS3** - Styling con gradienti e animazioni

## Installazione e Avvio

1. Installa le dipendenze:
```bash
pnpm install
```

2. Avvia il server di sviluppo:
```bash
pnpm dev
```

3. Apri il browser su `http://localhost:3000`

## Script Disponibili

- `pnpm dev` - Avvia il server di sviluppo
- `pnpm build` - Crea la build di produzione
- `pnpm preview` - Anteprima della build di produzione

## Struttura del Progetto

```
src/
├── components/          # Componenti riutilizzabili
│   ├── Header.jsx      # Header con navigazione
│   └── Footer.jsx      # Footer del sito
├── pages/              # Pagine principali
│   ├── Home.jsx        # Homepage
│   ├── About.jsx       # Chi siamo
│   ├── Issues.jsx      # Numeri della rivista
│   └── Contact.jsx     # Contatti
├── App.jsx             # Componente principale
├── main.jsx           # Entry point
└── index.css          # Stili globali
```

## Stile e Design

Il design del sito è ispirato all'estetica degli anni '80:
- **Colori**: Gradienti dal blu scuro al rosso neon (#1a1a2e, #e94560, #f27121)
- **Font**: Courier New per mantenere un look retrò
- **Effetti**: Ombre colorate, animazioni hover, gradienti
- **Layout**: Card-based con bordi colorati e effetti di profondità

## Contributi

Questo progetto è un tributo nostalgico agli anni '80. Se hai ricordi o materiale relativo alla rivista originale, saremmo felici di includerlo nel sito.

---

*Creato con nostalgia per gli anni '80* 🎵✨
