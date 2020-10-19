import React, {useState, useEffect} from 'react';
import Todo from './Todo';
import './App.css';
import db from './firebase';

function App() {
  const [todos, setTodos] = useState([]);    // todos => to store the value, setTodos => to update the state
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().title));
    })
  }, [])    // when the App component loads, run it once and don't load it again

  const handleSubmit = (e) => {
    e.preventDefault();
    // setTodos([...todos, input])

    db.collection('todos').add({
      title: input
    })

    setInput("")
  }

  // db.collection('todos').doc('fwefefefe').delete();

  // const handleDelete = (todo) => {
  //   let newItems = todos.filter(item => {
  //     return item !== todo;
  //   })
  //   setTodos([newItems]);
  // }

  return (
    <div className="App">
      <h1>To-do-app</h1>
      <form>
        <input type="text" placeholder="Enter task" value={input} onChange = {(e) => setInput(e.target.value)} />
        <button type="submit" disabled={!input} onClick={handleSubmit}>+</button>
      </form>
      {
        todos.map((todo, i) => {
          return <Todo key={i} title={todo} /> 
        })
      }
    </div>
  );
}

export default App;
