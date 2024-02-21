import './App.css';

const Message = (props) => {
  return <h1>{props.message}</h1>
}

const Description = () => {
  return <p>This is the FullStack App</p>
}

function App() {
  
  return (
    <div className="App">
      <Message message = "Welcome to the " />
      <Description />
    </div>
  );
}

export default App;
