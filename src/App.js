import CartContent from './components/cartcontent/CartContent';
import Home from './components/home/Home';
import DataProvider from './components/context/DataContext';
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<CartContent />}></Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  
  );
  
}

export default App;
