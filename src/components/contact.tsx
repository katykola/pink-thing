import WrapperSectionX from "./wrapper-sectionX"

export default function Contact() {
    return(
      <WrapperSectionX>
        <div className="pt-12 md:pt-28 pb-8">
          <div className='flex flex-col gap-4 pb-10'>
            <h2>Máte dotaz? Kontaktujte nás.</h2>
            <p>Ať už potřebujete poradit s výběrem řešení, nebo máte konkrétní otázky, jsme tu pro vás.</p>
            <div className='mt-4'><button className='button button-primary'><a href="/kontakt">Napište nám</a></button></div>
          </div>
        </div>
        </WrapperSectionX>
    )
}