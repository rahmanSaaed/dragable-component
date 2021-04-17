import { Injectable } from '@angular/core';
import { Column } from 'src/app/models/column.model';
import { BaseServiceService } from '../base/base-service.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  arrayElement: any[] = [];
 arrayOfArrays: any[] = [];


  constructor(private baseService: BaseServiceService) { }

  searchAboutUsers(data?: string) {
   return this.baseService.get(`people/?search=${data}`);
  }


// Create an empty array.

 splitArray( array: Column[] ) {
  const numsPerGroup = Math.ceil(array.length / 3)
    return this.createGroups(array, 4);
}

 createGroups(arr: Column[], numGroups: number) {
  const perGroup = Math.ceil(arr.length / numGroups);
  return new Array(numGroups)
    .fill('')
    .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
}
}
