describe('Title', () => {
  before(() => {
    cy.visit('/');
  });

  describe('Render', () => {
    it('should be visible', () => {
      cy.get('h1').should('be.visible');
    });

    it('should render content', () => {
      cy.get('h1').contains(/.+/);
    });
  });
});
