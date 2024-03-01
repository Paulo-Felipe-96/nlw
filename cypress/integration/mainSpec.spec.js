describe("Ecoleta, Your app to register and find garbage collection and recycling points", () => {
  describe("Home page", () => {
    it("It must load home page successfully", () => {
      cy.visit("/");
    });

    it("It must show home page texts", () => {
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
    it("It must load create point's page", () => {
      cy.visit("/create-point");
    });

    it("It must create an entire Echo-Point", () => {
      cy.get("h1").should("contain", "Cadastro do ponto de coleta");

      cy.get(":nth-child(2) > :nth-child(1) > input").type("Echo Life");

      cy.get(":nth-child(2) > :nth-child(2) > input").type(
        "https://w7.pngwing.com/pngs/642/865/png-transparent-gumball-watterson-anais-watterson-darwin-watterson-nicole-watterson-cartoon-network-gunball-text-logo-cartoon.png"
      );

      cy.get(":nth-child(3) > :nth-child(1) > input").type(
        "Rua Marques de Sousa"
      );

      cy.get(":nth-child(3) > :nth-child(2) > input").type("500");

      cy.get(".uf_select").select("São Paulo");

      cy.wait(600).then(() => {
        cy.get(".city_select").select("Osasco");
      });

      cy.get('[data-id="Lâmpadas"]').click();
      cy.get('[data-id="Óleo de Cozinha"]').click();

      cy.get("button").click();

      cy.get('.content > h1').should("contain", "Cadastro concluído")
    });
  });
});
