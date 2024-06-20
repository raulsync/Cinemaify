import Navbar from './components/navBar/Navbar';
import { Button } from './components/ui/button';

function App() {
  return (
    <div className="app">
      <Navbar />
      <h1 className=" text-center">Cinemaify</h1>
      <Button
        variant={'destructive'}
        className=" ml-5"
      >
        Click Me
      </Button>
    </div>
  );
}

export default App;
