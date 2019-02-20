import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {KisiBilgisi} from '../../model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  kisiForm = new FormGroup({
    adi: new FormControl(''),
    email: new FormControl(''),
    telefon: new FormControl(''),
    sifre: new FormControl('')
  });

  kisi: KisiBilgisi;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.kisi = this.kisiForm.value;
  }

}
