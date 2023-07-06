import { decremnet, increment, incrementByAmount } from "./redux/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hooks"

function App() {

  const { count } = useAppSelector((state) => state.count)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div className="flex gap-6">
        <button onClick={() => dispatch(increment())} className="border-2 border-green-500 rounded-md px-2 py-3">Increment</button>
        <button onClick={() => dispatch(incrementByAmount(5 ))} className="border-2 border-green-500 rounded-md px-2 py-3">Increment by value</button>
        <div>{count}</div>
        <button onClick={() => dispatch(decremnet())} className="border-2 border-red-500 rounded-md px-2 py-3">Decrement</button>
      </div>
    </div>
    )
}

export default App
