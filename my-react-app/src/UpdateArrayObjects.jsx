import { func } from "prop-types";
import { useState } from "react";




function UpdateArrayObjects(){

    const [cars,setCars]= useState([]);
    const [carYear,setYear]= useState(new Date().getFullYear());
    const [carMake,setMake]= useState("");
    const [carModel,setModel]= useState("");

    function handleAddCar(){
        const car = {year:carYear,make:carMake,model:carModel};
        setCars(c => [...c, car]);
        setYear(new Date().getFullYear());
        setMake("");
        setModel("");
        
    }
    function handleDeleteCar(indexToDelete){
        setCars(cars.filter((_, index) => index !== indexToDelete));
    }
    function handleYearChange(e){
        setYear(e.target.value)
    }
    function handleMakeChange(e){
        setMake(e.target.value)   
    }
    function handleModelChange(e){
        setModel(e.target.value)
    }
    return (
        <>
        <div>
            <h2>My favorite cars</h2>
            <ul>
                {
                cars.map((car,idx) => { return <li key={idx} onClick={()=>handleDeleteCar(idx)}>{car.year} {car.make} {car.model}</li>
                })}
            </ul>
        </div>
        <div/> <input type="number" value={carYear} onChange={handleYearChange}/>
        <div/> <input type="text" value={carMake} onChange={handleMakeChange}/>
        <div/> <input type="text" value={carModel} onChange={handleModelChange}/>
        <button onClick={handleAddCar}>Add Car</button>
        </>
    )

}



export default UpdateArrayObjects;