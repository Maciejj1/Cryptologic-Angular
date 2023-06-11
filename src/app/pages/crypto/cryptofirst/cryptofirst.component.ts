import { Component } from '@angular/core';
import { CryptoLogicImages } from 'src/app/json/cryptologic_images';
import { CryptoLogicTexts } from 'src/app/json/cryptologic_texts';

@Component({
  selector: 'app-cryptofirst',
  templateUrl: './cryptofirst.component.html',
  styleUrls: ['../../../../styles.scss']
})
export class CryptofirstComponent {
  cryptoLogicTexts = new CryptoLogicTexts();
  cryptoLogicImages = new CryptoLogicImages();
}
