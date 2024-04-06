import { Component } from '@angular/core';

interface Item {
  name: string;
  bookmarked: boolean;
}

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {
  items: Item[] = [
    { name: 'Item 1', bookmarked: false },
    { name: 'Item 2', bookmarked: false },
    { name: 'Item 3', bookmarked: false },
    { name: 'Item 4', bookmarked: false },
  ];

  toggleBookmark(item: Item): void {
    item.bookmarked = !item.bookmarked;
  }

  isBookmarked(item: Item): boolean {
    return item.bookmarked;
  }

  badgeCount = 0;

  incrementBadge() {
    this.badgeCount++;
  }
}
