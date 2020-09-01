import {  ILesson, IModule, CourseActions, ECourseActionTypes, ICourseState } from "../../types/course";

const INITIAL_STATE:ICourseState = {
    activeLesson: {} as ILesson,
    activeModule: {} as IModule,
    modules: [
        {
            id: 1, title: 'Iniciando com React', lessons: [
                { id: 1, title: 'Primeira aula' },
                { id: 2, title: 'Segunda aula' }
            ]
        },
        {
            id: 2, title: 'Iniciando com Redux', lessons: [
                { id: 1, title: 'Terceira aula' },
                { id: 2, title: 'Quarta aula' }
            ]
        }
    ].sort(sortModules)
};

function sortModules(module:IModule, nextModule:IModule){
    return module.id - nextModule.id;
}

export default function course(state=INITIAL_STATE, action: CourseActions): ICourseState{
    switch(action.type){
        case ECourseActionTypes.TOGGLE_LESSON: 
            return {
                ...state,
                activeLesson: action.lesson,
                activeModule: action.module
            }
        case ECourseActionTypes.REMOVE_LESSON:
            let moduleToChange = state.modules.find(module => module.id === action.moduleID);
            if(moduleToChange){
                const {lessons} = moduleToChange;
                const { modules } = state;
                moduleToChange={...moduleToChange, lessons: lessons.filter(lesson => lesson.id !== action.lessonID)}
                const newModules = [...modules.filter(module => module.id !== action.moduleID), moduleToChange].sort(sortModules)
                return {
                    ...state,
                    modules: newModules
                }
            }
            return state;
        default:
            return state;
    }
}