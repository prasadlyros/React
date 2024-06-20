import img from "./assets/react.svg"

function Header(){
  return(
    <header>
      <p><strong>Discussing about component properties</strong></p>
    </header>
  )
}

function Concepts(props){
  return(
    <li>
      <img src={props.image} alt={props.title} />
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </li>
  )
}

function App(){
  return(
    <>
    <Header />
    <main>
      <ul>
        <li>
          <Concepts 
          title="components"
          description = "It is core"
          image = {img}
          />
        </li>
        <li>
          <Concepts 
          title="components"
          description = "It is basic"
          image = {img}
          />
        </li>
        <li>
          <Concepts 
          title="components"
          description = "It is fundamental"
          image = {img}
          />
        </li>
      </ul>
    </main>
    </>
  );
}

export default App;