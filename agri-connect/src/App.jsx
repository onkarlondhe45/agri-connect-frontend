import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/sing-up/SignUp';
import SignIn from './components/sign-in/SignIn';
import WelcomePage from './components/home/welcome-page';
import Home from './components/home/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<WelcomePage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
