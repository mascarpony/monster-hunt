import { Component, OnInit } from '@angular/core';
import { TvShowService } from '../../services/tv-show.service';
import { TvShowShortData } from '../../consts/tv-show';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.scss']
})
export class TvShowListComponent implements OnInit {
  links: TvShowShortData[] = [];
  activeLink = null;

  constructor(private showService: TvShowService) { }

  ngOnInit() {
    this.showService.getShowsMetadata()
      .subscribe(metadata => {
        this.links = metadata;
        this.activeLink = this.links[0];
      });
  }

}
