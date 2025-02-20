import CaseStudy from '@/components/caseStudy';

export default function CaseStudyStrip() {
    return(
        <div className='grid grid-cols-3 gap-8'>
            <CaseStudy />
            <CaseStudy />
            <CaseStudy />
        </div>
    )
}