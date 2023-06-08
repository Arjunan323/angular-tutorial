import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, map, tap } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       console.log('request for api');
       const modifiedRequest = req.clone({headers : req.headers.append('New-header' , "abcd")})
       return next.handle(modifiedRequest).pipe(tap( event => {
        console.log(event)
            if(event.type === HttpEventType.Response) {
                console.log( event.body);
            }
       }));
    }
    
}