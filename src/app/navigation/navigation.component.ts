import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  hiddenMenu = true; // TODO: Not implemented
  ItemsHiddenToggled = false;

  toggleHiddenMenu() {
    this.ItemsHiddenToggled = !this.ItemsHiddenToggled;
  }
}
