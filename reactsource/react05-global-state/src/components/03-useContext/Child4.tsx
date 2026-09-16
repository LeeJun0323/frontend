import { useContext } from "react";
import { IsOn } from "./CommonContext";

const Child4 = () => {
  const context = useContext(IsOn);
  if (!context) {
    throw new Error("IsOn null");
  }
  const { tokenSwitch } = context;
  return (
    <div>
      <button className="border px-4" onClick={tokenSwitch}>
        isOn 전환
      </button>
    </div>
  );
};

const Child3 = () => {
  const context = useContext(IsOn);
  if (!context) {
    console.log(context);
    throw new Error("IsOn null");
  }
  const { token } = context;
  return (
    <div>
      <h2 className="text-3xl">Child3</h2>
      <p>token 값: {token ? "ON" : "OFF"}</p>
      <Child4 />
    </div>
  );
};

export default Child3;
