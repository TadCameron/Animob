import { useToken } from './useToken'
import { useState } from 'react';

function Signup() {
const { token, signup } = useToken();
const [full_name, setFullName] = useState('');
const [email, setEmail] = useState('');
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

async function handleSubmit(event) {
  event.preventDefault();
    signup(full_name, email, username, password)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="full_name" placeholder="Full Name" value={full_name} onChange={(e) => setFullName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign up</button>
    </form>
);}

export default Signup;
