import { ThreeDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
    >
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#0040ff"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
