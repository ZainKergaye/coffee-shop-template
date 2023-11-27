import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-items',
  templateUrl: './popular-items.component.html',
  styleUrls: ['./popular-items.component.scss']
})
export class PopularItemsComponent {
  image1 = "assets/Images/Crepe.jpg";
  image2 = "assets/Images/Gelato.jpg";
  image3 = "assets/Images/brownsugarboba.jpg";
  image4 = "assets/Images/AlmondCroissant.jpg";

  defaultImage = 'https://via.placeholder.com/1000/09f/fff.png';


}
