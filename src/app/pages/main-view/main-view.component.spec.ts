import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppModule } from 'src/app/app.module';

import { MainViewComponent } from './main-view.component';

describe('MainViewComponent', () => {
  let component: MainViewComponent;
  let fixture: ComponentFixture<MainViewComponent>;
  let el : DebugElement;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
      // declarations: [ MainViewComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(MainViewComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
    })
  });

  it('shuld craete the component :) ', () => {
    expect(component).toBeTruthy();
  });

  it('shuld render users  :) ', () => {
    const cards = el.queryAll(By.css(".task"));
     expect(cards).toBeTruthy("coud not find cards");
     expect(cards.length > 0).toBeFalse();

  });

  it('shuld render users  :) ', () => {
    component.searchWithName();
    fixture.detectChanges();
  });


});

