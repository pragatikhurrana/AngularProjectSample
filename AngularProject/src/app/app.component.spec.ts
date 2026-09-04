import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

declare const describe: (description: string, spec: () => void) => void;
declare const beforeEach: (spec: () => void | Promise<void>) => void;
declare const it: (description: string, spec: () => void) => void;
declare const expect: (actual: unknown) => any;

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'AngularProject' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularProject');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, AngularProject');
  });
});
