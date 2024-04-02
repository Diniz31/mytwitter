import React, {useState} from "react";
import Tweet from "./Tweet";
import './App.css';

function App() {

  // return name and message using State instead of example 1
 const [users, setUsers] = useState([
  { name: "Ed", message:"Hello there"},
  { name: "John", message:"Winter is coming!"},
  { name: "Tiago", message:"Hello World!"}
 ])
 

  return (
    <div className="app">
      {users.map(user => ( // go through all users and return
        <Tweet name={user.name} message={user.message}/>
      ))}

    </div>
  );
}

export default App;


/* example 1
component with name, message and likes as props */ 
/*<Tweet name="Tiago" message="Have a good day everyone!!" />
<Tweet name="John Snow" message="Winter is coming!" />
<Tweet name="Captain obvious" message="The world is round!" />
<Tweet name="Mr. Potato Head" message="Badah, badah!!!!!!" /> */




/* const[isRed, setRed]= useState(false);
  const [count, setCount] = useState(0);

  const [user, setUser] = useState({
   name: "Ed",
   age: 37,
   posts: ["my first react app", "I love this!"]
  });

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed); // this way we can toggle between true and false
  };

<h1 className={isRed ? "red" : ""}>Change my color!</h1>
<button onClick={increment}>Increment</button>
<h1>{count}</h1>*/