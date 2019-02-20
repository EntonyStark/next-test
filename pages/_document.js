import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<html lang="en">
				<Head>
					<meta charSet="UTF-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<link rel="stylesheet" href="/static/nprogress.css" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
				<style global jsx>{`
					html {
						font-size: 62.5%;
					}

					body {
						background-color: #f0f0f0;
						margin: 0;
						box-sizing: border-box;
					}
				`}</style>
			</html>
		);
	}
}
