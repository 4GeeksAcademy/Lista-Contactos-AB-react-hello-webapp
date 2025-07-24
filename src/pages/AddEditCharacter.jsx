
import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { crearContacto, editarContacto } from "../services/Api";


export const AddEditCharacter = () => {

	const { store, dispatch } = useGlobalReducer() //busca en el store la informacion yendo por el estado global con dispatch para ejecuralo o mofificarlo. 

	const { id } = useParams()  //extrae parametros actuales del navegador como el ID
	// console.log(id);

	const navigate = useNavigate()

	const [isEditing, setIsEditing] = useState(false) //monto funcion de editar el contacto mostrando la tarjeta con sus datos y al hacer click en editar entra el useState que permite cambiar por que isediting is true, ejecutar. 
	const [newContact, setNewContact] = useState({
		id: "",
		name: "",
		email: "",
		phone: "",
		address: ""

	})
	const [showAlert, setShowAlert] = useState(false); //muestro alerta

	const handleInputsChange = (e) => {
		setNewContact({ ...newContact, [e.target.name]: e.target.value })  //manejo el evento y actualizo el estado 
	}																	//cambiar solo el campo del input que se esta modificando por un nuevo (name vs value)	

	const handleSubmit = (e) => {
		e.preventDefault();  //click(e) y preventdefault para no ejecutar la accion normal que es recargar o dirigir

		if (!newContact.name || !newContact.email || !newContact.phone || !newContact.address) { // Si alguno de estos campos (newContact.propiedad) esta vacio ! o faltan ||
			setShowAlert(true);																		//Alerta: "Por favor completa todos los campos"
			setTimeout(() => setShowAlert(false), 2000);		//Temporizador de 2 sgs. para ejecutar alerta
			return;
		}
		if (isEditing) {
			editarContacto(id, newContact, dispatch, navigate)

		} else {
			crearContacto(newContact, setNewContact, dispatch) //creo el contacto, limpio el formulario y actualizo el UseGlobalState

		}

	}

	useEffect(() => {
		const contacto = store.contactos.find(c => c.id === Number(id)) // usamos Number como metodo para convertir ID a valor y no string. 
		// console.log("Contacto", contacto) 
		// console.log(store.contactos);
		// console.log("id esta editando", id); //resultado: cambiamos la propiedad todos por contacto ya que contenia el error. 
		
		
		
		if (id && contacto) {
			setNewContact(contacto);
			setIsEditing(true);
		} else {
			setNewContact({
				id: "",
				name: "",
				email: "",
				phone: "",
				address: "",
				background: "#ffffff"
			});
			setIsEditing(false);
		}
	}, [id, store.contactos]);


	return (
		<div className="container pt-4">
			{/* <h2 className="text-center text-light"><img style={{ height: "40px"}} src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80" alt="Icono de contacto"></img></h2> */}

			{showAlert && (
				<div className="alert alert-warning" role="alert">
					Por favor completa todos los campos
				</div>
			)}
			<div className="row justify-content-center">
				<div className="col-md-11">
					<h1 className="text-center my-4 fw-bold">Add a new contact</h1>
					<form className="mb-5" onSubmit={handleSubmit}>
						{/* Full Name */}
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput" className="form-label">Full Name</label>
							<input type="text" className="form-control" id="nameInput" placeholder="Full Name" name="name" value={newContact.name} onChange={handleInputsChange} />
						</div>
						{/* Email */}
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
							<input type="text" className="form-control" id="EmailInputformGroupExampleInput2" placeholder="Email" name="email" value={newContact.email} onChange={handleInputsChange} />
						</div>
						{/* Phone */}
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput2" className="form-label">Phone</label>
							<input type="text" className="form-control" id="PhoneInput" placeholder="Phone" name="phone" value={newContact.phone} onChange={handleInputsChange} />
						</div>
						{/* Address */}
						<div className="mb-3">
							<label htmlFor="formGroupExampleInput2" className="form-label">Address</label>
							<input type="text" className="form-control" id="AddressInput" placeholder="Address" name="address" value={newContact.address} onChange={handleInputsChange} />
						</div>
						{/* Boton de Save y el link de devolver */}
						<div>
							<button className="btn btn-primary w-100" type="submit">{isEditing ? "Edit Contact" : "Add Contact"}

							</button>
						</div>
					</form>
					<div className="mt-3">
						<Link to="/demo">or get back to contacts</Link>
					</div>
				</div>
			</div>
		</div>

	)
}
export default AddEditCharacter;
// Hay que escribir un h2 (min: 7:05) que tendra 
//A cada input se le debe agregar el value y el onchange










// separamos las vistas con las siguientes instrucciones: 
//Traer de home, el formulario
// traer los elementos del fomulario a AddEditCharacter (para editar los contactos.)
// usar elemento "params" con el hook useParams: me devolvera un objeto con parametros dinamicos de la url actual. (key (id) valor: 2)
// destructurar: reemplazar el valor de la variable (params) por el id.
// llamar useEffect en addcharacter con sus dependencias. 
//si tiene el id edito si no lo estoy agregando.
// steNew Personaje(store.personajes.filter(personaje => personaje.id == id)[0]) **el filter recorre y devuelve un nuevo arreglo.
// como acceder al store desde addeditcharacter: const {store, dispatch} = useGlobaReduce ()    

//crear estado: isEditing, setIsEditingUseState
// debo tener una funcion const navigate = useNavigate que mne servira para cuando haga click me diriga a una pagina que yo lo necesite. 