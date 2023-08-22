import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NewsItem } from 'src/app/interfaces/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-results',
  templateUrl: './news-results.component.html',
  styleUrls: ['./news-results.component.scss']
})
export class NewsResultsComponent implements OnInit, OnChanges {
  @Input() query!: string;

  newsItems?: NewsItem[];

  constructor(
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.getNews();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getNews();
  }

  getNews(): void {
    this.newsService.getNews(this.query).subscribe((results) => {
      this.newsItems = results;
    });
  }
}
