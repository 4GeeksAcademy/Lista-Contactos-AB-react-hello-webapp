// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getContacts, eliminarContacto } from "../services/Api";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()

  useEffect(() => {
    // console.log("useEffect ejecutado");
    getContacts(dispatch);
  }, []);


  return (
    <div className="container">
      <div className="d-flex justify-content-end mb-4">
        <Link to="/add">
          <button className="btn btn-success">Add new contact</button>
        </Link>
      </div>

      <div className="container pt-4">
        <div className="row justify-content-center">
          {store.contactos?.map((p, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card border-0 shadow rounded" style={{ backgroundColor: p.background || "#ffffff" }}>
                <div className="card-body">
                  <h4 className="card-title text-left mb-3"><strong></strong> {p.name}</h4>
                  <ul className="list-unstyled mb-4">
                    <li><strong></strong> {p.email}</li>
                    <li><strong></strong> {p.phone}</li>
                    <li><strong></strong> {p.address}</li>
                  </ul>
                  <div className="d-grid">
                    <Link to={`/edit/${p.id}`}>
                      <button className="btn btn-outline-primary">Edit Contact</button>
                    </Link>
                    <div lassName="d-grid">
                    <button className="btn btn-outline-danger" onClick={() => eliminarContacto(p.id, dispatch)}>
                      Delete Contact
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



    </div>
  );
};
console.log(" Componente Demo renderizado");
