import {Component, Input, OnInit} from '@angular/core';
import {Location} from '../../model/location';
import {ResourceService} from '../../services/resource.service';

@Component({
  selector: 'app-location-badge',
  templateUrl: './location-badge.component.html',
  styleUrls: ['./location-badge.component.scss']
})
export class LocationBadgeComponent implements OnInit {
  @Input() location: Location;
  public resolvedImagePath: string;
  private imageSize = 16;

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.resolvedImagePath = this.resourceService.resolveImageResource(this.location.imagePath);
  }

}
