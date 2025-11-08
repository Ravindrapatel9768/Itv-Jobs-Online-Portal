import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJobs } from './edit-jobs';

describe('EditJobs', () => {
  let component: EditJobs;
  let fixture: ComponentFixture<EditJobs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditJobs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditJobs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
