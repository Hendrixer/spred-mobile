import { API_URL } from '../../env';

export const graphCall = (query) => (
  fetch(`${API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(query)
  })
  .then(resp => resp.json())
);
