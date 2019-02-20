import {Component} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {KisiBilgisi} from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  kisiForm: FormGroup;

  constructor() {
    this.kisiForm = this.kisiFormOlustur();
  }


  kisiFormOlustur() {
    return new FormGroup({
      kisiBilgisi: new FormGroup({
        adi: new FormControl(),
        email: new FormControl(),
        telefon: new FormControl(),
        sifre: new FormControl()
      }),
      hobiler: new FormArray([new FormControl()])
    });
  }

  onSubmit() {
    const yeniKisi: KisiBilgisi = Object.assign({}, this.kisiForm.value);
  }
}
