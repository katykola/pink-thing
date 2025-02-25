import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import WrapperSection from "@/components/wrapper-sectionX";
import ReviewStrip from "@/components/reviewStrip";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import CaseStudy from "@/components/caseStudy";
import LaptopMockup from '/public/laptop-mockup.webp';

export default function PripadovkyPage(){
    return(
        <>
        <div className="dark:xl:bg-[url('/jellies.webp')] bg-bottom bg-cover">
        <div className='dark:bg-slate-950 dark:bg-opacity-80'>
            <Navbar/>
            <WrapperSection>
                <Hero
                    title={"Vybrané reference"}
                    content={"Podívejte se na weby, které jsme vytvořili. Každý z nich je výsledkem pečlivé práce, zaměřené na to, aby skutečně vyhovovaly potřebám našich klientů."}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-28">
                    <CaseStudy image={LaptopMockup}/>
                    <CaseStudy image={LaptopMockup}/>
                    <CaseStudy image={LaptopMockup}/>
                    <CaseStudy image={LaptopMockup}/>
                </div>

            </WrapperSection>
        </div>
        <ReviewStrip/>
        <div 
            className="dark:md:bg-[url('/switch4.webp')] bg-cover" 
            style={{backgroundPositionY: "bottom", backgroundPositionX: "50%" }}
        >
            <div className="dark:bg-black dark:bg-opacity-60 pt-8">
                <Contact/>
                <Footer/>
            </div>
        </div>
        </div>
        </>
    )
}