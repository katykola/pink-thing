import Image from 'next/image';
import ArrowLink from '@/icons/arrow-link.svg';
import Link from 'next/link';
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

    <div style={{backgroundImage: "url('/jelly3.webp')", backgroundSize: "cover"}}>
      <div className='bg-slate-950 bg-opacity-50'>
        <Navbar />
        <HeroMain />
        <WrapperSection>
          <TileStrip />
        </WrapperSection>
      </div>
    </div>

    <ReviewStrip />

    <div style={{backgroundImage: "url('/switch4.webp')", backgroundSize: "cover",  backgroundPositionY: "bottom", backgroundPositionX: "50%" }}>
      <div className='bg-slate-950 bg-opacity-30'>
        <WrapperSection>
            <h3 className='mt-20 mb-8'>Vybrané projekty</h3>
            <CaseStudyStrip />
            <div className='flex justify-end mt-8'>
              <div className='flex gap-2 mt-8'>
                <Link className='link' href="/">Všechny realizované projekty</Link>
                <Image src={ArrowLink} alt='arrow link'/>
              </div>
            </div>
          </WrapperSection>
          <Contact />
          <Footer />
      </div>
        </div>

    </>

  );
}
