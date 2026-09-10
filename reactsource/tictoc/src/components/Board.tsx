import { calculateWinner } from "../util/util";
import Square from "./Square";

const Board = ({ isNext, squares, handlePlay }) => {
  // 9개의 Square의 state관리
  // const inititalSquares = [null, null, null, null, null, null, null, null, null]
  // const initialSquares: Squares = Array(9).fill(null);
  // 9개의 Square의 state 관리
  // const [squares, setSquares] = useState(initialSquares);

  // 승자관리
  const winner = calculateWinner(squares);

  let status = "";
  if (winner) {
    status = "Winner : " + winner;
  } else {
    status = "Next Player : " + (isNext ? "X" : "O");
  }

  const handleClick = (idx: number) => {
    // 이미 선택된 박스라면 선택 불가
    if (squares[idx] || calculateWinner(squares)) return;

    // ... === slice()
    // 기존 배열복사
    // const copySquares = [...squares];
    const copySquares = squares.slice();
    // X or O 번갈아 가면서 실행
    if (isNext) {
      copySquares[idx] = "X";
    } else {
      // 사용자가 선택한 square의 값 변경
      copySquares[idx] = "O";
    }
    // setIsNext(!isNext);
    // setSquares(copySquares);
    handlePlay(copySquares);
  };
  return (
    <div>
      <div>{status}</div>
      <div className="board-row">
        <Square value={squares[0]} handleClick={() => handleClick(0)}></Square>
        <Square value={squares[1]} handleClick={() => handleClick(1)}></Square>
        <Square value={squares[2]} handleClick={() => handleClick(2)}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[3]} handleClick={() => handleClick(3)}></Square>
        <Square value={squares[4]} handleClick={() => handleClick(4)}></Square>
        <Square value={squares[5]} handleClick={() => handleClick(5)}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[6]} handleClick={() => handleClick(6)}></Square>
        <Square value={squares[7]} handleClick={() => handleClick(7)}></Square>
        <Square value={squares[8]} handleClick={() => handleClick(8)}></Square>
      </div>
    </div>
  );
};

export default Board;
