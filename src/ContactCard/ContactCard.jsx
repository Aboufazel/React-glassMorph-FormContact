import './ContactCard.style.css'

import React, {useState} from "react";


function ContactCard({state , setState , filter , search}){

    const [deleteMessage , setdeleteMessage] = useState('d-none');
    const [id , setId] = useState(null)
   const manageDeleteMessage = (id)=>{
       setdeleteMessage('');
       setId(id);
   }

   const manageIgnore = ()=>{
        setdeleteMessage('d-none')
   }

   const manageDelete = ()=>{
        setState(state.filter(contact => contact.id !== id));
        setdeleteMessage('d-none')
   }
    return(
        <div>
            <div className={'cardContainer'}>
                <div className={deleteMessage}>
                    <div className={'deleteMessage'}>
                        <p className={'deletetitle'}>Are you sure to delete the contact?</p>
                        <div className={'btnRow'}>
                            <button className={'confirmBtn'} onClick={manageDelete}>I'm Sure</button>
                            <button className={'ignoreBtn'} onClick={manageIgnore}>Ignore</button>
                        </div>
                    </div>
                </div>
                {
                    state.filter(contact => contact.name.toUpperCase().includes(search.toUpperCase()) && filter === 'All'? true : contact.favorite === filter).map( item => (
                        <div className={'contactCard'} key={item.id}>
                            <div className={'avatar'}>

                                <img src={`https://avatars.dicebear.com/api/initials/:${item.name}.svg`}/>
                            </div>
                            <div>Name:<span style={{padding:'0 12px', color:'#304352'}}>{item.name}</span></div>
                            <div>Age:<span style={{padding:'0 12px' , color:'#304352'}}>{item.age}</span></div>
                            <div>Phone:<span style={{padding:'0 12px', color:'#304352'}}>{item.phone}</span></div>
                            <div>Mail:<span style={{padding:'0 12px', color:'#304352'}}>{item.mail}</span></div>
                            <div>Country:<span style={{padding:'0 12px', color:'#304352'}}>{item.country}</span></div>
                            <div>Favorite:<span style={{padding:'0 12px', color:'#304352'}}>{item.favorite}</span></div>
                            <div className={'btnRow'}>
                                <button className={'deleteBtn'} onClick={()=>manageDeleteMessage(item.id)}>Delete</button>
                                <button className={'editBtn'}>Edit</button>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    );
}


export default ContactCard;