import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {Hobi, Kisi} from '../../model';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
  kisiForm = this.fb.group({
    adi: ['', [Validators.required, Validators.minLength(5)]],
    yas: [''],
    iletisim: this.fb.group({
      email: [''],
      telefon: ['']
    }),
    sifre: [''],
    hobiler: this.fb.array([
      this.fb.control('')
    ])
  });

  kisi: Kisi;

  constructor(private fb: FormBuilder) {}

  get hobiler() {
    return this.kisiForm.get('hobiler') as FormArray;
  }

  ngOnInit() {}
  onSubmit() {
    this.kisi = Object.assign({}, this.kisiForm.value);
    this.kisi.hobiler = Object.assign({}, Object.assign({}, this.kisiForm.value).hobiler) as Hobi[];
  }
  yeniHobi() {
    this.hobiler.push(this.fb.control(''));
  }
}
