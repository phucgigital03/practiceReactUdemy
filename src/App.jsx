import { createContext, useContext, useEffect, useState } from 'react'
import './App.css'
import Profilecard from './Profilecard'
// import ParentComponent from './ParentComponent'
// import About from './components/About'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import Header from './components/Header'
// import ProjectList from './components/ProjectList'

const ThemeContext = createContext('light');


function ComponentA (){
  console.log('component A');
  return (
    <div>
        Component A
        <ComponentB/>
    </div>
  )
}

function ComponentB (){
  console.log('component B');
  return (
    <div>
        Component B
        <ThemeComponent/>
    </div>
  )
}

function ThemeComponent (){
  const valueContext = useContext(ThemeContext);
  console.log(valueContext)
  console.log('Theme Component');
  return (
    <div>
        Theme Component + {valueContext}
    </div>
  )
}

function GlobalComponent (){
  const valueContext = useContext(ThemeContext);
  console.log(valueContext)
  console.log('Global Component');
  return (
    <div>
        Global Component + {valueContext}
    </div>
  )
}


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

    const [formData,setFormData] = useState({
      text: '',
      checkbox: false,
      radio: '',
      select: ''
    })

    const handleChange = (e)=>{
      const {name, value, type, checked} = e.target;

      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      })
    }

    useEffect(()=>{
      document.title = "value" + count;
    },[count])

    // const [time,setTime] = useState(new Date());

    // useEffect(()=>{
    //   const timerId =  setInterval(()=> setTime(new Date()), 1000);
    //   return ()=> clearInterval(timerId)
    // },[])

    // const timeFormmat = time.toLocaleTimeString('en-US', {
    //   hour: '2-digit',   // Display hours as two digits
    //   minute: '2-digit', // Display minutes as two digits
    //   second: '2-digit', // Display seconds as two digits
    //   hour12: true       // Use 12-hour clock (default for en-US)
    // });

    const [theme,setTheme] = useState('dark');

    const toggleTheme = ()=>{
      setTheme(theme === 'light' ? 'dark' : 'light')
    }

  return (
    <div className='App'>
      {/* <Header/>
      <About/>
      <ProjectList/>
      <Contact/>
      <Footer/> */}
      {/* <ParentComponent/> */}
      {/* <h1>Clock Digital</h1> */}
      {/* <p>{timeFormmat}</p> */}

      <h1>Theme Compoent</h1>
      <GlobalComponent/>
      <ThemeContext.Provider value={theme}>
          <h1>App parent</h1>
          <button onClick={toggleTheme}>toggle theme</button>
          <ComponentA/>
      </ThemeContext.Provider>

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
      
      <br/>
      <br/>

      {/* form */}
      <div className='form-example'>
          <h1>Form Example</h1>
          <form action="#">
              <div className='form-field'>
                <label>Text: </label>
                <input 
                    type="text" 
                    name='text' 
                    value={formData.text} 
                    onChange={handleChange}
                />
              </div>

              <div className='form-field'>
                <label>
                  <input 
                      type="checkbox" 
                      name='checkbox' 
                      value={formData.checkbox} 
                      onChange={handleChange}
                  ></input>
                  checkBox
                </label>
              </div>

              <div className='form-field'>
                <label>
                  Radio: 
                </label>
                <label>
                  <input 
                      type="radio" 
                      name='radio' 
                      value="option1" 
                      checked={formData.radio === "option1"}
                      onChange={handleChange}
                  ></input>
                  option 1
                </label>
                <label>
                  <input 
                      type="radio" 
                      name='radio' 
                      value="option2" 
                      checked={formData.radio === "option2"}
                      onChange={handleChange}
                  ></input>
                  option 2
                </label>
              </div>

              <div className='form-field'>
                <label>Select: </label>
                <select
                  name='select'
                  value={formData.select}
                  onChange={handleChange}
                >
                  <option value="">-- choose an option --</option>
                  <option value="option1">-- option 1 --</option>
                  <option value="option2">-- option 2 --</option>
                </select>
              </div>


              <div className='form-data'>
                  <h3>
                    Form Data
                  </h3>
                  <p><strong>Text: </strong> {formData.text || 'N/A'}</p>
                  <p><strong>CheckBox: </strong> {formData.checkbox ? "checked" : "unchecked"}</p>
                  <p><strong>Radio: </strong> {formData.radio || 'N/A'}</p>
                  <p><strong>Select: </strong> {formData.select || 'N/A'}</p>
              </div>
          </form>
      </div>

    </div>
  )
}

export default App
