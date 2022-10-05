import './App.css';
import {Routes, Route} from 'react-router-dom'

import SignUpPage from './pages/SignUpPage';
import LogInPage from './pages/LogInPage';
import DrinksPage from './pages/DrinksPage';
import Navbar from './components/Navbar';

import IsAnon from './components/IsAnon';
import IsPrivate from './components/IsPrivate';
import AddDrinkPage from './pages/AddDrinkPage';
import FeedPage from './pages/FeedPage';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/signup" element={
          <IsAnon>
            <SignUpPage />
          </IsAnon>
          }    
        />
        <Route path="/login" element={
          <IsAnon>
             <LogInPage />
          </IsAnon>
        } />
        <Route path="/drinks" element={
          <IsPrivate>
            <DrinksPage />
          </IsPrivate>
        } />
        <Route path="/new-drink" element={
          <IsPrivate>
            <AddDrinkPage />
          </IsPrivate>
        } />
        <Route path="/feed" element={
          <IsPrivate>
            <FeedPage />
          </IsPrivate>
        } />
     </Routes>

    </div>
  );
}

export default App;
