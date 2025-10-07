import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  // Gestione scroll per header dinamico
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

      <div className="home-header">
        <h1 className="home-main-title">IL TENTACOLO</h1>
      </div>
      
          <p>
          Il Tentacolo vide la luce una notte fredda di gennaio, tra il ronzio dei calcolatori del Dipartimento di Fisica dell’Università della Calabria e il profumo del caffè che ci teneva svegli. Mimmo Aiello ed io, allora giovani laureandi, passavamo le giornate a scrivere programmi in Fortran per simulare urti di particelle, e le notti a discutere di libri, filosofia e idee.
            </p>
          <p>
          Fu Mimmo, con il suo entusiasmo contagioso, a propormi di creare una rivista. Aveva appena scoperto <a href='https://en.wikipedia.org/wiki/Lotus_Manuscript' target='_blank'>Lotus Manuscript</a> e voleva metterne alla prova le potenzialità. Io accettai senza pensarci troppo. Quella notte, tra battute di tastiera e risate, nacque il <Link to={`/issue/ZERO`}>
                  Numero ZERO
                </Link> de Il Tentacolo. Malgrado fosse molto tardi, eravamo talmente contenti del risultato, che pensammo di farne una cinquantina di copie e incollarlo con lo scotch ovunque nel Polifunzionale.
                </p>
          <p>
            Il giorno dopo, in tarda mattinata, i numeri erano spariti.
            Assumemmo che li avesse rimossi qualcuno dei dipartimenti, finché a mensa qualcuno ce ne mostrò una copia 
            dicendoci che l'aveva staccata giusto in tempo.  
            Capimmo allora che, in qualche modo, Il Tentacolo aveva colpito nel segno.
          </p>
          <p>
            Per diversi numerioltre un anno riuscimmo a mantenere l'anonimato partecipando alle conversazioni che ipotizzavano chi fosse dietro al <i>Tentacolo</i>. Poi qualcuno ci trovò alla fotocopiatrice e le voci cominciarono 
            a circolare. Con nostra grande sorpresa, la gente
            di Fisica fece finta di non sapere nulla e ci lasciò continuare a usare le attrezzature del Dipartimento.
          </p>
          <p>
            A distanza di tanti anni, ho ritrovato la maggior parte dei numeri e li ho 
            digitalizzati. Di alcuni numeri non ho la versione definitiva, ma solo una versione in lavorazione: talvolta incompleta, 
            talvolta con annotazioni a matita che ho rimosso dalla scansione, a volte 
            con testi che potrebbero essere stati modificati in seguito. 
            Altri numeri me li sono persi. La speranza è che qualcuno possieda uno dei 
            numeri mancanti o la versione definitiva di quelli incompleti. In questo caso, 
            per cortesia, scrivetemi a ilTentacolo@sullo.co.
            </p>
      <p>   
Non sono più in contatto con alcuni dei contributori e quando li cito nelle note ho messo dei link a pagine che mi sono sembrate significative. Proverò a contattarli per vedere se hanno qualche numero che mi manchi.

      </p>

      <div className="card">
        <h2 className="card-title">Archivio</h2>
        <div className="card-content">
          <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
            {issues.map(issue => (
              <li key={issue.number}>
                <Link to={`/issue/${issue.number}`} >
                  Numero {issue.number} - {issue.date}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>


      
    </div>
  )
}

export default Home
