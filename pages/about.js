import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

const About = ({ user }) => (
	<Layout title="About">
		{/* {JSON.stringify(user)} */}
		<p>{user.name}</p>

		<img src={user.avatar_url} alt="nextjs-logo" height="300px" />
		<img src="/static/nextjs-logo.png" alt="nextjs-logo" height="300px" />
	</Layout>
);

About.getInitialProps = async () => {
	const res = await fetch("http://api.github.com/users/EntonyStark");

	const data = await res.json();

	return { user: data };
};

export default About;
