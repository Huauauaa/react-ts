import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  const onChange = (type) => (e) => {
    if (type === 'username') {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      username:
      <input type="text" name="username" onChange={onChange('username')} />
      password:
      <input type="password" name="password" onChange={onChange('password')} />
      <button>Submit</button>
      {username} {password}
    </form>
  );
}

export default Login;
