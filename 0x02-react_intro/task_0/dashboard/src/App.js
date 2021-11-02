import logo from './holberton-logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="App-header">
        <img src={logo} alt="" />
        <h1>School dashboard</h1>
      </div>
      <div class="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div class="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </div>
    </div>
  );
}

export default App;
