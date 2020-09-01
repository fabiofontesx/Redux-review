import { IModule, ILesson, ECourseActionTypes } from "../../types/course";

export function toggleLessonAction(module:IModule, lesson:ILesson){
    return {
        type: ECourseActionTypes.TOGGLE_LESSON,
        module,
        lesson
    };
}



export function removeLessonAction(moduleID:number, lessonID:number){
    return {
        type: ECourseActionTypes.REMOVE_LESSON,
        moduleID,
        lessonID
    };
}
