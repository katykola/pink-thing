import WrapperSectionX from "./wrapper-sectionX"

export default function HeroMain() {
    return(
      <WrapperSectionX>
        <div className="flex flex-col gap-7 pb-28 lg:w-2/3 py-28 text-center lg:text-left">
        <h1>Weby, které pracují pro vás</h1>
        <p className="text-2xl md:text-4xl font-bold pb-4 opacity-100">
        Jsme webové studio zaměřené na tvorbu moderních webů, podnikových systémů a IT řešení na míru.
        </p>
        <p className="lg:w-1/2 text-lg hidden lg:block">
        Chcete web, který bude krásný, funkční a podle vašich potřeb? Uděláme ho tak, aby vám usnadnil život – od první skici až po poslední řádek kódu.
        </p>
        <div className="flex gap-5">
          <button className='button button-primary'>
            <a href='/sluzby'>Prohlédnout služby</a>
          </button>
          <button className='button button-secondary'>
            <a href='/pripadovky'>Případovky</a>
          </button>
        </div>
      </div>
      </WrapperSectionX>
    )
}