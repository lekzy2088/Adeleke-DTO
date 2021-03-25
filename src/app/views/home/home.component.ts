import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { DTO_Model } from '../../shared/models/dto.model'
import { AppState } from '../../app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Create variable to access Store
  DTO: Observable<DTO_Model[]>;
  constructor(private store: Store<AppState>) { 
    // Make DTO variable to access Store
    this.DTO= store.select('DTO');
  }
  ngOnInit(): void {
  }
}
