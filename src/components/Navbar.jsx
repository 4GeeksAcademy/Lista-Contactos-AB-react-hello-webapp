
import { Link } from "react-router-dom";
import  "../index.css";

export const Navbar = () => {

	return (
		<nav className="navbar custom-navbar">
			<div className="container">
				<div className="ml-auto navbar-title">
					{/* <Link to="/add">
						<div className="btn btn-primary">Comenzar</div>
					</Link> */}
					Proyecto: Lista de contactos
				</div>
			</div>
		</nav>
	);
};