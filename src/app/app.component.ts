import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoadingComponent} from './components/loading/loading.component';
import {LoadingStatusService} from './services/loading-status.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoadingComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pos-system-client';
  public statusService:LoadingStatusService = inject(LoadingStatusService);
}
