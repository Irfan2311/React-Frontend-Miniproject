import './Components.css';
const Kidscomponents=(props)=>{
    const {title,kimg1,kimg2,kimg3}=props.child
    return(
            <div className="Kidsclothes">
            <h2>{title}</h2>
            <div className="Kidsclothes-images">
            <img src={kimg1}/>
            <img src={kimg2}/>
            <img src={kimg3}/>
        </div>
        </div>
        )
    }
export default Kidscomponents;