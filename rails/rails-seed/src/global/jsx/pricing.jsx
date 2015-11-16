import classNames from 'classnames';

var PricingTableContainer = React.createClass({
  render: function() {
    var props = {
      ...this.props,
      className: classNames('container-sm-height', this.props.className)
    };

    return (
      <Grid {...props}>
        <Row className='row-sm-height'>
          {this.props.children}
        </Row>
      </Grid>
    );
  }
});

var PricingTable = React.createClass({
  propTypes: {
    preferred: React.PropTypes.bool
  },
  render: function() {
    var classes = classNames({
      'col-sm-height': true,
      'pricing-table': true,
      'preferred': this.props.preferred
    });

    var props = {
      xs: 12,
      ...this.props,
      className: classes.trim()
    };

    return (
      <Col {...props}>
        {this.props.children}
      </Col>
    );
  }
});

var PricingTableHeader = React.createClass({
  render: function() {
    var props = {
      ...this.props,
      className: classNames('pricing-table-header text-center text-uppercase', this.props.className)
    };

    return (
      <div {...props}>
        <h3>{this.props.children}</h3>
      </div>
    );
  }
});

var PricingTablePrice = React.createClass({
  render: function() {
    var props = {
      ...this.props,
      className: classNames('pricing-table-price text-center text-uppercase', this.props.className)
    };

    return (
      <div {...props}>
        <h2>{this.props.children}</h2>
      </div>
    );
  }
});

var PricingTableBody = React.createClass({
  render: function() {
    var props = {
      ...this.props,
      className: classNames('pricing-table-body text-center', this.props.className)
    };

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

var PricingFeature = React.createClass({
  render: function() {
    var props = {
      ...this.props,
      className: classNames('pricing-table-feature text-center', this.props.className)
    };

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});


var PricingButtonContainer = React.createClass({
  render: function() {
    var props = {
      ...this.props,
      className: classNames('pricing-btn-container text-center', this.props.className)
    };

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

module.exports.PricingTable = PricingTable;
module.exports.PricingFeature = PricingFeature;
module.exports.PricingTableBody = PricingTableBody;
module.exports.PricingTablePrice = PricingTablePrice;
module.exports.PricingTableHeader = PricingTableHeader;
module.exports.PricingTableContainer = PricingTableContainer;
module.exports.PricingButtonContainer = PricingButtonContainer;
