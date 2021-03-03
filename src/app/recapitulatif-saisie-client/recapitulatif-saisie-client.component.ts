import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-recapitulatif-saisie-client',
  templateUrl: './recapitulatif-saisie-client.component.html',
  styleUrls: ['./recapitulatif-saisie-client.component.css']
})
export class RecapitulatifSaisieClientComponent implements OnInit {

  @Input() client : Client;
  constructor() { }

  ngOnInit(): void {
  }

}
