import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupPlayersComponent } from './setup-players.component';

describe('SetupPlayersComponent', () => {
  let component: SetupPlayersComponent;
  let fixture: ComponentFixture<SetupPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupPlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
