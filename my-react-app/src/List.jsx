
function List(props){

   // fruites.sort((a,b)=>a.name.localeCompare(b.name));// aphabetical order
    //fruites.sort((a,b)=>b.name.localeCompare(a.name));// aphabetical order
    // fruites.sort((a,b)=>a.calories-b.calories);// calories order
   // fruites.sort((a,b)=>b.calories- a.calories);// in dec irder order4
   
    const items = props.items; // by using props
   // const highcalories = fruites.filter(fruit=> fruit.calories>100);
    const category = props.category
    return (
        <div className="list-container">
            <h2 className="list-header">{category}</h2>
            <ul className="list-items">
                {
                    items.map(item => (
                        <li key={item.id}>
                            <span className="item-name">{item.name}:</span>
                            <span className="item-calories">{item.calories}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )


}

// function List() {
//   const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
//   fruits.sort();

//   return (
//     <ol>
//       {fruits.map(fruit => (
//         <li >{fruit}</li>
//       ))}
//     </ol>
//   );
// }

export default List;


// function List(){
//     const fruits =["apple", "orange","banana","coconut","pineapple"]
//     fruits.sort()
//     return(
//         <ul>
//         {fruits.map((fruit,idx)=>
//             <li>{`${idx}  ${fruit}`}</li>
//         )}
//         </ul>
//     )
// }