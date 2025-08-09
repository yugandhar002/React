import { useState } from "react";


function UpdateOBJECT(){
    const [car,setCar] = useState({year:2024,company:"ford",model:"Mustang"});

    function handleYearChange(e){
        setCar(c=>({...c,year:e.target.value}));
    }
    function handleCompamnyChange(e){
        setCar(c=>({...c,company:e.target.value}));
    }
    function hamdleModelChange(e){
        setCar(c=>({...c,model:e.target.value}));
    }

    return(
        <>
            <div>
                <h2>Your favorite car is : {car.year} {car.company} {car.model}</h2>
                <p>Enter details</p>
                <input type="number" onChange={handleYearChange} value={car.year}></input>
                <input type="text" onChange={handleCompamnyChange} value={car.company}></input>
                <input type="text" onChange={hamdleModelChange} value={car.model}></input>
            </div>
        </>
    )


}

export default UpdateOBJECT;
