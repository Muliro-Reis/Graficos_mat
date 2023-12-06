function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.toggle('dark');
    document.cookie = `theme=${isDark ? 'dark' : 'light'}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}
function checkTheme() {
    const themeCookie = document.cookie.split('; ').find(row => row.startsWith('theme='));
    const theme = themeCookie ? themeCookie.split('=')[1] : null;
    if (theme) {
        document.body.classList.add(theme);
    }
}
checkTheme();