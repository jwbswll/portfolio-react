export class Project {
	constructor(
		public title: string,
		public imageLink: string,
		public description: string,
		public githubLink: string,
		public deployedLink?: string
	) {}
}
