import logo from './logo.svg';
import './App.css';

import SpecialItemsSlider from './ItemsSlider.jsx'
import SpecialItem from './specialItem.jsx'
import TeaMenu from './tableTeaMenu';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  
  return (
    <div className="app">

      <div id="americano">
        <h1 className="red-text">Americano</h1>
      </div>

      <br/>
      <TeaMenu />

      <br/>
      <SpecialItem />

      <br/>
      <SpecialItemsSlider />

      <br/>
      <div className="hide-on-mobile">
        <h1>
          About our cafe
        </h1>
      </div>
    </div>
  );
}

export default App;
