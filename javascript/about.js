// NOTE - this code is for education 
const education_content = document.getElementById('education_content');

for (let index = 0; index < education.length; index++) {
    const element = education[index];
    let level = document.createElement('div')
    level.classList.add('level' )
    // level.classList.add('item-'+ index )
    level.id = 'item_' + index
    let icon = document.createElement('i')
    icon.classList.add('fa-solid')
    icon.classList.add(element.icon)
    let div = document.createElement('div')
    level.appendChild(icon)
    level.appendChild(div)
    let title = document.createElement('p')
    title.innerText= element.level
    let school = document.createElement('h3')
    school.innerText = element.school
    div.appendChild(title)
    div.appendChild(school)
    education_content.appendChild(level)
}
// NOTE - this code is for skills tab
// tabs buttons
const tabs = document.getElementById('tabs');
for (let index = 0; index < Object.keys(skills).length; index++) {
    const element = Object.keys(skills);
    let tab = document.createElement('div') 
    let tab_content = document.createElement('p') 
    tab.classList.add('tab')
    tab.id = 'tab_' + (index+1)
    tab_content.textContent = element[index]
    tab.appendChild(tab_content)

    tabs.appendChild(tab)
    tab.addEventListener("click", function(){
        for (let ind = 0; ind < tabs.children.length; ind++) {
            if(tabs.children[ind].classList.contains('active')){
                tabs.children[ind].classList.remove('active');
            }
        }
            let clicked = document.getElementById('tab_' + (index+1))
            clicked.classList.add('active')
            if(clicked.id == 'tab_1'){
                let openTab1 = document.getElementById('tab_content_1')
                let openTab2 = document.getElementById('tab_content_2')
                let openTab3 = document.getElementById('tab_content_3')
                let delay = 0;
                let new_delay = 0;
                if (openTab2.style.display =='block') {
                    delay = delay + (200 * openTab2.childElementCount)
                    new_delay = delay + 400
                    for (let num1 = 0; num1 < openTab2.children.length; num1++) {
                        const element = openTab2.children[num1];
                        setTimeout(() => {
                            element.classList.remove('active_tab')
                        }, delay);
                        delay -= 200
                    }
                }
                if(openTab3.style.display =='block'){
                    delay = delay + (200 * openTab3.childElementCount)
                    new_delay = delay + 400
                    for (let num2 = 0; num2 < openTab3.children.length; num2++) {
                        const element = openTab3.children[num2];
                        setTimeout(() => {
                            element.classList.remove('active_tab')
                        }, delay);
                        delay -= 200
                    }
                }
                setTimeout(() => {
                    openTab1.style.display = 'block';
                    openTab2.style.display = 'none';
                    openTab3.style.display = 'none';
                }, new_delay);
                new_delay += 400
                for (let num = 0; num < openTab1.children.length; num++) {
                    const element = openTab1.children[num];
                    setTimeout(() => {
                        element.classList.add('active_tab')
                    }, new_delay);
                    new_delay += 200
                }
            }




            if(clicked.id == 'tab_2'){
                let openTab1 = document.getElementById('tab_content_1')
                let openTab2 = document.getElementById('tab_content_2')
                let openTab3 = document.getElementById('tab_content_3')
                let delay = 0;
                let new_delay;
                if (openTab1.style.display == 'block') {
                    delay = delay + (200 * openTab1.childElementCount)
                    new_delay = delay + 400
                    for (let num1 = 0; num1 < openTab1.children.length; num1++) {
                        const element = openTab1.children[num1];
                        setTimeout(() => {
                            element.classList.remove('active_tab')
                        }, delay);
                        delay -= 200
                    }
                }
                if (openTab3.style.display == 'block') {
                    delay = delay + (200 * openTab3.childElementCount)
                    new_delay = delay + 400
                    for (let num2 = 0; num2 < openTab3.children.length; num2++) {
                        const element = openTab3.children[num2];
                        setTimeout(() => {
                            element.classList.remove('active_tab')
                        }, delay);
                        delay -= 200
                    }
                }
                setTimeout(() => {
                    openTab1.style.display = 'none';
                    openTab2.style.display = 'block';
                    openTab3.style.display = 'none';
                }, new_delay);
                new_delay += 400
                for (let num = 0; num < openTab2.children.length; num++) {
                    const element = openTab2.children[num];
                    setTimeout(() => {
                        element.classList.add('active_tab')
                    }, new_delay);
                    new_delay += 200
                }
            }
            if(clicked.id == 'tab_3'){
                let openTab1 = document.getElementById('tab_content_1')
                let openTab2 = document.getElementById('tab_content_2')
                let openTab3 = document.getElementById('tab_content_3')
                let delay = 0;
                let new_delay;
                if (openTab1.style.display == 'block') {
                    delay = delay + (200 * openTab1.childElementCount)
                    new_delay = delay + 400
                    for (let num1 = 0; num1 < openTab1.children.length; num1++) {
                        const element = openTab1.children[num1];
                        setTimeout(() => {
                            element.classList.remove('active_tab')
                        }, delay);
                        delay -= 200
                    }
                }
                if (openTab2.style.display == 'block') {
                    delay = delay + (200 * openTab2.childElementCount)
                    new_delay = delay + 400
                    for (let num2 = 0; num2 < openTab2.children.length; num2++) {
                        const element = openTab2.children[num2];
                        setTimeout(() => {
                            element.classList.remove('active_tab')
                        }, delay);
                        delay -= 200
                    }
                }
                setTimeout(() => {
                    openTab1.style.display = 'none';
                    openTab2.style.display = 'none';
                    openTab3.style.display = 'block';
                }, new_delay);
                new_delay += 400
                for (let num = 0; num < openTab3.children.length; num++) {
                    const element = openTab3.children[num];
                    setTimeout(() => {
                        element.classList.add('active_tab')
                    }, new_delay);
                    new_delay += 200
                }
            }

    })
    if(element[index] = 'front'){
        let active = document.getElementById('tab_1')
        active.classList.add('active')
        // active.classList.add('left')
    }
}

// tab content 
const tab_wrapper = document.getElementById('tab_wrapper')

for (let ind = 0; ind < Object.keys(skills).length; ind++) {
    const e = Object.keys(skills)[ind];
    const tab_content = document.createElement('div')
    tab_content.classList.add('tab_content')
    tab_content.id = 'tab_content_' + (ind + 1)

    for (let index = 0; index < skills[e].length; index++) {
        const element = skills[e][index];
        let tab_content_body = document.createElement('div')
        tab_content_body.classList.add('tab_content_body')
        let title = document.createElement('p')
        title.textContent = element.skill
        let bar_body = document.createElement('div')
        bar_body.classList.add('bar-body')
        for (let i = 0; i < element.progress; i++) {
            let bar = document.createElement('div')
            bar.classList.add('bar-' + i)
            bar_body.appendChild(bar)
        }
        tab_content_body.appendChild(title)
        tab_content_body.appendChild(bar_body)
        tab_content.appendChild(tab_content_body)

        if (tab_content.id == 'tab_content_1') {
            tab_content.style.display = 'block'
            let delay = 0
            for (let i = 0; i < tab_content.children.length; i++) {
                const e = tab_content.children[i];
                setTimeout(() => {  
                    e.classList.add('active_tab')
                }, delay);
                delay += 200 
            }
        }
    }
    tab_wrapper.appendChild(tab_content)
}




