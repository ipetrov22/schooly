import './App.css';
import Header from './components/Header';
import AppRouter from './AppRouter';
import Footer from './components/Footer';
import firebase from './firebase';
import FirebaseContext from './contexts/FirebaseContext';

function App() {
  return (
    <FirebaseContext.Provider value={firebase}>
      <div className="App">
        <Header />

        <AppRouter />

        <Footer />
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;
