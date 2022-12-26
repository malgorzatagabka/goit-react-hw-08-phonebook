import { useAuth } from 'utils/hooks/useAuth';
import { WelcomePage } from "./WelcomePage";
import { AuthPage } from "./AuthPage";

const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <h1>
        Phonebook{' '}
      </h1>
      {isLoggedIn ? <AuthPage /> : <WelcomePage />}
  
    </div>
  );
}

export default Home;
