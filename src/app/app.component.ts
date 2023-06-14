import { Component } from '@angular/core';
import { SignalsComponent } from './signals/signals.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [SignalsComponent]
})
export class AppComponent {
  title = 'signals';
}
