import React , {useState}from "react";
import { IoIosPersonAdd } from "react-icons/io";
import './AddContact.style.css'
import ContactCard from "../ContactCard/ContactCard";



function AddContact({contact , setContact}){
    const [filter , setFilter] = useState('All');
    const [display , setDisplay] = useState('ContactForm');
    const filterOptions = [
        {id:1 , title:'All'},
        {id:2 , title: 'F'},
        {id:3 , title: 'N'},
    ];
    const [search , setSearch] = useState('');
    const [form , setForm] = useState([
        {
            id: Math.floor(Math.random() * 1000),
            name: '',
            age: '',
            mail: '',
            phone: '',
            favorite: '',
            country: '',
        }
    ])
    const filterTabManage = title =>{
        setFilter(title);

    };
    const manageDisplay = () =>{
        if (display === 'ContactForm'){
            setDisplay('d-none')
        }else {
            setDisplay('ContactForm')
        }
    }

    const manageForm = e =>{
        setForm({...form , [e.target.name]: e.target.value});
    }

    const manageSearch = e=>{
        setSearch(e.target.value)
    };



    const manageSubmit = e =>{
        e.preventDefault();
        setContact([...contact , {id:Math.floor(Math.random()*1000) , name:form.name , age:form.age , mail:form.mail , phone: form.phone , favorite:form.favorite , country:form.country}])
    }
    return(
       <div>
           <div className={'filterRow'}>
               <div className={'searchBox'}>
                   <input onChange={manageSearch} placeholder={'SearchContact...'}/>
               </div>
               <div className={'filtersItemsRow'}>
               {filterOptions.map(item => (
                       <button onClick={()=>{filterTabManage(item.title)}} className={item.title === filter ? 'filterBtnSelected' : 'filterBtn'} >
                           {item.title}
                       </button>
               ))}
               </div>
           </div>
           <div className={'contactBody'}>
               <div className={'leftBox'}>
                   <form className={display} onSubmit={manageSubmit}>
                       <label>Name:</label>
                       <input name={'name'} value={form.name} onChange={manageForm}/>
                       <label>Age:</label>
                       <input name={'age'} value={form.age} onChange={manageForm}/>
                       <label>Mail:</label>
                       <input name={'mail'} value={form.mail} onChange={manageForm}/>
                       <label>Favorite:</label>
                       <select name="favorite">
                           <option value="favorite">favorite</option>
                           <option value="unfavorite" selected>unfavorite</option>
                       </select>
                       <label>Phone:</label>
                       <input name={'phone'} value={form.phone} onChange={manageForm}/>
                       <label>Country:</label>
                       <select name="country">
                           <option value="iran">iran</option>
                           <option value="usa" selected>usa</option>
                       </select>
                       <div className={'btnRow'}>
                           <button type={'submit'}>SaveContact</button>
                       </div>
                   </form>
               </div>
               <div className={'rightBox'}>
                   <div onClick={manageDisplay}>
                       <div>
                           <ContactCard state={contact} setState={setContact} filter={filter} search={search}/>
                       </div>
                       <IoIosPersonAdd className={'PersonAdd'}/>
                   </div>
               </div>
           </div>
       </div>
    );
}


export default AddContact;