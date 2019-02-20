import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  adSoyad = new FormControl('');

  constructor() {}
  ngOnInit() {}

  onSubmit() {
    this.adSoyad.setValue('Naciye ZorluKaya');

  }
}
