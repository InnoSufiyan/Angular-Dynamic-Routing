import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  userId: string | null = '';

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
  }
}
