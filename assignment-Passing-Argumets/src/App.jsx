import { PRODUCTS_LIST } from "./data";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Button from "./components/Button";

import './components/ProductList.css';

function App(){

  function handleSelect(selected){
    console.log(`You have selected the product : ${selected.productName}`);
    console.log(selected);
  }
  return(
    <>
    <Header/>
    <main>
      <section id="custom">
        <ProductList {...PRODUCTS_LIST[0]} onSelect = {() => handleSelect({...PRODUCTS_LIST[0]})}/>
        <ProductList {...PRODUCTS_LIST[1]} onSelect = {() => handleSelect({...PRODUCTS_LIST[1]})}/>       
        <ProductList {...PRODUCTS_LIST[2]} onSelect = {() => handleSelect({...PRODUCTS_LIST[2]})}>
          Along with the cpu it is $250
        </ProductList>
        <ProductList {...PRODUCTS_LIST[3]} onSelect = {() => handleSelect({...PRODUCTS_LIST[3]})}/>
      </section>
      <section>
        <Button>Components</Button>
        <Button>JSx</Button>
        <Button>State</Button>
        <Button>Props</Button>
      </section>
    </main>
    </>
  );
}

export default App;