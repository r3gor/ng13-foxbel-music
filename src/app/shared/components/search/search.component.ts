import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchValue: string = '';

  constructor(
    private router: Router,    
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe( 
      params => this.searchValue = params['search'] || ""
    );
  }

  submit() {
    const queryParams = { search: this.searchValue };
    this.router.navigate(['/'], { queryParams })
  }

}
