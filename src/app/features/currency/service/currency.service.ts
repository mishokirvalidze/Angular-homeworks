import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icurrency, Iapi } from '../model/currensy.model';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}
  private api_key = '2fb4b1afac7b69169c883a32';

  private baseUrl = `https://v6.exchangerate-api.com/v6/${this.api_key}/pair`;

  public from = 'USD';
  public to = 'GEL';

  public request(): Observable<Iapi> {
    return this.http.get<Iapi>(this.baseUrl + `/${this.from}/${this.to}`);
  }

  public currencies: Icurrency[] = [
    {
      currency: 'Afghanistan Afghani',
      abbreviation: 'AFN',
      symbol: '\u060B',
      img: '../../assets/img/flags/afn.png',
    },
    {
      currency: 'Argentina Peso',
      abbreviation: 'ARS',
      symbol: '\u20B1',
      img: '../../assets/img/flags/ars.png',
    },
    {
      currency: 'Armenian Dram',
      abbreviation: 'AMD',
      symbol: '\u058F',
      img: '../../assets/img/flags/amd.png',
    },
    {
      currency: 'Australia Dollar',
      abbreviation: 'AUD',
      symbol: '\u0024',
      img: '../../assets/img/flags/aud.png',
    },
    {
      currency: 'Azerbaijan New Manat',
      abbreviation: 'AZN',
      symbol: '\u20BC',
      img: '../../assets/img/flags/azn.png',
    },
    {
      currency: 'Bahamas Dollar',
      abbreviation: 'BSD',
      symbol: '\u0024',
      img: '../../assets/img/flags/bsd.png',
    },
    {
      currency: 'Barbados Dollar',
      abbreviation: 'BBD',
      symbol: '\u0024',
      img: '../../assets/img/flags/bbd.png',
    },
    {
      currency: 'Belarus Ruble',
      abbreviation: 'BYR',
      symbol: '\u20BD',
      img: '../../assets/img/flags/byn.png',
    },
    {
      currency: 'Belize Dollar',
      abbreviation: 'BZD',
      symbol: '\u0024',
      img: '../../assets/img/flags/bzd.png',
    },
    {
      currency: 'Bermuda Dollar',
      abbreviation: 'BMD',
      symbol: '\u0024',
      img: '../../assets/img/flags/bmd.png',
    },
    {
      currency: 'Brunei Darussalam Dollar',
      abbreviation: 'BND',
      symbol: '\u0024',
      img: '../../assets/img/flags/bnd.png',
    },
    {
      currency: 'Cambodia Riel',
      abbreviation: 'KHR',
      symbol: '\u17DB',
      img: '../../assets/img/flags/khr.png',
    },
    {
      currency: 'Canada Dollar',
      abbreviation: 'CAD',
      symbol: '\u0024',
      img: '../../assets/img/flags/cad.png',
    },
    {
      currency: 'Cayman Islands Dollar',
      abbreviation: 'KYD',
      symbol: '\u0024',
      img: '../../assets/img/flags/kyd.png',
    },
    {
      currency: 'Chile Peso',
      abbreviation: 'CLP',
      symbol: '\u20B1',
      img: '../../assets/img/flags/clp.png',
    },
    {
      currency: 'China Yuan Renminbi',
      abbreviation: 'CNY',
      symbol: '\u5143',
      img: '../../assets/img/flags/cny.png',
    },
    {
      currency: 'Colombia Peso',
      abbreviation: 'COP',
      symbol: '\u20B1',
      img: '../../assets/img/flags/cop.png',
    },
    {
      currency: 'Costa Rica Colon',
      abbreviation: 'CRC',
      symbol: '\u20A1',
      img: '../../assets/img/flags/crc.png',
    },
    {
      currency: 'Cuba Peso',
      abbreviation: 'CUP',
      symbol: '\u20B1',
      img: '../../assets/img/flags/cup.png',
    },
    {
      currency: 'Dominican Republic Peso',
      abbreviation: 'DOP',
      symbol: '\u20B1',
      img: '../../assets/img/flags/dop.png',
    },
    {
      currency: 'East Caribbean Dollar',
      abbreviation: 'XCD',
      symbol: '\u0024',
      img: '../../assets/img/flags/xcd.png',
    },
    {
      currency: 'Egypt Pound',
      abbreviation: 'EGP',
      symbol: '\u00A3',
      img: '../../assets/img/flags/egp.png',
    },
    {
      currency: 'Euro Member Countries',
      abbreviation: 'EUR',
      symbol: '\u20AC',
      img: '../../assets/img/flags/eur.png',
    },
    {
      currency: 'Falkland Islands (Malvinas) Pound',
      abbreviation: 'FKP',
      symbol: '\u00A3',
      img: '../../assets/img/flags/fkp.png',
    },
    {
      currency: 'Fiji Dollar',
      abbreviation: 'FJD',
      symbol: '\u0024',
      img: '../../assets/img/flags/fjd.png',
    },
    {
      currency: 'Ghana Cedis',
      abbreviation: 'GHC',
      symbol: '\u20B5',
      img: '../../assets/img/flags/ghs.png',
    },
    {
      currency: 'Gibraltar Pound',
      abbreviation: 'GIP',
      symbol: '\u00A3',
      img: '../../assets/img/flags/gip.png',
    },
    {
      currency: 'Georgian Lari',
      abbreviation: 'GEL',
      symbol: '\u20BE',
      img: '../../assets/img/flags/gel.png',
    },
    {
      currency: 'Guernsey Pound',
      abbreviation: 'GGP',
      symbol: '\u00A3',
      img: '../../assets/img/flags/ggp.png',
    },
    {
      currency: 'Guyana Dollar',
      abbreviation: 'GYD',
      symbol: '\u0024',
      img: '../../assets/img/flags/gyd.png',
    },
    {
      currency: 'Hong Kong Dollar',
      abbreviation: 'HKD',
      symbol: '\u0024',
      img: '../../assets/img/flags/hkd.png',
    },
    {
      currency: 'India Rupee',
      abbreviation: 'INR',
      symbol: '\u20B9',
      img: '../../assets/img/flags/inr.png',
    },
    {
      currency: 'Iran Rial',
      abbreviation: 'IRR',
      symbol: '\uFDFC',
      img: '../../assets/img/flags/irr.png',
    },
    {
      currency: 'Isle of Man Pound',
      abbreviation: 'IMP',
      symbol: '\u00A3',
      img: '../../assets/img/flags/imp.png',
    },
    {
      currency: 'Jamaica Dollar',
      abbreviation: 'JMD',
      symbol: '\u0024',
      img: '../../assets/img/flags/jmd.png',
    },
    {
      currency: 'Japan Yen',
      abbreviation: 'JPY',
      symbol: '\u00A5',
      img: '../../assets/img/flags/jpy.png',
    },
    {
      currency: 'Jersey Pound',
      abbreviation: 'JEP',
      symbol: '\u00A3',
      img: '../../assets/img/flags/jep.png',
    },
    {
      currency: 'Kazakhstan Tenge',
      abbreviation: 'KZT',
      symbol: '\u20B8',
      img: '../../assets/img/flags/kzt.png',
    },
    {
      currency: 'Korea (North) Won',
      abbreviation: 'KPW',
      symbol: '\u20A9',
      img: '../../assets/img/flags/kpw.png',
    },
    {
      currency: 'Korea (South) Won',
      abbreviation: 'KRW',
      symbol: '\u20A9',
      img: '../../assets/img/flags/krw.png',
    },
    {
      currency: 'Laos Kip',
      abbreviation: 'LAK',
      symbol: '\u20AD',
      img: '../../assets/img/flags/lak.png',
    },
    {
      currency: 'Lebanon Pound',
      abbreviation: 'LBP',
      symbol: '\u00A3',
      img: '../../assets/img/flags/lbp.png',
    },
    {
      currency: 'Liberia Dollar',
      abbreviation: 'LRD',
      symbol: '\u0024',
      img: '../../assets/img/flags/lrd.png',
    },
    {
      currency: 'Mauritius Rupee',
      abbreviation: 'MUR',
      symbol: '\u20A8',
      img: '../../assets/img/flags/mur.png',
    },
    {
      currency: 'Mexico Peso',
      abbreviation: 'MXN',
      symbol: '\u20B1',
      img: '../../assets/img/flags/mxn.png',
    },
    {
      currency: 'Namibia Dollar',
      abbreviation: 'NAD',
      symbol: '\u0024',
      img: '../../assets/img/flags/nad.png',
    },
    {
      currency: 'Nepal Rupee',
      abbreviation: 'NPR',
      symbol: '\u20A8',
      img: '../../assets/img/flags/npr.png',
    },
    {
      currency: 'New Zealand Dollar',
      abbreviation: 'NZD',
      symbol: '\u0024',
      img: '../../assets/img/flags/nzd.png',
    },
    {
      currency: 'Nigeria Naira',
      abbreviation: 'NGN',
      symbol: '\u20A6',
      img: '../../assets/img/flags/ngn.png',
    },
    {
      currency: 'Oman Rial',
      abbreviation: 'OMR',
      symbol: '\uFDFC',
      img: '../../assets/img/flags/omr.png',
    },
    {
      currency: 'Pakistan Rupee',
      abbreviation: 'PKR',
      symbol: '\u20A8',
      img: '../../assets/img/flags/pkr.png',
    },
    {
      currency: 'Paraguay Guarani',
      abbreviation: 'PYG',
      symbol: '\u20B2',
      img: '../../assets/img/flags/pyg.png',
    },
    {
      currency: 'Philippines Peso',
      abbreviation: 'PHP',
      symbol: '\u20B1',
      img: '../../assets/img/flags/php.png',
    },
    {
      currency: 'Russia Ruble',
      abbreviation: 'RUB',
      symbol: '\u20BD',
      img: '../../assets/img/flags/rub.png',
    },
    {
      currency: 'Saint Helena Pound',
      abbreviation: 'SHP',
      symbol: '\u00A3',
      img: '../../assets/img/flags/shp.png',
    },
    {
      currency: 'Seychelles Rupee',
      abbreviation: 'SCR',
      symbol: '\u20A8',
      img: '../../assets/img/flags/scr.png',
    },
    {
      currency: 'Singapore Dollar',
      abbreviation: 'SGD',
      symbol: '\u0024',
      img: '../../assets/img/flags/sgd.png',
    },
    {
      currency: 'Solomon Islands Dollar',
      abbreviation: 'SBD',
      symbol: '\u0024',
      img: '../../assets/img/flags/sbd.png',
    },
    {
      currency: 'Sri Lanka Rupee',
      abbreviation: 'LKR',
      symbol: '\u20A8',
      img: '../../assets/img/flags/lkr.png',
    },
    {
      currency: 'Switzerland Franc',
      abbreviation: 'CHF',
      symbol: '\u20A3',
      img: '../../assets/img/flags/chf.png',
    },
    {
      currency: 'Syria Pound',
      abbreviation: 'SYP',
      symbol: '\u00A3',
      img: '../../assets/img/flags/syp.png',
    },
    {
      currency: 'Thailand Baht',
      abbreviation: 'THB',
      symbol: '\u0E3F',
      img: '../../assets/img/flags/thb.png',
    },
    {
      currency: 'Turkey Lira',
      abbreviation: 'TRY',
      symbol: '\u20BA',
      img: '../../assets/img/flags/try.png',
    },
    {
      currency: 'United Kingdom Pound',
      abbreviation: 'GBP',
      symbol: '\u00A3',
      img: '../../assets/img/flags/gbp.png',
    },
    {
      currency: 'United States Dollar',
      abbreviation: 'USD',
      symbol: '\u0024',
      img: '../../assets/img/flags/usd.png',
    },
    {
      currency: 'Uruguay Peso',
      abbreviation: 'UYU',
      symbol: '\u20B1',
      img: '../../assets/img/flags/uyu.png',
    },
    {
      currency: 'Viet Nam Dong',
      abbreviation: 'VND',
      symbol: '\u20AB',
      img: '../../assets/img/flags/vnd.png',
    },
    {
      currency: 'Yemen Rial',
      abbreviation: 'YER',
      symbol: '\uFDFC',
      img: '../../assets/img/flags/yer.png',
    },
  ];
}
