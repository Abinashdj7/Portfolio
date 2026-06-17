import "./ProfileCardMobile.css";
import { useLanguage } from "./LanguageContext";
import profilePicture from "./assets/image.jpeg";
import { LinkedInIcon, GitHubIcon, MailIcon } from "./Icons";

export const ProfileCardMobile = () => {
    const { t } = useLanguage();

    return (
        <div className="profile-mobile-container">
            <div className="profile-mobile-card">
                <div className="profile-mobile-picture">
                    <img src={profilePicture} alt={t('profile.name')} />
                </div>

                <h2 className="profile-mobile-name">{t('profile.name')}</h2>
                <p className="profile-mobile-title">{t('profile.title')}</p>

                <a className="profile-mobile-email" href={`mailto:${t('profile.emailAddress')}`}>
                    <MailIcon />
                    {t('profile.emailAddress')}
                </a>

                <ul className="profile-mobile-social">
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

            <div className="profile-mobile-description-box">
                <h3>{t('profile.bioTitle')}</h3>
                <p>{t('profile.description')}</p>
            </div>
        </div>
    );
};
