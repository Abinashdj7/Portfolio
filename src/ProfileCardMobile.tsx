import "./ProfileCardMobile.css";
import { useLanguage } from "./LanguageContext";

export const ProfileCardMobile = () => {
    const { t } = useLanguage();

    return (
        <div className="profile-mobile-container">
            <div className="profile-mobile-card">
                <h2 className="profile-mobile-name">{t('profile.name')}</h2>
                <p className="profile-mobile-description">
                    {t('profile.title')}
                </p>
                <p className="profile-mobile-email">{t('profile.email')} {t('profile.emailAddress')}</p>

                <ul className="profile-mobile-social">
                    <li>
                        <a href="https://www.linkedin.com/in/abinash-sasikumar-a484522aa/">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Abinashdj7">
                            GitHub
                        </a>
                    </li>
                </ul>
            </div>

            <div className="profile-mobile-description-box">
                <h3>Profile:</h3>
                <p>
                    {t('profile.description')}
                </p>
            </div>
        </div>
    );
};
