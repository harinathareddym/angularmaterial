import { Searchdata } from '../model/searchdata';
import { SearchdataService } from '../services/searchdata.service';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator : MatPaginator ;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'name', 'age', 'dob','gender'];
  dataSource: MatTableDataSource<Searchdata>;
  
  constructor(private searchService : SearchdataService) { 
    this.dataSource = new MatTableDataSource(this.searchService.getdata());
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    //this.searchdataList =  this.searchService.getdata();
  }

}
