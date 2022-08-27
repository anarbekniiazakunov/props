function Box(props){
    return(
        <div style={{"background-color":
        props.backgroundColor}}>
            <h1>{props.text}</h1>
            <p className={props.textClass}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate expedita eos nemo odio ipsa! Qui voluptas, autem</p>
        </div>
    )
}
export default Box;