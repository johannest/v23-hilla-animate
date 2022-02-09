import {Router} from "@vaadin/router";
import {html, LitElement} from "lit";
import {customElement} from 'lit/decorators.js';
import "@vaadin/vaadin-button";

@customElement('about-view')
class AboutView extends LitElement {

    protected render() {
        return html`<h2>AboutView</h2>
        <p>About view</p>
        <vaadin-button @click=${this.click}>Go to Home</vaadin-button>
        `;
    }

    click() {
        Router.go("home");
    }
}