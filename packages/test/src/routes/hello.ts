import { route } from "@zewwo/zete";

export default route({
	run(req, res) {
		console.log(`${req} ${res}`);
	},
});
