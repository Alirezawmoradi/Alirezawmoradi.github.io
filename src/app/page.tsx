import {HeroSection} from "@/app/_components/hero-section/hero-section";
import {SkillsCardList} from "@/app/about/_components/skills-card-list";
import {TechsItemList} from "@/app/techs/_components/techs-items-list";
import {Skills} from "@/data/skills";
import {Technologies} from "@/data/technologies";
import {motion} from 'framer-motion';
import About from "@/app/about/page";



export default function Home() {
    return (
        <>
            <HeroSection/>
            <div className="bg-about bg-cover bg-center bg-no-repeat">
                <About/>
            </div>
            <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
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
            </div>
        </>
    )
}
