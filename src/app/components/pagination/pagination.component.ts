import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Page } from './page.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() page: Page;
  @Input() nameItems: string;
  @Output() paginar: EventEmitter<Page> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
    this.page.nextPageNumber = this.page.actualPage + 1;
    this.page.prevPageNumber = this.page.actualPage - 1;
  }

  prevPage(){
    this.page.prev();
    this.paginar.emit(this.page);
  }

  nextPage(){
    this.page.getNumberOfPages();
    this.page.next();
    this.paginar.emit(this.page);
  }

  getOffset(){
    this.page.getOffset();
  }

}