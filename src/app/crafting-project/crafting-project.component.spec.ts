import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftingProjectComponent } from './crafting-project.component';

describe('CraftingProjectComponent', () => {
  let component: CraftingProjectComponent;
  let fixture: ComponentFixture<CraftingProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraftingProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftingProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
