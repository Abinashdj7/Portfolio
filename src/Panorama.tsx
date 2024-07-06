import "./App.css"
import "./Swiper.css"
interface Props{
    imageUrls:string[]
}
export const Panorama = ({imageUrls}:Props) => {
    return (<div className="box">
        {imageUrls.map((url,index) => (
            <span className={"span"+index}>
                <img src={url}></img>
            </span>
        ))}
        </div>)
}