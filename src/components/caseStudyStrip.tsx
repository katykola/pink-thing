import CaseStudy from '@/components/caseStudy';
import LaptopMockup from '/public/images/laptop-mockup.webp';

export default function CaseStudyStrip() {
    return(
        <div className='grid grid-cols-3 gap-8'>
            <CaseStudy image={LaptopMockup}/>
            <CaseStudy image={LaptopMockup}/>
            <CaseStudy image={LaptopMockup}/>
        </div>
    )
}