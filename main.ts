
function fetchHoroscope(sign) {
    const url = 'https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily'
    fetch(`${url}?sign=${sign}&day=today`)
        .then(response => response.json())
        .then(data => {
            const horoscope = {
                sign: sign,
                date: data.data.date,
                horoscope: data.data.horoscope_data
            }
            console.log(horoscope)
        })
        .catch(err => {
            console.log(err)
        })
}
const signs = [
    'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
    'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'
];

signs.forEach(sign => {
    fetchHoroscope(sign)
})
