import { TailSpin } from "react-loader-spinner";

const LoadingSpinner: React.FC = () => {
  return (
    <TailSpin
      height="50"
      width="50"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default LoadingSpinner;
