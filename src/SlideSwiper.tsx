import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "./Swiper.css"; // Make sure you have necessary CSS styles
import { AboutMe } from "./AboutMe";
import { SkillCard } from "./SkillCard";
import { ProjectCard } from "./ProjectCard";

export const SlideSwiper = () => {
    const swiperRef = useRef<Swiper | null>(null);

    useEffect(() => {
        swiperRef.current = new Swiper(".swiper", {
            grabCursor: true,
            speed: 500,
            effect: "slide",
            loop: true,
            spaceBetween: 20,  // Adds space between slides
            mousewheel: {
              invert: false,
              sensitivity: 1,
            },
          });

        // Destroy Swiper instance when component unmounts
        return () => {
            swiperRef.current?.destroy();
        };
    }, []);

    const slideTo = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
    };

    const frontEndSkills = ["Html", "Css", "Javascript", "TailwindCSS", "React"];
    const backEndLanguages = ["Java", "Php", "Python", "Javascript"];
    const databases = ["SQL", "MongoDB"];
    const backendTools = ["NodeJs", "Servlet", "JSP"];
    const backendFrameworks = ["SpringBoot", "Flask"];
    const miscellaneous = ["Jwt", "ReduxJs", "ChakraUI", "Mui", "ExpressJs"];

    return (
        <div>
            <section>
                <div className="swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <h1 className="title one">About me</h1>
                            <AboutMe />
                            <button className="btn" onClick={() => slideTo(1)}>Next</button>
                        </div>

                        <div className="swiper-slide">
                            <h1 className="title five">Skills</h1>
                            <button className="btn" onClick={() => slideTo(0)}>Prev</button>
                            <div className="flex flex-row pl-20 pr-20">
                                <SkillCard skills={frontEndSkills} type="Frontend" />
                                <SkillCard skills={backEndLanguages} type="Backend" />
                                <SkillCard skills={databases} type="Databases" />
                            </div>
                            <button className="btn" onClick={() => slideTo(2)}>Next</button>
                        </div>

                        <div className="swiper-slide">
                            <h1 className="title three">More skills</h1>
                            <button className="btn" onClick={() => slideTo(1)}>Prev</button>
                            <div className="flex flex-row pl-20 pr-20">
                                <SkillCard skills={backendTools} type="Backend tools" />
                                <SkillCard skills={backendFrameworks} type="Backend Frameworks" />
                                <SkillCard skills={miscellaneous} type="Miscellaneous" />
                            </div>
                            <button className="btn" onClick={() => slideTo(3)}>Next</button>
                        </div>

                        <div className="swiper-slide">
                            <h1 className="title four">Projects(Git)</h1>
                            <button className="btn" onClick={() => slideTo(2)}>Prev</button>
                            <div className="flex flex-row pl-20 pr-20">
                                <ProjectCard title="Social media website with MERN stack" link="https://github.com/Abinashdj7/chat-app"
                                    description="This website will enable you to chat with your friends
                                ,post photos and see your friend's posts. Made with MERN stack,
                                this website will give a good experience with a cute looking
                                interface. Even technoligies like ChakraUI,jwt,Cloudinary." image={"https://res.cloudinary.com/dtzsg85jd/image/upload/v1720260978/Social_media_app_lxd0t4.png"}
                                />
                                <ProjectCard title="E-commerce site" image={"https://res.cloudinary.com/dtzsg85jd/image/upload/v1720260984/Tech_igcxuh.png"} link="https://github.com/Abinashdj7/e-commerce"
                                    description="This is project made for educational purposes.
                                The technologies used are React, TailwindCSS, Springboot and MySQL.
                                 Other technologies are ReduxJs,jwt." />
                            </div>
                            <button className="btn" onClick={() => slideTo(0)}>Next</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
