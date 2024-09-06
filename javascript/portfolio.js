const portfolio_container = document.getElementById('portfolio_container')

for (let index = 0; index < portfolio.length; index++) {
    const element = portfolio[index];
    let portfolio_card = document.createElement('div')
    portfolio_card.classList.add('portfolio-card')
    let portfolio_card_content = document.createElement('div')
    portfolio_card_content.classList.add('portfolio-card-content')
    let portfolio_card_content_image = document.createElement('div')
    portfolio_card_content_image.classList.add('portfolio-card-image')
    let portfolio_image = document.createElement('img')
    portfolio_image.src = element.photo
    let portfolio_card_content_details = document.createElement('div')
    portfolio_card_content_details.classList.add('portfolio-card-details')

    portfolio_card_content_image.appendChild(portfolio_image)
    portfolio_card_content.appendChild(portfolio_card_content_image)
    portfolio_card_content.appendChild(portfolio_card_content_details)
    portfolio_card.appendChild(portfolio_card_content)
    portfolio_container.appendChild(portfolio_card)
}