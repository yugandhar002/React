import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card  from "./Card.jsx"
import Button from "./Button/Button.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx"
import Mycomponent from "./Mycomponent.jsx"
import Counter from "./Counter.jsx"
import Mycomponent2 from "./Mycomponent2.jsx"
import ColorPicker from "./ColorPicker.jsx"





function App() {
  const fruits = [
      {id:1,name:"apple",calories:95},
      {id:2,name:"orange",calories:45},
      {id:3,name:"banana",calories:105},
      {id:4,name:"coconut",calories:159},
      {id:5,name:"pineapple",calories:37}
    ]
  const vegies = [
      {id:1,name:"potato",calories:95},
      {id:2,name:"onion",calories:45},
      {id:3,name:"tamato",calories:105},
      {id:4,name:"coconut",calories:159},
      {id:5,name:"ladyfinger",calories:37}
    ]
  return(
    <>
      {/* <Header/>
      <Food/>
      <Footer/>
      <Card/>
      <Card/>
      <Button/>
      <Student name="Yugandhar" age={25} isStudent={true}/>
      <Student name="Sharanya" age={20} isStudent={true}/>
      <Student name="Vignesh" age={20} isStudent={false}/>
      <Student/> */}
      {/* <UserGreeting userName="yugandhar" isLoggedIn={true}/> */}
      {/* <UserGreeting/> */}
      {/* <List/> */}

       {/* <List items={fruits}  category="Fruites"></List> 
       <List items={vegies}  category="vegitables"></List>  */}
        {/* <Button></Button> */}
        {/* <Mycomponent/> */}
        {/* <Counter></Counter> */}
        {/* <Mycomponent2/> */}
        <ColorPicker/>

  
      </>
    );
  }


export default App
