import { Component } from '@angular/core';
import { CryptoLogicImages } from 'src/app/json/cryptologic_images';
import { CryptoLogicTexts } from 'src/app/json/cryptologic_texts';

@Component({
  selector: 'app-cryptominerssecond',
  templateUrl: './cryptominerssecond.component.html',
  styleUrls: ['./cryptominerssecond.component.scss']
})
export class CryptominerssecondComponent {
  cryptoLogicTexts = new CryptoLogicTexts();
  cryptoLogicImages = new CryptoLogicImages();
}
