import {Col, Container, Row} from 'reactstrap'
import './App.css';
import {ToastContainer} from "react-toastify";
import Header from "./Components/Header"
import Home from "./Components/Home";
import Allcourses from './Components/Allcourses';
import AddCourses from './Components/AddCourses';
import Menus from './Components/Menus';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
function App() {

  return (
    <div>
      <Router>
        <ToastContainer/>
        <Container>
          <Header/>
          <Row>          {/* it will devide page into 2 columns, 1 is for menu and other is for page */}
            <Col md={4}>
              <Menus/>
            </Col>
            <Col md={8}>
              <Routes>     {/* calling components based on their path */}
                <Route path="/"  Component={Home}/>
                <Route path="/Add-Courses" Component={AddCourses}/>
                <Route path="/All-Courses" Component={Allcourses}/>
                <Route path="/About-Us" Component={AboutUs}/>
                <Route path="/Contact-Us" Component={ContactUs}/>
              </Routes>
                
              
               {/* <Route path="/About-Us" Component={AboutUs}/>   */}
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}
export default App;
