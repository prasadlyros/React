import img1 from "./assets/blck.jpg";
import img2 from "./assets/tree-736885_1280.jpg";
import img3 from "./assets/download.jpg";

const imgs = [img1, img2, img3];

function getRandomImage(max){
  return Math.floor(Math.random()*(max+1));
}
function Header(){

  const image = imgs[getRandomImage(2)];

  return(
    <header>
      <img src={image} alt={image} title={image} />
    </header>
  )
}

function App(){
  return(
    <>
  <Header />

  <main>
    <h1>Discussing about dynamic values</h1>
  </main>
  </>
  )
}

export default App;