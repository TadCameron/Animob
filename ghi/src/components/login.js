import { useToken } from './useToken'
import { useState } from 'react';
import './accounts.css';

function BootstrapInput(props) {
    const {id, placeholder, labelText, value, onChange, type } = props;

    return (
        <div className="mb-4">
            <label htmlFor={id} className="form-label">{labelText}</label>
            <input value={value} onChange={onChange} required type={type} className="form-control" id={id} placeholder={placeholder} ></input>
        </div>
    );
}
function Login() {
const { token, login } = useToken();
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

async function handleSubmit(event) {
  event.preventDefault();
    login(username, password)
    localStorage.setItem(token, 'tokenValue')
    console.log('**********', token)
    }

  return (
    <div className="accountpagecontainer">
    <div className="card" >
    <form onSubmit={handleSubmit}>
      <h5 class="card-title">Log in</h5>
       <BootstrapInput type="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
       <BootstrapInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
       <button type="submit" className="btn btn-light">LOG IN</button>
    </form>
    </div>
    </div>
);
}


export default Login;
