import { Route, Routes } from 'react-router-dom';
import {CreateAccount, Login, News, Commercial_story, Promotional_news, Sk_events} from './components/index'
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/createAccount" element={<CreateAccount/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/commercial_story" element={<Commercial_story/>}/>
        <Route path='/promotional_news' element={<Promotional_news />} />
        <Route path='/sk_events' element={<Sk_events />} />
      </Routes>
    </div>
  );
}

export default App;
