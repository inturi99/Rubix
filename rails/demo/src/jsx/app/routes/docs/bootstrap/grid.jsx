import { Link } from 'react-router';

import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

import Doc from 'routes/docs/doc_container';
var DocUnit = Doc.DocUnit;
var DocContainer = Doc.DocContainer;

import gridbasic from './snippets/bootstrap_grid_basic.txt';
import gridsnippet from './snippets/bootstrap_grid.txt';
import gridfixedwidth from './snippets/gridfixedwidth.txt';
import gridzeropadding from './snippets/gridzeropadding.txt';
import gridgutter from './snippets/gridgutter.txt';
import griddir from './snippets/griddir.txt';
import gridnest from './snippets/gridnest.txt';
import rowsyntax from './snippets/rowsyntax.txt';
import colsyntax from './snippets/colsyntax.txt';
import colclearfix from './snippets/colclearfix.txt';
import colhiddenvisible from './snippets/colhiddenvisible.txt';
import coloffsets from './snippets/coloffsets.txt';
import colpushpull from './snippets/colpushpull.txt';
import colcollapse from './snippets/colcollapse.txt';

class Body extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <Container id='body'>
        <DocContainer>
          <DocUnit name='Bootstrap: Grid'>
            <h4 className='fg-black50'>Basic Syntax:</h4>
            <p>
              {"Bootstrap includes a responsive, mobile first fluid grid system that appropriately scales up to 12 columns as the device or viewport size increases. Rubix leverages the power of React to write composable, semantic components. By default the Grid is fluid but you'll soon see that you can pass different options to control the look and feel of your Grid. The basic syntax of a Grid in JSX is:"}
            </p>
            <div>
              <pre>
                <code className='language-markup'>
                  {gridbasic}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Fixed:</h4>
            <p>
              If you need a fixed width Grid it would be:
            </p>
            <div>
              <pre>
                <code className='language-markup'>
                  {gridfixedwidth}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Zero padding:</h4>
            <p>
              If you need a Grid with zero padding (even the rows and columns inside it will inherit that padding) it would be:
            </p>
            <div>
              <pre>
                <code className='language-markup'>
                  {gridzeropadding}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Gutter:</h4>
            <p>
              If you need to add a gutter to your Grid it would be:
            </p>
            <div>
              <pre>
                <code className='language-markup'>
                  {gridgutter}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Gutter top/left/right/bottom:</h4>
            <p>
              You can also control where you want your gutter by including directionality constraints to your Grid:
            </p>
            <div>
              <pre>
                <code className='language-markup'>
                  {griddir}
                </code>
              </pre>
            </div>
            <hr/>
            <p>
              {"You can of course nest grids (we'll be covering Cols and Rows soon! Don't worry :) )"}:
            </p>
            <div>
              <pre>
                <code className='language-markup'>
                  {gridnest}
                </code>
              </pre>
            </div>
            <hr/>
            <p>
              You can of course mix the above options depending on your layout. We also fix a special z-index bug in iOS and Safari by including a z-index for every Grid you create so that dropdowns are not affected by it.
            </p>
            <br/>
          </DocUnit>
          <DocUnit name='Bootstrap: Rows'>
            <h4 className='fg-black50'>Basic Syntax:</h4>
            <p>
              {"Rows in a Grid are used to create horizontal groups of Columns. To create a Row the syntax is:"}
            </p>
            <div>
              <pre>
                <code className='language-markup'>
                  {rowsyntax}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='Bootstrap: Columns'>
            <h4 className='fg-black50'>Basic Syntax:</h4>
            <p>
              {"Columns in a Grid are containers that house your content. These columns create gutters via padding. The basic syntax to create a column is:"}
            </p>
            <div>
              <pre>
                <code className='language-markup'>
                  {colsyntax}
                </code>
              </pre>
            </div>
            <p>
              {"xs, sm, md and lg options are defined breakpoints which alters the layout depending on the type of device you are viewing the site on."}
            </p>
            <hr/>
            <h4 className='fg-black50'>Clearfix:</h4>
            <p>
              {"Clear the columns if their content doesn't match in height:"}
            </p>
            <div>
              <pre>
                <code className='language-markup'>
                  {colclearfix}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Hidden/Visible:</h4>
            <p>
              {"Pass a delimited list of options to hidden and visible properties:"}
            </p>
            <div>
              <pre>
                <code className='language-markup'>
                  {colhiddenvisible}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Offsets:</h4>
            <p>
              {"Move columns to the right using offsets. Example:"}
            </p>
            <div>
              <pre>
                <code className='language-markup'>
                  {coloffsets}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Push/Pull:</h4>
            <p>
              {"Easily change the order of the built-in grid columns with Push and Pull properties. Example:"}
            </p>
            <div>
              <pre>
                <code className='language-markup'>
                  {colpushpull}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Collapse:</h4>
            <p>
              {"Collapse paddings on your Columns. Example:"}
            </p>
            <div>
              <pre>
                <code className='language-markup'>
                  {colcollapse}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='Bootstrap: Grid Example'>
            <p>Here is an example of a bootstrap grid:</p>
            <div style={{marginLeft: -25, marginRight: -25}}>
              <Grid>
                <Row>
                  <Col sm={6} md={6} lg={6} xsOnlyGutterBottom smCollapseRight>
                    <Well noMargin>Col(lg:6)</Well>
                  </Col>
                  <Col sm={6} md={6} lg={6}>
                    <Well noMargin>Col(lg:6)</Well>
                  </Col>
                </Row>
              </Grid>
              <Grid gutterTop>
                <Row>
                  <Col sm={4} md={4} lg={4} xsOnlyGutterBottom smCollapseRight>
                    <Well noMargin>Col(lg:4)</Well>
                  </Col>
                  <Col sm={4} md={4} lg={4} xsOnlyGutterBottom smCollapseRight>
                    <Well noMargin>Col(lg:4)</Well>
                  </Col>
                  <Col sm={4} md={4} lg={4}>
                    <Well noMargin>Col(lg:4)</Well>
                  </Col>
                </Row>
              </Grid>
              <Grid gutterTop>
                <Row>
                  <Col sm={3} md={3} lg={3} xsOnlyGutterBottom smCollapseRight>
                    <Well noMargin>Col(lg:3)</Well>
                  </Col>
                  <Col sm={3} md={3} lg={3} xsOnlyGutterBottom smCollapseRight>
                    <Well noMargin>Col(lg:3)</Well>
                  </Col>
                  <Col sm={6} md={6} lg={6}>
                    <Well noMargin>Col(lg:6)</Well>
                  </Col>
                </Row>
              </Grid>
              <Grid gutterTop gutterBottom>
                <Row>
                  <Col md={2} lg={2} xsOnlyGutterBottom smOnlyGutterBottom mdCollapseRight>
                    <Well noMargin>Col(lg:2)</Well>
                  </Col>
                  <Col md={4} lg={4} xsOnlyGutterBottom smOnlyGutterBottom mdCollapseRight>
                    <Well noMargin>Col(lg:4)</Well>
                  </Col>
                  <Col md={6} lg={6}>
                    <Well noMargin>Col(lg:6)</Well>
                  </Col>
                </Row>
              </Grid>
            </div>
            <p>
              <strong>The code for the above grid:</strong>
            </p>
            <div>
              <pre>
                <code className='language-markup'>
                  {gridsnippet}
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
