import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyPokeComponent } from './only-poke.component';

describe('OnlyPokeComponent', () => {
  let component: OnlyPokeComponent;
  let fixture: ComponentFixture<OnlyPokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlyPokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
