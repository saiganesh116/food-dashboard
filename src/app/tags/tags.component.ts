import { Component, OnInit,Input } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  foodPageTags?:string[];
  tags:any
  constructor(private fs:FoodService){}

  ngOnInit(): void {
    this.tags = this.fs.getallTag();
  }

}
