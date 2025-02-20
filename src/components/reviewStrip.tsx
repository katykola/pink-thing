import ArrowLeft from '../icons/arrow-left';
import ArrowRight from '@/icons/arrow-right';
import Review from '@/components/review';
import WrapperSectionX from './wrapper-sectionX';

export default function ReviewStrip() {
    return(
    <div className="py-28 bg-primary">
        <WrapperSectionX>
        <div className='max-w-main grid md:grid-cols-2 items-center gap-28'>
            <Review />
            <Review />
        </div>
        </WrapperSectionX>
    </div>
    )
}