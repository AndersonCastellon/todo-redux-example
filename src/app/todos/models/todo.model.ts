export class Todo {
  public id: number;
  public description: string;
  public completed: boolean;

  constructor(description: string) {
    this.description = description;

    this.id = new Date().getTime();
    this.completed = false;
  }
}
