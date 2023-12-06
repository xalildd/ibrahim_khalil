import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-ib1',
  templateUrl: './ib1.component.html',
  styleUrls: ['./ib1.component.css']
})
export class Ib1Component {
  programmingLanguages: string[] = ['JavaScript', 'Python', 'Java', 'C++'];
  experienceLevels: string[] = ['Beginner', 'Intermediate', 'Advanced'];

  onSubmit(ib1Form: any) {
    if (ib1Form.valid) {
      const name = ib1Form.value.name;
      const experienceLevel = ib1Form.value.experienceLevel;
      alert(`Congratulations ${name}! Your programming skills are impressive. Keep up the great work!`);
    }
  }
}