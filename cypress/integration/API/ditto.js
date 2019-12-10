context('Be The Very Best', () => {
    it('Should Catch A Ditto', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto')
        .should((response) => {
          expect(response.status).to.eq(200)
          expect(response).to.have.property('headers')
          expect(response).to.have.property('duration')
        })
    })
})

