import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {CryptoCurrencyModel} from "../../models/crypto-currency.model";
import {Observable, Subject} from "rxjs";
import {CryptoService} from "../../services/crypto.service";

@Component({
  selector: 'app-crypto-list',
  styleUrls: ['./crypto-list.component.scss'],
  templateUrl: './crypto-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoListComponent { readonly list$: Observable<CryptoCurrencyModel[]> = this._cryptoService.getAll();
  private _detailsSubject: Subject<CryptoCurrencyModel> = new Subject<CryptoCurrencyModel>();
  public details$: Observable<CryptoCurrencyModel> = this._detailsSubject.asObservable();

  constructor(private _cryptoService: CryptoService) {
  }
  selectCrypto(crypto : CryptoCurrencyModel) : void{
    this._detailsSubject.next(crypto)
  }
}
