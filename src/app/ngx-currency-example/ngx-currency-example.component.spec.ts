import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCurrencyExampleComponent } from './ngx-currency-example.component';

describe('NgxCurrencyExampleComponent', () => {
  let component: NgxCurrencyExampleComponent;
  let fixture: ComponentFixture<NgxCurrencyExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxCurrencyExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxCurrencyExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
