import { Link } from "react-router-dom";
import style from '../components/App.module.css';

export const WelcomePage = () => {

    return (
      <div className={style.container}>
          <div className={style.wrapper}>
        Please<Link to="/register"> register </Link> to start your journey with my app.{' '}
        If you're already registered just <Link to="/login">log in</Link> 
    </div>  
      </div>
      
  );
};