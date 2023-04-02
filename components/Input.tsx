export default function Input({ value, onChange, type }) {
  return <input type={type} value={value} onChange={onChange} />;
}
