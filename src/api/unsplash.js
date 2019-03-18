import axios from 'axios';

export default axios.create({
    baseUrl: 'https://api.unsplash.com/search/photos',
    headers: {
        Authorization: 'Client-ID 76acff122294735981c14b1c460a288c24a9967f6e974fa41cc662ee26ef7b11'
    }

});