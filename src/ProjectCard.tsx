import "./ProjectCard.css"
interface Props{
    image:string;
    title:string;
    link:string;
    description:string;

}
export const ProjectCard = ({image,title,link,description}:Props) => {
    return (<div className="body" style={{marginLeft:"20px",marginRight:"20px"}}>
         <a href={link}>
        <div className="card">
            <div className="image-box">
            <img src={image}></img>
            </div>
            <div className="content">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
        </a>
    </div>)
}