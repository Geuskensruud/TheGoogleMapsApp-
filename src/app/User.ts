export class User{

  public id: Number = 0;
  public naam: String;
  public leeftijd: Number;
  public username: String;
  public password: String;
  public score: number;

  constructor(id: Number, naam: String, leeftijd: Number, username: String, password: String, score: number) {
    this.id = id;
    this.naam = naam;
    this.leeftijd = leeftijd;
    this.username = username;
    this.password = password;
    this.score = score;
  }
}
