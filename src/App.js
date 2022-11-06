export class App extends HTMLElement {
  constructor() {
    super();
    this.className = "main";
  }
}

customElements.define("app-main", App);
