import React from "react";
import { useParams } from "react-router";

// Libs
import { Youtube, DefaultUi, Player } from "@vime/react";

// Services
import { useGetLessonBySlug } from "../graphql/generated";

// Interfaces
import { ILesson } from "../interfaces/ILesson";

// Components
import { Avatar } from "@mui/material";
import { HeaderComponent } from "../components/HeaderComponent";
import { SidebarComponent } from "../components/SidebarComponent";
import { LessonPayloadComponent } from "../components/LessonPayload";

// CSS
import "./styles/EventPage.scss";

export function EventPage() {
  // Utilização de min-hight no class event
  const { lesson_slug } = useParams();

  const { data, loading, error } = useGetLessonBySlug({
    variables: { slug: lesson_slug },
  });

  if (error) console.log(error);

  const currentLesson: ILesson = data?.lesson;

  return (
    <div className="event">
      <HeaderComponent />
      <div className="event__content">
        <main className="event__content-main">
          {data && !loading ? (
            <div className="event__content__lessonMainContent">
              <div className="event__content__lessonMainContent__videoPlayerContainer">
                {currentLesson.videoId && (
                  <Player>
                    <Youtube
                      videoId={currentLesson.videoId}
                      className="player"
                    />
                    <DefaultUi />
                  </Player>
                )}
              </div>
              <div className="event__content__lessonMainContent__lessonInfo-atributtes">
                <div className="event__content__lessonMainContent__lessonInfo-atributtes__info">
                  <div className="event__content__lessonMainContent__lessonInfo-atributtes__info__title-description">
                    <h2>{currentLesson.title}</h2>
                    <p>{currentLesson.description}</p>
                  </div>
                  <div className="event__content__lessonMainContent__lessonInfo-atributtes__info__cummunity-chalenge">
                    <a
                      className="discordCommunity"
                      href="https://discord.com/invite/uYFJ5VJ0"
                    >
                      Comunidade no Discord
                    </a>
                    {currentLesson.challenge && (
                      <div className="challenge">
                        {currentLesson.challenge.url}
                      </div>
                    )}
                  </div>
                </div>
                <div className="event__content__lessonMainContent__lessonInfo-atributtes__info__teacherArea">
                  <Avatar
                    alt="Teacher Picture"
                    src={currentLesson.teacher.avatarURL}
                  />
                  <div>
                    <span>{currentLesson.teacher.name}</span>
                    <p>{currentLesson.teacher.bio.substring(0, 30)}...</p>
                  </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="event__content__lessonMainContent__lessonInfo-atributtes__info__lessonPayload">
                  <LessonPayloadComponent
                    icon="new"
                    link="https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbiUyMG9uJTIwdGhlJTIwbW9vbnxlbnwwfHwwfHw%3D&w=1000&q=80"
                    payloadTitle="Material Complementar"
                    payloadDescription="Acesse o material complementar para acelerar o seu desenvolvimento"
                  />
                  <LessonPayloadComponent
                    link="https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbiUyMG9uJTIwdGhlJTIwbW9vbnxlbnwwfHwwfHw%3D&w=1000&q=80"
                    icon="horizon"
                    payloadTitle="Wallpapers"
                    payloadDescription="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h1>Carregando</h1>
            </div>
          )}
        </main>
        <SidebarComponent />
      </div>
    </div>
  );
}
