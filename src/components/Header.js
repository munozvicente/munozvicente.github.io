import React from 'react';

const Header = () => {

    return (
        <header>
            <h1 className="titleH1">VM</h1>
            <nav>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Projects
                    </li>
                    <li>
                        CONTACT
                    </li>
                </ul>
            </nav>
            <div>
                <p>ACTIVATE DARK MODE || ACTIVATE LIGHT MODE STATE</p>
                {/* DARK MODE || LIGHT MODE ICON */}
            </div>
        </header>
    )

}

export default Header;