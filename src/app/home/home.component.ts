import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('IMGSlider') IMGSlider: ElementRef | undefined;


  images: String[] = [
    'assets/Placeholder2.png',
    'assets/Placeholder2.png',
    'assets/Placeholder2.png',
    'assets/Placeholder2.png',
    'assets/Placeholder2.png',
    'assets/Placeholder2.png',
    'assets/Placeholder2.png',
    'assets/Placeholder2.png',
    'assets/Placeholder2.png',
    'assets/Placeholder2.png',
    'assets/Placeholder2.png'
  ];

  currentSlide = 0;

  ngOnInit() {
    this.startAutoScroll();
  }

  startAutoScroll() {
    interval(3000) // Adjust the interval (in milliseconds) between slides
      .pipe(take(this.images.length))
      .subscribe(() => {
        this.nextSlide();
      });
  }
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
    if (this.IMGSlider) {
      this.IMGSlider.nativeElement.style.transform = `translateX(${-this.currentSlide * 100}%)`;
    }
  }
}
