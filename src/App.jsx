import { useForm } from 'react-hook-form'
import './App.css'

function App() {
    const {register,handleSubmit,formState: {errors},reset} = useForm();
    const onSumit = (data)=>{
      console.log(data)

    }

    const names = ['user1','user2'];
    const checkExistingUser = async(username)=>{
      const result = await new Promise((resolve)=>{
          setTimeout(()=>{
            resolve(names)
          },2000)
      })
      return result.includes(username)
    }
  return (
    <div className='App'>
      <h1>Forms in React</h1>
      <form action="#" onSubmit={handleSubmit(onSumit)}>
          <label>
            Name:
            <input 
              {...register('name',  {
                required: 'Name is required',
                minLength: {value: 2, message: 'Name at least 2 characters'},
                validate: {
                  isNotNumber: (value) => isNaN(value) || "Number cannot be there",
                  checkUser: async (value) => {
                    const check =  await checkExistingUser(value);
                    return !check || "User already has DB"
                  }
                }
              })
              }
            />
            {errors.name && <span>{errors.name.message}</span>}
          </label>
          <br />


          <label>
            Email:
            <input 
              {...register('email',{required: 'Email is required'})}
            />
          </label>
            {errors.email && <span>{errors.email.message}</span>}
          <br />
          <button>submit</button>
          <button type='button' onClick={()=>{reset()}}>reset</button>
      </form>
    </div>
  )
}

export default App
