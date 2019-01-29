import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-virtual-scroller-example',
  templateUrl: './virtual-scroller-example.component.html',
  styleUrls: ['./virtual-scroller-example.component.scss']
})
export class VirtualScrollerExampleComponent implements OnInit {
  machines: any = [];
  constructor(private dataService: DataService) { 

  }

  ngOnInit() {
    this.dataService.dataLoaded$.subscribe(data => {
      this.machines = data;
    })
  }

}
