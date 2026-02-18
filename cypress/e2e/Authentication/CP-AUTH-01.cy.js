describe('CP-AUTH-01: Login Exitoso', () => {
  beforeEach(() => {
    cy.visit('https://homebanking-demo-tests.netlify.app/')
  })

  it('Verificar que el usuario puede autenticarse correctamente con credenciales válidas.', () => {
    cy.fixture('users').then(users => {
      users.validUsers.forEach(user => {
        cy.get('#username').clear().type(user.username)
        cy.get('#password').clear().type(user.password)
        cy.get('#remember-me').should('exist').check()
        cy.get('#login-btn').click()
        cy.get('#logout-btn').should('exist')
        
      })
    })
  })
})