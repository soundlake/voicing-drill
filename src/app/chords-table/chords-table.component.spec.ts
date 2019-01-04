import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChordsTableComponent } from './chords-table.component';

describe('ChordsTableComponent', () => {
  let component: ChordsTableComponent;
  let fixture: ComponentFixture<ChordsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChordsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
