describe('CP-AUTH-05:  Panel de Documentación', () => {
  beforeEach(() => {
    cy.visit('https://homebanking-demo-tests.netlify.app/')
  })

  it('Verificar panel flotante de documentación.', () => {
 
        cy.get('.docs-floating-panel').should('exist').contains('h3' ,'Documentación')
        cy.get('.docs-floating-panel').within(() => {
            cy.get('a:first').should('have.attr', 'href', 'https://docs.google.com/document/d/1mw2tHUOUtaQeuTKEvuixQkx5sPYfQTgVr5d5Hxb17q8/edit?tab=t.0').trigger('mouseover').should('have.css', 'background-color', 'rgb(229, 62, 62)')
        })
    })
    it('Verificar que los enlaces abren en una pestaña nueva.', () => {
         
        cy.get('.docs-floating-panel').should('exist').contains('h3' ,'Documentación')
        cy.get('.docs-floating-panel').within(() => {
            cy.get('a').should('have.attr', 'target', '_blank')
        })
    })
})