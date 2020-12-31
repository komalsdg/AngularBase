import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    const fixtureElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should match both password', async(() => {
    let result = true;
    let passwordElement = fixture.debugElement.query(By.css('input[type=password]')).nativeElement;
    let verifypasswordElement = fixture.debugElement.query(By.css('input[id=verifyPassword]')).nativeElement;

    const passwordValue = (passwordElement.value = 'passwordTest');
    const verifypasswordValue = (verifypasswordElement.value = 'test');

    passwordElement.dispatchEvent(new Event('input'));
    verifypasswordElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    if (String(passwordValue) !== String(verifypasswordValue)) {
      result = false;
    }

    if (!result) {
      expect(fixture.debugElement.query(By.css('.error')).nativeElement).toBeTruthy();
    } else {
      expect(fixture.debugElement.query(By.css('.valid')).nativeElement).not.toBeTruthy();
    }
    
  }));

});
