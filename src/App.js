import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Home/Login/Login';
import Register from "./Pages/Home/Register/Register"
import NotFound from './Pages/Shared/NotFound/NotFound';
import Warehouse from './Pages/Home/Warehouse/Warehouse';
import Orders from './Pages/Home/Orders/Orders';
import RequireAuth from './Pages/Home/RequireAuth/RequireAuth';
import Checkout from './Pages/Home/Checkout/Checkout';
import BookDetail from './Pages/Home/BookDetail/BookDetail';
import ConfirmBuy from './Pages/Home/ConfirmBuy/ConfirmBuy';
import AddBook from "./Pages/AddBook/AddBook"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/shop" element={<Home></Home>}></Route>

        <Route path="/book/:bookId" element={<BookDetail></BookDetail>}></Route>
        
        <Route path="/orders" element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        }></Route>

        <Route path="/addbook" element={
          <RequireAuth>
            <AddBook></AddBook>
          </RequireAuth>
        }></Route>

        <Route path="/warehouse" element={
          <RequireAuth>
            <Warehouse></Warehouse>
          </RequireAuth>
        }></Route>

        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>

        <Route path="/confirm" element={
          <RequireAuth>
            <ConfirmBuy></ConfirmBuy>
          </RequireAuth>
        }></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
