import {styles} from "@/styles";
import {SkillsCardList} from "@/app/about/_components/skills-card-list";

export default function About() {
    const skills = [
        {index: 1, title: 'Frontend Developer', icon: '/images/icons/frontend.png'},
        {index: 2, title: 'Flutter Developer', icon: '/images/icons/flutter.svg'},
    ];
    return (
        <div className="bg-about bg-cover bg-center bg-no-repeat">
            <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
                <div className=" mt-[6rem]">
                    <div>
                        <p className={`${styles.sectionSubText}sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold poppins`}>Introduction</p>
                        <h2 className={`${styles.sectionHeadText}text-eerieBlack font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] poppins`}>Overview.</h2>
                    </div>
                    <p className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] font-normal">
                        I am a Front-end Developer with 2 years of programming experience and familiarity with mobile
                        app development using the Flutter framework. I am interested in solving challenges and bugs, as
                        well as learning new technologies.
                        I strongly prefer teamwork over solo endeavors and thrive in collaborative environments.
                    </p>
                    <SkillsCardList skills={skills}/>
                </div>
            </section>
        </div>
    )
}

