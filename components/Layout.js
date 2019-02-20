import Link from "next/link";
import Router from "next/router";
import Nprogress from "nprogress";

Router.onRouteChangeStart = () => Nprogress.start();

Router.onRouteChangeComlete = () => Nprogress.done();
Router.onRouteChangeError = () => Nprogress.done();

export default ({ children, title, header = true, footer = true }) => (
	<div className="root">
		{header && (
			<header className="header">
				<Link href="/">
					<a className="link">Home</a>
				</Link>
				<Link href="/about">
					<a className="link">About</a>
				</Link>
				<Link href="/some">
					<a className="link">Some page</a>
				</Link>
				<Link href="/cloneSome">
					<a className="link">Clone page</a>
				</Link>
			</header>
		)}

		<div className="title-box">
			<h1>{title}</h1>
		</div>
		<div className="main">{children}</div>

		{footer && <footer className="footer">&copy; {new Date().getFullYear()}</footer>}

		<style jsx>{`
			.root {
				max-width: 192rem;
				width: 100%;
				margin: 0 auto;
			}

			.main {
				width: 142rem;
				margin: 0 auto;
				font-size: 1.4rem;
			}

			.title-box {
				width: 100%;
				text-align: center;
			}

			.header {
				width: auto;
				display: flex;
				justify-content: space-between;
				padding: 2rem;
				background-color: indigo;
			}

			.link {
				text-decoration: none;
				font-size: 1.8rem;
				color: #fff;
			}

			.link:hover {
				color: #b52e88dd;
				font-waight: bold;
			}

			.footer {
				width: auto;
				display: flex;
				justify-content: center;
				padding: 2rem;
			}
		`}</style>
	</div>
);
