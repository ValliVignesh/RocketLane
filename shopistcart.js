///< reference types= "cypress" />///

it('shopist cart',function(){

cy.visit('https://www.shopist.io')
cy.get('.departments > :nth-child(1) > a').click()
cy.get(':nth-child(3) > :nth-child(1) > a > .product-card > img').click()
cy.get('.description > :nth-child(1) > :nth-child(1)').then(($chair) => {
    const chr= $chair.text()
    cy.log(chr)
})
var txt  
cy.get('.price').then(($price)=>{
     txt    = $price.text()
    cy.log(txt)
})
cy.get('.purchase-button').click()
cy.get('.hamburger > :nth-child(3)').click()
cy.get('[href="/cart"] > .menu-item-small').click()

cy.get('.departments > :nth-child(2) > a').click()
cy.get(':nth-child(1) > :nth-child(1) > a > .product-card > img').click()

cy.get('.description > :nth-child(1) > :nth-child(1)').then(($sofa) => {
    const sofaName= $sofa.text()
    cy.log(sofaName)
})
cy.get('.price').then(($sofaPrice)=>{
    const sofaPr = $sofaPrice.text()
    cy.log(sofaPr)
})
cy.get('.purchase-button').click()
cy.get('.hamburger > :nth-child(3)').click()
cy.get('[href="/cart"] > .menu-item-small').click()

cy.get(':nth-child(1) > .product-description > .product-bottom > .product-price').contains(txt)



cy.get(':nth-child(2) > .product-description > .product-bottom > .product-price').should(($capSofaPrice) => {

    expect($capSofaPrice.text().eq(sofaPr))
})
cy.get('.lines > :nth-child(1) > :nth-child(2)').then(($total) => {
    const totalAmt= $total.text()
    cy.log(totalAmt)
})
})