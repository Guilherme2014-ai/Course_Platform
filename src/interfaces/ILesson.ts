import { IChallenge } from "./IChallenge";
import { ITeacher } from "./ITeacher";

export interface ILesson {
  title: string;
  slug: string;
  description: string;
  videoId: string;
  availableAt: Date;
  challenge: IChallenge;
  teacher: ITeacher;
  lessonType: "live" | "class";
}
