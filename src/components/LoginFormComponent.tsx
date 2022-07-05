import React from "react";
import { useNavigate } from "react-router";
import { useGetAllLessons } from "../graphql/generated";
import { ILesson } from "../interfaces/ILesson";

// CSS
import "./styles/loginFormComponent.scss";

export function LoginFormComponent() {
  const navigate = useNavigate();
  const lessons = useGetAllLessons().data as unknown as { lessons: ILesson[] };

  function ramdomLessonRedirect(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault();

    if (lessons) {
      const slug = lessons.lessons[0].slug;
      console.log(slug);
      navigate(`/event/${slug}`);
    }
  }

  return (
    <form className="loginForm">
      <div>
        <span>Inscreva-se Gratuitamente</span>

        <div className="fields">
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Seu nome complete"
          />
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu email"
          />
          <br />
          <button onClick={ramdomLessonRedirect}>GARANTIR MINHA VAGA</button>
        </div>
      </div>
    </form>
  );
}
