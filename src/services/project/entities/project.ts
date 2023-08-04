export class Project {
  private id: string;
  private name: string;
  private templateId: string;

  constructor(id: string, name: string, templateId: string) {
    this.id = id;
    this.name = name;
    this.templateId = templateId;
  }
}
