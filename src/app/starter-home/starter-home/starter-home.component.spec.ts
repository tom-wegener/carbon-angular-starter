import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { StarterHomeComponent } from './starter-home.component';

describe('HomeComponent', () => {
	let component: StarterHomeComponent;
	let fixture: ComponentFixture<StarterHomeComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			imports: [
				StarterHomeComponent
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(StarterHomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
