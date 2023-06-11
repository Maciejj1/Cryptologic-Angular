import { Component } from '@angular/core';
import { CryptoLogicImages } from 'src/app/json/cryptologic_images';
import { CryptoLogicTexts } from 'src/app/json/cryptologic_texts';

@Component({
  selector: 'app-blockchainsecond',
  templateUrl: './blockchainsecond.component.html',
  styleUrls: ['./blockchainsecond.component.scss']
})
export class BlockchainsecondComponent {
  cryptoLogicTexts = new CryptoLogicTexts();
  cryptoLogicImages = new CryptoLogicImages();
}
