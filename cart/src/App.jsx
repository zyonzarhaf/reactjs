import { useAppContext } from './context';
// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
// items

function App() {
  const { loading } = useAppContext();

  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  
  } else {
    return (
      <main>
        <Navbar />
        <CartContainer />
      </main>
    )
  }
};

export default App;
