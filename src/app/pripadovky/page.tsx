import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import WrapperSection from "@/components/wrapper-sectionX";
import CaseStudyStrip from "@/components/caseStudyStrip";
import ReviewStrip from "@/components/reviewStrip";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import CaseStudy from "@/components/caseStudy";

export default function PripadovkyPage(){
    return(
        <>
        <div style={{backgroundImage: "url('/pink.webp')", backgroundSize: "cover", backgroundPosition: "bottom" }}>
            <Navbar/>
            <WrapperSection>
                <Hero
                    title={"Vybrané projekty"}
                    content={"Podívejte se na weby, které jsme vytvořili. Každý z nich je výsledkem pečlivé práce, zaměřené na to, aby skutečně vyhovovaly potřebám našich klientů."}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-28">
                    <div>
                        <CaseStudy/>
                        <button className="button button-secondary mt-6">Více o projektu</button>
                    </div>
                    <div>
                        <CaseStudy/>
                        <button className="button button-secondary mt-6">Více o projektu</button>
                    </div>
                    <div>
                        <CaseStudy/>
                        <button className="button button-secondary mt-6">Více o projektu</button>
                    </div>
                    <div>
                        <CaseStudy/>
                        <button className="button button-secondary mt-6">Více o projektu</button>
                    </div>
                </div>
            </WrapperSection>
        </div>
        <ReviewStrip/>
        <div style={{backgroundImage: "url('/switch4.webp')", backgroundSize: "cover",  backgroundPositionY: "bottom", backgroundPositionX: "50%" }}>
            <div className="bg-black bg-opacity-50">
                <Contact/>
                <Footer/>
            </div>
        </div>
        </>
    )
}