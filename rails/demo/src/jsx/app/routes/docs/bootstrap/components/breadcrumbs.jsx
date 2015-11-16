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
          <DocUnit name='Bootstrap: Breadcrumbs'>
            <h4 className='fg-black50'>Basic Example</h4>
            <p>
              {"Indicate the current page's location within a navigational hierarchy."}
            </p>
            <Well>
              <Breadcrumb>
                <BLink href='#' active>Home </BLink>
              </Breadcrumb>
              <Breadcrumb>
                <BLink href='#'>Home </BLink>
                <BLink href='#' active>Library </BLink>
              </Breadcrumb>
              <Breadcrumb>
                <BLink href='#'>Home </BLink>
                <BLink href='#'>Library </BLink>
                <BLink href='#' active>Data</BLink>
              </Breadcrumb>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Breadcrumb>\n"}
                  {"  <BLink href='#' active>Home </BLink>\n"}
                  {"</Breadcrumb>\n"}
                  {"<Breadcrumb>\n"}
                  {"  <BLink href='#'>Home </BLink>\n"}
                  {"  <BLink href='#' active>Library </BLink>\n"}
                  {"</Breadcrumb>\n"}
                  {"<Breadcrumb>\n"}
                  {"  <BLink href='#'>Home </BLink>\n"}
                  {"  <BLink href='#'>Library </BLink>\n"}
                  {"  <BLink href='#' active>Data</BLink>\n"}
                  {"</Breadcrumb>\n"}
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
