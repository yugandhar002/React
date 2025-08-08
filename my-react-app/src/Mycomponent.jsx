import React,{useState ,useEffect } from "react";

function Mycomponent(){
    const [name,setName]=useState("yug");
    function updateName(){
        setName("yugandhar");
        console.log(name);
    }
    const[age,setAge]=useState(0);
    function updateAge(){
        setAge(age+1);
        console.log(age);
    }
    // useEffect(() => {
    // console.log("Name changed to:", name);
    // }, [name]); // 👈 runs this effect only when 'name' changes

    const [isEmployeed,setEmployee] = useState(false);
    function updateEmployeStatus(){
        setEmployee(!isEmployeed);
    }

    return(
        <>
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName}>Set name</button>
        </div>
        <div>
            <p>age : {age}</p>
            <button onClick={updateAge}>increment age</button>
        </div>
        <div>
            <p>Isemployed : {isEmployeed?"yes":"no"}</p>
            <button onClick={updateEmployeStatus}>update umployee status</button>
        </div>
        </>
    )
}

export default Mycomponent;


// // Destructuring assignment from useState()
//const [name, setName] = useState("intial value");
//        ↑       ↑           ↑
//     getter  setter    initial value (undefined) 
          //  (function)