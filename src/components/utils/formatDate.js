export const formateDate = (date) => {
    const options = {
        weekdey: 'Long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return date.toLocaleDateString('en-US' , options)
}