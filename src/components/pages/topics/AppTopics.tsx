import React from 'react';
import AppContentWrapper from '../../AppContentWrapper';
import styled from 'styled-components';
import { Link, match } from 'react-router-dom';

interface ITopicDetailRoutes {
  rendering: {
    link: string;
    text: string;
  };
  components: {
    link: string;
    text: string;
  };
  propsVState: {
    link: string;
    text: string;
  };
}

const Topics = styled.div`
  /* height: 100px;
  background: yellowgreen; */
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 2vh;
    color: white;
  }

  li > a {
    color: white;
  }
`;

const AppTopics = (props: { match: match }) => {

  console.log(props.match);

  const topicDetailRoutes: ITopicDetailRoutes = {
    rendering: {
      link: `${props.match.url}/rendering`,
      text: 'Rendering with React'
    },
    components: {
      link: `${props.match.url}/components`,
      text: 'Components'
    },
    propsVState: {
      link: `${props.match.url}/props-v-state`,
      text: 'Props v. State'
    }
  };

  const { components, propsVState, rendering } = topicDetailRoutes;

  return (
    <AppContentWrapper>
      <Topics>
        <h2 style={{ background: 'pink' }}>{AppTopics.name}</h2>
        <ul>
          <li>
            <Link to={rendering.link}>
              {rendering.text}
            </Link>
          </li>
          <li>
            <Link to={components.link}>
              {components.text}
            </Link>
          </li>
          <li>
            <Link to={propsVState.link}>
              {propsVState.text}
            </Link>
          </li>
        </ul>
      </Topics>
    </AppContentWrapper>
  );
};

export default AppTopics;
