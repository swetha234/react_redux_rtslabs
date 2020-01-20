import React from 'react';

export const SearchResults = props => {
  return (
    <div>
      {props.data.hits && props.data.hits.length ? (
        <ol>
          <p style={{ fontFamily: 'Italic', fontSize: '20px' }}>
            Here are the related links for your search
          </p>
          {props.data.hits.map((hit, index) => {
            return (
              <li key={index} style={{ margin: '15px 0' }}>
                <div>Title: {hit.title}</div>
                <a
                  href={hit.url}
                  style={{ color: ' #blue ', alignItems: 'center' }}
                  target='_blank'
                >
                  Open Link
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
