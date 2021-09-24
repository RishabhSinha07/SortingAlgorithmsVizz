import React from 'react'

import LinkedIn from '@material-ui/icons/LinkedIn';
import Instagram from '@material-ui/icons/Instagram';
import GitHub from '@material-ui/icons/GitHub';

import './Footer.css'

function Footer() {
    return (
        <div className = "Footer">
            <h5>Created By : Rishabh Sinha</h5>
            <LinkedIn className='icon' onClick={() => window.open('https://www.linkedin.com/in/rishabh-sinha-99a706164/')}/>
            <Instagram className='icon' onClick={() => window.open('https://www.instagram.com/rishabh_s1nha/')}/>
            <GitHub className='icon' onClick={() => window.open('https://github.com/RishabhSinha07')}/>
        </div>
    )
}

export default Footer
