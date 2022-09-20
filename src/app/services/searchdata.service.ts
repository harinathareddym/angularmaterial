import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Searchdata } from '../model/searchdata';

@Injectable({
  providedIn: 'root'
})
export class SearchdataService {

  constructor() { }

  _searchobj :Searchdata[] = [
    {
      "id" : 1,
      "name" : 'hari',
      "age" : 30,
      "dob" : new Date('10/06/1992'),
      "gender" : 'male'
    },
    {
      "id" : 2,
      "name" : 'hari',
      "age" : 30,
      "dob" : new Date('06/10/1992'),
      "gender" : 'male'
    },
    {
      "id" : 3,
      "name" : 'mohan',
      "age" : 32,
      "dob" : new Date('08/14/1989'),
      "gender" : 'male'
    },
    {
      "id" : 2,
      "name" : 'hari',
      "age" : 30,
      "dob" : new Date('06/10/1992'),
      "gender" : 'male'
    },
    {
      "id" : 3,
      "name" : 'mohan',
      "age" : 32,
      "dob" : new Date('08/14/1989'),
      "gender" : 'male'
    },
    {
      "id" : 2,
      "name" : 'hari',
      "age" : 30,
      "dob" : new Date('06/10/1992'),
      "gender" : 'male'
    },
    {
      "id" : 3,
      "name" : 'mohan',
      "age" : 32,
      "dob" : new Date('08/14/1989'),
      "gender" : 'male'
    },
    {
      "id" : 2,
      "name" : 'hari',
      "age" : 30,
      "dob" : new Date('06/10/1992'),
      "gender" : 'male'
    },
    {
      "id" : 3,
      "name" : 'mohan',
      "age" : 32,
      "dob" : new Date('08/14/1989'),
      "gender" : 'male'
    },
    {
      "id" : 2,
      "name" : 'hari',
      "age" : 30,
      "dob" : new Date('06/10/1992'),
      "gender" : 'male'
    },
    {
      "id" : 3,
      "name" : 'mohan',
      "age" : 32,
      "dob" : new Date('08/14/1989'),
      "gender" : 'male'
    },
    {
      "id" : 2,
      "name" : 'hari',
      "age" : 30,
      "dob" : new Date('06/10/1992'),
      "gender" : 'male'
    },
    {
      "id" : 3,
      "name" : 'mohan',
      "age" : 32,
      "dob" : new Date('08/14/1989'),
      "gender" : 'male'
    },
    {
      "id" : 2,
      "name" : 'hari',
      "age" : 30,
      "dob" : new Date('06/10/1992'),
      "gender" : 'male'
    },
    {
      "id" : 3,
      "name" : 'mohan',
      "age" : 32,
      "dob" : new Date('08/14/1989'),
      "gender" : 'male'
    },
    {
      "id" : 2,
      "name" : 'hari',
      "age" : 30,
      "dob" : new Date('06/10/1992'),
      "gender" : 'male'
    },
    {
      "id" : 3,
      "name" : 'mohan',
      "age" : 32,
      "dob" : new Date('08/14/1989'),
      "gender" : 'male'
    }
  ];

  getdata() {
    return this._searchobj;
  }
}
