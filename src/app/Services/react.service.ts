//import { TypeReact } from './../models/react';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { React } from '../models/react';
import { Observable } from 'rxjs';
import { catchError ,tap} from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReactService {
  private baseURL : string = 'http://localhost:8082/test/api/react'
  constructor(private http: HttpClient) {
    
   }

   /*addReact(react: React): Observable<React> {
    return this.http.post<React>(`${this.baseURL}/add`, react);
  }*/
  /* addReactToPost(typeReact: React, idPost: number): Observable<React> {
   
    return this.http.post<React>(`${this.baseURL}/add/${idPost}`, typeReact);
  }  */

  removeReact(idReact: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/remove/${idReact}`);
  }

  likePost(postId: number): Observable<any> {
    return this.http.post(`http://localhost:8082/test/api/react/like/${postId}`, {}).pipe(
      tap(response => {
        console.log('Like Post Response:', response);
        if (response && response.hasOwnProperty('message')) {
          console.log('Post liked successfully');
        } else {
          throw new Error('Failed to like post. Unexpected response.');
        }
      }),
      catchError(error => {
        console.error('Error liking post:', error);
        throw new Error('Failed to like post. Please try again.');
      })
    );
  }
  

  dislikePost(postId: number): Observable<any> {
    return this.http.post(`${this.baseURL}/dislike/${postId}`, {}).pipe(
      tap(response => {
        console.log('Dislike Post Response:', response);
        if (response && response.hasOwnProperty('message')) {
          console.log('Post disliked successfully');
        } else {
          throw new Error('Failed to dislike post. Unexpected response.');
        }
      }),
      catchError(error => {
        console.error('Error disliking post:', error);
        return throwError('Failed to dislike post. Please try again.');
      })
    );
  }
      
      getTotalLikesByPostId(idPost: number): Observable<number> {
        const url = `${this.baseURL}/total-likes/${idPost}`;
        return this.http.get<number>(url);
      }
    
      getTotalDislikesByPostId(idPost: number): Observable<number> {
        const url = `${this.baseURL}/total-dislikes/${idPost}`;
        return this.http.get<number>(url);
      }


}