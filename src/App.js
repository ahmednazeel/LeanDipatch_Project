import {  Routes , Route} from 'react-router-dom';
import Header from './components/header';
import OverviewPage from './components/OverviewPage';
import ValuePage from './components/valuePage';
import MediaPage from './components/mediaPage';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <Header />
      
        <Routes>
          <Route path='/' element={<OverviewPage/>}/>
          <Route path='/media' element={<MediaPage/>}/>
          <Route path='/value' element={<ValuePage/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
