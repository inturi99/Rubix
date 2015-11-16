import { Link } from 'react-router';

import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

import sasstreesnippet from './sasstreesnippet.txt';

import Doc from 'routes/docs/doc_container';
var DocUnit = Doc.DocUnit;
var DocContainer = Doc.DocContainer;

class Body extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <Container id='body'>
        <DocContainer>
          <DocUnit name='Structure'>
            <h4 className='fg-black50'>File structure</h4>
            <p>
              {"Once you have everything setup (if you haven't go back to the "}<Link to='/app/docs/installation'>Installation</Link>{" page and finish the installation) you'll notice a file structure similar to this in your "}<code>src</code> folder:
            </p>
            <div>
              <pre>
                <code className='language-markup'>
                  {sasstreesnippet}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='colors.scss'>
            <p>
              {"This file contains a list of color combinations that are provided by default along with Rubix. You can add/remove from this list. We have provided a handy mixin called "}<code>generateColors($name, $color, $hover-color)</code>{" that colors different components like lists, navs, buttons, menus, timeline etc."}
            </p>
            <p>
              {"You can also override the forground color of any element by prefixing the color name with "}<strong>fg-</strong>{" (ex: "}<strong>fg-deepred</strong>{") and background color by prefixing color name with "}<strong>bg-</strong>{" (ex: "}<strong>bg-darkgreen45</strong>{")."}
            </p>
            <p>
              {"Similary we have also provided classnames for borders and different states (like hover/focus/active etc). Please refer to the demo JSX files for usage of these different color combinations on various components. Certain components have a bsStyle property (ex: Button) which takes the color name directly and generates the appropriate classname behind the scenes. Also, please refer to the "}<strong>{"sass/app/theme/_colors.scss"}</strong>{" file for the color mixin definition."}
            </p>
          </DocUnit>
          <DocUnit name='font-faces.scss'>
            <p>
              {"This file contains a list of web icon fonts that come packaged with Rubix. You can add/remove fonts from this list. If you are going to add a new icon font make sure you add a font partial in "}<strong>src/sass/app/fonts</strong>{". Also make sure you have dropped a corresponding TTF file into the dropbox located at: "}<strong>public/fonts/dropbox/app</strong>
            </p>
            <p>
              {"As an example lets take the case of Climacons font. The TTF file dropped into "}<strong>public/fonts/dropbox/app</strong>{" is "}<strong>Climacons-Font.ttf</strong>{". The corresponding partial "}<strong>src/sass/app/fonts/_climacons.scss</strong>{" contains a reference to this filename in the font-family:"}
            </p>
            <pre>
              <code className='language-css'>
                {".climacon:before{\n"}
                {"  font-family: 'Climacons-Font';\n"}
                {"  ...\n"}
                {"}\n"}
              </code>
            </pre>
            <p>
              {"If you are using text web fonts like Lato/Open Sans there is no need to create a separate partial file and can directly reference it in your stylesheets after dropping the required TTF file into your project's font dropbox."}
            </p>
          </DocUnit>
          <DocUnit name='main.scss'>
            <p>
              {"This file contains a list of all third party plugin styles which come packaged with Rubix that you can add/remove from. To provide page specfic styling please create partials in "}<strong>src/sass/app/pages</strong>{" and require them in the "}<strong>src/sass/app/pages/_pages.scss</strong>{" partial. Similarly include your print styles in the print partial located at "}<strong>src/sass/app/print/_print.scss</strong>
            </p>
          </DocUnit>
          <DocUnit name='theme.scss'>
            <p>
              {"This file a mixin called "}<code>theme-maker($name, $list)</code>{" which takes two parameters: a name and a list of default settings. This mixin includes another mixin called "}<code>theme-mixin($name, $list)</code>{". The theme-maker mixin is used to for creating individual themes with its own styles while theme-mixin is used for setting global property values for styles across themes. As is evident in the file we have provided 6 different themes with a base color: default (orange), green, blue, purple, brown and cyan. You can remove themes that you don't like and add the ones you do. You can even modify the themes to whatever color combination you desire."}
            </p>
          </DocUnit>
        </DocContainer>
      </Container>
    );
  }
}

@SidebarMixin
export default class extends React.Component {
  render() {
    var classes = classNames({
      'container-open': this.props.open
    });

    return (
      <Container id='container' className={classes}>
        <Sidebar />
        <Header />
        <Body />
        <Footer />
      </Container>
    );
  }
}
