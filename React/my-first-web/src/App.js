import logo from './logo.svg';
import './App.css';

const Card = ({userName, age, country}) => {
  // let {userName, age} = props
  return(
    <div>
      <h6>User Name {userName} {country}</h6>
      <p>{age}</p>
    </div>
  )
}

function App() {
  let allUsers = [
    {userName: "John1", age: 22},
    {userName: "John2", age: 23},
    {userName: "John3", age: 24}
  ];
  return (
    <div className="App">
      <h1>Hello World</h1>
      {allUsers.map((e) => {
        return(
          <Card userName={e.userName} age={e.age} />
        )
      })}
    </div>
  );
}

export default App;
