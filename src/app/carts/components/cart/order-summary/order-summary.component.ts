import { Component } from '@angular/core';
import { IconDefinition, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent {
  faArrowRight:IconDefinition=faArrowRight;
}
