import chalk from "chalk";
import fs from "fs";
import glob from "glob";
import { register } from "ts-node";
import packageJson from "../package.json";
import build from "../src/entry";
import { commands } from "./commands.json";

export function version() {
	return `Zete ${chalk.bold(packageJson.version)}`;
}

export function help(args?: string[]) {
	if (args != undefined && args.length > 0) {
		const determine = commands.find((command) => command.name == args[0]);

		if (determine != undefined) {
			return chalk`{bold Name}: {blue ${determine.name}}\n{bold Description}: {blue ${determine.description}}\n{bold Usage}: {blue ${determine.usage}}`;
		}

		return;
	}

	let help = `${chalk.bold("Usage")}: ${chalk.blue("npx zete ")}`;
	let startIndex = 0;

	for (let i = 0; i < commands.length; i++) {
		const command = commands[i];

		if (command.name.startsWith("--")) continue;
		startIndex === 0 ? (startIndex = i) : 0;

		i === startIndex
			? (help = help.concat(chalk.blue(command.name)))
			: (help = help.concat(`${chalk.blue("|" + command.name)}`));
	}

	return help;
}

// TODO: Remove from production
export function test() {
	const file = fs.readFileSync(glob.sync("./src/routes/**/*.{js,ts}")[0]);

	register();
}

const utils = {
	version,
	help,
	build,
	test,
};

export default utils;
