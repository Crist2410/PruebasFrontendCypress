/// <reference types="cypress"/>

it('Visitar página', () =>{
  cy.visit('http://localhost:4200');
});

context('Chequear inicio de página', () =>{
  beforeEach(() => {
      cy.visit('http://localhost:4200');
  });

  it('Verificar mi nombre', () => {
      cy.get('span').contains('Cristian Barrientos');
  });

  it('Suma', () => {
    cy.get('p').contains('3 + 3 = 6');
  });

  it('Resta', () => {
    cy.get('p').contains('10 - 1 = 9');
  });

  it('Multiplicación', () => {
    cy.get('p').contains('4 * 4 = 16');
  });

  it('División', () => {
    cy.get('p').contains('15 / 3 = 5');
  });

});

it('Recargar página', () => {
  cy.reload();
});



