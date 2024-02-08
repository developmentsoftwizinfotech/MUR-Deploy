import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '@env/environment.prod';
@Injectable()
export class CacheInterceptor implements HttpInterceptor {
// cache store
  // store the response object
  cacheMap = new Map<string, HttpResponse<any>>();

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // not cachable
    if (!this.isReqeustCachable(request)) {
      debugger;
      return next.handle(request);
    }
    else {
      debugger;

      // request is cachable
      const url = request.url.toLowerCase();
      // if the request is cached
      if (this.cacheMap.has(url)) {
        debugger;
        return of(this.cacheMap.get(url) as HttpResponse<any>);
      }
      else {
        debugger;
        return next.handle(request).pipe(
          tap(event => {
            if (event instanceof HttpResponse && request.method === 'GET') {
              // Update cache only for GET requests and cache the response
              this.cacheMap.set(url, event);
            } else if (request.method === 'POST' || request.method === 'PUT'|| request.method === 'DELETE') {
              // Invalidate cache for specific URLs when a country is updated or added
              const baseUrl = environment.baseApiUrl;
              const updateUrls = [`${baseUrl}UpdateCountry`, `${baseUrl}InsertCountry`,`${baseUrl}DeleteCountry`];
              for (let i = 0; i < updateUrls.length; i++) {
                if (request.url.toLowerCase().includes(updateUrls[i].toLowerCase())) {
                  this.invalidateCacheForUrl(`${baseUrl}CountryList`);
                  break;
                }
              }
            }
          })
        )
      }
    }

  }
  invalidateCacheForUrl(url: string): boolean {
    debugger;
    const lowerCaseUrl = url.toLowerCase();
    if (this.cacheMap.has(lowerCaseUrl)) {
      this.cacheMap.delete(lowerCaseUrl);
    }
    return false;
  }
  isReqeustCachable(req: HttpRequest<any>): boolean {
    debugger;
    const baseUrl = environment.baseApiUrl
    // the reuest must the GET method
    if (req.method === 'GET') {
      debugger;
      // define all the cache partial URL
      const urls = [`${baseUrl}CountryList`, `${baseUrl}PortList`];
      // get the requets URL
      for (let i = 0; i < urls.length; i++) {
        if (req.url.toLowerCase().includes(urls[i].toLowerCase())) {
          return true;
        }
      }
    }
    else if(req.method === 'POST'|| req.method === 'PUT' || req.method === 'DELETE'){
      this.invalidateCacheForUrl(`${baseUrl}CountryList`)
    }

    return false;
  }
}