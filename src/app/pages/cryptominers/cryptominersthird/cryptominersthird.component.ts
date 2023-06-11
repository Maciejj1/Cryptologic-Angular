import { Component } from '@angular/core';
import { CryptoLogicImages } from 'src/app/json/cryptologic_images';
import { CryptoLogicTexts } from 'src/app/json/cryptologic_texts';

@Component({
  selector: 'app-cryptominersthird',
  templateUrl: './cryptominersthird.component.html',
  styleUrls: ['./cryptominersthird.component.scss']
})
export class CryptominersthirdComponent {
  cryptoLogicTexts = new CryptoLogicTexts();
  cryptoLogicImages = new CryptoLogicImages();
}
