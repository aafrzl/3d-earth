interface IDataProject {
  title: string;
  description: string;
  speed?: number;
}

interface DescriptionProps {
  data: IDataProject[];
  selected: number;
}

export default function Description({ data, selected }: DescriptionProps) {
  const crop = (string: string, maxlength: number) => {
    return string.substring(0, maxlength);
  };

  return (
    <div className="descriptions">
      {data.map((project, index) => {
        const { title, description } = project;
        return (
          <div
            key={index}
            className="description"
            style={{ clipPath: selected === index ? 'inset(0 0 0 0)' : 'inset(50% 0 50%)' }}>
            <p className="text-[#010101] uppercase font-bold text-[8vw] leading-[7.5vw] relative z-[1] m-0">{crop(title, 9)}</p>
            <p className="w-2/5 text-[1vw] font-bold text-white">{description}</p>
          </div>
        );
      })}
    </div>
  );
}
