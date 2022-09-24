import React, {useState} from "react";
import './App.css';
import Header from "./components/Header/Header";
import AddContact from "./components/AddContact/AddContact";

function App() {
    const [contact , setContact] = useState([
        {id:1 , name: 'Abbas' , age:25 ,mail:'a.ab2521@gmail.com', phone:'09178272816' , country:'iran' , favorite:'F'},
        {id:2 , name: 'Alireza' , age:25 , mail:'t.alireza@gmail.com', phone:'09373075204' , country:'iran' , favorite:'N'},
    ])
  return (
     <div>
         <Header/>
         <AddContact contact={contact} setContact={setContact}/>
     </div>
  );
}

export default App;
