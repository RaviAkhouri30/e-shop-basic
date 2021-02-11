import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-del-dialog',
  templateUrl: './del-dialog.component.html',
  styleUrls: ['./del-dialog.component.css']
})
export class DelDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DelDialogComponent>) { }

  ngOnInit(): void {
  }

  onYes() {
    this.dialogRef.close('y');
  }
  onNo() {
    this.dialogRef.close('n');
  }

}
