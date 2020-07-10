import React from 'react';
import AppHeader from './components/AppHeader';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { AppRoutes } from './components/AppNavbar';
import AppHome from './components/pages/AppHome';
import AppAbout from './components/pages/AppAbout';
import AppTopics from './components/pages/topics/AppTopics';
import AppTopicDetail from './components/pages/topics/AppTopicDetail';

const AppContainer = styled.div`
  height: 100%;
`;

const App = (props: any) => (
  <AppContainer>
    <AppHeader />

    <Route path={AppRoutes.home} exact component={AppHome} />
    <Route path={AppRoutes.about} component={AppAbout} />
    <Route path={AppRoutes.topics} component={AppTopics} />

    <Route path={AppRoutes.topicId} component={AppTopicDetail} />

    {/* <Route path={AppRoutes.home}>
      <AppHome />
    </Route>
    <Route path={AppRoutes.about}>
      <AppAbout />
    </Route>
    <Route path={AppRoutes.topics}>
      <AppTopics />
    </Route> */}

  </AppContainer>

);

export default App;
