import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AuthService } from './services/auth/auth.service';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        MatDialogModule,
        // tslint:disable-next-line: deprecation
        HttpModule,
        RouterTestingModule,
        MatMenuModule,
        MatButtonModule,
        MatBadgeModule,
        MatIconModule
      ],
      providers: [
        AuthService
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create the app', () => {
    // tslint:disable-next-line: no-shadowed-variable
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('title should be Capstone e-Shop', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Capstone e-Shop');
  });
  it('p should be Happy Shopping', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Happy Shopping');
  });
  // it('title should be Assignment2', () =>{
  //     let component = new AppComponent();
  //     expect(component.title).toEqual('Assignment2');
  // });

});
