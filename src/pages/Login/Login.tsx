import {useEffect} from 'react'

function Login() {
    useEffect(() => {
        console.log('login');
    }, []);
  return (
    <div>Login</div>
  )
}

export default Login