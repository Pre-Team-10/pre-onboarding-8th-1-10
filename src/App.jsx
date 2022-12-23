import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme from './styles/theme';
import Router from './routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer pauseOnHover={false} />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
