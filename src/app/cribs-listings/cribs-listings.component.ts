import { Component, OnInit } from '@angular/core';
import { cribs } from './../data/cribs';

@Component({
  selector: 'app-cribs-listings',
  templateUrl: './cribs-listings.component.html',
  styleUrls: ['./cribs-listings.component.css']
})
export class CribsListingsComponent implements OnInit {

  cribs: Array<any> = cribs;

  constructor() { }

  ngOnInit() {
  }

}
