
const mainPage = document.getElementById('main')
const aboutSection = document.getElementById('About')
const educationAnimation = document.getElementById('education')
const skillsAnimation = document.getElementById('skills')

const education_contentAnimation = document.getElementById('education_content') 
const tab_wrapperAnimation = document.getElementById('tab_wrapper')

const experienceSection = document.getElementById('Experience')
const experienceTitle = experienceSection.children[1]

const portfolioSection = document.getElementById('Portfolio')
const GetInTouchSection = document.getElementById('get_in_touch')

const navHome = document.getElementById('navHome')

const navAbout = document.getElementById('navAbout')
const navExperience = document.getElementById('navExperience')
const navPortfolio = document.getElementById('navPortfolio')
const navGetInTouch = document.getElementById('navGetInTouch')




navHome.addEventListener('click', function() {
    const targetPosition = mainPage.offsetTop ;
    smoothScrollTo(targetPosition, 1000); 
});
navAbout.addEventListener('click', function() {
    const targetPosition = aboutSection.offsetTop -50;
    smoothScrollTo(targetPosition, 1000); 
});
navExperience.addEventListener('click', function() {
    const targetPosition = experienceSection.offsetTop -50;
    smoothScrollTo(targetPosition, 2000); 
});
navPortfolio.addEventListener('click', function() {
    const targetPosition = portfolioSection.offsetTop -50;
    smoothScrollTo(targetPosition, 1000); 
});
navGetInTouch.addEventListener('click', function() {
    const targetPosition = GetInTouchSection.offsetTop -50;
    smoothScrollTo(targetPosition, 1000); 
});


function smoothScrollTo(targetPosition, duration) {
    const start = window.pageYOffset; // Starting Y scroll position
    const distance = targetPosition - start; // Distance to scroll
    const startTime = performance.now(); // Get the current time
    
    // Define the animation loop
    function scrollStep(currentTime) {
        const elapsed = currentTime - startTime; // Time elapsed since start
        const progress = Math.min(elapsed / duration, 1); // Progress (0 to 1)

        // Use an easing function for a smoother scroll (easeInOutQuad)
        const easeInOutQuad = progress < 0.5 
            ? 2 * progress * progress 
            : -1 + (4 - 2 * progress) * progress;

        const scrollAmount = start + distance * easeInOutQuad; // Current scroll position

        // Scroll to the calculated position
        window.scrollTo(0, scrollAmount);

        // If the scroll isn't done, request the next animation frame
        if (elapsed < duration) {
            requestAnimationFrame(scrollStep);
        }
    }

    // Start the animation
    requestAnimationFrame(scrollStep);
}





window.addEventListener('scroll', function(event){
    const windowHeight = window.innerHeight;
    const windowBottom = window.scrollY + (windowHeight - 100)
    const windowtop = window.scrollY + 100
    const mainPageRect = mainPage.getBoundingClientRect();


// NOTE - about page on scroll animation
    const aboutTop = aboutSection.getBoundingClientRect().top - mainPageRect.top
    const aboutBottom = aboutTop + aboutSection.getBoundingClientRect().height

    if((windowBottom + 100 )> aboutTop && (windowtop- 100 ) < aboutBottom){

        const aboutSectionRect = aboutSection.children[0].getBoundingClientRect();
        const aboutSectionTop = aboutSectionRect.top - mainPageRect.top
        const aboutSectionBottom = aboutSectionTop + aboutSectionRect.height


        if( windowBottom > aboutSectionTop  &&  windowtop < aboutSectionBottom){
                    aboutSection.children[0].style.opacity = '1'
                    aboutSection.children[0].style.top = '0px'
        }else{
            aboutSection.children[0].style.opacity = '0'
            aboutSection.children[0].style.top = '40px'    
        }


        const educationAnimationRect = educationAnimation.getBoundingClientRect();
        const educationAnimationTop = educationAnimationRect.top - mainPageRect.top
        const educationAnimationBottom = educationAnimationTop + educationAnimationRect.height
        if( windowBottom > educationAnimationTop && windowtop < educationAnimationBottom  ){
            educationAnimation.style.opacity = '1'
            educationAnimation.style.top = '0px'


            //NOTE - this code is for education items
            let educRect1 = education_contentAnimation.children[0].getBoundingClientRect()
            let eductop1 = educRect1.top - mainPageRect.top
            let educbottom1 = eductop1  + educRect1.height
            if(windowBottom > eductop1  && windowtop < educbottom1){
                education_contentAnimation.children[0].style.opacity = '1'
                education_contentAnimation.children[0].style.left = '0px'
            }else{
                education_contentAnimation.children[0].style.opacity = '0'
                education_contentAnimation.children[0].style.left = '-40px'
            }


            let educRect2 = education_contentAnimation.children[1].getBoundingClientRect()
            let eductop2 = educRect2.top - mainPageRect.top
            let educbottom2 = eductop2  + educRect2.height
            if(windowBottom > eductop2  && windowtop < educbottom2){
                education_contentAnimation.children[1].style.opacity = '1'
                education_contentAnimation.children[1].style.left = '0px'
            }else{
                education_contentAnimation.children[1].style.opacity = '0'
                education_contentAnimation.children[1].style.left = '-40px'
            }


            let educRect3 = education_contentAnimation.children[2].getBoundingClientRect()
            let eductop3 = educRect3.top - mainPageRect.top
            let educbottom3 = eductop3  + educRect3.height
            if(windowBottom > eductop3  && windowtop < educbottom3){
                education_contentAnimation.children[2].style.opacity = '1'
                education_contentAnimation.children[2].style.left = '0px'
            }else{
                education_contentAnimation.children[2].style.opacity = '0'
                education_contentAnimation.children[2].style.left = '-40px'
            }
        }else{
            educationAnimation.style.opacity = '0'
            educationAnimation.style.top = '40px'
        }


        const skillsAnimationRect = skillsAnimation.getBoundingClientRect();
        const skillsAnimationTop = skillsAnimationRect.top - mainPageRect.top
        const skillsAnimationBottom = skillsAnimationTop + skillsAnimationRect.height
        if( windowBottom > skillsAnimationTop && 
            windowtop < skillsAnimationBottom ){
            skillsAnimation.style.opacity = '1'
            skillsAnimation.style.top = '0px'


            //NOTE - this code is for skills items
            

            for (let index = 0; index < tab_wrapperAnimation.children.length; index++) {
                const element = tab_wrapperAnimation.children[index];
                for (let i = 0; i < element.children.length; i++) {
                    const e = element.children[i];
                    let tab_itemRect = e.getBoundingClientRect()
                    let tab_itemTop = tab_itemRect.top - mainPageRect.top
                    let tab_itemBottom = tab_itemTop + tab_itemRect.height
                    if (windowBottom > tab_itemTop && windowtop < tab_itemBottom) {
                        e.classList.add('active_tab')
                    } else {
                        e.classList.remove('active_tab')
                    }

                }
            }
        }else{
            skillsAnimation.style.opacity = '0'
            skillsAnimation.style.top = '40px'
        }
    }
// ! End of about page onscroll animation

// NOTE - experience page on scroll animation
    const experienceTop = experienceSection.getBoundingClientRect().top - mainPageRect.top
    const experienceBottom = experienceTop + experienceSection.getBoundingClientRect().height

    if((windowBottom + 100 ) > experienceTop && (windowtop- 100 ) < experienceBottom){
        let experienceTitleRect = experienceTitle.getBoundingClientRect()
        let experienceTitletop = experienceTitleRect.top - mainPageRect.top
        let experienceTitleBottom = experienceTitletop + experienceTitleRect.height
        if (windowBottom > experienceTitletop && windowtop < experienceTitleBottom) {
            experienceTitle.style.opacity = '1'
            experienceTitle.style.top = '0px'
        } else {
            experienceTitle.style.opacity = '0'
            experienceTitle.style.top = '40px'
        }
        const timelines = document.getElementById('timeline') 
        for (let index = 0; index < timelines.children.length; index++) {
            const element = timelines.children[index];
            const timelineRect = element.getBoundingClientRect()
            const timelineTop = timelineRect.top - mainPageRect.top
            const timelineBottom = timelineTop + timelineRect.height
            if(element.classList.contains('mobile_timeline')){
                if(windowBottom > timelineTop && windowtop < timelineBottom){
                    element.children[0].style.left = '0px'
                    element.children[0].style.opacity = '1'
                }else{
                    element.children[0].style.left = '40px'
                    element.children[0].style.opacity = '0'
                }
            }else{
                if(element.classList.contains('left')){
                    if(windowBottom > timelineTop && windowtop < timelineBottom){
                        element.children[0].style.left = '0px'
                        element.children[0].style.opacity = '1'
                    }else{
                        element.children[0].style.left = '-40px'
                        element.children[0].style.opacity = '0'
                    }
                }else{
                    if(windowBottom > timelineTop && windowtop < timelineBottom){
                        element.children[0].style.left = '0px'
                        element.children[0].style.opacity = '1'
                    }else{
                        element.children[0].style.left = '40px'
                        element.children[0].style.opacity = '0'
                    }
                }
            }
        }

    }

    
    const portfolioTop = portfolioSection.getBoundingClientRect().top - mainPageRect.top
    const portfolioBottom = portfolioTop + portfolioSection.getBoundingClientRect().height
    if((windowBottom + 100 ) > portfolioTop && (windowtop- 100 ) < portfolioBottom){
        const portfolioTitle = document.getElementById('portfolioTitle')
        let portfolioTitleRect = portfolioTitle.getBoundingClientRect()
        let portfolioTitletop = portfolioTitleRect.top - mainPageRect.top
        let portfolioTitleBottom = portfolioTitletop + portfolioTitleRect.height
        if (windowBottom > portfolioTitletop && windowtop < portfolioTitleBottom) {
            portfolioTitle.style.opacity = '1'
            portfolioTitle.style.top = '0px'
        } else {
            portfolioTitle.style.opacity = '0'
            portfolioTitle.style.top = '40px'
        }
        let portfolio_container = document.getElementById('portfolio_container')
        for (let index = 0; index < portfolio_container.children.length; index++) {
            const element = portfolio_container.children[index];
            let portfolio_containerRect =  element.getBoundingClientRect()
            let portfolio_containerRecttop = portfolio_containerRect.top - mainPageRect.top
            let portfolio_containerRectBottom = portfolio_containerRecttop + portfolio_containerRect.height
            if (windowBottom > portfolio_containerRecttop && windowtop < portfolio_containerRectBottom) {
                element.style.opacity = '1'
                element.style.top = '0px'
            }else{
                element.style.opacity = '0'
                element.style.top = '40px'
            }
        }
    }

    const GetInTouchTop = GetInTouchSection.getBoundingClientRect().top - mainPageRect.top
    const GetInTouchBottom = GetInTouchTop + GetInTouchSection.getBoundingClientRect().height
    if((windowBottom + 100 ) > GetInTouchTop && (windowtop- 100 ) < GetInTouchBottom){
        const GetInTouchTitle = document.getElementById('GetInTouchTitle')
        let GetInTouchTitleRect =  GetInTouchTitle.getBoundingClientRect()
        let GetInTouchTitleRecttop = GetInTouchTitleRect.top - mainPageRect.top
        let GetInTouchTitleRectBottom = GetInTouchTitleRecttop + GetInTouchTitleRect.height
        if (windowBottom > GetInTouchTitleRecttop && windowtop < GetInTouchTitleRectBottom) {
            GetInTouchTitle.style.opacity = '1'
            GetInTouchTitle.style.top = '0px'
        }else{
            GetInTouchTitle.style.opacity = '0'
            GetInTouchTitle.style.top = '40px'
        }

        const map = document.getElementById('map')
        let mapRect =  map.getBoundingClientRect()
        let mapRecttop = mapRect.top - mainPageRect.top
        let mapRectBottom = mapRecttop + mapRect.height
        if (windowBottom > mapRecttop && windowtop < mapRectBottom) {
            map.style.opacity = '1'
            map.style.left = '0px'
        }else{
            map.style.opacity = '0'
            map.style.left = '-40px'
        }

        const socials = document.getElementById('socials')
        let socialsRect =  socials.getBoundingClientRect()
        let socialsRecttop = socialsRect.top - mainPageRect.top
        let socialsRectBottom = socialsRecttop + socialsRect.height
        if (windowBottom > socialsRecttop && windowtop < socialsRectBottom) {
            socials.style.opacity = '1'
            socials.style.right = '0px'
        }else{
            socials.style.opacity = '0'
            socials.style.right = '-40px'
        }
    }
});