interface TileNumberProps {
    number: string;

}

export default function TileNumber({number}: TileNumberProps) {
    return (
    <div className='flex flex-col items-center gap-6 border-2 border-primary p-8 rounded-[30px]' style={{ backgroundColor: 'rgba(15, 23, 42, 0.2)' }}>
        <p className='tile-number'>{number}</p>
        <div className="flex flex-col items-center justify-center gap-2">
            <h2 className='tile-title'>Lading Page</h2>
            <p className="text-center">Každý projekt je jiný. Navrhujeme weby podle vašich potřeb, ne podle šablon.</p>
        </div>
    </div>
    )
}