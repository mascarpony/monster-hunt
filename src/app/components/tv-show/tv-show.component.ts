import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShow } from '../../consts/tv-show';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {
  show: TvShow = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.show = this.route.snapshot.data.show;
    })
    // paramMap is BehaviorSubject => we can subscribe to it to get a snapshot when the route updates
  }
}
