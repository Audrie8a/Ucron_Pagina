import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service'; faArrowCircleRight
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private homeService: HomeService) { }
  selectedIndex = 0;
  indicators = true;
  controls = true;
  autoSlide = true;
  slideInterval = 6000;
  faArrowCircleLeft = faArrowCircleLeft
  faArrowCircleRight = faArrowCircleRight
  images: any[] = [];
  ngOnInit(): void {
    this.homeService.getImages().subscribe({
      next: (data: any) => {
        console.log(data);
        this.images = data.values;
      },
      error: (err) => {
        console.log(err);
      }
    });

    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  autoSlideImages() {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  selectImage(index: number) {
    this.selectedIndex = index;
  }
  onPrevClick() {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick() {
    if (this.selectedIndex === (this.images.length - 1)) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

}
