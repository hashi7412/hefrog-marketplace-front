import React from "react";
import "./scss/index.scss";

import Head from 'next/head';
import { EnvVars } from 'env';
// import Dashboard from 'views/admin/Dashboard';
import AdminDbdLayout from "components/custom/AdminDbdLayout";

const HomePage = () => {
	return (
		<>
			<Head>
				<title>{EnvVars.SITE_NAME}</title>
				<meta
					name="description"
					content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
				/>
			</Head>
			{/* <Dashboard /> */}
		</>
	);
}

HomePage.Layout = AdminDbdLayout;

export default HomePage;

