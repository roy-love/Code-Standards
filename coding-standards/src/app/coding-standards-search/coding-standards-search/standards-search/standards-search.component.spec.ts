import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardsSearchComponent } from './standards-search.component';

describe('StandardsSearchComponent', () => {
  let component: StandardsSearchComponent;
  let fixture: ComponentFixture<StandardsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
