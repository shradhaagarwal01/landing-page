import './App.css';
import SlidingImages from './Components/slidingImages/SlidingImages';
import { SliderData } from './Components/slidingImages/SliderData';
import SideBar from './Components/SideBar/SideBar'
import Progress from './Components/progress/Progress'
import Course from './Components/course/Course'
import Testimonials from './Components/testimonials/Testimonials'


function App() {
  return (
    <div className="App">
      <div className="main">
        <SideBar className="sidebar"/>
        <div className="top"> 
        <SlidingImages slides={SliderData} className="slider"/>
        <div className="mid">
          <Progress className="progress"/>
          <Course className="course"/>
          </div>
          <Testimonials/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
