import { Component, OnInit, ViewChild } from '@angular/core';
import {Data} from './models/data.model';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'virtual-scroll';
  // @ViewChild('scroll') scroll: ;
  
  machines: Array<Data>;


  constructor(private apiService: ApiService) {

  }
  ngOnInit() {
    
  }

}
