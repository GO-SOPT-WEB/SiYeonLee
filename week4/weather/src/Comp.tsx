interface CompProps {
  value: string;
  onClick: (e: React.MouseEvent) => void;
}

export const Comp = ({ value, onClick }: CompProps) => {
  return <button onClick={onClick}>{value}</button>;
};
