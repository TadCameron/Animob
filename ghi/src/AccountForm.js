import { useState, useTransition } from "react";

function BootstrapInput(props) {
  const { id, placeholder, labelText, value, onChange, type } = props;

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {labelText}
      </label>
      <input
        value={value}
        onChange={onChange}
        required
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}

function AccountForm(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <BootstrapInput
        id="name"
        placeholder="Noor Sayid"
        labelText="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <BootstrapInput
        id="email"
        placeholder="you@example.com"
        labelText="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <BootstrapInput
        id="username"
        placeholder="username"
        labelText="Your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
      />
      <BootstrapInput
        id="password"
        placeholder="password"
        labelText="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default AccountForm;
