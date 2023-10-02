import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor() {}

  getPosts() {
    let promisePost = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            title:
              'Title 1 lorem ipsum dolor sit amet consectetur adipiscing elit',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            author: 'Author 1',
            date: '2023-09-20',
            tags: ['tech', 'coding'],
            category: 'Technology',
            image: 'https://picsum.photos/200/300',
          },
          {
            title:
              'Title 1 lorem ipsum dolor sit amet consectetur adipiscing elit',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            author: 'Author 1',
            date: '2023-09-20',
            tags: ['tech', 'coding'],
            category: 'Technology',
            image: 'https://picsum.photos/200/300',
          },
          {
            title:
              'Title 1 lorem ipsum dolor sit amet consectetur adipiscing elit',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            author: 'Author 1',
            date: '2023-09-20',
            tags: ['tech', 'coding'],
            category: 'Technology',
            image: 'https://picsum.photos/200/300',
          },
        ]);
      }, 3000);
    });
    return promisePost;
  }

  getPostByCategory(category: string) {
    let promisePost = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            title:
              'Title 1 lorem ipsum dolor sit amet consectetur adipiscing elit',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            author: 'Author 1',
            date: '2023-09-20',
            tags: ['tech', 'coding'],
            category: 'Technology',
            image: 'https://picsum.photos/200/300',
          },
          {
            title:
              'Title 1 lorem ipsum dolor sit amet consectetur adipiscing elit',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            author: 'Author 1',
            date: '2023-09-20',
            tags: ['tech', 'coding'],
            category: 'Technology',
            image: 'https://picsum.photos/200/300',
          },
          {
            title:
              'Title 1 lorem ipsum dolor sit amet consectetur adipiscing elit',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            author: 'Author 1',
            date: '2023-09-20',
            tags: ['tech', 'coding'],
            category: 'Technology',
            image: 'https://picsum.photos/200/300',
          },
        ]);
      }, 3000);
    });
    return promisePost;
  }

  getPostById(id: string) {
    let promisePost = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          title:
            'Title 1 lorem ipsum dolor sit amet consectetur adipiscing elit',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          author: 'Author 1',
          date: '2023-09-20',
          tags: ['tech', 'coding'],
          category: 'Technology',
          image: 'https://picsum.photos/200/300',
        });
      }, 3000);
    });
    return promisePost;
  }
}
