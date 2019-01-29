import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-ag-grid-example',
  templateUrl: './ag-grid-example.component.html',
  styleUrls: ['./ag-grid-example.component.scss']
})
export class AgGridExampleComponent implements OnInit {

  machines: any = [];
  columnDefs = [
    {field: 'sno', headerName: 'S. no'},
    {field:  'imageUrl', headerName:'imageUrl'},
    {field:  'availability', headername:'availability'},
    {field:  'deviceId', headername:'deviceId'},
    {field:  'serialNo', headername:'serialNo'},
    {field:  'lastUpdatedDate', headername:'lastUpdatedDate'},
    {field:  'revolutionVersion', headername:'revolutionVersion'},
    {field:  'alert', headername:'alert'},
    {field:  'alertStatusWithoutDetails', headername:'alertStatusWithoutDetails'},
    {field:  'alertStatus', headername:'alertStatus'},
    {field:  'company', headername:'company'},
    {field:  'model', headername:'model'},
    {field:  'location', headername:'location'},
    {field:  'path', headername:'path'},
    {field:  '', headername:'image', cellRenderer: this.getImageHTML},
  ]
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.dataLoaded$.subscribe(data => {
      this.machines = data;
    })
  }

  
  getImageHTML(params) {
    console.log(params);
    return `<img src="${params.data.path}">`;
  }

}
