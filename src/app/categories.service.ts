import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  getCategories(): Promise<Array<string>> {
    return Promise.resolve(["Enterprise", "Education", "Policy", "Company"])
  }
}
