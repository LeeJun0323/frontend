const MyButton = ({ style, onClick, count }) => {
  //   const [count, setCount] = useState(0);
  //   const onClick = () => setCount(count + 1);
  return (
    <div>
      <button style={style} onClick={onClick}>
        Clicked {count} times
      </button>
    </div>
  );
};

export default MyButton;
