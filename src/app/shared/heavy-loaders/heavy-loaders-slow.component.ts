import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>hLoader Slow</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoadersSlowComponent { }
