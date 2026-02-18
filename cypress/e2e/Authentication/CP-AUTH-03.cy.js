describe('CP-AUTH-03:  Bloqueo por Intentos Fallidos', () => {
  beforeEach(() => {
    cy.visit('https://homebanking-demo-tests.netlify.app/')
  })

  it('Verificar que el sistema bloquea el usuario por intentar 3 veces con credenciales incorrectas.', () => {
    cy.fixture('users').then(users => {
      users.invalidUsers.forEach(user => {
        cy.get('#username').clear().type(user.username)
        cy.get('#password').clear().type(user.password)
        cy.get('#remember-me').should('exist').check()
        cy.get('#login-btn').click()
        cy.get('#login-error').should('be.visible')
        cy.get('#login-btn').click()
        cy.get('#login-error').should('be.visible')
        cy.get('#login-btn').click()
        
        
      })
    })
  })
})
