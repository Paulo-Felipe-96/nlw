describe("Ecoleta, Your app to register and find garbage collection and recycling points", () => {
    describe("Home page", () => {
        it("Should load home page successfully", () => {
            cy.visit("/");
        });

        it("Should show home page texts", () => {
            cy.get("main > h1").should(
                "contain",
                "Seu marketplace de coleta de resíduos"
            );

            cy.get("#page-home > div > main > p").should(
                "contain",
                "Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente."
            );

            cy.get("main > a").should("contain", "Pesquisar pontos de coleta");

            cy.get('[href="create-point"]').should(
                "contain",
                "Cadastre um ponto de coleta"
            );
        });
    });

    describe("Create point", () => {
        it("Should load create point's page", () => {
            cy.visit("/create-point");
        });

        it("Should ..", () => {
            cy.get("h1").should("contain", "Cadastro do ponto de coleta");
        });
    });
});
