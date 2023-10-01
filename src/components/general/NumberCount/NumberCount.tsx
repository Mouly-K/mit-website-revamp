import "./numbercount.css";

interface NumberCount {
  count: string;
  description: string;
}

interface NumberCountProps {
  data: NumberCount[];
}

export default function NumberCount({ data }: NumberCountProps) {
  return (
    <div className="numbers-count-container noselect">
      {data.map((item: any, index: number) => (
        <span key={index} className="number-count">
          <h2>{item.count}</h2>
          <p>{item.description}</p>
        </span>
      ))}
    </div>
  );
}
