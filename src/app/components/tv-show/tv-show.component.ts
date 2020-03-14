import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { TvShow } from '../../consts/tv-show';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {
  show: TvShow = null;
  videoURL = null;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(() => {
      this.show = this.route.snapshot.data.show;
      this.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.show.link);
    });
  }

}
