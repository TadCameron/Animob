import { useToken } from './useToken'

function Login() {
  const { token, login } = useToken();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      if (response.ok) {
        const data = await response.json();
        login(data.token);
      } else {
        console.error('Failed to log in');
      }
    } catch (err) {
      console.error('Failed to log in', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Log in</button>
    </form>
  );
}

export default Login;
