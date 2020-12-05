

context("Check the headline of my site", () => {
    beforeEach(() => {
        cy.visit("http://www.kendotalbot.com/")
    })

    it('Should visit site and verofify headline', () => {
         cy.get('#home > div > div > h1').contains('Kenneth');
        
    })
})

