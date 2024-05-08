describe('Login', () => {
  it('Login application', () => {
    cy.visit('/')
    cy.get('.btn.btn-primary.btn-margin').click()
    const username = Cypress.env("auth0_username")
    const password = Cypress.env("auth0_password")
  
    cy.origin(
      Cypress.env('auth0_domain'),
      { args: { username, password } },
      ({ username, password}) => {
        cy.get('input#username').type(username)
        cy.get('button[data-action-button-primary]').click()
        cy.get('input#password').type(password)
        cy.get('button[type="submit"]').click()
      }
    )
  })
})