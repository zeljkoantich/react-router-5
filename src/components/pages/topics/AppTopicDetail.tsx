import React from 'react';
import { match } from 'react-router-dom';

const AppTopicDetail = (props: { match: match }) => {
  console.log(props.match);

  return (
    <div>
      <h3>{AppTopicDetail.name}</h3>
      <h4>
        topicId
        <span> ~ </span>
        {(props.match.params as any).topicId}
      </h4>
    </div>
  );
};

export default AppTopicDetail;
