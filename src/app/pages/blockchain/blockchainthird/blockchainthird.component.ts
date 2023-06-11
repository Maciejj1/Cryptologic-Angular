import { Component } from '@angular/core';
import { CryptoLogicImages } from 'src/app/json/cryptologic_images';
import { CryptoLogicTexts } from 'src/app/json/cryptologic_texts';

@Component({
  selector: 'app-blockchainthird',
  templateUrl: './blockchainthird.component.html',
  styleUrls: ['./blockchainthird.component.scss']
})
export class BlockchainthirdComponent {
  cryptoLogicTexts = new CryptoLogicTexts();
  cryptoLogicImages = new CryptoLogicImages();
}
