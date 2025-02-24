import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ContactForm from "@/components/contactForm";

export default function KontaktPage() {
    return(
        <>
        <div style={{backgroundImage: "url('/keyboard.webp')", backgroundSize: "cover" }}>
        <div className='bg-slate-950 bg-opacity-70 min-h-svh flex flex-col'>
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