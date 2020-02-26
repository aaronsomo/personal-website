import React, { Component } from 'react';
import Typist from 'react-typist';
import '../App.css';
import Configs from '../configurations.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkBackgroundModes: [
        'day',
        'terminal',
        'torquoise',
        'alizarin',
        'amythyst',
        'carrot',
        'peterriver'
      ],
      lightBackgroundModes: [
        'night',
        'lightred',
        'lightpurple',
        'lightgreen',
        'lightblue',
        'lightyellow'
      ],
      backgroundType: Configs.backgroundType || 'plain',
      appClass: Configs.plainBackgroundMode || 'daylight',
      devIntro: Configs.devIntro || 'A Lorem Ipsum Placeholder',
      devDesc:
        Configs.devDesc ||
        'Another placeholder: Aute veniam ut deserunt cillum irure pariatur Lorem dolore anim nostrud quis veniam elit culpa.',
      backgroundMode: 'default',
      backgroundIndex: 0,
      bgStyle: {},
      icons: Configs.icons || []
    };
    this.changeBackgroundBasedonMode = this.changeBackgroundBasedonMode.bind(
      this
    );
    this.changeThemeMode = this.changeThemeMode.bind(this);
    this.checkIfNightModeEnabled = this.checkIfNightModeEnabled.bind(this);
    this.checkIfDayModeEnabled = this.checkIfDayModeEnabled.bind(this);
    this.checkIfPlainTypeEnabled = this.checkIfPlainTypeEnabled.bind(this);
    this.getDefaultModeBasedOnBackgroundType = this.getDefaultModeBasedOnBackgroundType.bind(
      this
    );
    // this.checkIfGradientTypeEnabled = this.checkIfGradientTypeEnabled.bind(
    //   this
    // );
    this.prepareBackgroundImageStyle = this.prepareBackgroundImageStyle.bind(
      this
    );
    // this.prepareGradientStyleSheets = this.prepareGradientStyleSheets.bind(
    //   this
    // );
  }

  // componentDidMount() {
  //   if (this.checkIfPlainTypeEnabled()) {
  //     return true;
  //   }
  // }

  componentWillMount() {
    if (this.checkIfPlainTypeEnabled()) {
      return true;
    } else if (this.checkIfGradientTypeEnabled()) {
      this.setState({
        appClass: 'gradient',
        bgStyle: this.prepareGradientStyleSheets()
      });
    } else if (this.checkIfImageTypeEnabled()) {
      this.setState({
        appClass: 'full-bg-image',
        bgStyle: this.prepareBackgroundImageStyle()
      });
    }
  }

  checkIfNightModeEnabled() {
    return (
      this.state.backgroundType === 'plain' &&
      this.state.appClass === 'nightlight'
    );
  }

  checkIfDayModeEnabled() {
    return (
      this.state.backgroundType === 'plain' &&
      this.state.appClass === 'daylight'
    );
  }

  checkIfGradientTypeEnabled() {
    if (this.state.backgroundType === 'gradient') {
      return true;
    } else {
      return false;
    }
    // return this.state.backgroundType === 'gradient';
  }

  checkIfPlainTypeEnabled() {
    if (this.state.backgroundType === 'plain') {
      return true;
    } else {
      return false;
    }
    // return this.state.backgroundType === 'plain';
  }

  checkIfImageTypeEnabled() {
    if (this.state.backgroundType === 'image') {
      return true;
    } else {
      return false;
    }
    // return this.state.backgroundType === 'image';
  }

  prepareGradientStyleSheets() {
    if (Configs.gradientColors) {
      return {
        background: 'linear-gradient(-45deg, ' + Configs.gradientColors + ')',
        backgroundSize: '400% 400%'
      };
    } else {
      return {
        background:
          'linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)',
        backgroundSize: '400% 400%'
      };
    }
  }

  prepareBackgroundImageStyle() {
    if (Configs.backgroundImageUrl) {
      return {
        background:
          'url("' +
          Configs.backgroundImageUrl +
          '") no-repeat center center fixed',
        backgroundSize: 'cover'
      };
    } else {
      return {
        background:
          'url("/images/sample-background.jpg") no-repeat center center fixed',
        backgroundSize: 'cover'
      };
    }
  }

  getDefaultModeBasedOnBackgroundType() {
    if (this.checkIfNightModeEnabled()) {
      return this.state.lightBackgroundModes[0];
    } else if (this.checkIfDayModeEnabled()) {
      return this.state.darkBackgroundModes[0];
    }
  }

  changeThemeMode() {
    if (this.checkIfNightModeEnabled()) {
      this.setState({
        appClass: 'daylight',
        backgroundIndex: 0,
        backgroundMode: this.state.darkBackgroundModes[0]
      });
    } else if (this.checkIfDayModeEnabled()) {
      this.setState({
        appClass: 'nightlight',
        backgroundIndex: 0,
        backgroundMode: this.state.lightBackgroundModes[0]
      });
    }
  }

  changeBackgroundBasedonMode() {
    if (
      this.checkIfNightModeEnabled() &&
      this.state.backgroundIndex < this.state.lightBackgroundModes.length - 1
    ) {
      this.setState({
        backgroundIndex: this.state.backgroundIndex + 1,
        backgroundMode: this.state.lightBackgroundModes[
          this.state.backgroundIndex + 1
        ]
      });
    } else if (
      this.checkIfDayModeEnabled() &&
      this.state.backgroundIndex < this.state.darkBackgroundModes.length - 1
    ) {
      this.setState({
        backgroundIndex: this.state.backgroundIndex + 1,
        backgroundMode: this.state.darkBackgroundModes[
          this.state.backgroundIndex + 1
        ]
      });
    } else {
      this.setState({
        backgroundIndex: 0,
        backgroundMode: this.getDefaultModeBasedOnBackgroundType()
      });
    }
  }

  render() {
    const {
      appClass,
      bgStyle,
      backgroundMode,
      devIntro,
      devDesc,
      icons
    } = this.state;

    return (
      <div className={appClass} style={bgStyle}>
        {/* // <div className="daylight" style={bgStyle}> */}
        <div className="change-mode" onClick={this.changeThemeMode} />
        <div
          className={backgroundMode}
          onClick={this.changeBackgroundBasedonMode}
        >
          <main className="App-main">
            <h1 className="intro">{devIntro}</h1>
            <div className="tagline">
              <Typist>{devDesc}</Typist>
            </div>
            <div className="icons-social">
              {icons.map((icon, index) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${icon.url}`}
                  key={index}
                >
                  <i className={`fab ${icon.image}`} />
                </a>
              ))}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
