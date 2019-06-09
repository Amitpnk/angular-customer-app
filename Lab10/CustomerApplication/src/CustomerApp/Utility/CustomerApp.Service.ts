import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';

// RxJS (Reactive Extensions for JavaScript) is a library for reactive programming
//  using observables that makes it easier to compose asynchronous

import { Observable } from 'rxjs';

// @Injectable() services
// Notice that the new service imports the Angular Injectable symbol and annotates the class
// with the @Injectable() decorato
@Injectable()
export class MyInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Observables provide support for passing messages between publishers and subscribers in your application

        req = req.clone({
            setHeaders: {
                'security-key': 'key123'
            }
        });
        return next.handle(req);
    }
}
