import { useState } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="auth-page">
      {isSignUp ? <SignUp /> : <SignIn />}
      <button onClick={toggleForm}>
        {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
      </button>
    </div>
  );
};

export default AuthPage;
