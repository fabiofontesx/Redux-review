import React from 'react';

import {connect, ConnectedProps} from 'react-redux';
import { RootState } from '../../store/reducers';


const mapStateToProps = (state: RootState) => ({
    activeModule: state.course.activeModule,
    activeLesson: state.course.activeLesson
});

const connector = connect(mapStateToProps);
type TPropsFromRedux = ConnectedProps<typeof connector>;


const Video:React.FC<TPropsFromRedux> = ({activeModule, activeLesson}) => {

    console.log(activeLesson);
    console.log(activeModule)
  return (
      <div className="header">
          <strong className="activeModule">Modulo: {activeModule.title} </strong>
          <span className="activeLesson">Aula:  {activeLesson.title} </span>
      </div>
  );
}

export default connector(Video);