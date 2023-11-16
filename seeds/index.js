const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers')
const Campground = require('../models/campground');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');
};

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '654a0dcea80ac69eedeaa0f1',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, amet officia eligendi dolore distinctio quis ullam porro, quia fugit harum at repellendus adipisci voluptas. Dolorem, officia numquam! Beatae, eaque dolores.',
            price,
            geometry: {
                type: 'Point',
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ],
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dxlhov3uy/image/upload/v1699499904/YelpCamp/ktvwmvm1wy6noaqmexgn.jpg',
                    filename: 'YelpCamp/ktvwmvm1wy6noaqmexgn',
                },
                {
                    url: 'https://res.cloudinary.com/dxlhov3uy/image/upload/v1699499904/YelpCamp/lhraywtx17dhcijts1xb.jpg',
                    filename: 'YelpCamp/lhraywtx17dhcijts1xb',
                }
            ],

        });
        await camp.save();
    }

}

seedDB().then(() => {
    mongoose.connection.close();
})