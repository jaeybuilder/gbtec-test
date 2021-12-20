// Angular modules
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CONFIG } from "./services/config.service";
import { config } from "./config";
// Material modules
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { FlexLayoutModule } from "@angular/flex-layout";
import { InfiniteScrollModule } from "./main/infinite-scroll/infinite-scroll.module";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule,

    // Material
    MatProgressBarModule,
    MatButtonModule,
  ],
  providers: [
    {
      provide: CONFIG,
      useValue: config,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
