import React from "react";

import './Header.css';

export const header = ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
        <div className="header--logo">
          
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png" alt="logonetflix"></img>
            
        </div>
        <div className="header--user">
            
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="logoavatar"></img>
            
        </div>
        </header>
    );
}

export default header;
