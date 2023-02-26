export class Owner {
  constructor(
    public id: string,
    public lastName: string,
    public firstName: string,
    public address: string,
    public zipCode: string,
    public location: string,
    public dateOfBirth: Date
  ) {}
}
