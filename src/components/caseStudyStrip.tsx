import CaseStudy from '@/components/caseStudy';
import LaptopMockup from '/public/laptop-mockup.webp';

export default function CaseStudyStrip() {
    return (
        <div className='grid md:grid-cols-3 gap-8'>
            <CaseStudy image={LaptopMockup} />
            <CaseStudy image={LaptopMockup} />
            <CaseStudy image={LaptopMockup} />
        </div>
    );
}