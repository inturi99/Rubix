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
          <DocUnit name='Bootstrap: Selects'>
            <p>
              {"Use the default option, or add "}<code>multiple</code>{" to show multiple options at once."}
            </p>
            <Well>
              <Select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Select>
              <br/>
              <Select multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Select>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Select>\n"}
                  {"  <option>1</option>\n"}
                  {"  <option>2</option>\n"}
                  {"  <option>3</option>\n"}
                  {"  <option>4</option>\n"}
                  {"  <option>5</option>\n"}
                  {"</Select>\n"}
                  {"<Select multiple>\n"}
                  {"  <option>1</option>\n"}
                  {"  <option>2</option>\n"}
                  {"  <option>3</option>\n"}
                  {"  <option>4</option>\n"}
                  {"  <option>5</option>\n"}
                  {"</Select>"}
                </code>
              </pre>
            </div>
          </DocUnit>
          <DocUnit name='Bootstrap: Control Sizing'>
            <p>
              {"Set heights using properties like: "}<code>{"lg"}</code>{" and "}<code>{"sm"}</code>
            </p>
            <Well>
              <Select sm>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Select>
              <br/>
              <Select lg>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Select>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Select sm>\n"}
                  {"  <option>1</option>\n"}
                  {"  <option>2</option>\n"}
                  {"  <option>3</option>\n"}
                  {"  <option>4</option>\n"}
                  {"  <option>5</option>\n"}
                  {"</Select>\n"}
                  {"<Select lg>\n"}
                  {"  <option>1</option>\n"}
                  {"  <option>2</option>\n"}
                  {"  <option>3</option>\n"}
                  {"  <option>4</option>\n"}
                  {"  <option>5</option>\n"}
                  {"</Select>"}
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
