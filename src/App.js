import './App.scss';
import AuthProvider from './context/authContext';
import Login from './components/todo/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/styles/rsuite-default.css';

function App() {
  return (
    <AuthProvider>
      <Login/>

    </AuthProvider>
  );
}

export default App;

