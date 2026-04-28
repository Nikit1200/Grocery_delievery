import React from 'react'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const Login = () => {
    const { setShowUserLogin, setuser, axios, navigate} = useAppContext()
    const [state, setState] = React.useState("login");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    

    const onSubmitHandler = async (event) => {
       try{
        event.preventDefault();

        const {data} = await axios.post(`/api/user/${state}`,{
          name, email, password
        });
        if(data.success){
          navigate('/')
          setuser(data.user)
          setShowUserLogin(false)
        }else{
          toast.error(data.message)

        }
    
        setShowUserLogin(false)
       } catch (error){
        toast.error(error.message)

       }
    }

  return (
    <div
      onClick={() => setShowUserLogin(false)}
      className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 px-4"
    >
      <form
        onSubmit ={onSubmitHandler}
        onClick={(e) => e.stopPropagation()}
        className="flex w-full max-w-[352px] flex-col gap-4 rounded-lg border border-gray-200 bg-white p-8 py-10 text-sm shadow-xl"
      >
        <p className="text-center text-2xl font-semibold text-gray-800">
          <span className="text-primary">User</span>{' '}
          {state === 'login' ? 'Login' : 'Sign Up'}
        </p>
        {state === 'register' && (
          <div className="w-full">
            <p className="text-left font-medium text-gray-700">Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="type here"
              className='border border-gray-200 rounded w-full p-2 mt-1 outline-primary' 
              type="text"
              required
            />
          </div>
        )}
        <div className="w-full">
          <p className="text-left font-medium text-gray-700">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="type here"
            className='border border-gray-200 rounded w-full p-2 mt-1 outline-primary' 
            type="email"
            required
          />
        </div>
        <div className="w-full">
          <p className="text-left font-medium text-gray-700">Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="type here"
            className='border border-gray-200 rounded w-full p-2 mt-1 outline-primary' 
            type="password"
            required
          />
        </div>
        {state === 'register' ? (
          <p className="text-left text-gray-700">
            Already have account?{' '}
            <button
              type="button"
              onClick={() => setState('login')}
              className="cursor-pointer font-medium text-primary hover:text-primary-dull"
            >
              click here
            </button>
          </p>
        ) : (
          <p className="text-left text-gray-700">
            Create an account?{' '}
            <button
              type="button"
              onClick={() => setState('register')}
              className="cursor-pointer font-medium text-primary hover:text-primary-dull"
            >
              click here
            </button>
          </p>
        )}
        <button
          type="submit"
          className="w-full cursor-pointer rounded-lg bg-primary py-3 text-base font-semibold text-white transition hover:bg-primary-dull"
        >
          {state === 'register' ? 'Create Account' : 'Login'}
        </button>
      </form>
    </div>
  )
}

export default Login
