import { DirClassification, Routes } from "../utils/Directory";

interface Options {
	port?: number;
}

export function app(options?: Options) {
	const Dir = new DirClassification();
	const CRoutes = new Routes();

	let routes: string[];

	if (Dir.srcExists) {
		routes = CRoutes.find("./src");
	} else {
		routes = CRoutes.find(".");
	}

	import(routes[0]).then((route) => {
		route();
	});
}
