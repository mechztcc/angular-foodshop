import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FoodstoreService } from '../../shared/services/foodstore.service';
import { Foodstore } from '../../shared/types/foodstore.interface';

@Component({
  selector: 'app-card-create-foodstore',
  templateUrl: './card-create-foodstore.component.html',
  styleUrls: ['./card-create-foodstore.component.scss']
})
export class CardCreateFoodstoreComponent implements OnInit {

  isLoading: boolean = false;
  foodstore: Foodstore;
  form: FormGroup;


  constructor(private foodstoreService: FoodstoreService, private fb: FormBuilder, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.initForm();  
  }
  
  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      zip_code: ['', Validators.required],
      street: ['', Validators.required],
      number: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      actived: [true]
    });
  }

  validateForm() {
    if(this.form.invalid) {

    } else {
      this.moutFoodstore();
      this.create();
    }
  }

  moutFoodstore() {
    this.foodstore = {
      name: this.form.controls['name'].value,
      actived: this.form.controls['actived'].value,
      address: {
        zip_code: this.form.controls['zip_code'].value,
        street: this.form.controls['street'].value,
        number: this.form.controls['number'].value,
        city: this.form.controls['city'].value,
        state: this.form.controls['state'].value,
      }
    }
  }

  create() {
    this.isLoading = true;
    this.foodstoreService.create(this.foodstore)
      .subscribe((data: Foodstore) => {
        this.toastrService.success('Loja criada com sucesso!', 'Sucesso!');
        this.foodstore = data;
      }).add(() => {
        this.isLoading = false;
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });
  }

}
