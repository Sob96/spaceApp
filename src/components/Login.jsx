import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

function Login() {
    let navigate = useNavigate();
    const { users, setUsers, setToggleElem} = useContext(AppContext);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const getLogin = (event) => setLogin(event.target.value);

    const getPassword = (event) => setPassword(event.target.value);

    const validateForm = () => {
      const reg = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
      if (login.match(reg) && password.length > 3) return true
    }

    const saveUser = (event) => {
      event.preventDefault();
      event.target.value = '';
      const arr = users;
      arr.push( {
          login: login.split('@')[0],
          password: password,
      })
      setLogin('');
      setPassword('');
      setUsers([...arr]);
      navigate('/');
      setToggleElem(true);
    }

    
    return (
      <div className="Login">
        <Form>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control value={login} onChange={getLogin}
              autoFocus
              type="email"
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control value={password} onChange={getPassword}
              type="password"
            />
          </Form.Group>
          <Button onClick={saveUser} size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Form>
      </div>
    );
  }

  export default Login;