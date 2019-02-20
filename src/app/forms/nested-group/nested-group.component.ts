import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Kisi} from '../../model';

@Component({
  selector: 'app-nested-group',
  templateUrl: './nested-group.component.html',
  styleUrls: ['./nested-group.component.css']
})
export class NestedGroupComponent implements OnInit {
  kisiForm = new FormGroup({
    adi: new FormControl(''),
    yas: new FormControl(''),
    iletisim: new FormGroup({
      email: new FormControl(''),
      telefon: new FormControl('')
    }),
    sifre: new FormControl('')
  });

  kisi: Kisi;


  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.kisi = Object.assign({}, this.kisiForm.value);
    this.kisi.iletisim = Object.assign({}, Object.assign({}, this.kisiForm.value).iletisim);
  }

  iletisimBilgileri() {
    this.kisiForm.patchValue({
      adi: 'Kamuran',
      iletisim: {
        telefon: 5550000
      }
    });
  }
}
