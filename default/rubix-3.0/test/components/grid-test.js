'use strict';

var assert = require('assert');

if(!global.requireOnlyOnce) {
  global.React = require('react/addons');
  require('../../public/js/common/rubix-bootstrap/rubix-bootstrap.js');

  global.requireOnlyOnce = true;
}

var render = (component) => {
  return React.addons.TestUtils.renderIntoDocument(component).getDOMNode();
};

describe('Grid', () => {
  describe('defaults', () => {
    var grid;

    beforeEach(() => {
      grid = render(<Grid />);
    });

    it('should be able to accept styles', () => {
      grid = render(<Grid style={{marginTop: 20}} />);
      assert(grid.style._values.hasOwnProperty('z-index'));
      assert(grid.style._values.hasOwnProperty('margin-top')
          && grid.style._values['margin-top'] === '20px');
    });

    it('should have zIndex set', () => {
      assert(grid.style._values.hasOwnProperty('z-index'));
    });

    it('should be able to accept classes', () => {
      grid = render(<Grid className='extra-class-name' />);
      assert(grid.className.search('rubix-grid') !== -1);
      assert(grid.className.search('extra-class-name') !== -1);
    });

    it('should be able to accept children', () => {
      assert(grid.childNodes.length === 0); // default grid
      grid = render(<Grid><div>child node</div></Grid>); // added 1 child node
      assert(grid.className.search('rubix-grid') !== -1);
      assert(grid.childNodes.length === 1);
    });

    it('should have class rubix-grid by default', () => {
      assert(grid.className.search('rubix-grid') !== -1);
    });

    it('should have class container-fluid by default', () => {
      assert(grid.className.search('container-fluid') !== -1);
    });
  });

  describe('optional', () => {
    it('should have class container when fixed prop is enabled', () => {
      var grid = render(<Grid fixed />);
      var classes = grid.className;
      var hasRubixGridClass = classes.search('rubix-grid') !== -1;
      var hasFixedClass = classes.search('container') !== -1;
      var hasFluidClass = classes.search('container-fluid') !== -1;
      assert(hasRubixGridClass && hasFixedClass && !hasFluidClass);
    });

    it('should have class grid-gutter when gutter prop is enabled', () => {
      var grid = render(<Grid gutter />);
      var classes = grid.className;
      var hasRubixGridClass = classes.search('rubix-grid') !== -1;
      var hasGutterClass = classes.search('grid-gutter') !== -1;
      assert(hasRubixGridClass && hasGutterClass);
    });

    it('should have class grid-collapse when collapse prop is enabled', () => {
      var grid = render(<Grid collapse />);
      var classes = grid.className;
      var hasRubixGridClass = classes.search('rubix-grid') !== -1;
      var hasCollapseClass = classes.search('grid-collapse') !== -1;
      assert(hasRubixGridClass && hasCollapseClass);
    });

    describe('gutter directions', () => {
      var renderGutter = (prop) => {
        var props = {};
        props['gutter'+ prop.replace(/^./, (match) => { return match.toUpperCase(); })] = true;
        var grid = render(<Grid {...props} />);
        var classes = grid.className;
        assert(classes.search('grid-gutter-'+prop) !== -1);
      };

      it('top', () => {
        renderGutter('top');    // <Grid gutterTop />
      });

      it('left', () => {
        renderGutter('left');   // <Grid gutterLeft />
      });

      it('right', () => {
        renderGutter('right');  // <Grid gutterRight />
      });

      it('bottom', () => {
        renderGutter('bottom'); // <Grid gutterBottom />
      });
    });
  });
});
