import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function KontaktPage() {
    return(
        <>
        <Navbar />
        <div className="flex-1 flex justify-center items-center">
            <div className="w-full flex flex-col gap-7 lg:w-2/3 text-center lg:text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Jméno</label>
                        <input className="text-dark" id="name" type="text" placeholder="Jana Nováková"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">E-mail</label>
                        <input className="text-dark" type="text" id="email" placeholder="jana@gmail.com"/>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="message">Nechte nám zprávu</label>
                    <textarea className="text-dark" name="messsage" id="message" rows={8} placeholder="Chci se zeptat..."></textarea>
                </div>
                <div className="flex justify-end"><button className="button button-primary">Odeslat</button></div>
            </div>
        </div>
        <Footer />

        </>
    )
}