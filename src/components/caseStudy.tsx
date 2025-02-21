import Image, { StaticImageData } from 'next/image';

interface CaseStudyProps {
  image: StaticImageData;
}

export default function CaseStudy({image}: CaseStudyProps) {
    return (
      <div className='flex flex-col gap-6'>
        <Image className=' rounded-[30px]' src={image} alt="" />
        <div >
          <h4>ERU builder</h4>
          <p>Převaděč  tabulek do Reactu, který p řevádí tabulky do Reactu.</p>
        </div>
      </div>
    )
}