import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hero } from '../../interface/heroes.interfaces';

@Component({
  selector: 'app-confirmDialog',
  templateUrl: './confirmDialog.component.html',
  styleUrls: ['./confirmDialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ConfirmDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:Hero) { }

  ngOnInit() {
  }
  onClick():void{
    this.dialogRef.close()
  }
  onConfirm():void{
    this.dialogRef.close(this.data)
  }

}
