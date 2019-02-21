export class User{

  public id: Number = 0;
  public naam: String;
  public leeftijd: Number;
  public username: String;
  public password: String;

  constructor(id: Number, naam: String, leeftijd: Number, username: String, password: String) {
    this.id = id;
    this.naam = naam;
    this.leeftijd = leeftijd;
    this.username = username;
    this.password = password;
  }
}
