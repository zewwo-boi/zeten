/*
 * Priority
 * 1. Outside of src file
 * 2. Inside of src file
 */

// TODO: Possibly further module-ize?

import glob from "glob";

const priority = ["./", "./src"];

namespace Directory {
	/**
	 * Assumes src is the positive
	 */
	export class DirClassification {
		srcExists: boolean;

		/**
		 * @returns false if there is no src directory
		 */
		constructor() {
			const dir = glob.sync("./src", { cwd: process.cwd() });

			if (dir.length === 0) {
				this.srcExists = false;
			} else {
				this.srcExists = true;
			}
		}
	}

	export class Routes {
		/**
		 * @returns A singular route module
		 */
		public find(path: string) {
			return glob.sync(`${path}/routes/**/*`, { cwd: process.cwd() });
		}
		/**
		 * @returns All of the routes
		 */
		public get() {}
	}

	export class Middlewares {}
}

const Routes = Directory.Routes;
const Middlewares = Directory.Middlewares;
const DirClassification = Directory.DirClassification;

export { Routes, Middlewares, DirClassification };
export default Directory;
