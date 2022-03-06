import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
	const { loginWithRedirect } = useAuth0();
	let search = window.location.search;
	let searchParams = new URLSearchParams(search);
	/*const organization = searchParams.get("organization");
	const invitation = searchParams.get("invitation");
	const connection = searchParams.get("connection");
	if (!!organization && !!invitation)
		loginWithRedirect({ organization, invitation });*/
	loginWithRedirect(searchParams);
};

export default Login;
