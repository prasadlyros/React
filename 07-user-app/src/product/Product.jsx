function Product({productName, productId, productPrice}){
    return(
        <>
          <li>
            productName = {productName};
            <br />
            productId = {productId};
            <br />
            productPrice = {productPrice};
            <br />
          </li>
        </>
    )
}

export default Product;