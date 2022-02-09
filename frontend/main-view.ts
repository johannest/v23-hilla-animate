import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '@vaadin/vaadin-lumo-styles/all-imports';
import '@vaadin/vaadin-app-layout';
import '@vaadin/vaadin-tabs';
import {router} from "Frontend/index";

@customElement('main-view')
export class MainLayoutElement extends LitElement {
    @property({type: Object}) location = router.location;

    render() {
        return html`
            <vaadin-app-layout>
                <vaadin-tabs .selected="${this.getIndexOfSelectedTab()}" slot="navbar">
                    ${menuTabs.map(menuTab => html`
                        <vaadin-tab>
                            <a href="${router.urlForPath(menuTab.routeName)}">
                                ${menuTab.text}
                            </a>
                        </vaadin-tab>
                    `)}
                </vaadin-tabs>
                <slot></slot>
            </vaadin-app-layout>
        `;
    }

    private isCurrentLocation(route: string): boolean {
        return router.urlForPath(route) === this.location.getUrl();
    }

    private getIndexOfSelectedTab(): number {
        const index = menuTabs.findIndex(
            menuTab => this.isCurrentLocation(menuTab.routeName)
        );
        // Select first tab if there is no tab for home in the menu
        if (index === -1 && this.isCurrentLocation('')) {
            return 0;
        }
        return index;
    }
}

const menuTabs =
    [
        {routeName: '/home', text: 'home'},
        {routeName: '/about', text: 'about'},
    ];