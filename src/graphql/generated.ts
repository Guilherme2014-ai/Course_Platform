import { OperationVariables, QueryHookOptions, useQuery } from "@apollo/client";
import { ILesson } from "../interfaces/ILesson";
import { getAllLessonsQuery } from "./queries/getAllLessonsQuery";
import { getLessonBySlugQuery } from "./queries/getLessonByIdQuery";

export const useGetAllLessons = (options?: QueryHookOptions) => {
  return useQuery<ILesson[], OperationVariables>(getAllLessonsQuery, options);
};

export const useGetLessonBySlug = (options?: QueryHookOptions) => {
  return useQuery(getLessonBySlugQuery, options);
};
