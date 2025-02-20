import Tile from './tile';
import WebIcon from '../icons/web';
import WrapperSectionX from './wrapper-sectionX';


export default function TileStrip() {
    return (    
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 pb-12 max-content">
        <Tile
            title="Weby"
            content="Nejsme jen vývojáři, jsme lidé, kteří chtějí pochopit váš byznys. Každý projekt stavíme tak, aby opravdu pomáhal."
        >
            <WebIcon />
        </Tile>
        <Tile
        title='Podnikové systémy'
        content='Zapomeňte na složitý IT slang. Vše vysvětlíme tak, abyste se cítili jistě a měli svůj web plně pod kontrolou.'
        >
            <WebIcon />
        </Tile>
        <Tile
        title='Automatizace'
        content='Nejsme jen vývojáři, jsme lidé, kteří chtějí pochopit váš byznys. Každý projekt stavíme tak, aby opravdu pomáhal.'
        >
            <WebIcon />
        </Tile>
        <Tile
        title='Řešení na míru'
        content='Zapomeňte na složitý IT slang. Vše vysvětlíme tak, abyste se cítili jistě a měli svůj web plně pod kontrolou.'
        >
            <WebIcon />
        </Tile>
    </div>
    )
}