import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogofluxoComponent } from './dialogofluxo.component';

describe('DialogofluxoComponent', () => {
  let component: DialogofluxoComponent;
  let fixture: ComponentFixture<DialogofluxoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogofluxoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogofluxoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
