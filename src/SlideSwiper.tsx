import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "./Swiper.css";

import { ProfileCard } from "./ProfileCard";
import { ProfileCardMobile } from "./ProfileCardMobile";
import { SkillCard } from "./SkillCard";
import { ProjectCard } from "./ProjectCard";
import { useLanguage } from "./LanguageContext";

export const SlideSwiper = () => {
    const swiperRef = useRef<Swiper | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const { t, language, toggleLanguage } = useLanguage();

    const frontEndSkills = ["Html", "Css", "Javascript", "TailwindCSS", "React", "Angular"];
    const backEndLanguages = ["Java", "Php", "Python", "Javascript"];
    const databases = ["SQL", "MongoDB"];
    const backendTools = ["NodeJs", "Servlet", "JSP"];
    const backendFrameworks = ["SpringBoot", "Flask"];
    const miscellaneous = ["Jwt", "ReduxJs", "ChakraUI", "Mui", "ExpressJs"];

    const flexDecision = window.innerWidth <= 768 ? "col" : "row";

    useEffect(() => {
        const update = () => setIsMobile(window.innerWidth <= 375);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    useEffect(() => {
        swiperRef.current = new Swiper(".swiper", {
            grabCursor: true,
            speed: 500,
            effect: "slide",
            loop: true,
            mousewheel: { invert: false, sensitivity: 1 },
            spaceBetween: isMobile ? 0 : 20,
            breakpoints: {
                0: { slidesPerView: 1, spaceBetween: 0 },
                768: { slidesPerView: 1, spaceBetween: 20 },
                1024: { slidesPerView: 1, spaceBetween: 30 }
            }
        });
        return () => swiperRef.current?.destroy();
    }, [isMobile]);

    const slideTo = (i: number) => swiperRef.current?.slideTo(i);

    const Btn = ({ to, label }: any) =>
        !isMobile && <button className="btn" onClick={() => slideTo(to)}>{label}</button>;

    return (
        <section>
            <button
                onClick={toggleLanguage}
                style={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    padding: '10px 15px',
                    backgroundColor: '#000052',
                    color: 'cyan',
                    border: '2px solid cyan',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    zIndex: 1000,
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                    (e.target as HTMLButtonElement).style.backgroundColor = 'cyan';
                    (e.target as HTMLButtonElement).style.color = '#000052';
                }}
                onMouseLeave={(e) => {
                    (e.target as HTMLButtonElement).style.backgroundColor = '#000052';
                    (e.target as HTMLButtonElement).style.color = 'cyan';
                }}
            >
                {language === 'fr' ? 'EN' : 'FR'}
            </button>

            <div className="swiper">
                <div className="swiper-wrapper">

                    <div className="swiper-slide">
                        <h1 className="title one">{t('nav.aboutMe')}</h1>
                        <Btn to={3} label={t('buttons.prev')} />
                        {isMobile ? <ProfileCardMobile /> : <ProfileCard />}
                        <Btn to={1} label={t('buttons.next')} />
                    </div>

                    <div className="swiper-slide">
                        <h1 className="title five">{t('nav.skills')}</h1>
                        <Btn to={0} label={t('buttons.prev')} />
                        <div className="flex flex-row flex-wrap justify-center items-center skillcard-container gap-5 flex-1">
                            <SkillCard skills={frontEndSkills} type={t('skills.frontend')} />
                            <SkillCard skills={backEndLanguages} type={t('skills.backend')} />
                            <SkillCard skills={databases} type={t('skills.databases')} />
                        </div>
                        <Btn to={2} label={t('buttons.next')} />
                    </div>

                    <div className="swiper-slide flex flex-col h-screen">
                        <h1 className="title five">{t('nav.moreSkills')}</h1>
                        <Btn to={1} label={t('buttons.prev')} />
                        <div className={`cards-wrapper flex flex-${flexDecision} justify-center items-center flex-1 gap-5`}>
                            <SkillCard skills={backendTools} type={t('skills.backendTools')} />
                            <SkillCard skills={backendFrameworks} type={t('skills.backendFrameworks')} />
                            <SkillCard skills={miscellaneous} type={t('skills.miscellaneous')} />
                        </div>
                        <Btn to={3} label={t('buttons.next')} />
                    </div>

                    <div className="swiper-slide flex flex-col h-screen">
                        <h1 className="title five">{t('nav.projects')}</h1>
                        <Btn to={2} label={t('buttons.prev')} />
                        <div className={`cards-wrapper flex flex-${flexDecision} items-center gap-5 px-6`}>
                            <ProjectCard
                                title={t('projects.socialMedia.title')}
                                link="https://github.com/Abinashdj7/chat-app"
                                description={t('projects.socialMedia.description')}
                                image="https://res.cloudinary.com/dtzsg85jd/image/upload/v1720260978/Social_media_app_lxd0t4.png"
                            />
                            <ProjectCard
                                title={t('projects.ecommerce.title')}
                                image="https://res.cloudinary.com/dtzsg85jd/image/upload/v1720260984/Tech_igcxuh.png"
                                link="https://github.com/Abinashdj7/e-commerce"
                                description={t('projects.ecommerce.description')}
                            />
                        </div>
                        <Btn to={0} label={t('buttons.next')} />
                    </div>

                </div>
            </div>
        </section>
    );
};
