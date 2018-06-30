import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxoDeConversaComponent } from './fluxo-de-conversa.component';

describe('FluxoDeConversaComponent', () => {
  let component: FluxoDeConversaComponent;
  let fixture: ComponentFixture<FluxoDeConversaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluxoDeConversaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxoDeConversaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
