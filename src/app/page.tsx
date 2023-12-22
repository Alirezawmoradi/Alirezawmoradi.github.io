import {HeroSection} from "@/app/_components/hero-section/hero-section";
import {SkillsCardList} from "@/app/about/_components/skills-card-list";
import {TechsItemList} from "@/app/techs/_components/techs-items-list";
import {Skills} from "@/data/skills";
import {Technologies} from "@/data/technologies";

export default function Home() {
    return (
        <>
            <HeroSection/>
            <div className="bg-about bg-cover bg-center bg-no-repeat">
                <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
                    <div className=" mt-[6rem]">
                        <div>
                            <p className='sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins'>Introduction</p>
                            <h2 className='text-eerieBlack font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins'>Overview.</h2>
                        </div>
                        <p className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] font-normal">
                            I am a Front-end Developer with 2 years of programming experience and familiarity with
                            mobile
                            app development using the Flutter framework. I am interested in solving challenges and bugs,
                            as
                            well as learning new technologies.
                            I strongly prefer teamwork over solo endeavors and thrive in collaborative environments.
                        </p>
                        <SkillsCardList skills={Skills}/>
                    </div>
                </section>
            </div>
            <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
                <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
                    <div>
                        <p className='sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins'>My
                            skills</p>
                        <h2 className='text-timberWolf font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins'>Technologies.</h2>
                    </div>
                    <div>
                        {
                            <TechsItemList techs={Technologies}/>
                        }
                    </div>
                </section>
            </div>
        </>
    )
}
