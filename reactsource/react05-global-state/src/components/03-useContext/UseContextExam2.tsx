import Child1 from "./Child2";
import Child3 from "./Child4";
import CountProvider from "./CountProvider";
import IsOnProvider from "./IsOnProvider";

const UseContextExam2 = () => {
  return (
    <div>
      <CountProvider>
        <h2 className="text-3xl">CountContext</h2>
        <Child1 />
      </CountProvider>
      <IsOnProvider>
        <h2 className="text-3xl">IsOn</h2>
        <Child3 />
      </IsOnProvider>
    </div>
  );
};

export default UseContextExam2;
