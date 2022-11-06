const alertText = () => {
  alert("teste");
};

export class Button extends HTMLButtonElement {
  constructor() {
    super();
    this.className = "btn";
    this.onclick = alertText;
  }
}

customElements.define("button-form", Button, { extends: "button" });
