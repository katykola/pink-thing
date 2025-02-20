import LaptopMockup from '/public/laptop-mockup.webp';
import Image from 'next/image';

export default function CaseStudy() {
    return (
      <div className='flex flex-col gap-6'>
        <Image className='border-2 border-primary rounded-[30px]' src={LaptopMockup} alt="" />
        <div >
          <h4>ERU builder</h4>
          <p>Převaděč  tabulek do Reactu, který p řevádí tabulky do Reactu.</p>
        </div>
      </div>
    )
}