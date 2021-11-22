import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export const config = {
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mzc2MTAyOTYsImV4cCI6MTYzNzY5NjY5Niwic3ViIjoiM2I4ZmZlYzctYmNmMi00ODYyLTg4N2UtZDkwNmU4NTkzMTliIn0.Ht53tsyMSEycKsk7Uog6gX5DHJdh2tjIHTj2N0tgpvE'
  }
}