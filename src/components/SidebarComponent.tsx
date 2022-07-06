import React from "react";

// Personalized Hook
import { useGetAllLessonsQuery } from "../graphql/generatedCodegen";

// Components
import { LessonComponent } from "./LessonComponent";

// CSS
import "./styles/SidebarComponent.scss";

export function SidebarComponent() {
  const { loading, data, error } = useGetAllLessonsQuery();

  const lessons = data?.lessons;

  return (
    <aside className="sidebar">
      <div className="sidebar__lessonsArea">
        {lessons && !error && !loading ? (
          <>
            {lessons.map((lesson) => {
              const availableAtConverted = new Date(lesson.availableAt);

              const newLesson = {
                ...lesson,
                availableAt: availableAtConverted,
              };

              return (
                <div key={lesson.slug}>
                  <LessonComponent lessonInfo={newLesson} />
                </div>
              );
            })}
          </>
        ) : (
          <div>
            <h1>Carregando...</h1>
          </div>
        )}
      </div>
    </aside>
  );
}
