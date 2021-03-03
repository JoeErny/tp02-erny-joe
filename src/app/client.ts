export class Client {
  public nom: string = "";
  public prenom: string = "";
  public cp: string = "";
  public tel: string = "";
  public email: string = "";
  public civilite: string = "";
  public password: string = "";
  public login: string = "";

  constructor()
  {

  }
  
  isFullyFilled() : boolean
  {
    if(this.prenom!= "" && this.nom!= "" &&this.email!= ""&&this.login!= ""&&this.civilite!= ""&&this.tel!= ""&&this.cp!= ""&&this.password!= "" )
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}