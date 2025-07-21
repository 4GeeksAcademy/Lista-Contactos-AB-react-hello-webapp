import { useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";


export const Home = () => {
	const { store, dispatch } = useGlobalReducer()
	//console.log(store); //se ejecutaron pruebas. {message: null, todos: Array(2)}



	return (
		<div className="container mt-10">
			<div className="row justify-content-center">
				<div className="col-md-11">
					<h1 className="text-center my-4 fw-bold">Add a new contact</h1>
					{/* Full Name */}
					<div className="mb-3">
						<label htmlFor="formGroupExampleInput" className="form-label">Full Name</label>
						<input type="text" className="form-control" id="fullNameInput" placeholder="Full Name" />
					</div>
					{/* Email */}
					<div className="mb-3">
						<label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
						<input type="text" className="form-control" id="EmailInputformGroupExampleInput2" placeholder="Email" />
					</div>
					{/* Phone */}
					<div className="mb-3">
						<label htmlFor="formGroupExampleInput2" className="form-label">Phone</label>
						<input type="text" className="form-control" id="PhoneInput" placeholder="Phone" />
					</div>
					{/* Address */}
					<div className="mb-3">
						<label htmlFor="formGroupExampleInput2" className="form-label">Address</label>
						<input type="text" className="form-control" id="AddressInput" placeholder="Address" />
					</div>
					{/* Boton de Save y el link de devolver */}
					<div>
						<button className="btn btn-primary w-100">Save</button>
					</div>
					<div className="mt-3">
						<Link to="/demo">or get back to contacts</Link>
					</div>
				</div>
			</div>
		</div>

	);
}; 