import React from 'react'
import './Toolbar.css'

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            {/* <div>
                <DrawerToggleButton />
            </div> */}
            <div className="toolbar_logo"><a></a>wordstock</div>
            <div className="spacer"></div>
            <div className="toolbar_navigation_items">
                <ul>
                    <li><a href="/">Your words</a></li>
                    <li><a href="/">Your projects</a></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default toolbar