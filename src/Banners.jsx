import {useState} from 'react';
import './Banners.css';
const Banners=()=>{
    const [ban,setBan]=useState(true)
    return(
        <div className="banner">
            {ban?<img src="m1.gif"/>:<img src="m2.gif"/>}
        </div>
        )
    }
export default Banners;