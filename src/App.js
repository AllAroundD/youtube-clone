import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import RecommendedVideo from './RecommendedVideo'

function App() {
  return (
    <div className="app">
      {/* <h1>Youtube Clone</h1> */}

      <Header />
      <div className="app__page">
        <Sidebar />
        <RecommendedVideo />

      </div>

    </div>
  );
}

export default App;
