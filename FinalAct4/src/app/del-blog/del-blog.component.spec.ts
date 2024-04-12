import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelBlogComponent } from './del-blog.component';

describe('DelBlogComponent', () => {
  let component: DelBlogComponent;
  let fixture: ComponentFixture<DelBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelBlogComponent]
    });
    fixture = TestBed.createComponent(DelBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
