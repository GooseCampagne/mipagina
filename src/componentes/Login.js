import { gapi } from 'gapi-script';
import React, { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import Swal from 'sweetalert2';

function Login() {
	useEffect(() => {
		const start = () => {
			gapi.Auth2.init({
				clientId:
					'878979529663-pv6ea5gi30ioh9t8u524hshhhsg0erdi.apps.googleusercontent.com',
			});
		};
		gapi.load('client:auth2', start);
	});
	const logeado_exito = (res) => {
		Swal.fire({
			icon: 'success',
			title: 'Bienvenido',
			text: 'Se inicio sesión correctamente!',
			footer: '<a href="">Tienes algun problema?</a>',
		});
		console.log('LOGUEADO CON ÉXITO:', res.profileObj);
	};
	const fallo_login = (res) => {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Algo salió mal, pero no te preocupes no es tu culpa!',
			footer: '<a href="">Por que tengo este problema?</a>',
		});
		console.log('FALLO EN EL ACCESO:', res.profileObj);
	};

	return (
		<div className="content">
			<GoogleLogin
				clientId="878979529663-pv6ea5gi30ioh9t8u524hshhhsg0erdi.apps.googleusercontent.com"
				buttonText="INGRESAR"
				onSuccess={logeado_exito}
				onFailure={fallo_login}
				cookiePolicy={'single_host_origin'}
				isSignedIn={true}
			/>
		</div>
	);
}
export default Login;