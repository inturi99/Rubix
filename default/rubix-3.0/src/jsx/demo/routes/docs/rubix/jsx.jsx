import { Link } from 'react-router';

import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

import Doc from 'routes/docs/doc_container';
var DocUnit = Doc.DocUnit;
var DocContainer = Doc.DocContainer;

import treesnippet from './treesnippet.txt';

class Body extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <Container id='body'>
        <DocContainer>
          <DocUnit name='Basics'>
            <h4 className='fg-black50'>Basics</h4>
            <p>
              {"Once you have everything setup (if you haven't go back to the "}<Link to='/app/docs/installation'>Installation</Link>{" page and finish the installation) you'll notice a file structure similar to this:"}
            </p>
            <div>
              <pre>
                <code className='language-markup'>
                  {treesnippet}
                </code>
              </pre>
            </div>
            <div>
              The <strong>src</strong> directory is where your source files are located and it contains three folders:
              <ul>
                <li><strong>global</strong>: This directory contains files shared by all projects. Do not alter these files unless you know what you are doing.</li>
                <li><strong>jsx</strong>: This directory contains project sources (JSX files). By default there are two projects that ship with your purchase (Rails users have only 1 folder <strong>app</strong>. To create multiple projects copy the rails-seed directory):
                  <ul>
                    <li><strong>app</strong>: this is a blank starter project</li>
                    <li><strong>demo</strong>: this is the demo project which can be used for reference</li>
                  </ul>
                </li>
                <li><strong>sass</strong>: This directory contains project sources (SASS files) and has two folders:
                  <ul>
                    <li><strong>app</strong>: this is a blank starter project</li>
                    <li><strong>demo</strong>: this is the demo project which can be used for reference</li>
                  </ul>
                </li>
              </ul>
            </div>
          </DocUnit>
          <DocUnit name='main.jsx'>
            <p>
              {"This file is the starting point of your app. Look for it in the "}<code>src/jsx/app</code>{" folder."}
            </p>
            <p>
              {"The first few lines of the file contain a snippet of code that initializes Mozilla L20n. The first parameter passed to the locale is your project name (this variable is replaced at compilation time with your project name). So if your project's name is ap, then all your locales are stored in "}<code>public/locales/app</code>{" (For reference see the locales stored in "}<code>public/locales/demo</code>{"). You can pass your locales to the "}<code>locales</code>{" option and also set the "}<code>default</code>{" locale."}
            </p>
            <div>
              <pre>
                <code className='language-javascript'>
                  {"l20n.initializeLocales(__APPNAME__, {\n"}
                  {"  'locales': ['en-US'],\n"}
                  {"  'default': 'en-US'\n"}
                  {"}});\n"}
                </code>
              </pre>
            </div>
            <p>
              {"Store all your routes in "}<code>src/jsx/app/routes</code>{" folder and require them in src/jsx/app/routes.jsx. An example route pointing to a blank page is show in the routes.jsx file:"}
            </p>
            <div>
              <pre>
                <code className='language-javascript'>
                  {"import Blank from 'routes/blank';\n"}
                </code>
              </pre>
            </div>
            <Alert info>
              {"For routing we make use of the excellent "}<AlertLink href='http://rackt.github.io/react-router/tags/v1.0.0-beta3.html' target='_blank'>react-router</AlertLink>{" library. Its advised that you go through the documentation for react-router before reading this section."}
            </Alert>
            <p>
              {"Now, we define routes to the blank page. You can see from this snippet that we have referenced the variable to the blank page we required earlier."}
            </p>
            <div>
              <pre>
                <code className='language-javascript'>
                  {"export default (withHistory, onUpdate) => {\n"}
                  {"  const history = withHistory? new BrowserHistory : null;\n"}
                  {"  return (\n"}
                  {"    <Router history={history} onUpdate={onUpdate}>\n"}
                  {"      <Route path='/' component={Blank} />\n"}
                  {"    </Route>\n"}
                  {"  );\n"}
                  {");\n"}
                </code>
              </pre>
              <p>
                {"The page itself is rendered within the "}<strong>div#app-container</strong>{" element."}
              </p>
            </div>
          </DocUnit>
          <DocUnit name='blank.jsx'>
            <p>
              {"This is an example file and should serve as a starting point for creating various routes in your app. When you open the file you'll immediately notice that there are 5 files required:"}
            </p>
            <div>
              <pre>
                <code className='language-javascript'>
                  {"import classNames from 'classnames';\n"}
                  {"import SidebarMixin from 'global/jsx/sidebar_component';\n\n"}
                  {"import Header from 'common/header';\n"}
                  {"import Sidebar from 'common/sidebar';\n"}
                  {"import Footer from 'common/footer';\n"}
                </code>
              </pre>
            </div>
            <p>
              {"Of the above 5, three files (header.jsx, sidebar.jsx and footer.jsx) are stored in the "}<strong>common</strong>{" folder for the app. All of the above files are optional and are only required if you want a full blown dashboard layout. For instance, when designing a homepage you wouldn't need any of the above files."}
            </p>
            <p>
              {"Then we have a Body component which contains a Container#body component. All your main application code should be written within this component."}
            </p>
            <div>
              <pre>
                <code className='language-markup'>
                  {"class Body extends React.Component {\n"}
                  {"  render() {\n"}
                  {"    return (\n"}
                  {"      <Container id='body'>\n"}
                  {"        <Grid>\n"}
                  {"          <Row>\n"}
                  {"            <Col sm={12}>\n"}
                  {"              <PanelContainer>\n"}
                  {"                <Panel>\n"}
                  {"                  <PanelBody className='text-center'>\n"}
                  {"                    <p>BLANK PAGE</p>\n"}
                  {"                  </PanelBody>\n"}
                  {"                </Panel>\n"}
                  {"              </PanelContainer>\n"}
                  {"            </Col>\n"}
                  {"          </Row>\n"}
                  {"        </Grid>\n"}
                  {"      </Container>\n"}
                  {"    );\n"}
                  {"  }\n"}
                  {"}\n"}
                </code>
              </pre>
            </div>
            <p>
              {"Finally we have a default component class which renders the entire page. It contains a Container#container component which has Sidebar, Header, Body and Footer components."}
            </p>
            <p>
              {"It is important to note that we also include a SidebarMixin which takes care of all the boilerplate code required to show/hide the sidebar on smaller viewport. The variable 'classes' stores the state of the Sidebar and is used for toggling the Sidebar."}
            </p>
            <div>
              <pre>
                <code className='language-javascript'>
                {"@SidebarMixin\n"}
                {"export default class extends React.Component {\n"}
                {"  render() {\n"}
                {"    var classes = classNames({\n"}
                {"      'container-open': this.props.open\n"}
                {"    });\n\n"}
                {"    return (\n"}
                {"      <Container id='container' className={classes}>\n"}
                {"        <Sidebar />\n"}
                {"        <Header />\n"}
                {"        <Body />\n"}
                {"        <Footer />\n"}
                {"      </Container>\n"}
                {"    );\n"}
                {"  }\n"}
                {"}\n"}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='sidebar.jsx'>
            <p>
              {"sidebar.jsx file contains the Sidebar section of the page. The sidebar section consits of a div#avatar container, SidebarControls component and the div#sidebar-container."}
            </p>
            <p>
              {"The SidebarControls component is optional (if you're going to have only 1 sidebar) and can be removed. If you are going to be removing it, you need to also make a small change in "}<strong>src/global/sass/rubix/overrides/_variables.scss</strong>{" by making sure the variable "}<code>$sidebar-controls-visibility</code>{" is set to "}<code>hidden</code>{". If you don't want a global setting that affects all your projects you can add it to the top of your "}<strong>src/sass/app/main.scss</strong>{" file which restricts the setting to the specific project."}
            </p>
            <p>
              {"The sidebar props passed to each SidebarControlBtn controls the relevant Sidebar component."}
            </p>
            <div>
              <pre>
                <code className='language-javascript'>
                  {"export default class extends React.Component {\n"}
                  {"  render() {\n"}
                  {"    return (\n"}
                  {"      <div id='sidebar' {...props}>\n"}
                  {"        <div id='avatar'>\n"}
                  {"          ...\n"}
                  {"        </div>\n"}
                  {"        <SidebarControls>\n"}
                  {"          <SidebarControlBtn bundle='fontello' glyph='docs' sidebar={0} />\n"}
                  {"        </SidebarControls>\n"}
                  {"        <div id='sidebar-container'>\n"}
                  {"          <Sidebar sidebar={0} active>\n"}
                  {"            <ApplicationSidebar />\n"}
                  {"          </Sidebar>\n"}
                  {"        </div>\n"}
                  {"      </div>\n"}
                  {"    );\n"}
                  {"  }\n"}
                  {"}\n"}
                </code>
              </pre>
            </div>
            <p>
              {"Here is an example of a Sidebar navigation component defined in ApplicationSidebar component. You can nest multiple SidebarNav's to have multiple menu levels."}
            </p>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<SidebarNav>\n"}
                  {"  <SidebarNavItem glyph='icon-fontello-gauge' name='Blank' href='/' />\n"}
                  {"  <SidebarNavItem glyph='icon-feather-mail' name={<span>Menu <BLabel className='bg-darkgreen45 fg-white'>3</BLabel></span>}>\n"}
                  {"    <SidebarNav>\n"}
                  {"      <SidebarNavItem glyph='icon-feather-inbox' name='Inbox' href='#' />\n"}
                  {"      <SidebarNavItem glyph='icon-outlined-mail-open' name='Mail' href='#' />\n"}
                  {"      <SidebarNavItem glyph='icon-dripicons-message' name='Compose' href='#' />\n"}
                  {"    </SidebarNav>\n"}
                  {"  </SidebarNavItem>\n"}
                  {"</SidebarNav>\n"}
                </code>
              </pre>
            </div>
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
