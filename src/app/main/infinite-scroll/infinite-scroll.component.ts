import { Component, OnInit } from "@angular/core";
import { Lightbox } from "ngx-lightbox";
import { lastValueFrom, Subject, takeUntil } from "rxjs";
import { config } from "../../config";
import { Config } from "src/app/config/config";
import { ConfigService } from "src/app/services/config.service";
import { SharedService } from "src/app/services/shared.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-infinite-scroll",
  templateUrl: "./infinite-scroll.component.html",
  styleUrls: ["./infinite-scroll.component.sass"],
})
export class InfiniteScrollComponent implements OnInit {
  searchParam: string = "";
  // Infinite scroll params
  currentPage: number = 1;
  totalPages: number = 0;
  throttle: number = 300;
  scrollDistance: number = 10;
  scrollUpDistance: number = 2;
  scroller: boolean = false;
  await: boolean = false;
  _album: Array<any> = [];
  direction: "up" | "down" | "" = "";

  public config: Config;
  private _unsubscribeAll: Subject<any>;

  constructor(
    private _lightbox: Lightbox,
    private sharedService: SharedService,
    private configService: ConfigService,
    private snackBar: MatSnackBar
  ) {
    this.config = config;
    this._unsubscribeAll = new Subject();
    this.configService
      .getConfig()
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => (this.config = config));
  }

  ngOnInit(): void {}

  searchPhotos(): void {
    this.currentPage = 1;
    this._album = [];
    this.getPhotos();
  }

  onScroll($event: any): void {
    const chatContent: any = $event.srcElement;
    if (
      chatContent.scrollHeight -
        chatContent.scrollTop -
        chatContent.clientHeight <
      100
    ) {
      if (this.currentPage < this.totalPages && !this.await) {
        this.currentPage++;
        this.getPhotos();
      }
    } else {
      this.scroller = true;
    }
  }

  onScrollDown(ev: any) {
    console.log("scrolled down!!", ev);
    this.direction = "down";
  }

  onUp(ev: any) {
    // console.log('scrolled up!', ev);
  }

  async getPhotos(): Promise<any> {
    this.configService.config = {
      showProgressBar: true,
    };
    try {
      this.await = true;
      const request = this.sharedService.getPhotosByParam(
        this.currentPage,
        this.searchParam
      );
      const response: any = await lastValueFrom(request);
      const results: any[] = response.body.results;
      this.totalPages = response.body.total_pages;

      if (results.length === 0) {
        this.displaySnackBar();
      }

      results.forEach((element: any) => {
        const src = element.urls.full;
        const caption = element.description
          ? element.description
          : element.alt_description
          ? element.alt_description
          : `The image doesn't have a description`;
        const thumb = element.urls.thumb;
        const album = {
          src: src,
          caption: caption,
          thumb: thumb,
          urls: element.urls,
        };
        this._album.push(album);
      });
    } catch (error) {
      console.error(error);
    }
    this.configService.config = {
      showProgressBar: false,
    };

    setTimeout(() => {
      this.await = false;
    }, 1000);
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index, {
      wrapAround: true,
      showImageNumberLabel: true,
      showZoom: true,
      showRotate: true,
    });
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  displaySnackBar(): void {
    this.snackBar.open("There are no images related to your search", "OK", {
      verticalPosition: "top",
      duration: 5000,
      panelClass: "red",
    });
  }
}
