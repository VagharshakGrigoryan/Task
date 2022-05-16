import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] | undefined;
  selectorCategory: Category | undefined;

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit() {
    this.categories = this.dataHandler.getCategory();
    console.log(this.categories);
  }

  showTasksByCategory(category: Category) {
    this.selectorCategory = category;
    this.dataHandler.fildTasksByCategory(category);
  }
}
