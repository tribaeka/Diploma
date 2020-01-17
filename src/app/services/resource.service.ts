import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private readonly hostUrl: string;
  constructor() {
    this.hostUrl = 'http://localhost:8080';
  }

  resolveImageResource(imagePath: string): string {
    return this.hostUrl.concat(imagePath);
  }
}
