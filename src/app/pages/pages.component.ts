import { Component, OnInit } from '@angular/core';
declare function init_plugins();
declare let jsPDF: any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
})
export class PagesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    init_plugins();
  }
  // convert() {
  //   let item = {
  //     Name: 'XYZ',
  //     Age: '22',
  //     Gender: 'Male',
  //   };
  //   let doc = new jsPDF();
  //   let col = ['Details', 'Values'];
  //   let rows = [];

  //   // tslint:disable-next-line:forin
  //   for (let key in item) {
  //     let temp = [key, item[key]];
  //     rows.push(temp);
  //   }

  //   doc.autoTable(col, rows);

  //   doc.save('Test.pdf');
  // }
}
