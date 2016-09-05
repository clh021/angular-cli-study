import 'reflect-metadata';
import 'rxjs';
import { Component, View } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { MarkdownComponent } from 'ng2-markdown-component';

@Component({
  selector: 'demo'
})
@View({
  templateUrl: 'markdown.demo.html',
  directives: [ MarkdownComponent ]
})
export class DemoComponent {
  constructor() {
    this.data = `
    # Example: Loading data

    *sample html*
    \`\`\`language-html
    <ng2-markdown [data]="data"></ng2-markdown>
    \`\`\`
    `
  }

}

bootstrap(DemoComponent);
