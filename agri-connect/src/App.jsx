import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/header';
import SignUp from './components/sing-up/SignUp';
import SignIn from './components/sign-in/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
