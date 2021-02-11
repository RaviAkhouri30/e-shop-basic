import { uuid } from 'uuidv4';
import { Products } from 'src/app/common/products';
import { ProductsService } from './../../services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm: FormGroup;
  files: any[] = [];
  progressBar = 0;
  public submitted: boolean;

  constructor(
    private fb?: FormBuilder,
    private productService?: ProductsService,
  ) {
    this.submitted = false;
    console.log(this.submitted);
  }

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
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
  }

  addProductOnSubmit(): boolean {
    if (!this.addProductForm.valid) {
      this.submitted = false;
      return false;
    }
    const post = this.addProductForm.value;
    const postProduct: Products = {
      id: uuid(),
      productName: post.productName,
      quantity: post.quantity,
      manufacturer: post.manufacturer,
      desc: post.desc,
      price: post.price,
      purchased: '0',
      upload: post.upload,
      views: '0'
    };
    this.productService.addProduct(postProduct).subscribe(res => {
      console.log(res);
    }, (err: Response) => {
      console.log(err);
    });

    this.submitted = true;
    return true;
  }

  public clearForm(): void {
    this.addProductForm.reset();
  }

  public onUpload(): void {
    let uploadInput: HTMLInputElement;
    uploadInput = document.getElementById('fileUpload') as HTMLInputElement;
    uploadInput.click();
    uploadInput.onchange = () => {
      this.files = [];
      // tslint:disable-next-line: prefer-for-of
      for (let index = 0; index < uploadInput.files.length; index++) {

        setTimeout(() => {
          for (let i = 0; i < 100; i++) {
            this.progressBar = i;
          }
        }, 4000);
        this.files.push(uploadInput.files[index].name);
      }
    };
  }
 public  removeUpload(): void {
    this.addProductForm.patchValue({
      upload: ''
    });
    this.files.pop();
  }

  get fc(): FormGroup['controls'] {
    return this.addProductForm.controls;
  }

}
