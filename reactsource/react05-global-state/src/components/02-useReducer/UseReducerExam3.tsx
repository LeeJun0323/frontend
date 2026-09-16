import { useReducer, useState } from "react";
import { bankReducer, initState, type BankActionType } from "./bank.reducer";

const UseReducerExam3 = () => {
  const [state, Dispatch] = useReducer(bankReducer, initState);
  const [amount, setAmount] = useState(0);

  // Type : INC, DEC
  const handleClick = (type: BankActionType) => {
    Dispatch({
      type: type,
      payload: { balance: amount },
    });
  };
  const handleChange = (e) => {
    setAmount(Number(e.target.value));
  };
  return (
    <div>
      <p>잔고 : {state.balance}</p>
      <input
        type="number"
        value={amount}
        step={1000}
        onChange={(e) => handleChange(e)}
      />
      <button
        className="bg-gray-400 p-2 mx-1"
        onClick={() => handleClick("DEP")}
      >
        입금
      </button>
      <button
        className="bg-gray-400 p-2 mx-1"
        onClick={() => handleClick("WIT")}
      >
        출금
      </button>
    </div>
  );
};

export default UseReducerExam3;
