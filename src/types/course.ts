export interface IModule {
    id: number;
    title: string;
    lessons: Array<ILesson>
}

export interface ILesson{
    id: number;
    title: string;
}

export interface ICourseState{ 
    activeLesson: ILesson,
    activeModule: IModule,
    modules: Array<IModule>
}

export enum ECourseActionTypes{
    TOGGLE_LESSON = 'TOGGLE_LESSON',
    REMOVE_LESSON = 'REMOVE_LESSON'
}

interface IToggleLessonAction{
    type: typeof ECourseActionTypes.TOGGLE_LESSON;
    module: IModule;
    lesson: ILesson
}


interface IRemoveLessonAction{
    type: typeof ECourseActionTypes.REMOVE_LESSON;
    moduleID: number;
    lessonID: number;
}

export type CourseActions = IToggleLessonAction | IRemoveLessonAction;

