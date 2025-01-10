import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { IconService } from 'carbon-components-angular';

// Icons
import Notification20 from '@carbon/icons/es/notification/20';
import UserAvatar20 from '@carbon/icons/es/user--avatar/20';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
	imports: [RouterOutlet, HeaderComponent]
})
export class AppComponent {
	constructor(protected iconService: IconService) {
		iconService.registerAll([
			Notification20,
			UserAvatar20
		]);
	}

}
