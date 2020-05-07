import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  selectedAnswer: string;
  options: string[] = [
    'When you need to create a new local repository from a shared repository',
    'When you want to use editor to view',
    'Test another msg to check',
    'All of the above'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
