import React from "react";

// Components
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";

// CSS
import "./styles/LessonPayloadComponent.scss";

const icons = {
  new: <CreateNewFolderIcon />,
  horizon: <WbTwilightIcon />,
};

export function LessonPayloadComponent({
  payloadTitle,
  icon,
  payloadDescription,
  link,
}: {
  payloadTitle: string;
  payloadDescription: string;
  icon: "new" | "horizon";
  link?: string;
}) {
  if (!link) link = "#";

  return (
    <a href={link}>
      <div className="lessonPayload">
        <div className="lessonPayload__greenPart">
          <div className="lessonPayload__greenPart__lessonPayload__iconContainer">
            {icons[icon]}
          </div>
        </div>

        <div className="lessonPayload__content">
          <span>{payloadTitle}</span>
          <p>{payloadDescription}</p>
        </div>
      </div>
    </a>
  );
}
