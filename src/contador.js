import {useState} from "react";

const Contador = (props)=>{
    const [contadorValue, updateContador] = useState(0);
    
     //const contadorValue = contador[0];
     //const updateContador = contador[1];

     const handleClick = ()=>{
        updateContador(contadorValue + 1)
    }

    
    const handleClickReset = ()=>{
        updateContador(0)
    }

    const isEven = contadorValue % 2 === 0;

    return(
        <div>
            <button onClick={handleClick}> Incrementar </button>
            <button onClick={handleClickReset}> Reset </button>
            <h1> {contadorValue} </h1>
            <h1> {isEven ? 'Es par' : 'Es impar'} </h1>
        </div>
    );
};



export default Contador;