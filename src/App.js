import Header from './components/header/Header.js';
import Main from './components/main/Main.js';
import './App.css';

function App() {
  let frontendmentorurl = "https://www.frontendmentor.io?ref=challenge";
  let Blankurl = "#";
  return (
    <>
      <Header />
      <Main />
      <div className="attribution" hidden={true}>
    Challenge by <a href={frontendmentorurl}>Frontend Mentor</a>. 
    Coded by <a href={Blankurl}>Amit Dhakal</a>.
  </div>
    </>
  );
}

export default App;
