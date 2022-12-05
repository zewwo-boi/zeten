import consola from "consola";
import glob from "glob";
import parse from "./build/parse";

// The place for creating the flow of the build process
// Exports to the bin/zete.ts file

function GetConfig() {
	const priority = ["ts", "js"]; // Change later on depending on if typescript package is installed
	const files = glob.sync("zete.config.{ts,js}", { cwd: process.cwd() });

	let config = "";

	if (files.length === 0) {
		consola.error("Cannot find zete.config.{ts,js}");
		return false;
	}

	for (let i = 0; i < priority.length; i++) {
		const v = priority[i];
		const file = files.find((a) => a.endsWith(v)) as string;

		if (file == null && i === priority.length - 1) {
			consola.error("Cannot find zete.config.{ts,js}");
			break;
		} else if (file == null) {
			continue;
		}

		config = file;
		break;
	}

	return config ? config : false;
}

function main() {
	console.log(GetConfig());
	return parse();
}

export default main;
