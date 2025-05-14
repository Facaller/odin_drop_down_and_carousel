export function showDropDown(burgerId, menuId) {
    const burger = document.getElementById(burgerId);
    const menu = document.getElementById(menuId);

    if (!burger || !menu) {
        console.warn('Dropdown elements not found')
        return;
    }
    
    burger.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}
