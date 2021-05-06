import DailyPage from './components/DailyPage'
import WeeklyPage from './components/WeeklyPage'
import Nav from './components/Nav'
import SunIcon from './images/sun.png'

function App() {
  return (
    <>
    <div id="app"></div>
    <Nav></Nav>
    <DailyPage></DailyPage>
    <img src={SunIcon} alt="no image"/>
    </>
  );
}

export default App;
