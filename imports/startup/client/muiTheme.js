import getMuiTheme from 'material-ui/styles/getMuiTheme';

const primary = '#9AC2D7';
const secondary = '#282A37'
const tertiary = 'black'

const options = {
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: primary,
    accent1Color: secondary,//'#ff7300',
    textColor: tertiary,
    alternateTextColor: 'white',
  }
};


const muiTheme = getMuiTheme(options);

export default muiTheme;
