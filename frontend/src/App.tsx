import { BrowserRouter } from 'react-router-dom'
import { RoutesComponents } from './routes/index'
import { GlobalStyle } from './styles/global';

function App() {

  return (
    <>
      <BrowserRouter>
        <RoutesComponents />
        <GlobalStyle />        
      </BrowserRouter>
    </>
  );
}

export default App;
