import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [
    CommonModule, TitleComponent
  ],
  templateUrl: './change-detection.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangeDetectionComponent {

  public frameworkAsSignal = signal({
    name: 'Angular',
    date: '2016'
  })

  public frameworkAsProperty = {
    name: 'Angular',
    date: '2016'
  }

  constructor() {
    setTimeout(() => {
      this.frameworkAsSignal.update(framework => ({
        ...this.frameworkAsProperty, name: 'React'
      }))
    }, 3000)
  }

}
