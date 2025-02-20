interface HeroProps {
    title: string;
    content: string;
}

export default function Hero({title, content}: HeroProps) {
    return(
        <div className="flex flex-col gap-7 pb-28 lg:w-2/3 py-28 text-center lg:text-left">
        <h1>{title}</h1>
        <p className="text-lg">{content}</p>
      </div>
    )
}