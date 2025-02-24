'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendMail } from '@/lib/send-mail';
import { toast, Toaster } from 'sonner';

const contactFormSchema = z.object({
    name: z.string().min(2, { message: 'Vložte své jméno.' }),
    email: z.string().email({ message: 'Vložte emailovou adresu.' }),
    message: z
      .string()
      .min(10, { message: 'Zpráva musí mít alespoň 10 znaků.' }),
  });

export default function ContactForm(){

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
      } = useForm({
        resolver: zodResolver(contactFormSchema),
      });

      const onSubmit = async (values: { name: string; email: string; message: string }) => {
        const mailText = `Jméno: ${values.name}\nEmail: ${values.email}\nZpráva: ${values.message}`;
        
        const response = await sendMail({
          email: values.email,
          subject: 'Nová zpráva z kontaktního formuláře Pink Thing',
          text: mailText,
        });
    
        if (response?.messageId) {
          toast.success('Zpráva byla úspěšně odeslána.');
          reset();
        } else {
          toast.error('Nepodařilo se odeslat zprávu.');
        }
      };

    return(
    <>
    <Toaster position="top-center" />
    <form 
    className="w-full flex flex-col gap-7 lg:w-2/3 text-center lg:text-left px-4"
    onSubmit={handleSubmit(onSubmit)}
    >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2 items-start">
                <label htmlFor="name">Jméno</label>
                <input 
                className="text-dark" 
                id="name" 
                type="text" 
                placeholder="Jana Nováková"
                {...register('name')}
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div className="flex flex-col gap-2 items-start">
                <label htmlFor="email">E-mail</label>
                <input 
                className="text-dark" 
                type="text" 
                id="email" 
                placeholder="jana@gmail.com"
                {...register('email')}
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
        </div>
        <div className="flex flex-col gap-2 items-start">
            <label htmlFor="message">Nechte nám zprávu</label>
            <textarea 
            className="text-dark" 
            id="message" 
            rows={8} 
            placeholder="Chci se zeptat..."
            {...register('message')}
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message.message}</p>}
        </div>
        <div className="flex justify-end"><button className="button button-primary" disabled={isSubmitting}>{isSubmitting ? 'Odesílání...' : 'Odeslat'}</button></div>
    </form>
    </>
    );

    
}