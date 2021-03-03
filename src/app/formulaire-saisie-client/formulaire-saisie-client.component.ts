import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
@Component({
  selector: 'app-formulaire-saisie-client',
  templateUrl: './formulaire-saisie-client.component.html',
  styleUrls: ['./formulaire-saisie-client.component.css']
})
export class FormulaireSaisieClientComponent implements OnInit {


  client:Client = new Client();

  erreur_nom: string = "";
  erreur_prenom: string = "";
  erreur_cp: string = "";
  erreur_ville: string = "";
  erreur_tel: string = "";
  erreur_email: string = "";
  erreur_civilite: string = "";
  erreur_password: string = "";
  erreur_login: string = "";

  cpValide: boolean = false;

  saisieValide: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public validerInfos(): void {
    if(this.client.isFullyFilled() && this.cpValide)
    {
      this.saisieValide = true;
    }
    else
    {
      this.saisieValide = false;
    }
    
  }


  verifierInfos(): void {
    if (this.client.nom == "") {
      this.saisieValide = false;
      this.erreur_nom = "Le nom ne peut être vide !";
    }
    else
    {
      this.erreur_nom ="";
    }
    if (this.client.prenom == "") {
      this.saisieValide = false;
      this.erreur_prenom = "Le champ ne peut être vide !";
    }
    else
    {
      this.erreur_prenom ="";
    }
    if (this.client.email == "") {
      this.saisieValide = false;
      this.erreur_email = "Le champ ne peut être vide !";
    }
    else
    {
      this.erreur_email ="";
    }
    if (this.client.password == "") {
      this.saisieValide = false;
      this.erreur_password = "Le champ ne peut être vide !";
    }
    else
    {
      this.erreur_password="";
    }
    if (this.client.login == "") {
      this.saisieValide = false;
      this.erreur_login= "Le champ ne peut être vide !";
    }
    else
    {
      this.erreur_login = "";
    }
    if(this.client.cp.length != 5)
    {
      this.erreur_cp = "Le code postal doit faire 5 caractères"
      this.saisieValide = false;
      this.cpValide = false;

    }
    else
    {
      this.erreur_cp = "";
      this.cpValide = true;
    }
    

  }

}
