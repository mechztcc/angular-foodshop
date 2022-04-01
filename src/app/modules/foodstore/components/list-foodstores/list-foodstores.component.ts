import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FoodstoreService } from '../../shared/services/foodstore.service';
import { Foodstore } from '../../shared/types/foodstore.interface';

@Component({
  selector: 'app-list-foodstores',
  templateUrl: './list-foodstores.component.html',
  styleUrls: ['./list-foodstores.component.scss'],
})
export class ListFoodstoresComponent implements OnInit {
  @Input() foodstores: Foodstore[] = [];
  isLoading: boolean = false;

  constructor(
    private foodstoreService: FoodstoreService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.foodstores);
  }

  navigate(id: string) {
    this.router.navigate([`foodstores/details/${id}`]);
  }

  delete(id: string | number) {
    this.isLoading = true;
    this.foodstoreService
      .delete(id)
      .subscribe((data) => {
        this.toastrService.success('Loja removida com sucesso!', 'Sucesso');
      })
      .add(() => {
        this.isLoading = false;
        setInterval(() => {
          window.location.reload();
        }, 1000);
      });
  }
}
