const HTML_INPUTS = `
    <input is ='input-form' name='username' id='username' />
    <input is ='input-form' name='password' id='password' />
    <input is ='input-form' name='confirmPassword' id='confirmPassword' />

`;

export class Card extends HTMLElement {
  constructor() {
    super();
    this.className = "card";
    const form = document.createElement("form");
    form.id = "form-1";
    form.innerHTML = HTML_INPUTS;
    this.appendChild(form);
  }
}

customElements.define("card-form", Card);
