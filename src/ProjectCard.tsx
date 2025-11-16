import "./ProjectCard.css";

interface Props {
    image: string;
    title: string;
    link: string;
    description: string;
}

export const ProjectCard = ({ image, title, link, description }: Props) => {
    return (
        <a href={link} className="card-link">
            <div className="card" style={{marginTop:150}}>
                <div className="image-box">
                    <img src={image} alt={title} />
                </div>
                <div className="content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </a>
    );
};
