import "./ProfileCard.css"
interface Props {
    type: string;
    skills: string[];
}
export const SkillCard = ({ type, skills }: Props) => {
    return (<div className="body" style={{margin:10}}>
        <div className="profile-card">
            <div className="profile-content">
                {/* <div className="profile-picture"> */}
                {/* <img src="https://drive.google.com/file/d/1t3ZkONHG6fczg7gnmZhbNK1J4J9Vv55l/view?usp=drive_link" alt=""></img> */}
                {/* </div> */}
                <h2 className="profile-name">
                    {type}
                </h2>
                {skills.map((skill) => (
                    <p className="profile-description">
                        {skill}
                    </p>
                ))}
                <ul className="social-icons">
                    <li>
                        <a href="#">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>)
}