import './App.css';
import { useSelector, useDispatch } from 'react-redux'

function App() {

  const count = useSelector(no => no)
  const dispatch = useDispatch()
  const increment = (nr) => {
    return {
      type: 'INC',
      payload: {
        inc: 40
      }
    }
  }

  const decrement = (nr) => {
    return {
      type: 'DEC',
      payload: {
        inc: 33
      }
    }
  }

  return (
    <div className="App">
      <h1>{count.noC}</h1>
      <h1>{count.username}</h1>
      <button onClick={() => dispatch(increment(90))}>INCREMENT</button>
      <button onClick={() => dispatch(decrement(63))}>DECREMENT</button>
    </div>
  );
}

export default App;
