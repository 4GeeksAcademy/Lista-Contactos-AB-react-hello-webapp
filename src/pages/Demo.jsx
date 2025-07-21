// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()

  return (
    <div className="container">
      <div className="d-flex justify-content-end mb-4">
        <Link to="/">
          <button className="btn btn-success">Add new contact</button>
        </Link>
      </div>

      <div className="row">
        {store && store.todos?.map((item) => ( //verifica si store existe, si existe ejecuta .map por cada item retornar el bloque jsx que rendirza una tarjeta con sus datos. 
            // Tarjeta por contacto
          <div className="col-md-4 mb4" key={item.id}>
            <div className="card shadow-sm h-100">
              <div className="card-body" style={{ background: item.background || "#f8f9fa" }}
              >                           
                                          
              <h5 className="card-title">{item.title}</h5> {/* //titulo del item */}
              <p className="card-text">           
                <Link to= {`/single/${item.id}`}>Vied details</Link> {/* Link hacia vista especifica del contacto */}
              </p>  
                            <p className="card-text small text-muted">   
                Open file <code>./store.js</code> to see the global store. {/* mensaje informativo */}  
              </p>
              </div>
            </div>
          </div>


        ))}

      </div>


    </div>
  );
};
