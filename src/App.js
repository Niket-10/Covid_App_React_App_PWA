import React from 'react'
import { Cards, Charts, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api'
import coronaImg from './images/coronavirus.jpg'
class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        this.setState({ data: fetchedData, country: country })
    }

    render() {
        const { data, country } = this.state
        return (
        <>
        <div className={styles.container1}>
            <img src={coronaImg} className={styles.image} width="300px" height="auto" alt='covid-19' />
            </div>
            <div className={styles.container}>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts data={data} country={country} />
        </div>
        </>
        )
    }
}

export default App;