import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>SIde menu</p>`,
  styleUrl: './side-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent { }
