import pkg from "../package.json" with { type: "json" };

const { version } = pkg;

const args = process.argv.slice(2);

if (args.includes("--version") || args.includes("-v")) {
	console.log(version);
} else {
	console.log(`modui v${version}`);
	console.log("CSS Modules UI components for React.\n");
	console.log("Usage:");
	console.log("  modui init          Initialize modui in your project");
	console.log("  modui add <name>    Add a component");
	console.log("  modui --version     Show version");
}
