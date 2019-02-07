import {Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  isShown:boolean = false;
  search: string;

  ngOnInit() {
    
  }

  onSubmitSearch(){
    return this.router.navigate(['pokemon-details', this.search.toLowerCase()]);
  }
}

