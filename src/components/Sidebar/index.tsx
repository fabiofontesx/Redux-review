import React from 'react';

import { connect, ConnectedProps } from 'react-redux';
import * as CourseActions from '../../store/actions/course';

import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from '../../store/reducers';


const mapStateToProps = (state: RootState) => ({
    modules: state.course.modules
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(CourseActions, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

type TPropsFromRedux = ConnectedProps<typeof connector>

const Sidebar: React.FC<TPropsFromRedux> = ({ modules, toggleLessonAction, removeLessonAction }) => {

    return (
        <aside>
            {modules.map(module => (
                <div key={module.id}>
                    <strong>{module.title}</strong>
                    <ul>
                        {module.lessons.map(lesson => (
                            <li key={lesson.id}>
                                {lesson.title}
                                <button onClick={() => toggleLessonAction(module, lesson)}>Selecionar</button>
                                <button onClick={() => removeLessonAction(module.id, lesson.id)}> Deletar </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </aside>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar) 