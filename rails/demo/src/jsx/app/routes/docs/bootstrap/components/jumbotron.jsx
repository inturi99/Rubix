import { Link } from 'react-router';

import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

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
          <DocUnit name='Bootstrap: Jumbotron'>
            <p>A lightweight, flexible component that can optionally extend the entire viewport to showcase key content on your site.</p>
            <Well className='bg-white'>
              <Jumbotron>
                <h1 className='fg-black50'>Hello, world</h1>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                </p>
                <p>
                  <Button lg bsStyle='primary'>Learn more</Button>
                </p>
              </Jumbotron>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Jumbotron>\n"}
                  {"  <h1 className='fg-black50'>Hello, world</h1>\n"}
                  {"  <p>\n"}
                  {"    This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.\n"}
                  {"  </p>\n"}
                  {"  <p>\n"}
                  {"    <Button lg bsStyle='primary'>Learn more</Button>\n"}
                  {"  </p>\n"}
                  {"</Jumbotron>\n"}
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
