import Navbar from "@/components/navbar";
import WrapperSection from "@/components/wrapper-sectionX";
import Hero from "@/components/hero";
import Image from "next/image";
import LaptopMockup from '/public/laptop-mockup.webp';
import TileStrip from "@/components/tileStrip";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function OnasPage(){
    return(
        <>
        <div style={{backgroundImage: "url('/time.jpg')", backgroundSize: "cover", backgroundPositionY: "-500px center", backgroundPositionX: "center" }}>
            <div className="bg-slate-950 bg-opacity-80">
                <Navbar />
                <WrapperSection>
                    <Hero
                        title={"O nás"}
                        content={"Jsme tým, který se věnuje tomu, aby vaše vize získaly tu správnou podobu. S pečlivostí, empatií a zkušenostmi vytváříme weby, které opravdu fungují. Věříme, že osobní přístup a správné technologie jsou klíčem k úspěchu."}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12 md:pb-28">
                        <div className="flex flex-col gap-8 items-center border-2 border-primary rounded-[30px] p-6 md:p-12">
                            <Image className='w-28 md:w-48 h-28 md:h-48 rounded-full' src={LaptopMockup} alt=""/>
                            <div className="flex flex-col gap-2">
                                <h3>Kateřina Kolářová</h3>
                                <p>katerina@pinkthing.com</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.</p>
                        </div>
                        <div className="flex flex-col gap-8 items-center border-2 border-primary rounded-[30px] p-6 md:p-12">
                            <Image className='w-28 md:w-48 h-28 md:h-48 rounded-full' src={LaptopMockup} alt=""/>
                            <div className="flex flex-col gap-2">
                                <h3>Kateřina Kolářová</h3>
                                <p>katerina@pinkthing.com</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi.</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-4 py-12 md:py-20">
                            <h2>Naše filozofie: Vaše potřeby na prvním místě</h2>
                            <p>Věříme, že každý web by měl být navržen s ohledem na vaše skutečné potřeby. Naším cílem není vnutit vám naše řešení, ale najít to nejlepší pro váš byznys.</p>
                        </div>
                        <TileStrip/>
                    </div>
                </WrapperSection>
                <Contact/>
                <Footer/>
            </div>
        </div>
        </>
    )
}