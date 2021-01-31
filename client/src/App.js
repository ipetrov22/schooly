import './App.css';
import Header from './components/Header';
import AppRouter from './AppRouter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <AppRouter />

      <Footer />
    </div>
  );
}

export default App;
