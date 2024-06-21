import { PRODUCT } from "./data";
import Header from "./product/Header";
import Product from "./product/Product";

function ProductApp(){
    return(
      <>
      <Header />
      <main>
        <ul>
          <Product {...PRODUCT[0]}/>
          <Product {...PRODUCT[1]}/>
          <Product {...PRODUCT[2]}/>
          <Product {...PRODUCT[3]}/>
        </ul>
      </main>
      </>
    )
  }
  
  export default ProductApp;