import { useEffect, useState } from "react";
import { Footer } from "../components/Footer.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
//import { crearContacto, getContacts } from "../services/Api.jsx";


export const Home = () => {
	const { store, dispatch } = useGlobalReducer()
	//console.log(store); //se ejecutaron pruebas. {message: null, todos: Array(2)}




useEffect (() => {
getContacts(dispatch);
 }, [])

// ejecuto el bloque de codiga una vez, llamo la funcion y la envio al global reducer y no dependemos de variables. 
 
	return (
		<>
		<div className="container pt-4">
			LISTA DE CONTACTOS
		</div>
		<Footer />
		</>

	);
}; 

