import { Component, HostBinding } from '@angular/core';
import { ThemeModule, HeaderModule } from 'carbon-components-angular';
import { RouterLink } from '@angular/router';
import { IconModule } from 'carbon-components-angular/icon';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [ThemeModule, HeaderModule, RouterLink, IconModule]
})
export class HeaderComponent {
	// adds padding to the top of the document, so the content is below the header
	@HostBinding('class.cds--header') headerClass = true;
}
