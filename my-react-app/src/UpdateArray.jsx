import { useState } from "react";




function UpdateArray(){
    
    const [foods,SetArray]=useState(["apple","orange","mango"]);

    function handleAddFruit(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";
        if(newFood.length > 3) SetArray([...foods,newFood]);
            
    }
    // function handleDeleteFruit(){
    //     const id = document.getElementById("foodInputDelete").value;  .// normal method
    //     const fooditems =[...foods];
    //     fooditems.splice(id-1,1);
    //     SetArray(fooditems);
    // }

    //idx of eletemt to be deleted
    function handleDeleteFruit(idx){
        
        const fooditems =[...foods];
       fooditems.splice(idx,1);
       SetArray(fooditems);
    }

    return(
        <div>
            <h2>Food Items</h2>
            <ol>
               { foods.map((food,idx)=>{return <li key={idx} onClick={() => handleDeleteFruit(idx)}>{food}</li>}) }
            </ol>
            <input placeholder="Enter fruties" id="foodInput" type="text"></input>
            <button className="add-fruit-btn" onClick={handleAddFruit}>Add Fruit</button>
            {/*      */}
            {/* <button className="add-fruit-btn" onClick={handleDeleteFruit}>Delete Fruit</button> */}
            <p style={{color:"red"}}>Click on the above fruites to delete</p>
        </div>
    )

}

export default UpdateArray;

    // const [inputValue, setInputValue] = useState("");

    // const addFruties = (event) => {
    //     setInputValue(event.target.value);
    // }

    // const handleAddFruit = () => {
    //     if (inputValue.trim()) {
    //         SetArray([...foods, inputValue.trim()]);
    //         setInputValue("");
    //     }
    // }