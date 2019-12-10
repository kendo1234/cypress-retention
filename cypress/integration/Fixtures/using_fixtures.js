context('Using a fixture file to populate login details', () => {
    beforeEach(() => {
        cy.fixture("admin.json").as("admin");
    })

    it("Should log a user in", () => {

        let fileContents = this.admin

        
    cy
        .visit("https://www.dropbox.com/login")
    cy
        .get('input[name="email"]')
        .type(this.admin.email)
        .should("have.value", this.admin.email);
    cy
        .get('input[name="password"]')
        .type(this.admin.password)
        .should("have.value", this.admin.password);
    cy
        .get("form").submit();
    
    })
})