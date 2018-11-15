import React from 'react';
import Link from 'gatsby-link';

const Menu = () => (
    <div style={{
        background: '#0F0'
    }}>
        <ul>
            <li><Link to="/">One</Link></li>
            <li><Link to="/page-2">Two</Link></li>
            <li><Link to="/testpage">Test</Link></li>
        </ul>
    </div>
)
export default Menu