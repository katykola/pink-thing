import HeroMain from '@/components/hero-main';
import TileStrip from '@/components/tileStrip';
import ReviewStrip from '@/components/reviewStrip';
import CaseStudyStrip from '@/components/caseStudyStrip';
import Contact from '@/components/contact';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import WrapperSection from '@/components/wrapper-sectionX';

export default function Home() {
  return (

    <>

    <div className="dark:xl:bg-[url('/jelly2.webp')] bg-top bg-cover pb-20">
        <Navbar />
        <HeroMain />
        <WrapperSection>
          <TileStrip />
        </WrapperSection>
    </div>

    <ReviewStrip />

    <div 
    className="dark:md:bg-[url('/switch4.webp')] bg-cover" 
    style={{backgroundPositionY: "bottom", backgroundPositionX: "50%" }}
    >
      <div className='dark:bg-slate-950 dark:bg-opacity-60'>
        <WrapperSection>
            <h2 className='mt:20 lg:mt-28 mb-8'>Vybrané projekty</h2>
            <CaseStudyStrip />
            <div className='flex justify-end mt-8'>
            </div>
          </WrapperSection>
          <Contact />
          <Footer />
      </div>
        </div>

    </>

  );
}
