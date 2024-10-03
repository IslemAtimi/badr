import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorTaskComponent } from './creator-task.component';

describe('CreatorTaskComponent', () => {
  let component: CreatorTaskComponent;
  let fixture: ComponentFixture<CreatorTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatorTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
