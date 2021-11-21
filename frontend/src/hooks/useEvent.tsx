import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Event {
  id_evento?: string;
  cod_sala: number;
  cod_usuario: string;
  data_evento: string;
  descricao_evento: string;
  titulo_evento: string;
}

interface EventsProviderProps {
  children: ReactNode; 
}

interface EventsContextData {
  events: Event[]; 
}

const EventsContext = createContext<EventsContextData>({} as EventsContextData);

const config = {
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mzc0MjY5NzYsImV4cCI6MTYzNzUxMzM3Niwic3ViIjoiZmZmMzY1MzQtMjFkYi00YTIzLTk3ZDctMGU4NDhkYTI4N2YxIn0.5zxm7FInoyIoInzbSz0RTHZEzq2c2mNUYUfDuAhYJro'
  }
}

export function EventsProvider({ children }: EventsProviderProps) {

  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    try {
      api
        .get<Event[]>(`/events`, config)
        .then(response => setEvents(response.data))
        .catch(() => {
          console.error('Não listou os eventos')
        })
    }
    catch {
      alert(`Problema ao consultar eventos`)
    }
  }, [])

  return (
    <EventsContext.Provider value={{events}}>
      {children}
    </EventsContext.Provider>
  )   
}

export function useEvents() {
  const context = useContext(EventsContext)

  return context;
}