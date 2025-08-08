

import styles from './Button.module.css';

function Button(){
    let count=0;
    const handleClick =(name)=>{

        if(count<3){
            count+=1;
            console.log(`${name} you clicked me ${count} times`);
        }else{
            console.log(`${name} stop clicking me!`);
        }
    }
    return (
        <button onClick={()=>handleClick("bro")}>click me</button>
    );
}

export default Button;

// function Button(){
//     let count=0;
//     const handleClick =(e)=>{

//         e.target.textContent="ouch"
//     }
//     return (
//         <button onClick={(e)=>handleClick(e)}>click me</button>
//     );
// }
