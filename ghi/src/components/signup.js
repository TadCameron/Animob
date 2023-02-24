import { useState } from "react";
import { useToken } from "./useToken";

function BootstrapInput(props) {
    const {id, placeholder, labelText, value, onChange, type } = props;
    return (
        <div className="mb-4">
            <label htmlFor={id} className="form-label">{labelText}</label>
            <input value={value} onChange={onChange} required type={type} className="form-control" id={id} placeholder={placeholder} ></input>
        </div>
    );
}
function SignupForm() {
    const { signup } = useToken();
    const [username, setUsername] =  useState('');
    const [password, setPassword] = useState('');
    const [full_name, setName] =  useState('');
    const [email, setEmail] = useState('');

async function handleSubmit(event) {
  event.preventDefault();
    signup(username, password, full_name, email)
    }
    
    return (
    <div className="accountpagecontainer">
        <div className="card" >
        <form onSubmit={handleSubmit}>
            <h5 className="card-title">Sign up</h5>
            <BootstrapInput
                id="name"
                placeholder="name"
                // labelText="name"
                value={full_name}
                onChange={e => setName(e.target.value)}
                type="text" />
            <BootstrapInput
                id="email"
                placeholder="email"
                // labelText="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email" />
            <BootstrapInput
                id="username"
                placeholder="username"
                // labelText="your username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                type="username" />
            <BootstrapInput
                id="password"
                placeholder="password"
                // labelText="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password" />
            <button type="submit" className="btn btn-light">SUBMIT</button>
        </form>
        </div>
    </div>
    );
    }
    export default SignupForm

