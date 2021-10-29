describe('Select', () => {
  before(() => {
    cy.visit('/');
  });

  describe('Render', () => {
    it('should be visible', () => {
      cy.get('select').should('be.visible');
    });

    it('should have helper text', () => {
      cy.get('div').contains('Select with helper text').siblings('.chakra-select__wrapper');
    });
  });

  describe('Interaction', () => {
    it('should select value', () => {
      const el = cy.get('select').first();

      el.first().select('label_2');
      el.should('have.value', 'value_2');
    });
  });
});
