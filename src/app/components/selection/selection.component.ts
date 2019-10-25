import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {
  @Input() set list(data) {
    this.listItems = data;
    this.selected = data[0] || [];
  }
  @Output() selectedEmitter = new EventEmitter();
  public listItems = [];
  public selected = { };
  constructor() { }
  ngOnInit() { }
  modelChanged(data) {
    const index = (data.split(':')[0]);
    this.selected = this.listItems[index];
    this.selectedEmitter.emit(this.selected);
  }
}
