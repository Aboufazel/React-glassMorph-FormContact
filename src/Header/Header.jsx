import React from "react";
import './Header.style.css';
import { MdPermContactCalendar } from "react-icons/md";
import { IoIosPersonAdd } from "react-icons/io";

function Header(){
    return(
        <div className={'container'}>
            <div className={'header'}>
                <MdPermContactCalendar className={'ContactCalendar'}/>Contacts
            </div>
        </div>
    );
}


export default Header;