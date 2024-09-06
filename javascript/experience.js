const timeline = document.getElementById('timeline')

for (let index = 0; index < experience.length; index++) {
    const element = experience[index];
    
    let timeline_item = document.createElement('div')
    timeline_item.classList.add('timeline-item')
    
    let timeline_content = document.createElement('div')
    timeline_content.classList.add('content')
    timeline_content.id = 'experience' + (index+1)

    timeline_content.addEventListener('click', function(){
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
        document.getElementById('dialog_img').src = element.content
    })
    let content_img = document.createElement('div')
    content_img.classList.add('content_img')
    let image = document.createElement('img')
    image.src = element.content
    image.alt = element.alt
    let overlay = document.createElement('div')
    overlay.classList.add('timeline-item-overlay')
    content_img.appendChild(overlay)
    content_img.appendChild(image)
    
    // content_img.src = element.content
    timeline_content.appendChild(content_img)
    
    let opposite = document.createElement('div')
    opposite.classList.add('opposite-right')
    opposite.classList.add('opposite')
    let div_opposite = document.createElement('div')
    div_opposite.textContent = element.date
    opposite.appendChild(div_opposite)
    timeline_item.appendChild(timeline_content)
    timeline_item.appendChild(opposite)
    timeline.appendChild(timeline_item)

    if (index % 2 == 0) {
        timeline_item.classList.add('left')

    }else{
        timeline_item.classList.add('right')
        opposite.classList.remove('opposite-right')

        opposite.classList.add('opposite-left')

    }
    let title = document.createElement('h2')
    title.textContent = element.title
    let company = document.createElement('p')
    company.textContent = element.company
    let address = document.createElement('p')
    address.textContent = element.address
    overlay.appendChild(title)
    overlay.appendChild(company)
    overlay.appendChild(address)
    
    timeline_item.style.setProperty('--after-background', `url('${element.logo}')`);



}

if (window.innerWidth < 921) {
    for (let index = 0; index < addTimelineClass.children.length; index++) {
        const element = addTimelineClass.children[index];
        element.classList.add('mobile_timeline')
    }
}else{
    for (let index = 0; index < addTimelineClass.children.length; index++) {
        const element = addTimelineClass.children[index];
        element.classList.remove('mobile_timeline')
    }
}


function timelineResize() {
    let remove_opposite = document.querySelectorAll('div.opposite');
    console.log(remove_opposite);
    if (window.innerWidth < 920) { // adjust the width value as needed
        remove_opposite.forEach((div) => {
            div.style.display="none";
        });
    }else{
        remove_opposite.forEach((div) => {
            div.style.display="block";
        });
    }
}


window.addEventListener("resize", timelineResize);