import { Component } from '@angular/core';
import { CryptoLogicImages } from 'src/app/json/cryptologic_images';
import { CryptoLogicTexts } from 'src/app/json/cryptologic_texts';

@Component({
  selector: 'app-blochainfirst',
  templateUrl: './blochainfirst.component.html',
  styleUrls: ['./blochainfirst.component.scss']
})
export class BlochainfirstComponent {
  cryptoLogicTexts = new CryptoLogicTexts();
  cryptoLogicImages = new CryptoLogicImages();
}
