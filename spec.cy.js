var name = 'Артем'
var number = '31238131213'
var email = 'asdsadasds@gmail.com'
var text = 'ну чтож, неплохая получилась история, а главное поучительная'

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://nahodka-magazin.ru/')
  })

  it('shops', () => {
    cy.get('.mn_sp_1 ').last().click()
  })

  it('slide', () => {
    cy.get('.owl-next').first().click()
    cy.get('.owl-next').first().click()
    cy.get('.owl-next').first().click()
    cy.get('.owl-prev').first().click()
    cy.get('.owl-prev').first().click()
    cy.get('.owl-prev').first().click()
  })

  it('news', () => {
    cy.get('.mn_sp_1').eq(1).click()
    cy.get('.btn-strt-a ').first().click()
    cy.wait(2000)
    cy.get('.mn_sp_1').eq(1).click()
    cy.get('.btn-strt-a ').eq(1).click()
    cy.wait(2000)
    cy.get('.mn_sp_1').eq(1).click()
    cy.get('.btn-strt-a ').eq(2).click()
    cy.wait(2000)
    cy.get('.mn_sp_1').eq(1).click()
    cy.get('.btn-strt-a ').eq(3).click()
    cy.wait(2000)
    cy.get('.mn_sp_1').eq(1).click()
    cy.get('.btn-strt-a ').eq(4).click()
  })

  it('message', () => {
    cy.get('.link-feedback').first().click()
    cy.wait(4000)
    cy.get('input[name="f_Name"]').first().type(name)
    cy.wait(2000)
    cy.get('input[name="f_phone"]').first().type(number)
    cy.wait(2000)
    cy.get('input[name="f_Email"]').first().type(email)
    cy.wait(2000)
    cy.get('textarea[name="f_mailtext"]').first().type(text)
    cy.wait(2000)
    cy.get('.lightcase-icon-close').first().click()
  })

  
  it('otziv', () => {
    cy.get('.mn_sp_1').eq(1).click()
    cy.get('.btn-strt-a ').eq(1).click()
    cy.wait(4000)
    cy.get('div[class="kz_napisat h1-title"]').first().click()
    cy.get('input[name="f_name"]').first().type(name)
    cy.get('textarea[name="f_textt"]').first().type(text)
  })

  it('recept', () => {
    cy.get('.mn_sp_1').eq(1).click()
    cy.get('.btn-strt-a ').eq(2).click()
    cy.get('.news-name').first().click()
  })

})