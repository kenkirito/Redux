import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Posts from './Components/post';
import PostForm from './Components/postform';

import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PostForm />
        <hr />
        <Posts />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </Provider>
  );
}

export default App;
