import {Injectable} from '@angular/core';
import {Category} from "../model/Category";

import {enableProdMode} from '@angular/core';

import {TestData} from "../data/TestData";
import {Task} from "../model/Task";
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DataHandlerService {
  taskSubject = new BehaviorSubject<Task[]>(TestData.tasks);

  constructor() {
  }


  getCategory(): Category[] {
    return TestData.categories;
  }

  fildTasks() {
    this.taskSubject.next(TestData.tasks)
  }

  fildTasksByCategory(category: Category) {
    const tasks = TestData.tasks.filter(task => task.category === category);
    this.taskSubject.next(tasks);
  }


}

