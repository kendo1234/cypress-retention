context('Looking at the CY-API plugin', () => {

    it('GET a pokemon', () => {
        cy.api({
            method: 'GET',
            url:'pokemon/ditto/',
        })
    })
})