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
    let portfolio_card_title = document.createElement('h3')
    portfolio_card_title.textContent = element.title
    let portfolio_card_description = document.createElement('p')




    portfolio_card_description.textContent = element.description
    portfolio_card_content_details.appendChild(portfolio_card_title)
    portfolio_card_content_details.appendChild(portfolio_card_description)
    portfolio_card_content_image.appendChild(portfolio_image)
    portfolio_card_content.appendChild(portfolio_card_content_image)
    portfolio_card_content.appendChild(portfolio_card_content_details)
    portfolio_card.appendChild(portfolio_card_content)
    portfolio_container.appendChild(portfolio_card)


    portfolio_card.addEventListener('click', function(){
        document.body.classList.add('no-scroll');
        
        let dialog = document.getElementById('dialog')
        let dialog_content = document.getElementById('dialog_content')
        dialog.style.display = 'block'
        setTimeout(() => {
            dialog.style.opacity = '1'
            dialog_content.style.display = 'flex'
            setTimeout(() => {
                dialog_content.classList.add('show')
                
            }, 200);
        }, 200);
        document.getElementById('dialog_img').src = element.photo
        dialog_content.classList.add('webDialog')
    })


}