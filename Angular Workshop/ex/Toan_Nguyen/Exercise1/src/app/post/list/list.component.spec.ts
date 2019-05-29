import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListPostComponent;
  let fixture: ComponentFixture<ListPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
