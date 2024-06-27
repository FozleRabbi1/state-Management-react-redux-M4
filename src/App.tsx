import {
  decrement,
  increment,
  incrementByValue,
} from "./Redux/Features/counterSlice";
import { useAppDispatch, useAppSelector } from "./Redux/hooks";

function App() {
  const btnStyle =
    "border border-green-200  rounded-md px-5 py-3 font-semibold text-white";

  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <div className="flex justify-center items-center border border-gray-400 p-10 rounded-md">
        <button
          onClick={() => dispatch(increment())}
          className={`${btnStyle} bg-green-500`}
        >
          Increment
        </button>
        <button
          // onClick={() => dispatch(incrementByValue({ value: 5 }))}
          onClick={() => dispatch(incrementByValue(5))}
          className={`${btnStyle} bg-green-500`}
        >
          increment by 5
        </button>
        <h2 className="text-3xl mx-5"> {count} </h2>
        <button
          onClick={() => dispatch(decrement())}
          className={`${btnStyle} bg-red-500`}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
