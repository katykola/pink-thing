import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ContactForm from "@/components/contactForm";

export default function KontaktPage() {
    return(
        <>
        <div className="dark:xl:bg-[url('/keyboard.webp')] bg-cover">
        <div className='dark:bg-slate-950 dark:bg-opacity-70 min-h-svh flex flex-col'>
        <Navbar />
        <div className="flex-1 flex justify-center items-center">
            <ContactForm />
        </div>
        <Footer />
        </div>
        </div>
        </>
    )
}