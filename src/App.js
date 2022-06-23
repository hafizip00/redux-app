import './App.css';
import {useSelector , useDispatch} from 'react-redux'

function App() {

  const count = useSelector(state => state)
  const dispatch = useDispatch()
  console.log(count)
  const increment = (nr) =>{
    return {
      type : 'INC',
      payload : nr
    }
  }

  const decrement = (nr) =>{
    return {
      type : 'DEC',
      payload : nr
    }
  }

  return (
    <div className="App">
      <h1>{count.noC}</h1>
      <h1>{count.username}</h1>
      <button onClick={()=>dispatch(increment(3))}>INCREMENT</button>
      <button onClick={()=>dispatch(decrement(3))}>DECREMENT</button>
    </div>
  );
}

export default App;
