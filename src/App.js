
import './App.css';
import Header from './Component/Header/Header';
import Question from './Component/Question/Question';
import ShopContainer from './Component/shop-container/ShopContainer';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <ShopContainer></ShopContainer>
     <Question></Question>
    </div>
  );
}

export default App;
