import React from 'react';
import './styles.css'
import Header from '../header'

const Layout = () => {
    return (<>
        <Header/>
        <main className='layout-content'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, nisi?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque id minima molestiae nisi, quo quos.</p>
        </main>
    </>)
}

export default Layout;