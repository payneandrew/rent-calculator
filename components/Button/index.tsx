interface ButtonProps {
  children: any;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type }) => {
  return (
    <button
      className="box-border text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
