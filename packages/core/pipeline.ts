export class Pipeline {
  constructor(public name: string) {}

  execute() {
    console.log(`Executing pipeline: ${this.name}`);
  }
}
