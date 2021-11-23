import { createContext, FormEvent, ReactNode, useContext, useEffect, useState } from 'react';
import { api, config } from '../services/api';

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
  deleteEvent: (id:string | undefined) => void;
  getEvent: () => void;
  updatedingEvent: (e: FormEvent) => void;
  updateEvent: (event: Event | undefined) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>; 
  returning: (msg: string) => void
}

const EventsContext = createContext<EventsContextData>({} as EventsContextData);

export function EventsProvider({ children }: EventsProviderProps) {

  const [event, setEvent] = useState<Event>({} as Event);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    getEvent()
    console.log('Chamando aqui')
  }, [event])

  function getEvent() {
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
  }

  function deleteEvent(id: string | undefined): void {
    const resp = window.confirm(`Confirma a exclusão do evento ?`)
    if (resp) {
      try {
        api
          .delete<Event>(`/events/${id}`, config)
          .then(response => alert(`Remoção com sucesso `))
        setEvent({} as Event);
      }
      catch {
        alert(`Problema ao remover evento`)
      }
    }

  }

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const aux = Object.assign(event, {
      [e.target.name]: e.target.value,
    });

    setEvent(aux);
  }

  function updatedingEvent(e: FormEvent): void {
    e.preventDefault();

    let updateEvent = {
      cod_sala: event.cod_sala,
      cod_usuario: event.cod_usuario,
      data_evento: event.data_evento,
      descricao_evento: event.descricao_evento,
      titulo_evento: event.titulo_evento
    }

    try {
      api
        .put<Event>(`/events/${event.id_evento}`, updateEvent, config)
        .then(response => alert(`Atualização com sucesso`))
      setEvent({} as Event)
    }
    catch {
      alert(`Problema ao atualizar evento`)
    }
  }

  function returning() {
    return "open"
  }

  function updateEvent(evento: Event | undefined): void {
    
    if (evento) {
      const aux = evento
      setEvent(aux)
      returning()
      console.log('Dados da atualização', aux)
    }
  }


  return (
    <EventsContext.Provider 
      value={{
        events, 
        deleteEvent, 
        getEvent, 
        updatedingEvent, 
        updateEvent, 
        handleChange,
        returning
      }}>
      {children}
    </EventsContext.Provider>
  )   
}

export function useEvents() {
  const context = useContext(EventsContext)

  return context;
}