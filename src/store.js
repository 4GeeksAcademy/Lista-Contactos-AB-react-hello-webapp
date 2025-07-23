export const initialStore = () => {
  return {
    message: null,
    todos: [],
    personajes: [],
    contactos: []  //no coloco objetos ya que pueden renderizar un contacto vacio antes de crear uno nuevo. 
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':
      const { id, color } = action.payload;
      return {
        ...store,
        todos: store.todos.map((todo) =>
          todo.id === id ? { ...todo, background: color } : todo
        )
      };

    case 'add_contact':
      return {
        ...store,
        contactos: [...store.contactos, action.payload]
      };
      

    case "set_Contactos":
  return {
    ...store,
    contactos: action.payload || []
  };

    default:
      throw Error('Unknown action.');
  }
}
