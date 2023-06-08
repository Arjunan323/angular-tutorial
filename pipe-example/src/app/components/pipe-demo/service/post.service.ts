import { HttpClient, HttpErrorResponse, HttpEventType, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "../modal/post.modal";
import { Subject, catchError, map, tap, throwError } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PostService {
    error = new Subject<string>();

    constructor(private http: HttpClient) {

    }

    createAndStorePost(title: string, content: string) {
        const postData: Post = { title: title, content: content };
        this.http
            .post<{ name: string }>(
                'https://daily-planner-abbb8-default-rtdb.firebaseio.com/posts.json',
                postData
            ).subscribe(response => {
                console.log(response)
            }, errorRes => {
                this.error.next(errorRes.message)
            });
    }

    fetchPosts() {
        let params = new HttpParams();
        params = params.append('print', 'pretty');
        return this.http.get('https://daily-planner-abbb8-default-rtdb.firebaseio.com/posts.json', {
            params : params
        })
            .pipe(map((responseData: any) => {
                const posts: Post[] = [];
                this.processPost(responseData, posts);
                return posts;
            }),catchError(this.errorHandler));
    }

    private processPost(responseData: { [key: string]: Post }, posts: Post[]) {
        for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
                posts.push({ ...responseData[key], id: key });
            }
        }
    }

    deletePosts() {
        return this.http.delete('https://daily-planner-abbb8-default-rtdb.firebaseio.com/posts.json', {
            observe : 'events', 
            responseType: 'text'
        }).pipe(tap(event => {
            if(event.type === HttpEventType.Sent) {
                //
            }

            console.log(event)
        }));
    }

    errorHandler(error: HttpErrorResponse) {
        return throwError(() => error.message || "server error.");
    }
}