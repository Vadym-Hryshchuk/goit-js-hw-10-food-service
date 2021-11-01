import './sass/main.scss';
import menu from './menu.json';
import menuItemMarkup from './menuItem.hbs'

const refs = {
    body: document.querySelector('body'),
    checkbox: document.querySelector('#theme-switch-toggle'),
    menuList: document.querySelector('.js-menu')
}

// refs.menuList.insertAdjacentHTML('beforeend', menu.map(menuItemMarkup).join(''));
refs.menuList.insertAdjacentHTML('beforeend', menuItemMarkup(menu));

//--------------------------------------------------------
// Зміна теми
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
refs.body.classList.add(Theme.LIGHT);

refs.checkbox.addEventListener('change', onCheckboxChange);

function onCheckboxChange(evt) {
    
    localStorage.setItem('checkboxChecked', evt.target.checked);
    
    if (evt.target.checked) {
        refs.body.className = Theme.DARK
    }
    else {
        refs.body.className = Theme.LIGHT
    }
    localStorage.setItem('classBody', refs.body.className)
}

saveCheckboxCheck()
function saveCheckboxCheck() {
    const saveCheckboxChecked = JSON.parse(localStorage.getItem('checkboxChecked'));
    const saveClassBody = localStorage.getItem('classBody');
    
    if (saveCheckboxChecked) {
        refs.body.className = saveClassBody;
        console.log(refs.body.className)
    }
    if (refs.body.className === Theme.DARK)    {
        refs.checkbox.checked = true;
    }
}