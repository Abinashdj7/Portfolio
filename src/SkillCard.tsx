import "./ProfileCard.css";

interface Props {
    type: string;
    skills: string[];
    
}

export const SkillCard = ({ type, skills }: Props) => {
    return (
        <div className="profile-card skill-card">
            <div className="profile-content">
                <h2 className="profile-name">{type}</h2>
                {skills.map((skill, index) => (
                    <p key={index} className="profile-description">{skill}</p>
                ))}
            </div>
        </div>
    );
};
