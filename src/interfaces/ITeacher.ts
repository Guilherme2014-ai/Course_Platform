import { ILesson } from "./ILesson";

export interface ITeacher {
  name: string;
  bio: string;
  avatarURL: string;
  lessons: ILesson[];
}
