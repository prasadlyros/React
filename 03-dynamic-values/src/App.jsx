const reac = ["Fundamental", "Core", "Crucial"];

function getRandom(max){
  return Math.floor(Math.random() * (max+1));
}

function Header(){

  const description = reac[getRandom(2)];

  return(
    <header>
    <p>{description} is the basics of react</p>
    </header>
  );
}
function App(){
  return(
    <>
    <Header />

    <main>
      <h1>Dynamic Value</h1>
    </main>

    </>
   );
}
export default App;