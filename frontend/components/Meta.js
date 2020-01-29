import Head from 'next/head';

const Meta = (props) => {
	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta charSet="utf-8" />
			<link
				rel="shortcut icon"
				href="https://www.ouicar.fr/img/_logos/logo-ouicar-250.png"
			/>
			<link
				rel="stylesheet"
				type="text/css"
				href="/static/nprogress.css"
			/>
			<title>OuiCar+ : plus qu'une voiture, une expérience</title>
		</Head>
	);
};

export default Meta;
