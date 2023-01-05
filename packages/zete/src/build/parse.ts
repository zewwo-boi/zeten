import { DirClassification } from "../utils/Directory";

function parse() {
	const Dir = new DirClassification();

	console.log(Dir.srcExists);
}

export default parse;
