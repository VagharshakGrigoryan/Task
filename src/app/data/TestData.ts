import {Category} from "../model/Category";
import {Priority} from "../model/Priority";
import {Task} from "../model/Task";

export class TestData {

  static categories: Category[] = [
    {id: 1, title: 'Work'},
    {id: 2, title: 'Family'},
    {id: 3, title: 'Study'},
    {id: 4, title: 'Rest'},
    {id: 5, title: 'Sport'},
    {id: 6, title: 'Food'},
    {id: 7, title: 'Finance'},
    {id: 8, title: 'Tools'},
    {id: 9, title: 'Health'},
    {id: 10, title: 'Car'},
  ];

  static priorities: Priority[] = [
    {id: 1, title: 'less', color: '#f8f1f1'},
    {id: 2, title: 'middle', color: '#54dcdc'},
    {id: 3, title: 'highth', color: '#ff56bb'},
    {id: 4, title: 'final', color: '#ea3299'}
  ];

  static task: Task[] = [
    {
      id: 1,
      title: 'Full petrol back',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2022-05-15')
    },

    {
      id: 1,
      title: 'Send results manager',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2022-05-15')
    },

    {
      id: 2,
      title: 'Clen my room',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[1],
      date: new Date('2022-05-15')
    },


    {
      id: 3,
      title: 'Full petrol back',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[1],
      date: new Date('2022-05-15')
    },

    {
      id: 4,
      title: 'walk in the park with family',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[1],
    },

    {
      id: 5,
      title: 'Find books and learn programming',
      completed: false,
      category: TestData.categories[2],
    },

    {
      id: 6,
      title: 'go to the seminar',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[2],
      date: new Date('2022-05-15')
    },

    {
      id: 7,
      title: 'find  tickets from USA',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[1],
    },

    {
      id: 8,
      title: 'mace dinner',
      completed: false,
      category: TestData.categories[5],
    },

    {
      id: 9,
      title: 'go to the jim',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2022-05-15')
    },

    {
      id: 10,
      title: 'run 100 meter',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[10],
    },

  ]

}
