import { Products } from './../../../common/products';
import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/services/products/products.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  updateProductForm: FormGroup;
  files: any[] = [];
  item: Products[] = [];

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Products[]
  ) {
    this.item = data;
    console.log(this.item);
  }

  ngOnInit(): void {
    this.updateProductForm = this.fb.group({
      productName: ['', Validators.required],
      manufacturer: ['', Validators.required],
      quantity: ['', [
        Validators.required,
        Validators.pattern('\^[0-9]+$')
      ]],
      price: ['', [
        Validators.required,
        Validators.pattern('\^[0-9]+[.]+[0-9]{1,2}$')
      ]],
      desc: ['', Validators.required],
      upload: ['']
    });
    this.updateProductForm.patchValue({
      // tslint:disable-next-line: no-string-literal
      productName: this.item['productName'],
      // tslint:disable-next-line: no-string-literal
      manufacturer: this.item['manufacturer'],
      // tslint:disable-next-line: no-string-literal
      quantity: this.item['quantity'],
      // tslint:disable-next-line: no-string-literal
      price: this.item['price'],
      // tslint:disable-next-line: no-string-literal
      desc: this.item['desc']
    });
  }

  onUpdate() {
    if (!this.updateProductForm.valid) {
      return;
    }
    const post = this.updateProductForm.value;
    this.dialogRef.close(post);
  }

  clearForm() {
    this.updateProductForm.reset();
  }
  get fc() {
    return this.updateProductForm.controls;
  }
  onUpload() {
    let uploadInput: HTMLInputElement;
    uploadInput = document.getElementById('fileUpload') as HTMLInputElement;
    uploadInput.click();
    uploadInput.onchange = () => {
      this.files = [];
      // tslint:disable-next-line: prefer-for-of
      for (let index = 0; index < uploadInput.files.length; index++) {
        this.files.push(uploadInput.files[index].name);
    }
  };
}
  removeUpload() {
    this.updateProductForm.patchValue({
      upload: ''
    });
    this.files.pop();
  }

}
