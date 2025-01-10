import { Component } from '@angular/core'
import options from './options'
import data from './data'
import { AreaChartComponent } from '@carbon/charts-angular'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ AreaChartComponent ],
	template: '<ibm-area-chart [data]="data" [options]="options"></ibm-area-chart>'
})
export class ChartComponent {
	options = options
	data = data
}

