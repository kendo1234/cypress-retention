context("The old faithful google search, utilising cypress custom commands", () => {
    beforeEach(() => {
        cy.visit("https://www.google.com")
    })
    it('Should find spicy memes for the year of our lord 2019', () => {
        cy.oldFaithful('Spicy Memes 2019')
    })
})