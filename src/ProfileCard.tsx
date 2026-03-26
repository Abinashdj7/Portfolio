import "./ProfileCard.css";
import { useLanguage } from "./LanguageContext";

export const ProfileCard = () => {
    const { t } = useLanguage();

    return (
        <div className="body flex flex-row">
            <div className="profile-card">
                <div className="profile-content">
                    <h2 className="profile-name">{t('profile.name')}</h2>

                    <p className="profile-description">
                        {t('profile.title')}
                    </p>

                    <br />
                    <p style={{ margin: 0 }}>{t('profile.email')}</p>
                    <p className="profile-email">{t('profile.emailAddress')}</p>

                    <div style={{ textAlign: "left" }}>
                        <ul className="social-icons">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/abinash-sasikumar-a484522aa/"
                                    className="underline"
                                >
                                    <i className="fab fa-linkedin">LinkedIn</i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Abinashdj7"
                                    className="underline"
                                >
                                    <i className="fab fa-github">GitHub</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div style={styles.display} className="ml-10 mb-20">
                <h3 style={{ textAlign: "left" }}>Profile:</h3>

                <p>
                    {t('profile.description')}
                    problem-solving, I thrive in dynamic environments where I can
                    collaborate<br />
                    with like-minded individuals to push the boundaries of what's
                    possible.
                </p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
    },
    textarea: {
        width: "100%",
        height: "150px",
        padding: "10px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        marginBottom: "20px",
        resize: "vertical",
    },
    display: {
        padding: "30px",
        borderRadius: "10px",
        backgroundColor: "#000052",
    },
};
