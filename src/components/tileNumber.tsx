interface TileNumberProps {
    number: string;
}

export default function TileNumber({number}: TileNumberProps) {
    return (
    <div className='flex flex-col md:items-center gap-2 md:gap-6 border-2 border-primary px-5 py-8 md:p-8 rounded-[30px]' style={{ backgroundColor: 'rgba(15, 23, 42, 0.2)' }}>
        <p className='tile-number'>{number}</p>
        <div className="flex flex-col md:items-center justify-center gap-2">
            <h3 className='tile-title'>Lading Page</h3>
            <p className="md:text-center">Každý projekt je jiný. Navrhujeme weby podle vašich potřeb, ne podle šablon.</p>
        </div>
    </div>
    )
}