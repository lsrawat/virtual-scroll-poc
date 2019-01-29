import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataLoaded$: BehaviorSubject<any> = new BehaviorSubject(null);
  private data: any;

  constructor(private apiService: ApiService) {
    this.apiService.getData('./assets/data.json').subscribe(data => {
      this.data = data['units'];
      this.data.forEach((item, index) => {
        item['sno'] = index+1;
        if(index%2 === 0){
          item['path'] = 'https://via.placeholder.com/50';
        }else{
          item['path'] = 'https://via.placeholder.com/75';
        }
      });
      this.dataLoaded$.next(this.data);
    });

  }


}
