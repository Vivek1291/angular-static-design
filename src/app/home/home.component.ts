import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedValue: string;
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  values: Object[] = [
    {
      checked: false,
      disabled: false,
      label: 'Do not download training session test questions'
    },
    {
      checked: false,
      disabled: false,
      label: 'The objecctive test have fix time for given question. You will get details on question screen.'
    },
    {
      checked: false,
      disabled: false,
      label: 'Each question has 4 options and only one is correct'
    },
    {
      checked: false,
      disabled: false,
      label: 'Do not download training session test questions'
    },
    {
      checked: false,
      disabled: false,
      label: 'There is no negative marking, therefore make sure you have attempt all the questions'
    },
    {
      checked: false,
      disabled: false,
      label: 'Do not download training session test questions'
    },
    {
      checked: false,
      disabled: false,
      label: 'Do not download training session test questions'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
