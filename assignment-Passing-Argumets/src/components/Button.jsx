function Button({children}){
    function handleClick(){
        console.log(`${children}`);
    }
    return(
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    );
}

export default Button;