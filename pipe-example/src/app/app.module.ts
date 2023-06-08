import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/http-demo/posts/posts.component';
import { FilterComponent } from './components/pipe-demo/filter/filter.component';
import { FilterPipe } from './filter.pipe';
import { ShortenPipe } from './shorten.pipe';
import { AuthInterceptorService } from './components/pipe-demo/service/auth-interceptors.service';
import { LoggingInterceptorService } from './components/pipe-demo/service/logging-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    FilterPipe,
    FilterComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
