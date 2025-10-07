import React from 'react'
import { Link } from 'react-router-dom'

function Issues() {
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
    { number: "UNDICI", date: "21 Marzo 1991" },
    { number: "DODICI", date: "30 Giugno 1991" },
    { number: "TREDICI", date: "1 Luglio 1991" },
    { number: "QUATTORDICI", date: "... 1991" },
    { number: "QUINDICI", date: "1 Gennaio 1992" },
    { number: "SEDICI", date: "8 Luglio 1992" },
    { number: "DICIASSETTE", date: "16 Aprile 1993" },
    { number: "VENTI", date: "10 Luglio 1993" },
  ]

  return (
    <div className="page">
      <h1 className="page-title">I Numeri Disponibili</h1>
      <p className="page-subtitle">Se siete in possesso di un numero non presente in questa lista, 
        scriveteci a ilTentacolo@sullo.co</p>
      
      <div className="issues-list">
        {issues.map(issue => (
          <Link key={issue.number} to={`/issue/${issue.number}`} className="issue-item-link">
            <div className="issue-item">
              <span className="issue-number">Numero {issue.number}</span>
              <span className="issue-date">{issue.date}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="card">
        <h2 className="card-title">Note Editoriali</h2>
        <div className="card-content">
          <p>
            Ogni numero di <strong>Il Tentacolo</strong> era frutto di settimane 
            di lavoro e passione. Non avevamo budget per la stampa professionale, 
            quindi ogni copia era realizzata artigianalmente, spesso con 
            fotocopiatrici e tecniche di stampa alternative.
          </p>
          <p>
            La distribuzione avveniva principalmente attraverso canali underground: 
            librerie alternative, circoli culturali, concerti e eventi artistici. 
            Ogni copia era numerata e spesso personalizzata per i nostri lettori più fedeli.
          </p>
          <p>
            Purtroppo, molti numeri sono andati perduti nel tempo. Questo archivio 
            digitale rappresenta il nostro tentativo di preservare la memoria 
            di quell'esperienza unica.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Issues
