const WomensComponents=(props)=>{
    const {title,wimg1,wimg2,wimg3}=props.girl
    return(
            <div className="Womenclothes">
            <h2>{title}</h2>
            <div className="Womenclothes-images">
            <img src={wimg1}/>
            <img src={wimg2}/>
            <img src={wimg3}/>
        </div>
        </div>
        )
    }
export default WomensComponents;