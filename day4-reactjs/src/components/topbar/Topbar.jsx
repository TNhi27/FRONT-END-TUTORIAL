import React from 'react';
import './Topbar.scss'
import {Person,Email} from '@material-ui/icons';


function Topbar(props) {
    const {isOpen,setOpen} = props;
    return (
        <div className={"topbar "+(isOpen &&'active')}>
            <div className='wap'>
                <div className='left'>
                    <a href="#contact" className='logo'>MelStore</a>
                    <div className='iconContainer'>
                        <Person/>
                        <span>0971519342</span>
                    </div>
                    <div className='iconContainer'>
                        <Email/>
                        <span>Truongta.270201@gmail.com</span>
                    </div>

                </div>
                <div className='right'>
                       <div className='hambu' onClick={()=>setOpen(!isOpen)}>
                            <span className='line1'></span>
                            <span className='line2'></span>
                            <span className='line3'></span>
                       </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;