import { useLanguage } from "./LanguageContext";
import "./Portfolio.css";
import { ProfileCard } from "./ProfileCard";
import { ProfileCardMobile } from "./ProfileCardMobile";
import { SkillCard } from "./SkillCard";
import { ProjectCard } from "./ProjectCard";
import { useState, useEffect } from "react";

export const Portfolio = () => {
    const { t, language, toggleLanguage } = useLanguage();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const frontEndSkills = ["Html", "Css", "Javascript", "TailwindCSS", "React", "Angular"];
    const backEndLanguages = ["Java", "Php", "Python", "Javascript"];
    const databases = ["SQL", "MongoDB"];
    const backendTools = ["NodeJs", "Servlet", "JSP"];
    const backendFrameworks = ["SpringBoot", "Flask"];
    const miscellaneous = ["Jwt", "ReduxJs", "ChakraUI", "Mui", "ExpressJs"];

    return (
        <div className="portfolio-container">
            {/* Language Toggle */}
            <button
                onClick={toggleLanguage}
                className="language-toggle"
                onMouseEnter={(e) => {
                    (e.target as HTMLButtonElement).classList.add("hover");
                }}
                onMouseLeave={(e) => {
                    (e.target as HTMLButtonElement).classList.remove("hover");
                }}
            >
                {language === "fr" ? "EN" : "FR"}
            </button>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">{t("profile.name")}</h1>
                    <p className="hero-subtitle">{t("profile.title")}</p>
                    <p className="hero-description">{t("profile.description")}</p>

                    <div className="hero-cta">
                        <a href="#projects" className="cta-button">
                            {t("nav.projects")}
                        </a>
                    </div>
                </div>

                <div className="hero-background"></div>
            </section>

            {/* About Section */}
            <section className="about-section" id="about">
                <div className="section-container">
                    <h2 className="section-title">{t("nav.aboutMe")}</h2>
                    <div className="section-content">
                        {isMobile ? (
                            <ProfileCardMobile />
                        ) : (
                            <div className="about-grid">
                                <ProfileCard />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="skills-section" id="skills">
                <div className="section-container">
                    <h2 className="section-title">{t("nav.skills")}</h2>

                    <div className="skills-grid">
                        <SkillCard skills={frontEndSkills} type={t("skills.frontend")} />
                        <SkillCard skills={backEndLanguages} type={t("skills.backend")} />
                        <SkillCard skills={databases} type={t("skills.databases")} />
                        <SkillCard skills={backendTools} type={t("skills.backendTools")} />
                        <SkillCard
                            skills={backendFrameworks}
                            type={t("skills.backendFrameworks")}
                        />
                        <SkillCard
                            skills={miscellaneous}
                            type={t("skills.miscellaneous")}
                        />
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects-section" id="projects">
                <div className="section-container">
                    <h2 className="section-title">{t("nav.projects")}</h2>

                    <div className="projects-grid">
                        <ProjectCard
                            title={t("projects.socialMedia.title")}
                            link="https://github.com/Abinashdj7/chat-app"
                            description={t("projects.socialMedia.description")}
                            image="https://res.cloudinary.com/dtzsg85jd/image/upload/v1720260978/Social_media_app_lxd0t4.png"
                        />
                        <ProjectCard
                            title={t("projects.ecommerce.title")}
                            image="https://res.cloudinary.com/dtzsg85jd/image/upload/v1720260984/Tech_igcxuh.png"
                            link="https://github.com/Abinashdj7/e-commerce"
                            description={t("projects.ecommerce.description")}
                        />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer-section">
                <div className="section-container">
                    <div className="footer-content">
                        <div className="footer-links">
                            <a href="https://www.linkedin.com/in/abinash-sasikumar-a484522aa/">
                                LinkedIn
                            </a>
                            <span className="divider">•</span>
                            <a href="https://github.com/Abinashdj7">GitHub</a>
                            <span className="divider">•</span>
                            <a href="mailto:abinash.sasikumar@proton.me">Email</a>
                        </div>
                        <p className="footer-text">
                            © 2024 Abinash Sasikumar | Student at EPITA, Paris
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
