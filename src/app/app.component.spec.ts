import { TestBed } from '@angular/core/testing'
import { PlaygroundModule } from '../playground'
import { AppComponent } from './app.component'
describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PlaygroundModule],
      declarations: [AppComponent]
    })
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent)
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent')
  });
});
