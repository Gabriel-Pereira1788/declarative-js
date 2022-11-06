export class InputForm extends HTMLInputElement {
  constructor() {
    super();
  }
}

customElements.define("input-form", InputForm, { extends: "input" });
