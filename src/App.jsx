import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./redux/counterSlice.js";

function App() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-2xl gap-20'>
      <h1 className="text-3xl">React - Redux Toolkit Counter App</h1>
      <div className='text-2xl flex flex-row gap-20'>
        <h1 className="text-3xl">{value}</h1>
      </div>
      <div className='flex flex-row gap-20'>
        <button className='bg-[#232323] text-white w-20 rounded hover:opacity-90' onClick={() => dispatch(increment())}>+</button>
        <button className='bg-[#232323] text-white w-20 rounded hover:opacity-90' onClick={() => dispatch(reset())}>Reset</button>
        <button className='bg-[#232323] text-white w-20 rounded hover:opacity-90' onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  )
}

export default App