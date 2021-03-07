import React from 'react';
import './progress.css';


class Progress extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        percentage: 0
      }
      this.nextStep = this.nextStep.bind(this)
    }
    nextStep() {
      if(this.state.percentage === 100) return 
      this.setState(prevState => ({ percentage: prevState.percentage + 20 }))
    }
    render() {
      return (
        <div className="progress">
          <img alt="courseImage" src="https://edraak-marketing-uploads.edraak.org/Courses/French-Course-Image1%20(1).jpg"/>
          <h3>The Complete French Learning Course: Zero to Mastery</h3>
          <ol>
            <li>WATCH</li>
            <li>LISTEN and REPEAT</li>
            <li>READ and WRITE</li>
            <li>REVISION</li>
            <li>Take the QUIZ</li>
          </ol>
          <ProgressBar percentage={this.state.percentage} />
          <p>{this.state.percentage}% completed</p>
          <div>  
            <button  onClick={this.nextStep}>
              Lesson Finished
            </button>  
          </div>   
          <div style={{marginTop: '10px', marginBottom: '15px' , marginLeft: '2px' ,cursor:'pointer'}} onClick={() => this.setState({ percentage: 0 })}>
            Restart course
          </div>
        </div>
      )
    }  
  }
  
  const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
          <Filler percentage={props.percentage} />
        </div>
      )
  }
  
  const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%` }} />
  }
  
  export default Progress;