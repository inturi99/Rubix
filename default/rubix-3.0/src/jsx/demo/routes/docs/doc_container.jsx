class DocContainer extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          {this.props.children}
        </Row>
      </Grid>
    );
  }
}

class DocUnit extends React.Component {
  render() {
    var docStyle = this.props.docStyle || 'bg-darkgreen45 fg-white';
    return (
      <Col xs={12}>
        <PanelContainer controlStyles={docStyle}>
          <Panel>
            <PanelHeader className={docStyle}>
              <Grid>
                <Row>
                  <Col xs={12}>
                    <h3>{this.props.name}</h3>
                  </Col>
                </Row>
              </Grid>
            </PanelHeader>
            <PanelBody>
              <Grid>
                <Row>
                  <Col xs={12}>
                    {this.props.children}
                  </Col>
                </Row>
              </Grid>
            </PanelBody>
          </Panel>
        </PanelContainer>
      </Col>
    );
  }
}

module.exports.DocUnit = DocUnit;
module.exports.DocContainer = DocContainer;
