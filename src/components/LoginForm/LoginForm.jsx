import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from 'redux/auth/contactsApi';
import { useDispatch } from 'react-redux';
import style from "../ContactForm/ContactForm.module.css"
import TextField from '@mui/material/TextField';

export const LoginForm = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    navigate('/contacts');

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="current-password" className={style.form}>
      <TextField
        label="Email"
        id="demo-helper-text-misaligned"
      type="email"
        name="email"
        required
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
      />
      <label className={style.formText}>
       
       
      </label>
      <label>
        <TextField
          label="Password"
        id="demo-helper-text-misaligned"
          type="password"
          required
          name="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
        />
      </label>
      <button className={style.formBtn} type="submit">LOG IN</button>
    </form>
  );
};
