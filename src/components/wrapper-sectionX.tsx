interface WrapperSectionProps {
    children: React.ReactNode;
}

export default function WrapperSectionX({children}: WrapperSectionProps){
    return(
        <div className="max-w-[85rem] mx-auto px-8">
            {children}
        </div>
    )
}