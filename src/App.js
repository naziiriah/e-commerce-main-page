import "./styles/style.css";
import HeadSection from "./components/header";
import Main from "./components/main-section";


function App() {

  function closeCart(e){
    let open = document.querySelector('.opencart')
    if(e.target !== open){
        open.style.display = "none"
    }
}

  

  return (
    <div className="App">
      <HeadSection close = {closeCart}/>
      <Main close={closeCart}></Main>
    </div>
  );
}

export default App;