import consola from "consola";
import glob from "glob";

class Config {
	/**
	 * @returns The file name or false if the file doesn't exist
	 */
	public find(): string | boolean {
		const priority = ["ts", "js"]; // TODO Change later on: depend if typescript package is installed
		const files = glob.sync("zete.config.{ts,js}", { cwd: process.cwd() }); // We use glob here for simplicity and efficiency

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
}

export default Config;