


import { func } from "prop-types";
import React, { use, useContext, useOptimistic, useState } from "react";

function Mycomponent2(){

    const [name,setName] = useState("Guest");
    const [age,setAge] = useState(0);
    const [comment,setComment] = useState("");
    const [payment,setPayment] = useState("Mastercard");
    const [gender,setGender] = useState("Male");

    function handleNameChange(e){
        setName(e.target.value)
    }
    function handleAgeChange(e){
        setAge(e.target.value);
    }
    function handleCommentChange(e){
        setComment(e.target.value);
    }

    function handleOptionChange(e){
        setPayment(e.target.value);
    }

    function handleGenderChange(e){
        setGender(e.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange}></input>
            <p>Name : {name}</p>

            <input value={age} onChange={handleAgeChange} type="number"></input>
            <p>Age : {age}</p>

            <textarea value={comment} onChange={handleCommentChange}
            placeholder="Add instuction for delivery"></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handleOptionChange}>
                <option value="">Select an option</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Visa">Visa</option>
                <option value="Upi">UPI</option>
            </select>
            <p>Payment : {payment}</p>

{/* What checked Does:
The checked attribute determines which radio button appears selected in the UI. It's a boolean value:

true = Radio button appears selected (filled circle)
false = Radio button appears unselected (empty circle) */}


            <div>
                <label>
                    <input type="radio" name="gender" value="Male" 
                           checked={gender === "Male"} 
                           onChange={handleGenderChange} />
                    Male
                </label>
                <label>
                    <input type="radio" name="gender" value="Female" 
                           checked={gender === "Female"} 
                           onChange={handleGenderChange} />
                    Female
                </label>
                <label>
                    <input type="radio" name="gender" value="Other" 
                           checked={gender === "Other"} 
                           onChange={handleGenderChange} />
                    Others
                </label>
            </div>
            <p>Gender : {gender}</p>


        </div>
    )
}

export default Mycomponent2;
