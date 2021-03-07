import React from 'react';
import './course.css'

function course(props) {
    return (
        <div className="course">
            <img alt="course" src="https://learntalk.org/photos/blog/header_photo/32/Learntalk_BlogPosts_09-29-17_-_English_Sites.jpg"/>
            <h3 style={{ fontSize:'24px'}}>Master English: Improve Your Speaking, Listening, & Writing</h3>
            <p>Learn new methods to improve your English proficiency fast</p>
            <ul>
                <li>Speak English with more confidence</li>
                <li>Write organized essays that express your ideas clearly</li>
                <li>Respond to questions during job interviews and university exams</li>
                <li>Keep up with conversations with native speakers</li>
            </ul>
            <div style={{ marginTop: '5px' }}>  
            <button>
              Buy Now
            </button>  
          </div>
        </div>
    );
}

export default course;