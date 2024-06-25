function ProductList({productName, productId, productPrice, onSelect, children}){
    return(
        <>
        <div className="customInfo" style={{border: "1px solid black", display : "inline-block", margin : "10px",
             width: "250px", padding : "10px"}} onClick = {onSelect}>
        <div className="info">
            <ul>
                {/* <li> */}
                    ProductName : {productName} <br />
                    Product Id : {productId} <br />
                    Product Price : {productPrice} <br />
                    {/* {children} */}
                {/* </li> */}
            </ul>
        </div>
        </div>
        </>
    );
}

export default ProductList;