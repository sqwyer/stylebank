function _sb_updateButton(elems, mode) {
    if (SB_BUTTON_UPDATER != undefined) {
        SB_BUTTON_UPDATER(elems, mode);
    }
}

[...document.getElementsByClassName('sb-theme-toggle')].forEach(elem => {
    elem.addEventListener('click', () => {
        switch (document.body.getAttribute('data-type')) {
            case 'dark':
                document.body.setAttribute('data-type', 'light');
                localStorage.setItem('_sb_theme', 'light');
                _sb_updateButton([...document.getElementsByClassName('sb-theme-toggle')], 'light');
                break;
            default:
                document.body.setAttribute('data-type', 'dark');
                localStorage.setItem('_sb_theme', 'dark');
                _sb_updateButton([...document.getElementsByClassName('sb-theme-toggle')], 'dark');
        }
    })
})

window.addEventListener('load', () => {
    let theme = localStorage.getItem('_sb_theme');
    if(theme != undefined && theme != null && theme === 'light' || theme === 'dark') {
        document.body.setAttribute('data-type', theme);
        _sb_updateButton([...document.getElementsByClassName('sb-theme-toggle')], theme);
    }
})