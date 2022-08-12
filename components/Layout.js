import React from "react";
import { useRouter } from "next/router";

function Layout(props) {

	return (
		<main className="mx-auto bg-[#F4F4F4] min-h-screen">
			{props.children}
		</main>
	);
}

export default Layout;
