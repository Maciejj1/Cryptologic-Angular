import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoComponent } from './pages/crypto/crypto.component';
import { BlockchainComponent } from './pages/blockchain/blockchain.component';
import { InvestComponent } from './pages/invest/invest.component';
import { CryptominersComponent } from './pages/cryptominers/cryptominers.component';
import { PagenotfoundComponent } from './utils/pagenotfound/pagenotfound.component';
import { CryptologicLandingPageComponent } from './main/cryptologic-landing-page/cryptologic-landing-page.component';
import { MainpageComponent } from './main/mainpage/mainpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainpageComponent },
  { path: 'crypto', component: CryptoComponent },
  { path: 'blockchain', component: BlockchainComponent },
  { path: 'invest', component: InvestComponent },
  { path: 'cryptominers', component: CryptominersComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
