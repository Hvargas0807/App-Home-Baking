describe('CP-AUTH-02: Login con credenciales invalidas', () => {
  beforeEach(() => {
    cy.visit('https://homebanking-demo-tests.netlify.app/')
  })

  it('Verificar que el sistema rechaza credenciales incorrectas.', () => {
    cy.fixture('users').then(users => {
      users.invalidUsers.forEach(user => {
        cy.get('#username').clear().type(user.username)
        cy.get('#password').clear().type(user.password)
        cy.get('#remember-me').should('exist').check()
        cy.get('#login-btn').click()
        cy.get('#login-error').should('be.visible')
        
        
      })
    })
  })
})
