import { Link } from 'react-router';

import classNames from 'classnames';
import SidebarMixin from 'global/jsx/sidebar_component';

import Header from 'common/header';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

import Doc from 'routes/docs/doc_container';
var DocUnit = Doc.DocUnit;
var DocContainer = Doc.DocContainer;

import textareadomnode from '../snippets/textareadomnode.txt';
import textareagetvalue from '../snippets/textareagetvalue.txt';

class Body extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <Container id='body'>
        <DocContainer>
          <DocUnit name='Bootstrap: Textarea'>
            <p>
              {"Form control which supports multiple lines of text. Change "}<code>rows</code>{" attribute as necessary."}
            </p>
            <Well>
              <Textarea rows='3' />
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Textarea rows='3' />\n"}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='Bootstrap: Rubix Enhancements [API]' docStyle='bg-red fg-white'>
            <h4 className='fg-black50'><code>node</code></h4>
            <p>
              {"Access the raw DOM Node. Example:"}
            </p>
            <div>
              <pre>
                <code className='language-javascript'>
                  {textareadomnode}
                </code>
              </pre>
            </div>
            <hr/>
            <h4 className='fg-black50'><code>value</code></h4>
            <p>
              {"Convenience function to get the value of the raw input dom element. Example:"}
            </p>
            <div>
              <pre>
                <code className='language-javascript'>
                  {textareagetvalue}
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
