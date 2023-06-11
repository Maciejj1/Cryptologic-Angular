import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptologicLandingPageComponent } from './main/cryptologic-landing-page/cryptologic-landing-page.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { NewsComponent } from './main/news/news.component';
import { FooterComponent } from './utils/footer/footer.component';
import { OpinionComponent } from './main/opinion/opinion.component';
import { MainpageComponent } from './main/mainpage/mainpage.component';
import { BlochainfirstComponent } from './pages/blockchain/blochainfirst/blochainfirst.component';
import { BlockchainsecondComponent } from './pages/blockchain/blockchainsecond/blockchainsecond.component';
import { BlockchainthirdComponent } from './pages/blockchain/blockchainthird/blockchainthird.component';
import { CryptofirstComponent } from './pages/crypto/cryptofirst/cryptofirst.component';
import { CryptosecondComponent } from './pages/crypto/cryptosecond/cryptosecond.component';
import { CryptothirdComponent } from './pages/crypto/cryptothird/cryptothird.component';
import { CryptominersfirstComponent } from './pages/cryptominers/cryptominersfirst/cryptominersfirst.component';
import { CryptominerssecondComponent } from './pages/cryptominers/cryptominerssecond/cryptominerssecond.component';
import { CryptominersthirdComponent } from './pages/cryptominers/cryptominersthird/cryptominersthird.component';
import { InvestfirstComponent } from './pages/invest/investfirst/investfirst.component';
import { InvestsecondComponent } from './pages/invest/investsecond/investsecond.component';
import { InvestthirdComponent } from './pages/invest/investthird/investthird.component';
import { BlockchainComponent } from './pages/blockchain/blockchain.component';
import { CryptoComponent } from './pages/crypto/crypto.component';
import { CryptominersComponent } from './pages/cryptominers/cryptominers.component';
import { InvestComponent } from './pages/invest/invest.component';


@NgModule({
  declarations: [
    AppComponent,
CryptologicLandingPageComponent,
NavbarComponent,
NewsComponent,
FooterComponent,
OpinionComponent,
MainpageComponent,
BlockchainComponent,
BlochainfirstComponent,
BlockchainsecondComponent,
BlockchainthirdComponent,
CryptoComponent,
CryptofirstComponent,
CryptosecondComponent,
CryptothirdComponent,
CryptominersComponent,
CryptominersfirstComponent,
CryptominerssecondComponent,
CryptominersthirdComponent,
InvestComponent,
InvestfirstComponent,
InvestsecondComponent,
InvestthirdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
