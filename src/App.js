import './App.css';
import BackgroundAnimate from './BackgroundAnimate';
import HistoryButton from './HistoryButton';
import Home from './Home';
import UrlShoetener from './UrlShoetener';

function App() {
  return (
    <div className="container">
    <Home/>
    <BackgroundAnimate></BackgroundAnimate>
    <UrlShoetener/>
    <HistoryButton/>
    </div>
  );
}

export default App;
