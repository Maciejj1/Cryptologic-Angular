import { Component } from '@angular/core';
import { CryptoLogicImages } from 'src/app/json/cryptologic_images';
import { CryptoLogicTexts } from 'src/app/json/cryptologic_texts';

@Component({
  selector: 'app-investfirst',
  templateUrl: './investfirst.component.html',
  styleUrls: ['./investfirst.component.scss']
})
export class InvestfirstComponent {
  cryptoLogicTexts = new CryptoLogicTexts();
  cryptoLogicImages = new CryptoLogicImages();
}
