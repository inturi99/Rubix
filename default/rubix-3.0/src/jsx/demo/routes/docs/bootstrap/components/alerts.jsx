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
          <DocUnit name='Bootstrap: Alerts'>
            <h4 className='fg-black50'>Basic Example</h4>
            <p>
              {"Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."}
            </p>
            <Well>
              <Alert success>
                <strong>Well done!</strong> You successfully read this important alert message.
              </Alert>
              <Alert info>
                <strong>Heads up!</strong>{" This alert needs your attention, but it's not super important."}
              </Alert>
              <Alert warning>
                <strong>Warning!</strong>{" Better check yourself, you're not looking too good."}
              </Alert>
              <Alert danger collapseBottom>
                <strong>Oh snap!</strong> Change a few things up and try submitting again.
              </Alert>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Alert success>\n"}
                  {"  <strong>Well done!</strong> You successfully read this important alert message.\n"}
                  {"</Alert>\n"}
                  {"<Alert info>\n"}
                  {"  <strong>Heads up!</strong>{\" This alert needs your attention, but it's not super important.\"}\n"}
                  {"</Alert>\n"}
                  {"<Alert warning>\n"}
                  {"  <strong>Warning!</strong>{\" Better check yourself, you're not looking too good.\"}\n"}
                  {"</Alert>\n"}
                  {"<Alert danger collapseBottom>\n"}
                  {"  <strong>Oh snap!</strong>Change a few things up and try submitting again.\n"}
                  {"</Alert>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Dismissible alerts</h4>
            <p>
              {"Build on any alert by adding an optional "}<code>dismissible</code>{" property."}
            </p>
            <Well>
              <Alert warning dismissible collapseBottom>
                <strong>Warning!</strong>{" Better check yourself, you're not looking too good."}
              </Alert>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Alert warning dismissible collapseBottom>\n"}
                  {"  <strong>Warning!</strong>{\" Better check yourself, you're not looking too good.\"}\n"}
                  {"</Alert>\n"}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'>Links in Alerts</h4>
            <p>
              {"Use the "}<code>AlertLink</code>{" component to quickly provide matching colored links within any alert."}
            </p>
            <Well>
              <Alert success>
                <strong>Well done!</strong> You successfully read <AlertLink href='#'>this important alert message</AlertLink>.
              </Alert>
              <Alert info>
                <strong>Heads up!</strong> This <AlertLink href='#'>alert needs your attention</AlertLink>{", but it's not super important."}
              </Alert>
              <Alert warning>
                <strong>Warning!</strong>{" Better check yourself, you're "}<AlertLink href='#'>not looking too good.</AlertLink>
              </Alert>
              <Alert danger collapseBottom>
                <strong>Oh snap!</strong> <AlertLink href='#'>Change a few things up</AlertLink> and try submitting again.
              </Alert>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Alert success>\n"}
                  {"  <strong>Well done!</strong> You successfully read <AlertLink href='#'>this important alert message</AlertLink>.\n"}
                  {"</Alert>\n"}
                  {"<Alert info>\n"}
                  {"  <strong>Heads up!</strong> This <AlertLink href='#'>alert needs your attention</AlertLink>{\", but it's not super important.\"}"}
                  {"</Alert>\n"}
                  {"<Alert warning>\n"}
                  {"  <strong>Warning!</strong>{\" Better check yourself, you're \"}<AlertLink href='#'>not looking too good.</AlertLink>\n"}
                  {"</Alert>\n"}
                  {"<Alert danger collapseBottom>\n"}
                  {"  <strong>Oh snap!</strong> <AlertLink href='#'>Change a few things up</AlertLink> and try submitting again.\n"}
                  {"</Alert>\n"}
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
