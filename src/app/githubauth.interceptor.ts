import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Auth_tokens } from './Auth_Tokens';

@Injectable()
export class GithubAuthInceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>> {
		const authReq = req.clone({
			headers: req.headers.set('Authorization','token ' + Auth_tokens.API_GITHUB_TOKEN)
		});

		return next.handle(authReq);
	}
}