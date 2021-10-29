describe('Input', () => {
  before(() => {
    cy.visit('/');
  });

  describe('Render', () => {
    it('should be visible', () => {
      cy.get('input').should('be.visible');
    });
  });
});
