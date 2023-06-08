import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class LoggingInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(" outgoing request ");
        console.log('url', req.url)
        return next.handle(req).pipe(tap(event => {
            console.log(" Incoming Response ");
            if(event.type === HttpEventType.Response) {
                console.log( event.body);
            }
        }));
    }
    
}