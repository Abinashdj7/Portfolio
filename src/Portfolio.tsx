import { useLanguage } from "./LanguageContext";
import "./Portfolio.css";
import { ProfileCard } from "./ProfileCard";
import { ProfileCardMobile } from "./ProfileCardMobile";
import { SkillCard } from "./SkillCard";
import { ProjectCard } from "./ProjectCard";
import { useState, useEffect } from "react";
import einkaufenImg from "./assets/Tech.png";
import socialMediaImg from "./assets/Social_media_app.png";
import secureBankImg from "./assets/SecureBank.svg";
import bougonsImg from "./assets/Bougons.svg";

export const Portfolio = () => {
    const { t, language, toggleLanguage } = useLanguage();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const frontEndSkills = ["React", "Angular", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Chakra UI"];
    const backEndLanguages = ["Java", "Node.js", "Spring Boot", "Express", "Python"];
    const databases = ["MySQL", "MongoDB", "PostgreSQL", "Redis"];
    const testingTools = ["JUnit 5", "Mockito", "Cypress", "Jest", "H2", "Postman"];
    const devopsCloud = ["Docker", "Kubernetes", "AWS", "Linux", "GitHub Actions", "CI/CD"];
    const architecture = ["Microservices", "REST API", "JWT", "Socket.io", "Hibernate/JPA", "SOLID"];

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
                        <SkillCard skills={testingTools} type={t("skills.testing")} />
                        <SkillCard skills={devopsCloud} type={t("skills.devops")} />
                        <SkillCard skills={architecture} type={t("skills.architecture")} />
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects-section" id="projects">
                <div className="section-container">
                    <h2 className="section-title">{t("nav.projects")}</h2>

                    <div className="projects-grid">
                        <ProjectCard
                            title={t("projects.einkaufen.title")}
                            link="https://github.com/Abinashdj7/Einkaufen"
                            description={t("projects.einkaufen.description")}
                            image={einkaufenImg}
                        />
                        <ProjectCard
                            title={t("projects.securebank.title")}
                            link="https://github.com/Abinashdj7/SecuSpir"
                            description={t("projects.securebank.description")}
                            image={secureBankImg}
                        />
                        <ProjectCard
                            title={t("projects.socialMedia.title")}
                            link="https://github.com/Abinashdj7/chat-app"
                            description={t("projects.socialMedia.description")}
                            image={socialMediaImg}
                        />
                        <ProjectCard
                            title={t("projects.bougons.title")}
                            link="https://github.com/Abinashdj7/bougons"
                            description={t("projects.bougons.description")}
                            image={bougonsImg}
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
