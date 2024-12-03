export const handleMenuClick = (menuName, setActiveMenu) => {
    setActiveMenu(menuName);
};

export function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export function formatNumber(number) {
    return number.toString().padStart(3, "0");
};