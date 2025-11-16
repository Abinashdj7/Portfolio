import "./ProfileCardMobile.css";

export const ProfileCardMobile = () => {
    return (
        <div className="profile-mobile-container">
            <div className="profile-mobile-card">
                <h2 className="profile-mobile-name">Abinash</h2>
                <p className="profile-mobile-description">
                    Student in EPITA, Paris, France
                </p>
                <p className="profile-mobile-email">Email: abi11122005@gmail.com</p>

                <ul className="profile-mobile-social">
                    <li>
                        <a href="https://www.linkedin.com/in/abinash-sasikumar-a484522aa/">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="#">Twitter</a>
                    </li>
                    <li>
                        <a href="#">Instagram</a>
                    </li>
                </ul>
            </div>

            <div className="profile-mobile-description-box">
                <h3>Your Profile Description:</h3>
                <p>
                    Passionate about leveraging technology to create meaningful change,
                    I am an ambitious web developer dedicated to crafting innovative
                    solutions that make a tangible impact. With a keen eye for detail and
                    a knack for problem-solving, I thrive in dynamic environments where
                    I can collaborate with like-minded individuals to push the boundaries
                    of what's possible.
                </p>
            </div>
        </div>
    );
};
