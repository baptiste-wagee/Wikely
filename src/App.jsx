import { useState } from 'react'

function App() {
  const [recherche, setRecherche] = useState("")

  function lancerRecherche() {
    console.log("On cherche :", recherche)
  }

  return (
      <div>
        <h1>Wikely</h1>
        <input
            type="text"
            placeholder="Rechercher"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
        />
        <br/>
        <button onClick={lancerRecherche}>Rechercher</button>
        <p>Tu cherches : {recherche}</p>
      </div>
  )
}

export default App