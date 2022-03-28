import pyramid from './Cards/pyramids.jpg'
import fishRiver from './Cards/fishRiver.jpg'
import tableMountain from './Cards/tableMountain.jpg'

const dataSet = [
    {
        id: 1,
        country: 'EGYPT',
        name: 'Giza Pyramids',
        dateVisited: '10 Mar, 2022 - 28 Mar, 2022',
        details: 'The Great Pyramid of Giza is a defining symbol of Egypt and the last of the ancient Seven Wonders of the World. It is located on the Giza plateau near the modern city of Cairo and was built over a twenty-year period during the reign of the king Khufu (2589-2566 BCE, also known as Cheops) of the 4th Dynasty.',
        image: pyramid,
        map: 'https://goo.gl/maps/rD2K1yTPtLhNkJUk8'
    },
    {
        id: 2,
        country: 'SOUTH AFRICA',
        name: 'Table Mountain',
        dateVisited: '30 Mar, 2022 - 1 Apr, 2022',
        details: 'Table Mountain is a flat-topped mountain forming a prominent landmark overlooking the city of Cape Town in South Africa. It is a significant tourist attraction, with many visitors using the cableway or hiking to the top.[2] Table Mountain National Park is the most visited national park in South Africa, attracting 4.2 million people every year for various activities. ',
        image: tableMountain,
        map: 'https://goo.gl/maps/tRoJLfzXxsFmRQ1Y7'
    },
    {
        id: 3,
        country: 'NAMIBIA',
        name: 'Fish River',
        dateVisited: '5 Apr, 2022 - 30 Apr, 2022',
        details: 'Fish River, Afrikaans Visrivier, stream in southern Namibia. It rises in Namaqualand and flows south across the Great Namaqualand plateau, where it cuts a spectacular gorge 1,000 to 2,300 feet (300 to 700 m) deep, to empty into the Orange River. It is about 375 miles (600 km) long and is intermittent.',
        image: fishRiver,
        map: 'https://goo.gl/maps/iyGztpSxW4hgVjjT9'
    }
]

export default dataSet