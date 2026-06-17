import "./ProfileCard.css";
import { useLanguage } from "./LanguageContext";
import profilePicture from "./assets/image.jpeg";
import { LinkedInIcon, GitHubIcon, MailIcon } from "./Icons";

export const ProfileCard = () => {
    const { t } = useLanguage();

    return (
        <div className="about-card">
            <div className="about-card-main">
                <div className="profile-picture">
                    <img src={profilePicture} alt={t('profile.name')} />
                </div>

                <h2 className="about-name">{t('profile.name')}</h2>
                <p className="about-title">{t('profile.title')}</p>

                <a className="about-email" href={`mailto:${t('profile.emailAddress')}`}>
                    <MailIcon />
                    {t('profile.emailAddress')}
                </a>

                <ul className="social-icons">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/abinash-sasikumar-a484522aa/"
                            aria-label="LinkedIn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LinkedInIcon />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/Abinashdj7"
                            aria-label="GitHub"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <GitHubIcon />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="about-card-bio">
                <h3 className="bio-title">{t('profile.bioTitle')}</h3>
                <p className="bio-text">{t('profile.description')}</p>
            </div>
        </div>
    );
};
