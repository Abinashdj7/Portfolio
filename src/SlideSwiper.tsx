import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "./Swiper.css"; // Make sure you have necessary CSS styles
import { AboutMe } from "./AboutMe";
import { SkillCard } from "./SkillCard";
import { ProjectCard } from "./ProjectCard";
import Social_media_app from "./assets/Social_media_app.png"
import Tech from "./assets/Tech.png"

export const SlideSwiper = () => {
    const swiperRef = useRef(null);
    const skills = ["https://blog.cellenza.com/wp-content/uploads/2015/05/React-JS.png",
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/spring-boot-1_5zDxm9B.jpg",
        "https://images.sftcdn.net/images/t_app-icon-m/p/917c77e8-96d1-11e6-8453-00163ed833e7/3780880766/mysql-com-icon.png",
        "https://miro.medium.com/v2/resize:fit:1000/0*4Sm8jbdZunAYusQF.gif",
        "https://play-lh.googleusercontent.com/GhQVJ0wdeWzNz1k5jlb8mKNAY4qLgoF0MB8m_Oxor9KSYmq-Q4ShP43I8HLL01BVRIGT",
        "https://pbs.twimg.com/media/F47hKmVX0AAOU-c.png"
    ];

    useEffect(() => {
        swiperRef.current = new Swiper(".swiper", {
            grabCursor: true,
            speed: 500,
            effect: "slide",
            loop: true,
            mousewheel: {
                invert: false,
                sensitivity: 1,
            },
        });

        // Destroy Swiper instance when component unmounts
        return () => {
            swiperRef.current.destroy();
        };
    }, []);

    const slideTo = (index) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
    };
    const frontEndSkills = ["Html", "Css", "Javascript", "TailwindCSS", "React"]
    const backEndLanguages = ["Java", "Php", "Python", "Javascript"]
    const databases = ["SQL", "MongoDB"]
    const backendTools = ["NodeJs", "Servlet", "JSP"]
    const backendFrameworks = ["SpringBoot", "Flask"]
    const miscellaneous = ["Jwt", "ReduxJs", "ChakraUI", "Mui", "ExpressJs"]
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
                                <SkillCard skills={frontEndSkills} type="Frontend " />
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
                                interface. Even technoligies like ChakraUI,jwt,Cloudinary." image={Social_media_app}
                                />
                                <ProjectCard title="E-commerce site" image={Tech} link="https://github.com/Abinashdj7/e-commerce" 
                                description="This is project made for educational purposes.
                                The technologies used are React, TailwindCSS, Springboot and MySQL.
                                 Other technologies are ReduxJs,jwt."/>
                            </div>
                            <button className="btn" onClick={() => slideTo(0)}>Next</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
