import { useToken } from './useToken'
import { useState } from 'react';

function Login() {
const { token, login } = useToken();
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

async function handleSubmit(event) {
  event.preventDefault();
    login(username, password)
    }

  return (
    <form onSubmit={handleSubmit}>
      <input type="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Log in</button>
    </form>
);
}


export default Login;


// inside handle submit, call login function
