import React from "react";

export const Navigation = (props: any) => {
	return (
		<nav className="flex flex-col justify-center items-center flex-wrap bg-cyan-500 p-6 px-5 py-3 rounded">
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				{/* <img src="./logo.png" alt="Nothing" width="54" height="54" /> */}
				<svg
					className="fill-current h-8 w-8 mr-2"
					width="54"
					height="54"
					viewBox="0 0 54 54"
					xmlns="http://www.w3.org/2000/svg"
				>
					{/* SVG 2-D Image */}
					<path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
				</svg>
				<span className="font-semibold text-xl tracking-tight">To Do</span>
			</div>
		</nav>
	);
};
