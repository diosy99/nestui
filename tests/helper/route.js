import cypress from "cypress";

export const BASE_URL = {
    DASHBOARD: cypress.env("base_url")
}

export function visit(routes) {
    cy.visit(BASE_URL.DASHBOARD + routes);
}