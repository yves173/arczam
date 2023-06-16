const theme_togggle=document.getElementById('theme-toggle')
const theme_togggle_dark=document.getElementById('theme-toggle-dark-icon')
const theme_togggle_light=document.getElementById('theme-toggle-light-icon')
const logo=document.getElementById('logo-d')

if(localStorage.theme === 'dark'){

    logo.classList.add('logo-dark')
    logo.classList.remove('logo-light')
    theme_togggle_light.classList.remove('hidden')

}else{
    logo.classList.remove('logo-dark')
    logo.classList.add('logo-light')
    theme_togggle_dark.classList.remove('hidden')
}

theme_togggle.addEventListener('click',()=>{
    document.documentElement.classList.toggle('dark')
    theme_togggle_dark.classList.toggle('hidden')
    theme_togggle_light.classList.toggle('hidden')

    if(localStorage.theme === 'dark'){
        logo.classList.remove('logo-dark')
        logo.classList.add('logo-light')
        localStorage.theme = 'light'
    }
    else{
        logo.classList.add('logo-dark')
        logo.classList.remove('logo-light')
        localStorage.theme = 'dark'
    }
})