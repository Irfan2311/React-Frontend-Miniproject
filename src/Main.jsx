import Header from './Header.jsx';
import Banners from './Banners.jsx';
import Components from './Menscomponents.jsx';
import WomensComponents from './Womencomponents.jsx';
import Kidscomponents from './Kidscomponents.jsx';
import Footer from './Footer.jsx';
import {Mens} from './object.js';
import {Womens} from './womenobject.js';
import {Kids} from './kidsobject.js';
import {useState} from 'react';
const Main=()=>{
    const [women,setWomen]=useState(Womens)
    const [men,setMen]=useState(Mens)
    const [kid,setKid]=useState(Kids)
    return(
        <div>
            <Header/>
            <Banners/>
            <Components man={men}/>
            <WomensComponents girl={women}/>
            <Kidscomponents child={kid}/>
            <Footer/>
            </div>
        )
    }
export default Main;