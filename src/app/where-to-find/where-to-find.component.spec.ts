import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereToFindComponent } from './where-to-find.component';

describe('WhereToFindComponent', () => {
  let component: WhereToFindComponent;
  let fixture: ComponentFixture<WhereToFindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhereToFindComponent]
    });
    fixture = TestBed.createComponent(WhereToFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
