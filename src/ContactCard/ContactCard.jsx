import './ContactCard.style.css'

import React from "react";


function ContactCard({state , setState}){

    return(
        <div>
            <div className={'cardContainer'}>
                {
                    state.map( item => (
                        <div className={'contactCard'} key={item.id}>
                            <div className={'avatar'}>
                                <img src={`https://avatars.dicebear.com/api/adventurer/:${item.id}.svg`}/>
                            </div>
                            <div>Name:<span style={{padding:'0 12px', color:'#304352'}}>{item.name}</span></div>
                            <div>Age:<span style={{padding:'0 12px' , color:'#304352'}}>{item.age}</span></div>
                            <div>Phone:<span style={{padding:'0 12px', color:'#304352'}}>{item.phone}</span></div>
                            <div>Mail:<span style={{padding:'0 12px', color:'#304352'}}>{item.mail}</span></div>
                            <div>Country:<span style={{padding:'0 12px', color:'#304352'}}>{item.country}</span></div>
                            <div>Favorite:<span style={{padding:'0 12px', color:'#304352'}}>{item.favorite}</span></div>
                            <div className={'btnRow'}>
                                <button className={'deleteBtn'}>Delete</button>
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