import { Component } from '@angular/core';
import { CryptoLogicTexts } from '../../json/cryptologic_texts';
import { CryptologicServiceService } from 'src/app/services/cryptologic-service.service';
import { CryptoLogicImages } from 'src/app/json/cryptologic_images';

@Component({
  selector: 'app-cryptologic-landing-page',
  templateUrl: './cryptologic-landing-page.component.html',
  styleUrls: ['./cryptologic-landing-page.component.scss']
})
export class CryptologicLandingPageComponent {
  cryptoLogicTexts = new CryptoLogicTexts();
  cryptoLogicImages = new CryptoLogicImages();
  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }
  constructor(private themeService: CryptologicServiceService){}
}
