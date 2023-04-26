import "./App.css"
import ResponsiveOriginal from "./ResponsiveOriginal"
import ResponsiveWithMediaQueries from "./ResponsiveWithMediaQueries"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveOriginal minWidth="lg">{(matches) => (matches ? <div>BIG V1.</div> : <div>SMALL V1.</div>)}</ResponsiveOriginal>

        <ResponsiveWithMediaQueries minWidth="md">
          {(matches) => {
            return matches ? <div>BIG V2.</div> : <div>SMALL V2.</div>
          }}
        </ResponsiveWithMediaQueries>
      </header>
    </div>
  )
}

export default App
