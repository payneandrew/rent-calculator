interface InputProps {
  value: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange, type }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="border-2 rounded-lg py-2 px-4"
    />
  );
};

export default Input;
