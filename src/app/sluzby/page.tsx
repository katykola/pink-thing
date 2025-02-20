import Navbar from '@/components/navbar';
import Hero from '../../components/hero';
import TileNumber from '@/components/tileNumber';
import WrapperSection from '@/components/wrapper-sectionX';
import ReviewStrip from '@/components/reviewStrip';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import WrapperSectionX from '@/components/wrapper-sectionX';
import CaseStudySlider from '@/components/caseStudySlider';
import Accordion from '@/components/accordion';


export default function SluzbyPage(){
    return(
        <div>
            <div style={{backgroundImage: "url('/jelly-pink.webp')", backgroundSize: "cover", backgroundPositionY: "-500px center", backgroundPositionX: "center" }}>
                <div className='bg-slate-950 bg-opacity-70'>
                    <Navbar />

                    <WrapperSection>
                    <Hero
                        title={"Naše služby"}
                        content={"Každý projekt je jiný, stejně jako každý člověk, který za ním stojí. Vytvoříme pro vás web, který bude přirozeně zapadat do vašeho podnikání, poroste s vámi a bude vám dlouhodobě sloužit."}
                    />
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-24 mt-4 mb-28'>
                        <div className='flex flex-col md:flex-row lg:flex-col items-center gap-6 flex-1'>
                            <TileNumber number={'01'}/>
                            <TileNumber number={'02'}/>
                            <TileNumber number={'03'}/>
                        </div>
                        <div className='w-[315px] h-[545px] bg-black border-2 border-primary rounded-[30px]'></div>
                        <div className='flex flex-col md:flex-row lg:flex-col items-center gap-6 flex-1'>
                            <TileNumber number={'04'}/>
                            <TileNumber number={'05'}/>
                            <TileNumber number={'06'}/>
                        </div>
                    </div>
                    </WrapperSection>

                    <h2 className='text-center pt:0 mt:0 md:pt-20 mb-12'>Vybrané projekty</h2>
                    <WrapperSectionX>
                        <CaseStudySlider/>
                    </WrapperSectionX>

                </div>
            </div>

            <ReviewStrip/>

            <div style={{backgroundImage: "url('/jelly-dark2.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundPositionX: 'right' }}>

                <div className='py-28'>
                    <WrapperSection>
                        <div className='text-center flex flex-col items-center'>
                            <h2 className='pb-8'>5 kroků k vaší webové stránce</h2>
                            <p className=' w-1/2'>Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.</p>
                        </div>
                        <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 justify-center items-center gap-8 mt-20 mb-12'>
                            <TileNumber number={'01'}/>
                            <TileNumber number={'02'}/>
                            <TileNumber number={'03'}/>
                            <TileNumber number={'04'}/>
                            <TileNumber number={'05'}/>
                        </div>
                        <h2 className='pt-28 md:pt-4040 pb-12'>Časté dotazy</h2>
                        <Accordion/>
                    
                    </WrapperSection>
                </div>
                
                <Contact/>
                <Footer/>

            </div >

        </div>
    )
}