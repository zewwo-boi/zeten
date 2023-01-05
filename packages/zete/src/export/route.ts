import { Request } from "../utils/types/Request";
import { Response } from "../utils/types/Response";

interface Arguments {
	run(req: Request, res: Response): void;
}

export function route(params: Arguments) {
	params.run("Lol", "hi"); // Placeholder values
}
