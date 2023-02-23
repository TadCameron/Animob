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
             <BootstrapInput
                id="name"
                placeholder="name"
                labelText="name"
                value={full_name}
                onChange={e => setName(e.target.value)}
                type="text" />
             <BootstrapInput
                id="email"
                placeholder="email"
                labelText="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email" />
            <BootstrapInput
                id="username"
                placeholder="username"
                labelText="your username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                type="username" />
            <BootstrapInput
                id="password"
                placeholder="password"
                labelText="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password" />

            <button type="submit" className="btn btn-dark">SUBMIT</button>
        </form>
    );
    }

    export default SignupForm
