import React from 'react';
import { useHistory } from 'react-router';
import Typist from 'react-typist';
import {
  CardL,
  Description,
  Icon,
  TitleCard,
  Next
} from './styles';

type Props = {
  next?: JSX.Element,
  title: string,
  description?: string,
  children: JSX.Element,
};

export const CardLight: React.FC<Props> = ({ children, title, description, next }) => {

  const history = useHistory();
  const pathname = history.location.pathname.slice(1).toUpperCase()
  console.log('history', history.location.pathname)
  console.log('path', pathname)

  return (
    <>
      {title.toUpperCase() !== pathname ?
        <CardL>
          <Next>{next}</Next>
          <Icon>
            {children}
          </Icon>
          <TitleCard>{title}</TitleCard>
          <Description>
            <Typist>
              <Typist.Delay ms={500} />
              {description}
            </Typist>
          </Description>
        </CardL>
        :
        <CardL style={{ border: '2px solid transparent' }}>
          <Next>{next}</Next>
          <Icon>
            {children}
          </Icon>
          <TitleCard>{title}</TitleCard>
          <Description>
            <Typist>
              <Typist.Delay ms={500} />
              {description}
            </Typist>
          </Description>
        </CardL>
      }
    </>
  )
}