import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShow } from '../../consts/tv-show';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {
  show: TvShow = null;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.show = this.route.snapshot.data.show;
  }

  videoUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.show.link);
  }
}
