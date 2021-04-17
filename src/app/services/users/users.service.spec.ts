import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
describe('UsersService', () => {
  let usersService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule],
      providers: [
        UsersService
      ]
    });
    usersService = TestBed.inject(UsersService);
  });

  it('shoul retrive users', () => {
    usersService.searchAboutUsers('a')
      .subscribe(users => {
        expect(users).toBeTruthy();
       })
  })


});
