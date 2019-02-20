import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Iletisim} from '../../model';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})
export class FormarrayComponent implements OnInit {

  kisiForm: FormGroup;
  iletisimAdresileri: Iletisim[];
  kayit: Iletisim[];

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.kisiForm = this.fb.group({
      iletisimBilgileri: this.fb.array([])
    });

    this.iletisimAdresileri = [
      {email: 'reklam@dememe.com', telefon: '3332222'}
    ];

    this.iletisimAdresileri.forEach(iletisim => {

      this.iletisimBilgiFormEkle(iletisim);

    });
  }

  yeniIletisimEkle() {
    const iletisim: Iletisim = new Iletisim();
    this.iletisimBilgiFormEkle(iletisim);
  }

  onSubmit() {
    this.kayit = Object.assign({}, this.kisiForm.value);
  }

  private iletisimBilgiFormEkle(iletisim: Iletisim) {
    this.getIletisimBilgileri().push(this.fb.group({
      email: iletisim.email,
      telefon: iletisim.telefon
    }));
  }

  private getIletisimBilgileri(): FormArray {
    return (this.kisiForm.get('iletisimBilgileri') as FormArray);
  }
}
