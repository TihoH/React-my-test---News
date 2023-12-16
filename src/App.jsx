import Header from "./components/Header/Header"
import Main from "./components/pages/Main/Main"

function App() {

  return (
    <div className="App">
      <Header />
      <div className="main min-h-full p-4">
        <Main />
      </div>
    </div>
  )
}

export default App
