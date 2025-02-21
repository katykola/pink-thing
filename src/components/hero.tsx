interface HeroProps {
    title: string;
    content: string;
}

export default function Hero({title, content}: HeroProps) {
    return(
        <div className="flex flex-col gap-7 lg:w-2/3 pt-8 md:pt-28 pb-12 md:pb-28">
        <h1>{title}</h1>
        <p className="text-lg">{content}</p>
      </div>
    )
}