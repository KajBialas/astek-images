import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/styles/theme';
import GlobalStyle from './utils/styles/globalStyles';
import MainRoutes from './routes.tsx';
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Router>
        <MainRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
