describe("render app component", () =>{
  it("render correctly", () =>{
    cy.visit("/")
    cy.get(".App-header").should("exist")
    cy.get(".App").contains("Accessible React Modal")
    cy.get('.focusAfterClose').click()
    cy.get('.process-next').click() 
    cy.get('.cancel-btn').click()   
    })
  })