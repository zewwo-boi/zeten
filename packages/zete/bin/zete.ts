#!/usr/bin/env node
// For some reason, TypeScript won't accept global types. This is the only solution I found
/// <reference types="node" />

import consola from "consola";
import utils from "./utils";

const args = process.argv.slice(2) as string[];
const command = args[0];

try {
	if (command.startsWith("--")) {
		switch (command) {
			case "--version":
				consola.log(utils.version());
				break;
			case "--help":
				consola.log("\n" + utils.help(args.slice(1)));
				break;
			default:
				consola.error(utils.help());
		}

		process.exit(0);
	}

	switch (command) {
		case "build":
			utils.build(); // This will use consecutive logging so no need to log anything here
			break;
		default:
			consola.error(utils.help());
	}
} catch (err) {
	consola.log(utils.version(), `\n\n${utils.help()}`);
}
