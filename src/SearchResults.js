import React from 'react';

export const SearchResults = props => {
  return (
    <div>
      {props.data.hits && props.data.hits.length ? (
        <ol>
          {props.data.hits.map((hit, index) => {
            return (
              <li key={index}>
                <a href={hit.url} target='_blank'>
                  {hit.title}
                </a>
              </li>
            );
          })}
        </ol>
      ) : (
        'No results found'
      )}
    </div>
  );
};
