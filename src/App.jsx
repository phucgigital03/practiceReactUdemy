import { useState } from 'react'
import './App.css'
import Profilecard from './Profilecard'
// import About from './components/About'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import Header from './components/Header'
// import ProjectList from './components/ProjectList'

function App() {
    const showHobby = (hobby)=>{
        alert("you selected " + hobby)
    }

    const aliceProps = {
        name:"Alice",
        age:"23", 
        num:"2", 
        isMember: true,
        hobbies: ["swimming","play volleyball"],
        handleShowHobby: showHobby
    }

    const petterProps = {
        name: "Petter", 
        age: "24", 
        num: 2,
        isMember: false,
        hobbies: ["swimming","play video game"],
        handleShowHobby: showHobby
    }

    const [count,setCount] = useState(0);

    const increatement = ()=>{
      setCount(count + 1);
    }

    const decreatement = ()=>{
      setCount(count - 1);
    }

    const plusTwice = ()=>{
      setCount(prevC => prevC + 1);
      setCount(prevC => prevC + 1);
    }

    const [counters,setCounter] = useState([{id: 0,value: 0}]);

    const addCounter = ()=>{
      setCounter([...counters, {id: counters.length + 1, value: 0}]);
    }

    const increatementObject = (id)=>{
      // counters.forEach(counter => {
      //   if(counter.id === id){
      //     counter.value = counter.value + 1;
      //   }
      // })
      // setCounter([...counters])

      setCounter(counters.map(counter => {
        return counter.id === id ? {...counter,value: counter.value + 1} : counter
      }))
    }
  
  return (
    <div className='App'>
      {/* <Header/>
      <About/>
      <ProjectList/>
      <Contact/>
      <Footer/> */}
      <Profilecard {...aliceProps}/>
      <Profilecard {...petterProps}/>

      <h1>Count : {count}</h1>
      <button onClick={increatement}>increatement</button>
      <button onClick={decreatement}>decreatement</button>
      <button onClick={plusTwice}>+2</button>

      <br/>
      <button onClick={addCounter}>Add Counter</button>
        <ul>
          {
            counters.map((counter)=>{
              return (
                <li key={counter.id}>
                    Counter {counter.id}: {counter.value}
                    <button onClick={()=>{increatementObject(counter.id)}}>plus 1</button>
                </li>
              )
            })
          }
        </ul>

    </div>
  )
}

export default App
