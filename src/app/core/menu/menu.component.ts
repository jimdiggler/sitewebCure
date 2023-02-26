import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  //----------------------------------------------------------------------------------------
  // ATTRIBUTS
  //----------------------------------------------------------------------------------------
  navLinks = [
    { label: 'Appartements', link: '/home' },
    { label: 'Le Blue Bay', link: '/flats/0' }, //Add link of menu
    { label: 'Le Bel Air', link: '/flats/1' },
    { label: 'Le Rose Hill', link: '/flats/2' },
    { label: 'Le Floréal', link: '/flats/3' },
    { label: 'Le Grand Chalet', link: '/flats/4' },
    { label: 'Le Petit Chalet', link: '/flats/5' },
    { label: 'Contact', link: '/flats/contact' },
  ];
}
