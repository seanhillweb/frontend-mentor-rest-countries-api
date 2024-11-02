import { ThreeDots } from "react-loader-spinner";

export const Loader = () => {
  return (
    <ThreeDots
      visible={true}
      height="40"
      width="80"
      color="#d1d5db"
      ariaLabel="Loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
};
