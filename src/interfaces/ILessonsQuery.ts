/* eslint-disable @typescript-eslint/no-explicit-any */
import { LessonType } from "../graphql/generatedCodegen";

export interface ILessonsQuery {
  __typename?: "Lesson" | undefined;
  id: string;
  lessonType: LessonType;
  availableAt?: any;
  title: string;
  slug: string;
  description?: string | null | undefined;
}
