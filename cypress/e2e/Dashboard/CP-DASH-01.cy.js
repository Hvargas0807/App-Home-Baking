describe('Visualización de Productos', () => {
    beforeEach(() => {
    cy.visit('https://homebanking-demo-tests.netlify.app/')
  })
  it('Verificar que se muestran las 3 tarjetas de productos', () => {

    // Verifico que el usuario ingrese correctamente 
    cy.fixture('users').then(users => {
      users.validUsers.forEach(user => {
        cy.get('#username').clear().type(user.username)
        cy.get('#password').clear().type(user.password)
        cy.get('#remember-me').should('exist').check()
        cy.get('#login-btn').click()
        

    // Confirmo de que estoy en el Dashboard
    cy.get('#dashboard-section').should('be.visible')

    //Verifico que existan 3 tarjetas 
    cy.get('.accounts-grid>div').should('have.length', 3)
    cy.get('.account-type').eq(0).should('be.visible').contains('Cuenta Corriente')
    cy.get('.account-type').eq(1).should('be.visible').contains('Caja de Ahorro')
    cy.get('.account-type').eq(2).should('be.visible').contains('Tarjeta de Crédito')

        
      })
    })
  })

})