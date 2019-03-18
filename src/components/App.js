import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID 76acff122294735981c14b1c460a288c24a9967f6e974fa41cc662ee26ef7b11'
            }

        });
        console.log(response.data.results);
        this.setState({images: response.data.results});
    }

    render() {
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;