import {Routes,Route} from 'react-router-dom'
import {Home} from './components/Home'
import {About} from './components/About'
import {Navbar} from './components/Navbar';
import {OrderSummery} from './components/OrderSummery';

function App() {
  return (
  <>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/order-summery' element={<OrderSummery />} />
  </Routes>
  </>
  );
}

export default App;
