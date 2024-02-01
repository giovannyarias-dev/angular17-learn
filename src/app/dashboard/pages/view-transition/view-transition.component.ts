import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>view-transition works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewTransitionComponent { }
