import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../shared/services/category.service';
import { Category } from '../../shared/types/category.interface';

@Component({
  selector: 'app-create-category-modal',
  templateUrl: './create-category-modal.component.html',
  styleUrls: ['./create-category-modal.component.scss'],
})
export class CreateCategoryModalComponent implements OnInit {
  


  form: FormGroup;

  category: Category;
  errorForm: boolean = false;

  isLoading: boolean = false;

  foodstoreId: string | number;

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.foodstoreId = this.activatedRoute.snapshot.params['id'];
    
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  validateForm() {
    if (this.form.invalid) {
    }
    this.moutCategory();
    this.submitObject();
    console.log(this.category);
  }

  moutCategory() {
    this.category = {
      name: this.form.controls['name'].value,
      actived: true,
      foodstore_id: this.foodstoreId
    };
  }

  submitObject() {
    this.isLoading = true;
    this.categoryService
      .create(this.category)
      .subscribe((data: Category) => {
        this.toastrService.success('Categoria criada com sucesso!', 'Sucesso');
      })
      .add(() => {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        this.isLoading = false;
      });
  }
}
