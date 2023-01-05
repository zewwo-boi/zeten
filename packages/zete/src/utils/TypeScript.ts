import glob from "glob";

class TypeScript {
	isUsing: boolean;

	constructor() {
		const tsFiles = glob.sync("./**/*.{ts}", { cwd: process.cwd() });

		if (tsFiles.length === 0) {
			this.isUsing = false;
		} else {
			this.isUsing = true;
		}
	}
}
