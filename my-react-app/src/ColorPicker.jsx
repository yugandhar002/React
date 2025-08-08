import { useState } from "react";

function ColorPicker(){

    const [ color, setColor] = useState("#000000");
    function handleColorChange(e){
        setColor(e.target.value);
    }
    
    return (
        <div className="color-picker-container">
            <h2 className="color-picker-title">Color Picker</h2>
            <div className="color-picker-content">
                <div className="color-display" style={{backgroundColor: color}}> 
                    <p>Selected Color: <span className="color-value">{color}</span></p>
                </div>
                <div className="color-input-container">
                    <label className="color-input-label">Select a color:</label>
                    <input 
                        className="color-input"
                        type="color" 
                        value={color} 
                        onChange={handleColorChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default ColorPicker; 