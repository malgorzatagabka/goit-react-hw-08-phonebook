import { useSignupMutation } from 'redux/auth/contactsApi';
import { useNavigate } from 'react-router-dom';
import style from '../ContactForm/ContactForm.module.css';
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';

export const RegisterForm = () => {
  const [signup] = useSignupMutation();
  const navigate = useNavigate();

  const handleSubmit = async evt => {
    const form = evt.target;
    const {
      name: { value: name },
      email: { value: email },
      password: { value: password },
    } = form;

    const credentials = { name, email, password };

    evt.preventDefault();

    await signup(credentials)
      .unwrap()
      .then(() => navigate('/contacts'))
      .catch(() => {
        toast.warn('User with this email address already exists');
      });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={style.form}>
      <label className={style.formText}>
        <TextField
          label="Name"
          id="demo-helper-text-misaligned"
          type="text"
          name="name"
          required
          className={style.formInput}
        />
      </label>
      <label className={style.formText}>
        <TextField
          label="Email"
          id="demo-helper-text-misaligned"
          type="email"
          name="email"
          autoComplete="off"
          required
          className={style.formInput}
        />
      </label>
      <label className={style.formText}>
        <TextField
          label="Password"
          id="outlined-basic"
          type="password"
          name="password"
          autoComplete="off"
          required
          className={style.formInput}
        />
      </label>
      <button className={style.formBtn} type="submit">
        Register
      </button>
    </form>
  );
};
