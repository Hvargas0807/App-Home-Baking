describe(' Últimos Movimientos', () => {
    beforeEach(() => {
    cy.visit('https://homebanking-demo-tests.netlify.app/')
     // Verifico que el usuario ingrese correctamente 
    cy.fixture('users').then(users => {
      const user = users.validUsers[0]
        cy.get('#username').clear().type(user.username)
        cy.get('#password').clear().type(user.password)
        cy.get('#remember-me').should('exist').check()
        cy.get('#login-btn').click()
    })  
    // Confirmo de que estoy en el Dashboard
    cy.get('#dashboard-section').should('be.visible')
    //Entrar a la sección de transferencias 
    cy.get('.menu').children('[data-view="transfer"]').should('contain', 'Transferencias').click()
    //Verificar que estoy en la sección de transferencia
    cy.get('#transfer-section').should('be.visible')
})
//Realizando la primera transferencia

  it('Primera transferencia', () => {
    //Realizando la primera transferencia
    cy.get('#transfer-type').select('Entre mis cuentas')
    cy.get('#source-account').select('ACC001')
    cy.get('#destination-own-account').select('ACC002')
    cy.get('#transfer-amount').clear().type('19000')
    cy.get('#transfer-description').type('Primera transferencia')
    cy.get('#transfer-form').submit()
    cy.get('#modal-confirm').should('contain', 'Confirmar').click()
    cy.get('#transfer-section').should('be.visible')


    

// Esperar que el form esté limpio
cy.get('#transfer-amount').should('have.value', '')


    //Realizando la segunda transferencia
    cy.get('#transfer-type') .should('be.visible').select('A terceros')
    cy.get('#source-account').select('ACC001')
    cy.get('#destination-account-number').type('HabidVargas')
    cy.get('#transfer-amount').type('39000')
    cy.get('#transfer-description').type('Segunda transferencia')
    cy.get('#transfer-form').submit()
    cy.get('#modal-confirm').should('be.visible').within(() => {
    cy.contains('Confirmar')
      .should('be.visible')
      .click()
  })
    cy.get('#transfer-section').should('be.visible')


    //Regresar al Dashboard
    cy.get('[data-view="dashboard"]').contains('Inicio').click()

    //Mostrar las ultimas 10 transacciones
    cy.get('.transactions-section').scrollIntoView()
    cy.get('.transactions-section').should('be.visible')
  }) 

  
    
})
