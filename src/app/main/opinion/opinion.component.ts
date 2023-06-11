import { Component } from '@angular/core';
import { CryptoLogicImages } from 'src/app/json/cryptologic_images';
import { CryptoLogicTexts } from 'src/app/json/cryptologic_texts';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.scss']
})
export class OpinionComponent {
  cryptoLogicTexts = new CryptoLogicTexts();
  cryptoLogicImages = new CryptoLogicImages();
}
