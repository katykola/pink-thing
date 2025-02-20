'use client';
import { IoIosClose, IoIosRemove } from 'react-icons/io'

interface AccordionItemProps {
    title: string;
    content: string;
    id: number;
    isOpen: boolean;
    toggleOpen: (id: number) => void;
}

export default function AccordionItem({title, content, id, toggleOpen, isOpen}: AccordionItemProps){

    const getId = (id: number) => {
        toggleOpen(id);
    }

    return(
        <div className='py-12 border-t border-b border-white border-opacity-50 flex justify-between items-start'>
            <div className='w-2/3'>
                <h4 className='mb-2'>{title}</h4>
                {isOpen? <p>{content}</p> : null} 
            </div>
        <button onClick={() => getId(id)} className='p-0'>
            {isOpen? <IoIosClose size={50} /> : <IoIosRemove size={50} /> }
        </button>
        </div>
    )
}