describe('Link', () => {
  before(() => {
    cy.visit('/');
  });

  describe('Render', () => {
    it('should be visible', () => {
      cy.get('a').should('be.visible');
    });

    it('should render content', () => {
      cy.get('a').contains(/.+/);
    });
  });

  describe('Attrs', () => {
    it('should have `href` attr', () => {
      cy.get('a').should('have.attr', 'href');
    });

    it('should have `rel` attr for external link', () => {
      cy.get('a')
        .contains(/external/)
        .should('have.attr', 'rel', 'noopener noreferrer');
    });

    it('should have `target` attr for external link', () => {
      cy.get('a')
        .contains(/external/)
        .should('have.attr', 'target', '_blank');
    });
  });

  describe('Navigation', () => {
    it('should navigate to the passed href', () => {
      cy.get('a')
        .invoke('attr', 'href')
        .then(href => {
          cy.request(href).its('status').should('eq', 200);
        });
    });
  });
});
