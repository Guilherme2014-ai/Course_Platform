import React from "react";
import { format, isPast } from "date-fns"; // Biblioteca de Data, para melhor manipulação de datas
import { useParams } from "react-router";
import ptBR from "date-fns/locale/pt-BR";

// Interfaces
import { ILesson } from "../interfaces/ILesson";

// Components
import "./styles/LessonComponent.scss";

export function LessonComponent({ lessonInfo }: { lessonInfo: ILesson }) {
  const { lesson_slug: paramslug } = useParams();

  const isLessonAvailable = isPast(lessonInfo.availableAt);
  const availableAtFormatted = format(
    lessonInfo.availableAt,
    "EEEE' • 'd ' de ' MMMM ' • ' k'h'mm",
    {
      locale: ptBR,
    },
  );

  const isSelectedLesson = lessonInfo.slug == paramslug;

  return (
    <a href={`#/event/${lessonInfo.slug}`}>
      <div className="lesson">
        <span className="lesson__date">{availableAtFormatted}</span>
        <div
          className="lesson__content"
          style={{
            backgroundColor: isSelectedLesson ? "#00875F" : "",
          }}
        >
          <nav
            style={{
              color: isSelectedLesson ? "white" : "",
            }}
          >
            <div
              style={{
                color: isLessonAvailable ? "#81D8F7" : "#FBA94C",
              }}
            >
              <div className="lesson__content__state">
                {isLessonAvailable ? "Disponível" : "Em Breve"}
              </div>
              <div className={`lesson__content__type-${lessonInfo.lessonType}`}>
                {lessonInfo.lessonType == "class" ? "Aula Prática" : "Ao Vivo"}
              </div>
            </div>
          </nav>
          <div>
            <span>
              <strong>{lessonInfo.title}</strong> - {lessonInfo.description}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
