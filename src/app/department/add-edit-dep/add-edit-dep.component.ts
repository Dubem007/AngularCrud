import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor() { }
  @Input() dep:any;
  DepartmentId!: string;
  DepartmentName!: string;
  ngOnInit(): void {
    this.DepartmentId = this.dep.DepartmentId
    this.DepartmentName = this.dep.DepartmentName
  }

}
