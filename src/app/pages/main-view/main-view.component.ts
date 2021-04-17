import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Column } from 'src/app/models/column.model';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  usersList: any[] = [];
  isSearching: boolean = false;
  usersData: any[] = [[],[],[],[]];
  name: string = '';
  title = 'Users'
  constructor(private users: UsersService) {
  }


  searchWithName(name?: string) {
    this.isSearching = true;
    this.users.searchAboutUsers(this.name).subscribe((res: Column) => {
      this.usersData = this.users.splitArray(res?.results);
      console.log('usersData', this.usersData);
      this.isSearching = false;
    }, error => {
      this.isSearching = false;
    })
  }




  ngOnInit() {
    this.searchWithName();
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log('event', event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }


}
