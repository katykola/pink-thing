'use client';
import { useState } from 'react';
import AccordionItem from './accordionItem'

export default function Accordion(){

    const [selectedId, setSelectedId] = useState<number | null>(1);

    const toggleOpen = (id: number) => {
        setSelectedId(selectedId === id ? null : id);
    }

    return(
        <div>
            <AccordionItem 
            id={1} 
            title='Proč je web na míru lepší než WordPress?' 
            content='Je to hlavně proto, že není pravda, že o WordPress se nemusíte starat. Naopak web na WordPressu je třeba pavidelěn aktulizvat.'
            isOpen={selectedId === 1}
            toggleOpen={toggleOpen}
            />
            <AccordionItem 
            id={2} 
            title='Proč je web na míru lepší než WordPress?' 
            content='Je to hlavně proto, že není pravda, že o WordPress se nemusíte starat. Naopak web na WordPressu je třeba pavidelěn aktulizvat.'
            isOpen={selectedId === 2}
            toggleOpen={toggleOpen}

            />
            <AccordionItem 
            id={3} 
            title='Proč je web na míru lepší než WordPress?' 
            content='Je to hlavně proto, že není pravda, že o WordPress se nemusíte starat. Naopak web na WordPressu je třeba pavidelěn aktulizvat.'
            isOpen={selectedId === 3}
            toggleOpen={toggleOpen}

            />            
            <AccordionItem 
            id={4} 
            title='Proč je web na míru lepší než WordPress?' 
            content='Je to hlavně proto, že není pravda, že o WordPress se nemusíte starat. Naopak web na WordPressu je třeba pavidelěn aktulizvat.'
            isOpen={selectedId === 4}
            toggleOpen={toggleOpen}

            />
            <AccordionItem 
            id={5} 
            title='Proč je web na míru lepší než WordPress?' 
            content='Je to hlavně proto, že není pravda, že o WordPress se nemusíte starat. Naopak web na WordPressu je třeba pavidelěn aktulizvat.'
            isOpen={selectedId === 5}
            toggleOpen={toggleOpen}

            />
        </div>
    )
}