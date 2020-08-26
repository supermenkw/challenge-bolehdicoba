import React from 'react';
import { Cards, Chart } from './components/';
import { Typography, createMuiTheme, responsiveFontSizes , ThemeProvider } from '@material-ui/core';
import styles from './app.module.css';
import { fetchData } from './api';

class App extends React.Component {
    state = {
        data: {}
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({
            data: fetchedData,
        })
    }

    render() { 
        const { data } = this.state
        let theme = createMuiTheme();

        theme = responsiveFontSizes(theme)

        return (
            <div className={styles.container}>
                <ThemeProvider theme={theme}>
                    <Typography variant='h3' component='h1'>C😷VID-19</Typography>
                </ThemeProvider>
                <Cards data={data} />
                <Chart/>
            </div>
        );
    }
}

export default App;