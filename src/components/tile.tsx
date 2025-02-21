interface TileProps {
    title: string;
    content: string;
    children: React.ReactNode;
  }
  
export default function Tile({title, content, children}: TileProps) {
    return(
        <div className="bg-slate-950 bg-opacity-50 rounded-[30px]">
          <div className="flex flex-col gap-3 border-solid rounded-3xl border-2 p-8 border-primary h-full">
            {children}
          <h3>{title}</h3>
          <p>{content}</p>
          </div>
        </div>
    )
}