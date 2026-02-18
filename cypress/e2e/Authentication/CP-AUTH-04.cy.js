describe('CP-AUTH-04: Log-Out Exitoso', () => {
  beforeEach(() => {
    cy.visit('https://homebanking-demo-tests.netlify.app/')
  })
  it('Cierre de sesión correcto', () =>{
    //Ingresamos con los datos de usuario
        cy.fixture('users').then(users => {
      users.validUsers.forEach(user => {
        cy.get('#username').clear().type(user.username)
        cy.get('#password').clear().type(user.password)
        cy.get('#remember-me').should('exist').check()
        cy.get('#login-btn').click()
    })
  })
  //Confirmamos que el usuario haya ingresado satisfactoriamente a la App
  cy.get('.section-header').should('be.visible').contains('h2', 'Panel Principal')

  // El usuario cierra sesión 
  cy.get('#logout-btn').should('exist').contains('Salir').click()
  cy.get('.modal-content').within(() => {
    cy.get('div').eq(2).within(() => {
        cy.get('button:last').contains('Confirmar').click()
    })
  })
  // Se verifica de que el usuario haya cerrado sesión correctamente 
  cy.get('#login-form').should('exist').should('be.visible')
  
    })

})