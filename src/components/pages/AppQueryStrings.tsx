import React from 'react';
import { useLocation, match, Link } from 'react-router-dom';
import queryString from 'query-string';

const AppQueryStrings = (
  params: { match: match, location: Location }
) => {
  const useL = useLocation();
  console.log(useL);
  console.log('useL === params.location: ', (useL as any) === params.location); // true
  console.log('useL === dereferenced.params.location: ', (useL as any) === {...params.location}); // false

  console.log(params.location);
  console.log(params.match);

  const queries = [
    { text: 'Foo', query: '?name=foo', id: 1 },
    { text: 'Baz', query: '?name=baz', id: 2 },
    { text: 'Bar', query: '?name=bar', id: 3 }
  ];

  const queriesULs = queries.map(q => (
    <li key={q.id}>
      <Link to={`${params.match.url}${q.query}`}>
        {q.text}
      </Link>
    </li>
  ));

  const queryIs = queryString.parse(useL.search);

  return (
    <div>
      <p>{AppQueryStrings.name}</p>
      <ul>{queriesULs}</ul>
      <p>Query is: {queryIs?.name}</p>
    </div>
  );
};

export default AppQueryStrings;
