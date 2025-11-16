import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "./Swiper.css";

import { ProfileCard } from "./ProfileCard";
import { ProfileCardMobile } from "./ProfileCardMobile";
import { SkillCard } from "./SkillCard";
import { ProjectCard } from "./ProjectCard";

export const SlideSwiper = () => {
    const swiperRef = useRef<Swiper | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    const frontEndSkills = ["Html", "Css", "Javascript", "TailwindCSS", "React"];
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
            <div className="swiper">
                <div className="swiper-wrapper">

                    <div className="swiper-slide">
                        <h1 className="title one">About Me</h1>
                        <Btn to={3} label="Prev" />
                        {isMobile ? <ProfileCardMobile /> : <ProfileCard />}
                        <Btn to={1} label="Next" />
                    </div>

                    <div className="swiper-slide">
                        <h1 className="title five">Skills</h1>
                        <Btn to={0} label="Prev" />
                        <div className="flex flex-row flex-wrap justify-center items-center skillcard-container gap-5 flex-1">
                            <SkillCard skills={frontEndSkills} type="Frontend" />
                            <SkillCard skills={backEndLanguages} type="Backend" />
                            <SkillCard skills={databases} type="Databases" />
                        </div>
                        <Btn to={2} label="Next" />
                    </div>

                    <div className="swiper-slide flex flex-col h-screen">
                        <h1 className="title five">More Skills</h1>
                        <Btn to={1} label="Prev" />
                        <div className={`cards-wrapper flex flex-${flexDecision} justify-center items-center flex-1 gap-5`}>
                            <SkillCard skills={backendTools} type="Backend tools" />
                            <SkillCard skills={backendFrameworks} type="Backend Frameworks" />
                            <SkillCard skills={miscellaneous} type="Miscellaneous" />
                        </div>
                        <Btn to={3} label="Next" />
                    </div>

                    <div className="swiper-slide flex flex-col h-screen">
                        <h1 className="title five">Projects(Git)</h1>
                        <Btn to={2} label="Prev" />
                        <div className={`cards-wrapper flex flex-${flexDecision} items-center gap-5 px-6`}>
                            <ProjectCard
                                title="Social media website with MERN stack"
                                link="https://github.com/Abinashdj7/chat-app"
                                description="This website will enable you to chat with friends, post photos and view other's posts. Built using MERN, ChakraUI, JWT, and Cloudinary."
                                image="https://res.cloudinary.com/dtzsg85jd/image/upload/v1720260978/Social_media_app_lxd0t4.png"
                            />
                            <ProjectCard
                                title="E-commerce site"
                                image="https://res.cloudinary.com/dtzsg85jd/image/upload/v1720260984/Tech_igcxuh.png"
                                link="https://github.com/Abinashdj7/e-commerce"
                                description="Educational project built using React, TailwindCSS, Spring Boot, MySQL, Redux, JWT."
                            />
                        </div>
                        <Btn to={0} label="Next" />
                    </div>

                </div>
            </div>
        </section>
    );
};
