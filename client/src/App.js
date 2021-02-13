import './App.css';
import Header from './components/Header';
import AppRouter from './AppRouter';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/Auth';
import { NotificationProvider } from './contexts/Notification';
import Notification from './components/Notification';

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <div className="App">
          <Header />
          <Notification />
          <AppRouter />

          <Footer />
        </div>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
