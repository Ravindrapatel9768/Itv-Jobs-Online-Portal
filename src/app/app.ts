import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Jobs } from './jobs/jobs';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('itv-jobs');
}
