import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/core/http/post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {
  posts: any ;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    this.postService.getPosts().subscribe((resp) => {
      this.posts = resp;
    });
  }

}
