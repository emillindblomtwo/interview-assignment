const BASE_URL = 'http://localhost:3001';

export const getPosts = (limit = 100, offset = 0) => {
  const queryParams = createQueryParams([
    {key: 'limit', value: limit},
    {key: 'offset', value: offset},
  ]);
  return httpGet('posts', queryParams);
};

export const getImpacters = () => {
  return httpGet('impacters');
};

export const updatePost = (id, post) => {
  return httpPut(`posts/${id}`, post);
};

export const deletePost = (id) => {
  return httpDelete(`posts/${id}`);
};

const createQueryParams = (params) => {
  return params.map((param) => `${param.key}=${param.value}`).join('&');
};

const httpGet = (path, queryParams) => {
  return fetch(`${BASE_URL}/${path}?${queryParams}`).then((res) => res.json());
};

const httpDelete = (path) => {
  return fetch(`${BASE_URL}/${path}`, {
    method: 'DELETE',
  }).then((res) => res.json());
};

const httpPut = (path, body) => {
  return fetch(`${BASE_URL}/${path}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
};
