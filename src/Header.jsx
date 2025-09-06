import './Header.css';
const Header=()=>{
    return(
        <div className="header">
            <div className="left">
                <img src="gifmyntra.gif"/>
            </div>
            <div className="center">
                <ul>
                    <li>Mens</li>
                    <li>Womens</li>
                    <li>Kids</li>
                </ul>
            </div>
            <div className="search">
                <input type="text" placeholder="search"/>
                <button>search</button>
            </div>
            <div className="right">
                <div className="sign">
                    Sign In/Sign Up
                </div>
                <div className="cart">
                    <button>cart</button>
                </div>
            </div>
        </div>
        )
    }
export default Header;