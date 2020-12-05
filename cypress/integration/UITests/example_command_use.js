context("Use a cypress command to run a search test against amazon", () => {
    beforeEach(() => {
        cy.visit("https://www.amazon.com")
    })
    it('Should search for Batman comics on Amazon', () => {
        cy.searchForBats('Batman comic books')
    })
})