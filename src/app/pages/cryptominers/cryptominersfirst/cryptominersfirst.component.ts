import { Component } from '@angular/core';
import { CryptoLogicImages } from 'src/app/json/cryptologic_images';
import { CryptoLogicTexts } from 'src/app/json/cryptologic_texts';

@Component({
  selector: 'app-cryptominersfirst',
  templateUrl: './cryptominersfirst.component.html',
  styleUrls: ['./cryptominersfirst.component.scss']
})
export class CryptominersfirstComponent {
  cryptoLogicTexts = new CryptoLogicTexts();
  cryptoLogicImages = new CryptoLogicImages();
}
