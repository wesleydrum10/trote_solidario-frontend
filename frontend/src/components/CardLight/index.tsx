import React from "react";
import Typist from "react-typist";
import { CardL, Description, Icon, TitleCard, Next } from "./styles";

type Props = {
  next?: JSX.Element;
  title: string;
  description?: string;
  children: JSX.Element;
};

export const CardLight: React.FC<Props> = ({
  children,
  title,
  description,
  next,
}) => {
  const pathname = window.location.pathname.slice(1).toUpperCase()

  return (
    <>
      {title.toUpperCase() !== pathname ? (
        <CardL>
          <Next>{next}</Next>
          <Icon>{children}</Icon>
          <TitleCard>{title}</TitleCard>
          <Description>
            <Typist>
              <Typist.Delay ms={500} />
              {description}
            </Typist>
          </Description>
        </CardL>
      ) : (
        <CardL style={{ border: "2px solid transparent", cursor: 'default' }}>
          <Next>{next}</Next>
          <Icon>{children}</Icon>
          <TitleCard>{title}</TitleCard>
          <Description>
            <Typist>
              <Typist.Delay ms={500} />
              {description}
            </Typist>
          </Description>
        </CardL>
      )}
    </>
  );
};
