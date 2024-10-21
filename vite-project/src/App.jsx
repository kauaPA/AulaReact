import './App.css'
import FirstComponent from './components/FirstComponent'
import ListItems from './components/List/ListItems'
import SecondComponentParameter from './components/SecondComponentParameter'
import product from './data/product'
function App() {''

  return (
    <>
      <div className="App">
          <FirstComponent />
          <SecondComponentParameter index="5" other="algum" />
        <SecondComponentParameter index="10" other="mais algum parametro" />
        <ListItems items = {product} />
            <h1> UOPAAAAAAA"</h1>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
