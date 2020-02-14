import React, { Component } from 'react';
import faker from 'faker';
import './app.css';
import SearchBar from './components/searchBar/searchBar';
import FlagCard from './components/flagCard/flagCard';
import Spinner from './components/spinner/spinner';

class App extends Component {
  searchInput = React.createRef();
  users = [];
  state = {
    filteredUsers: [],
    showLoader: false,
  }

  componentDidMount() {
    this.users = this.generateUsers(10);
    console.log(this.users);
  }

  searchFilteredUsersHandler() {
    this.setState({
      showLoader: true,
    });
    setTimeout(() => {
      const filteredUsers = this.users.filter(user => user.email.toLowerCase().includes(this.searchInput.current.value.toLowerCase()))
      this.setState ({
        filteredUsers,
        showLoader: false,
      });
    }, 2000)
  }

  generateUsers(numberOfUsers) {
    const localUsers = [];
    for (let i = 0; i < numberOfUsers; i++) {
      localUsers.push({
        email: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        avatar: faker.image.avatar(),
        content: faker.lorem.text(),
        countryCode: faker.address.countryCode(),
      });
    }
    return localUsers;
  }
  onKeyPressRender() {
    return <SearchBar onKeyPressSearch={() => this.searchFilteredUsersHandler()} searchInput={this.searchInput}></SearchBar>;
  }
  render() {
    return (
      <div className="App app-wrapper">
        {this.onKeyPressRender()}
        <div className="searchresult">
          {!this.state.showLoader && this.state.filteredUsers.length === 0 && 'No result.'}
          {
            this.state.showLoader ? <Spinner/> : (this.state.filteredUsers.length &&
              this.state.filteredUsers.map(user => (<FlagCard key={user.email} user={user}></FlagCard>))) || ''
          }
        </div>
      </div>
    )
  };
}

export default App;
