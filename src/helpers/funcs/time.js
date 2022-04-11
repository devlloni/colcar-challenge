export const getCurrentTimeString = () => {
    const date = new Date().getUTCDate();
    const month = new Date().getUTCMonth();
    const year = new Date().getUTCFullYear();

    return `${date}/${month}/${year}`;
};
