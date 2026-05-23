import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-name-details',
  standalone: true,
  imports: [],
  templateUrl: './name-details.component.html',
  styleUrl: './name-details.component.scss'
})
export default class NameDetailsComponent {

  readonly name = input.required<string>();

  readonly upperCaseName = computed(() => this.name().toUpperCase());
  readonly NameLength = computed(() => this.name().length);


  // Create a 'name' signal here, which receives the name parameter from the router

  // Create a computed signal 'upperCaseName' which returns the name in uppercase

  // Create a computed signal 'NameLength' which returns the length of the name

}
