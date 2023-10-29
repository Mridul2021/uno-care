import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import logo from './logo.svg';
import './App.css';
import { Container } from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';



import Navbar from './components/Navbar';
import Home from './components/Home';
import Page2 from './components/Page2'
import Page2_box from './components/Page2_box';
import Page3 from './components/Page3';
import Page7 from './components/Page7';
import Page4 from './components/Page4'
function App() {
  return (
    <div >
      <Navbar/>
      <Container>
        <Home/>
      </Container>
      <Page2/>
      {/* <Page2_box/> */}
      <Page3/>
      <Page7/>
      {/* <Page4/> */}
    </div>
  );
}

export default App;

