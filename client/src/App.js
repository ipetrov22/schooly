import './App.css';
import Header from './components/Header';
import AppRouter from './AppRouter';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/Auth';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />

        <AppRouter />

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
