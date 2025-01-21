import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UIShellModule } from 'carbon-components-angular';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { provideRouter } from '@angular/router';

describe('AppComponent', () => {
	beforeEach((() => {
		TestBed.configureTestingModule({
			imports: [
				AppComponent,
				HeaderComponent,
				UIShellModule
			],
			providers: [provideRouter([])]
		}).compileComponents();
	}));

	it('should create the app', waitForAsync(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));
});
