import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { tap } from 'rxjs';
import { Icurrency, Iform } from './model/currency.model';
import { CurrencyService } from './service/currency.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsComponent implements OnInit {
  public form = new FormGroup<Iform>({
    firstInput: new FormControl(),
    secondInput: new FormControl(),
  });

  public currencies: Icurrency[] = [];

  public labelImage_1 = '';
  public labelImage_2 = '';

  public inputIcon_1 = '';
  public inputIcon_2 = '';

  public index = 27;
  public index2 = 64;

  conversion_rate = 0;

  numb = 0;

  numb2 = 0;

  constructor(private currensyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencies = this.currensyService.currencies;

    this.labelImage_1 = this.currencies[64].img;
    this.labelImage_2 = this.currencies[27].img;

    this.inputIcon_1 = this.currencies[64].symbol;
    this.inputIcon_2 = this.currencies[27].symbol;
  }

  public onChange(event: Event): void {
    this.currencies.forEach((item, i) => {
      if ((event.target as HTMLSelectElement).id === 'select') {
        if (item.abbreviation === (event.target as HTMLSelectElement).value) {
          this.labelImage_1 = item.img;
          this.inputIcon_1 = item.symbol;
          this.currensyService.from = item.abbreviation;
          this.index2 = i;

          this.currensyService
            .request()
            .pipe(
              tap((data) => {
                this.form.patchValue({
                  secondInput:
                    Math.round(
                      (data.conversion_rate *
                        (this.form.value.firstInput as number) +
                        Number.EPSILON) *
                        100
                    ) / 100,
                });
              })
            )
            .subscribe();
        }
      } else {
        if (item.abbreviation === (event.target as HTMLSelectElement).value) {
          this.labelImage_2 = item.img;
          this.inputIcon_2 = item.symbol;
          this.currensyService.to = item.abbreviation;
          this.index = i;

          this.currensyService
            .request()
            .pipe(
              tap((data) => {
                this.form.patchValue({
                  firstInput:
                    Math.round(
                      ((this.form.value.secondInput as number) /
                        data.conversion_rate +
                        Number.EPSILON) *
                        100
                    ) / 100,
                });
              })
            )
            .subscribe();
        }
      }
    });
  }

  public onInput(event: Event): void {
    if ((event.target as HTMLInputElement).id === 'firstInput') {
      this.currensyService
        .request()
        .pipe(
          tap((data) => {
            this.form.patchValue({
              secondInput:
                Math.round(
                  (data.conversion_rate *
                    (this.form.value.firstInput as number) +
                    Number.EPSILON) *
                    100
                ) / 100,
            });
          })
        )
        .subscribe();
    } else {
      this.currensyService
        .request()
        .pipe(
          tap((data) => {
            let num =
              Math.round(
                ((this.form.value.secondInput as number) /
                  data.conversion_rate +
                  Number.EPSILON) *
                  100
              ) / 100;

            this.form.patchValue({
              firstInput: num,
            });
          })
        )
        .subscribe();
    }
  }
}
