export class User {
  private id?: number;

  constructor(
    private name: string,
    private email: string,
    private password: string
  ) {
    this.setName(name);
    this.setEmail(email);
    this.setPassword(password);
  }
  // getter and setters
  getId(): number | undefined {
    return this.id;
  }
  setId(id: number): void {
    this.id = id;
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
  getEmail(): string {
    return this.email;
  }
  setEmail(email: string): void {
    this.email = email;
  }
  getPassword(): string {
    return this.password;
  }
  setPassword(password: string): void {
    this.password = password;
  }
}
