import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function IssueDetail() {
  const { issueNumber } = useParams()
  const [currentPage, setCurrentPage] = useState(1)
  const [isScrolled, setIsScrolled] = useState(false)

  // Dati degli issues con le date corrette
  const issues = [
    { number: "ZERO", date: "13 gennaio 1989" },
    { number: "UNO", date: "17 Gennaio 1989" },
    { number: "DUE", date: "30 Gennaio 1989" },
    { number: "TRE", date: "20 Marzo 1989" },
    { number: "CINQUE", date: "15 Gennaio 1990" },
    { number: "SEI", date: "15 Novembre 1990" },
    { number: "SETTE", date: "inizio Febbraio 1991" },
    { number: "OTTO", date: "8 Febbraio 1991" },
    { number: "NOVE", date: "8 Marzo 1991" },
    { number: "DIECI", date: "Marzo 1991" },
    { number: "UNDICI", date: "21 Marzo 1991" },
    { number: "DODICI", date: "30 Giugno 1991" },
    { number: "TREDICI", date: "1 Luglio 1991" },
    { number: "QUINDICI", date: "1 Gennaio 1992" },
    { number: "SEDICI", date: "8 Luglio 1992" },
    { number: "DICIASSETTE", date: "16 Aprile 1993" },
    { number: "VENTI", date: "10 Luglio 1993" },
  ]

  // Note di fondo per ogni issue (supporto HTML)
  const issueNotes = {
    "ZERO": [
      "Duilio Arcante era il mio pseudonimo e Salvo Rocchetti quello di Mimmo."
    ],
    "UNO": [
      "Oltre ai soliti Duilio Arcante e Salvo Rocchetti, appaiono Guido Rombolà (Mimmo) e Rino Bozzi (io). Gli altri testi sono scritti a quattro mani."
    ],
    "DUE": [
      "Oltre a Duilio Arcante e Salvo Rocchetti appaiono Ennio De Petris (Mimmo) e Andrea Duse (io). Il resto è scritto a quattro mani."
    ],
    "TRE": [
      "Oltre ai soliti Duilio Arcante e Salvo Rocchetti appare Angiolo Burlandi (Mimmo). Hermann Hesse è Hermann Hesse."
    ],
    "CINQUE": [
      "A parte Salvo Rocchetti, gli altri testi sono scritti sono citazioni vere, eccetto quella di Demonoco (che voleva suonare ingannevolmente come Demódoco) che è inventata di sana pianta."
    ],
    "SEI": [
      "Questa copia è una versione in lavorazione, come può capirsi dalla nota nel primo testo, che suggerisce di modificare il testo 'un cielo da volarci dentro vestiti' in 'un cielo fa volarci dentro: vèstiti!'",
      "Giorgio Spaccarazzi era Mimmo. Amico Fidato credo fosse Fedele Stabile. Gli altri testi, benché non firmati, sono scritti da uno solo di noi. Nello specifico, io scrissi <i>Osserva come sorge</i>, <i>Autobus di giorno</i> e <i>Torno a casa</i>, Mimmo i restanti."
    ],
    "SETTE": [
      "Questo è il primo numero in cui appaiono i nostri nomi veri.",
      "Tutti i testi non firmati da me o Mimmo sono scritti a quattro mani."
    ],
    "OTTO": [
      "Frando Aiesu è una combinazione che ricorrerà spesso nel futuro:  Fra(cesco)do(menico) Aie(llo)su(llo).",
      "Francisco Sullos sono io. È mio anche <i>Signosia</i>.",
      "Gli altri due testi sono scritti a quattro mani.",
      "Niccolò Machiavelli è se stesso."
    ],
    "NOVE": [
      "Tutti i testi sono scritti a quattro mani.",
      "Jack Newhome è, ovviamente, Giacomo Casanova."
    ],
    "DIECI": [
      "Di questo numero non si vede il numero. Ritengo che sia il DIECI per via della presenza di Rino Bozzi (io) che poi scompare.",
      "<i>Storie di Piero</i> è scritta a quattro mani."
    ],
    "UNDICI": [
      "È il primo numero in cui <a href='https://scriverepoesia.it/reviews/dialoghi-dellassenza-il-nuovo-libro-di-tommaso-cariati/' target='_blank'>Tommaso Cariati</a> si aggiunge come contributore.",
      "Dotosco Caisù è una combinazione dei tre nomi e cognomi."
    ],
    "DODICI": [
      "In questo numero appare il professor <a href='http://www.epii-gn.org/soci/pitto.htm' target='_blank'>Cesare Pitto</a> che allora insegnava Antropologia Culturale (corso che avevo aggiunto al mio piano di studi in Fisica, insieme ad altri tre o quattro corsi fra Lettere e Filosofia) e ci seguiva con attenzione, come anche altri professori della facoltà di Lettere.",
      "Angela Cariati credo fosse la sorella di Tommaso.",
      "Fedele Stabile è <a href='https://www.facebook.com/fedele.stabile' target='_blank'>se stesso</a>.",
      "Absul Hajel è un chiaro misto di me e Mimmo.",
      "AnTiMaTe è il nome collettivo di alcune amiche che frequentavamo il corso di Lettere Moderne. An era Antonella, Ti era Tiziana e Te era Teresa. Ho dei dubbi su Ma perché non ricordo una quarta ragazza — forse Teresa si chiamava Maria Teresa."
    ],
    "TREDICI": [
      "Di questo numero posseggo solo una versione in fase di lavorazione, ovviamente incompleta. Se qualcuno ne possiede una versione definitiva, per cortesia, mi scriva a ilTentacolo@sullo.co.",
    ],
    "QUINDICI": [
      "Questo è il primo numero con più di una pagina.",
      "<i>Lo stordimento arduo</i>, <i>Età</i>, <i>Alternarietà</i> e <i>Ventilazione Forzata</i> sono scritte da me e Mimmo, che impersonavamo anche Leonida Puddu e Auriga d'Este.",
      "La citazione dantesca la inserimmo perché radicalizzava il maschilismo di quel periodo, e, purtroppo, anche quello odierno.",
      "Peppino Persico potrebbe essere una persona reale, ma non ci giurerei.",
      "<i>Pechino</i> era una prova di stampa in Postscript. Quando lo stampammo ci sembrò molto interessante, gli demmo un titolo e lo inserimmo nel numero.",
      "<i>Histoire d'O</i> e <i>su e giù</i> erano mie.",
      "Angelo Adamo è il grande <a href='https://www.google.com/search?q=angelo+adamo' target='_blank'>Angelo Adamo</a>."
    ],
    "SEDICI": [
      "Numero interamente scritto a quattro mani da me e Mimmo."
    ],
    "DICIASSETTE": [
      "<i>Il previsionista</i> è scritta da me, Mimmo e Fedele Stabile. Il resto dai firmatari."
    ],
    "VENTI": [
      "Credo che questo sia l'ultimo numero pubblicato."
    ]
  }


  const currentIssue = issues.find(issue => issue.number === issueNumber)

  // Reset della pagina quando cambia il numero dell'issue
  useEffect(() => {
    setCurrentPage(1)
  }, [issueNumber])

  // Gestione scroll per header dinamico
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  
  if (!currentIssue) {
    return (
      <div className="page">
        <h1 className="page-title">Numero Non Trovato</h1>
        <p>Il numero richiesto non esiste nell'archivio.</p>
        <Link to="/issues" className="btn">Torna all'Archivio</Link>
      </div>
    )
  }


  const nextPage = () => {
    if (currentIssue.number === "QUINDICI" && currentPage < 4) {
      setCurrentPage(prev => prev + 1)
    }
  }

  const prevPage = () => {
    if (currentIssue.number === "QUINDICI" && currentPage > 1) {
      setCurrentPage(prev => prev - 1)
    }
  }

  const goToPage = (page) => {
    if (currentIssue.number === "QUINDICI") {
      setCurrentPage(page)
    }
  }

  const getImageSrc = () => {
    if (currentIssue.number === "QUINDICI") {
      return `/images/covers/Il_Tentacolo_QUINDICI_${currentPage}.png`
    }
    return `/images/covers/Il_Tentacolo_${currentIssue.number}.png`
  }

  // Funzione per ottenere il numero precedente e successivo
  const getNavigationNumbers = () => {
    const currentIndex = issues.findIndex(issue => issue.number === currentIssue.number)
    
    const prevIssue = currentIndex > 0 ? issues[currentIndex - 1] : null
    const nextIssue = currentIndex < issues.length - 1 ? issues[currentIndex + 1] : null
    
    return { prevIssue, nextIssue }
  }

  const { prevIssue, nextIssue } = getNavigationNumbers()

  return (
    <div className="page">
      {/* Header dinamico che appare con lo scroll */}
      <div className={`dynamic-header ${isScrolled ? 'visible' : ''}`}>
        <div className="dynamic-header-content">
          <Link to="/" className="dynamic-header-link">
            <h1 className="dynamic-header-title">IL TENTACOLO</h1>
          </Link>
        </div>
      </div>

      {/* Titolo fisso in alto */}
      <div className={`fixed-title ${isScrolled ? 'visible' : ''}`}>
        <Link to="/" className="fixed-title-link">
          <h1 className="page-title">IL TENTACOLO</h1>
        </Link>
      </div>

      <div className="issue-header">
        <Link to="/" className="issue-main-title-link">
          <h1 className="issue-main-title">IL TENTACOLO</h1>
        </Link>
        <div className="issue-info">
          <div className="issue-title-row">
            {prevIssue && (
              <Link to={`/issue/${prevIssue.number}`} className="title-nav-link title-nav-prev">
                ← Numero {prevIssue.number}
              </Link>
            )}
            
            <h2 className="issue-title">Numero {currentIssue.number}</h2>
            
            {nextIssue && (
              <Link to={`/issue/${nextIssue.number}`} className="title-nav-link title-nav-next">
                Numero {nextIssue.number} →
              </Link>
            )}
          </div>
          
          <p className="issue-date">{currentIssue.date}</p>
          {currentIssue.number === "QUINDICI" && (
            <p className="page-indicator">Pagina {currentPage} di 4</p>
          )}
        </div>
      </div>

      <div className="issue-content">
        {/* Issue Image */}
        <div className="issue-section">
          <div className="issue-image-container">
            <img 
              src={getImageSrc()}
              alt={`Il Tentacolo numero ${currentIssue.number}${currentIssue.number === "QUINDICI" ? ` - Pagina ${currentPage}` : ''}`}
              className="issue-image"
            />
          </div>
          
          {/* Navigation for QUINDICI */}
          {currentIssue.number === "QUINDICI" && (
            <div className="page-navigation">
              <button 
                onClick={prevPage} 
                className={`nav-btn nav-arrow ${currentPage === 1 ? 'disabled' : ''}`}
                disabled={currentPage === 1}
              >
                ←
              </button>
              {[1, 2, 3, 4].map(page => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`nav-btn nav-number ${currentPage === page ? 'active' : ''}`}
                >
                  {page}
                </button>
              ))}
              <button 
                onClick={nextPage} 
                className={`nav-btn nav-arrow ${currentPage === 4 ? 'disabled' : ''}`}
                disabled={currentPage === 4}
              >
                →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Note di fondo - fuori dal riquadro della cover */}
      {issueNotes[currentIssue.number] && issueNotes[currentIssue.number].length > 0 && (
        <div className="issue-notes">
          <h3 className="notes-title">Note</h3>
          <div className="notes-content">
            {issueNotes[currentIssue.number].map((note, index) => (
              <div key={index} className="note-item" style={{ 
                marginBottom: '0.4rem', 
                lineHeight: '1.4'
              }}>
                <span className="note-number">{index + 1}.</span>
                <span 
                  dangerouslySetInnerHTML={{ __html: note }} 
                  style={{ 
                    margin: '0', 
                    padding: '0',
                    display: 'inline',
                    lineHeight: '1.4'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default IssueDetail
