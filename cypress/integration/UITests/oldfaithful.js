

context("The old faithful, a google search", () => {
    beforeEach(() => {
        cy.visit("https://www.google.com")
    })

    it('Should search for the latest spicey memes!', () => {
        cy.get('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input')
            .type('Spicey memes 2019')
        cy.get('.aajZCb > .tfB0Bf > center > .gNO89b')
            .click()
        cy.get('#hdtb-msb-vis > :nth-child(2) > .q')
            .click()
    })
})

