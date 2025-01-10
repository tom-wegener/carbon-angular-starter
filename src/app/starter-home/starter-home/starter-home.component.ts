import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Renderer2, inject } from '@angular/core';
import { GridModule, ListModule, RadioModule, TabsModule, ButtonModule, TilesModule } from 'carbon-components-angular';
import { IconService } from 'carbon-components-angular';

import CarbonBuilder16 from '@carbon/icons/es/carbon--ui-builder/16';

@Component({
    selector: 'app-starter-home',
    templateUrl: './starter-home.component.html',
    styleUrls: ['./starter-home.component.scss'],
    imports: [GridModule, ListModule, RadioModule, TabsModule, ButtonModule, TilesModule]
})
export class StarterHomeComponent implements OnInit {

	constructor(protected iconService: IconService) {
		iconService.register(CarbonBuilder16);
	}

	theme = 'white';

	private document = inject(DOCUMENT);
	private renderer = inject(Renderer2);

	ngOnInit() {
		// Apply default class to body
		this.renderer.addClass(this.document.body, this.theme);
	}

	onThemeChange({ value }: { value: string }) {
		// Remove current assigned class then add updated class
		this.renderer.removeClass(this.document.body, this.theme);
		this.theme = value;
		this.renderer.addClass(this.document.body, this.theme);
	}

	navigateToBuilder() {
		window.open('https://builder.carbondesignsystem.com/', '_blank');
	}
}
