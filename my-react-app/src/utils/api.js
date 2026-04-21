const API_BASE = 'https://jsonplaceholder.typicode.com';

export const api = {
  async fetch(endpoint, options = {}) {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    return response.json();
  },
  
  posts: {
    getAll: (limit = 10) => api.fetch(`/posts?_limit=${limit}`),
    getById: (id) => api.fetch(`/posts/${id}`),
    create: (data) => api.fetch('/posts', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
  },
  
  users: {
    getById: (id) => api.fetch(`/users/${id}`),
  }
};

export default api;