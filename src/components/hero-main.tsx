import WrapperSectionX from "./wrapper-sectionX"

export default function HeroMain() {
    return(
      <WrapperSectionX>
        <div className="flex flex-col gap-4 md:gap-7 pt-8 md:pt-28 pb-12 md:pb-28">
        <h1>WEBY, KTERÉ PRACUJÍ PRO VÁS</h1>
        <p className="text-2xl md:text-4xl font-[600] md:font-bold md:w-2/3 pb-4 opacity-100">
        Jsme studio zaměřené na tvorbu moderních webů, podnikových systémů a IT řešení na míru.
        </p>
        <p className="lg:w-2/3 md:text-lg">
        Chcete web, který bude krásný, funkční a podle vašich potřeb? Uděláme ho tak, aby vám usnadnil život – od první skici až po poslední řádek kódu.
        </p>
        <div className="flex gap-2 md:gap-5 pt-8">
          <button className='button button-primary max-w-fit'>
            <a href='/sluzby'>Prohlédnot služby</a>
          </button>
          <button className='button button-secondary max-w-fit'>
            <a href='/pripadovky'>Případovky</a>
          </button>
        </div>
      </div>
      </WrapperSectionX>
    )
}