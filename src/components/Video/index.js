import React from 'react';

import {connect} from 'react-redux';


const Video = ({activeModule, activeLesson}) => {

  return (
      <div className="header">
          <strong className="activeModule">Modulo: {activeModule.title} </strong>
          <span className="activeLesson">Aula:  {activeLesson.title} </span>
      </div>
  );
}

const mapStateToProps = state => ({
    activeModule: state.course.activeModule,
    activeLesson: state.course.activeLesson
});

export default connect(mapStateToProps)(Video);