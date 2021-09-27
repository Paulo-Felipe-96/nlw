describe("Ecoleta", () => {
    it("Visita página de cadastro, cadastra um ponto de coleta e retorna pra home", () => {
        cy.visit("http://localhost:3000"); // poderia ser uma .env

        cy.contains("Cadastre um ponto de coleta").click();

        cy.url().should("include", "/create-point");

        cy.get(":nth-child(2) > :nth-child(1) > input")
            .type("Coletora Osasco")
            .should("have.value", "Coletora Osasco");

        cy.get(":nth-child(2) > :nth-child(2) > input")
            .type(
                "https://correiopaulista.com/wp-content/uploads/2019/04/ecoponto_osasco.jpg"
            )
            .should(
                "have.value",
                "https://correiopaulista.com/wp-content/uploads/2019/04/ecoponto_osasco.jpg"
            );

        cy.get(":nth-child(3) > :nth-child(1) > input")
            .type("Rua Semíramis")
            .should("have.value", "Rua Semíramis");

        cy.get(":nth-child(3) > :nth-child(2) > input")
            .type("60, Ao lado do número 505")
            .should("have.value", "60, Ao lado do número 505");

        cy.get(".uf_select").select("São Paulo").should("have.value", "35");

        cy.get(".city_select").select("Osasco").should("have.value", "Osasco");

        cy.get("[data-id='Lâmpadas']").click();
        cy.get("[data-id='Pilhas e Baterias']").click();
        cy.get("[data-id='Papéis e Papelão']").click();
        cy.get("[data-id='Papéis e Papelão']").click();
        cy.get("[data-id='Resíduos Eletrônicos']").click();

        cy.contains("Cadastrar ponto de coleta").click();
    });

    it("Pesquisa pontos de coleta e encontra pelo menos 1 resultado", () => {
        cy.visit("localhost:3000");

        cy.contains("Pesquisar pontos de coleta").click();

        cy.get("input").type("Osasco").should("have.value", "Osasco");

        cy.get("button")
            .click()
            .url()
            .should("include", "/search?search=Osasco");
    });

    it("Pesquisa pontos de coleta inexistentes", () => {
        cy.visit("localhost:3000");

        cy.contains("Pesquisar pontos de coleta").click();

        cy.get("input").type("Carapicuiba").should("have.value", "Carapicuiba");

        cy.get("button")
            .click()
            .url()
            .should("include", "/search?search=Carapicuiba");

        cy.get("h4").should(
            "have.text",
            "\n                Nenhum\n                local encontrado\n            "
        );
    });
});
