import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CryptoLogicImages } from 'src/app/json/cryptologic_images';
import { CryptoLogicTexts } from 'src/app/json/cryptologic_texts';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private route: Router) {}
  goToHome() {
    this.route.navigate(['/home']);
  }
  goToCrypto() {
    this.route.navigate(['/crypto']);
  }
  goToBlockchain() {
    this.route.navigate(['/blockchain']);
  }
  goToInvest() {
    this.route.navigate(['/invest']);
  }
  goToCryptoMiners() {
    this.route.navigate(['/cryptominers']);
  }
  ngOnInit(): void {}
  cryptoLogicTexts = new CryptoLogicTexts();
  cryptoLogicImages = new CryptoLogicImages();
}
