import './Components.css';
const Components=(props)=>{
    const {title,img1,img2,img3}=props.man
    return(
            <div className="Menclothes">
            <h2>{title}</h2>
            <div className="Menclothes-images">
            <img src={img1}/>
            <img src={img2}/>
            <img src={img3}/>
        </div>
        </div>
        )
    }
export default Components;