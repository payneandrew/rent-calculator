interface TitleProps {
  children: string;
}

function Title({ children }: TitleProps) {
  return <h1 className="text-2xl pb-4">{children}</h1>;
}
export default Title;
