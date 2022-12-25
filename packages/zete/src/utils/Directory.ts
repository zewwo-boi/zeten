/*
 * Priority
 * 1. Outside of src file
 * 2. Inside of src file
 */

namespace Directory {
	export class Routes {
		public get() {
			
		}
	}

	export class Middlewares {}
}

const Routes = Directory.Routes;
const Middlewares = Directory.Middlewares;

export { Routes, Middlewares };
export default Directory;
