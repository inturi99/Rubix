import { Route, Router } from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import HashHistory from 'react-router/lib/HashHistory';

import Homepage from 'routes/homepage';
import Dashboard from 'routes/dashboard';

import Inbox from 'routes/inbox';
import Mail from 'routes/mail';
import Compose from 'routes/compose';

import Gallery from 'routes/gallery';
import Social from 'routes/social';

import Posts from 'routes/posts';
import SinglePost from 'routes/single-post';

import Panels from 'routes/panels';

import LineSeries from 'routes/charts/rubix/line_series';
import AreaSeries from 'routes/charts/rubix/area_series';
import BarColSeries from 'routes/charts/rubix/barcol_series';
import MixedSeries from 'routes/charts/rubix/mixed_series';
import PieDonutSeries from 'routes/charts/rubix/piedonut_series';
import ChartJSJSX from 'routes/charts/chartjs';
import C3JSJSX from 'routes/charts/c3';
import MorrisJSJSX from 'routes/charts/morris';

import TimelineJSX from 'routes/timeline';
import InteractiveTimeline from 'routes/interactive';

import CodeMirrorJSX from 'routes/codemirror';
import MapsJSX from 'routes/maps';
import Editor from 'routes/editor';

import Buttons from 'routes/ui-elements/buttons';
import Dropdowns from 'routes/ui-elements/dropdowns';
import TabsAndNavs from 'routes/ui-elements/tabs-and-navs';
import Sliders from 'routes/ui-elements/sliders';
import Knobs from 'routes/ui-elements/knobs';
import Modals from 'routes/ui-elements/modals';
import Messenger from 'routes/ui-elements/messenger';

import Controls from 'routes/forms/controls';
import XeditableJSX from 'routes/forms/x-editable';
import Wizard from 'routes/forms/wizard';

import BootstrapTables from 'routes/tables/bootstrap-tables';
import Datatables from 'routes/tables/datatables';
import TableSaw from 'routes/tables/tablesaw';

import GridJSX from 'routes/grid';
import Calendar from 'routes/calendar';
import Lists from 'routes/lists';

import Dropzone from 'routes/file-utilities/dropzone';
import Crop from 'routes/file-utilities/crop';

import Fonts from 'routes/fonts';

import Login from 'routes/login';
import Signup from 'routes/signup';
import Lock from 'routes/lock';
import Invoice from 'routes/invoice';
import Pricing from 'routes/pricing';

// documentation

import Installation from 'routes/docs/installation';
import RailsInstallation from 'routes/docs/rails_installation';
import GulpfileBasics from 'routes/docs/gulpfile/basics';
import GulpfileSass from 'routes/docs/gulpfile/sass';
import GulpfileWebfonts from 'routes/docs/gulpfile/webfonts';
import GulpfileScaffolding from 'routes/docs/gulpfile/scaffolding';
import GulpfileExternalPlugins from 'routes/docs/gulpfile/externalplugins';

import RubixJSX from 'routes/docs/rubix/jsx';
import RubixSASS from 'routes/docs/rubix/sass';

import BootstrapGrid from 'routes/docs/bootstrap/grid';
import Typography from 'routes/docs/bootstrap/typography';
import Code from 'routes/docs/bootstrap/code';
import Tables from 'routes/docs/bootstrap/tables';
import Forms from 'routes/docs/bootstrap/forms';
import Inputs from 'routes/docs/bootstrap/form_controls/inputs';
import BootstrapTextArea from 'routes/docs/bootstrap/form_controls/textarea';
import CheckRadio from 'routes/docs/bootstrap/form_controls/checkradio';
import BootstrapSelect from 'routes/docs/bootstrap/form_controls/select';
import ButtonsDocs from 'routes/docs/bootstrap/form_controls/buttons';

import DropdownsDocs from 'routes/docs/bootstrap/components/dropdowns';
import ButtonGroups from 'routes/docs/bootstrap/components/button_groups';
import InputGroups from 'routes/docs/bootstrap/components/input_groups';
import NavDocs from 'routes/docs/bootstrap/components/navs';
import NavbarDocs from 'routes/docs/bootstrap/components/navbar';
import BreadcrumbsDocs from 'routes/docs/bootstrap/components/breadcrumbs';
import PaginationDocs from 'routes/docs/bootstrap/components/pagination';
import LabelsBadgesDocs from 'routes/docs/bootstrap/components/labels_and_badges';
import JumbotronDocs from 'routes/docs/bootstrap/components/jumbotron';
import AlertDocs from 'routes/docs/bootstrap/components/alerts';
import ProgressDocs from 'routes/docs/bootstrap/components/progress';
import MediaDocs from 'routes/docs/bootstrap/components/media';
import ListgroupDocs from 'routes/docs/bootstrap/components/list_group';

import L20ndocs from 'routes/docs/l20n';

export default (withHistory, onUpdate) => {
  const history = withHistory?
                  (Modernizr.history ?
                    new BrowserHistory
                  : new HashHistory)
                : null;
  return (
    <Router history={history} onUpdate={onUpdate}>
      <Route path='/' component={Homepage} />
      <Route path='/app/dashboard' component={Dashboard} />

      <Route path='/app/mailbox/inbox' component={Inbox} />
      <Route path='/app/mailbox/mail' component={Mail} />
      <Route path='/app/mailbox/compose' component={Compose} />

      <Route path='/app/gallery' component={Gallery} />
      <Route path='/app/social' component={Social} />

      <Route path='/app/blog/posts' component={Posts} />
      <Route path='/app/blog/post' component={SinglePost} />

      <Route path='/app/panels' component={Panels} />

      <Route path='/app/charts/rubix/line' component={LineSeries} />
      <Route path='/app/charts/rubix/area' component={AreaSeries} />
      <Route path='/app/charts/rubix/barcol' component={BarColSeries} />
      <Route path='/app/charts/rubix/mixed' component={MixedSeries} />
      <Route path='/app/charts/rubix/piedonut' component={PieDonutSeries} />
      <Route path='/app/charts/chartjs' component={ChartJSJSX} />
      <Route path='/app/charts/c3js' component={C3JSJSX} />
      <Route path='/app/charts/morrisjs' component={MorrisJSJSX} />

      <Route path='/app/timeline' component={TimelineJSX} />
      <Route path='/app/interactive-timeline' component={InteractiveTimeline} />

      <Route path='/app/codemirror' component={CodeMirrorJSX} />
      <Route path='/app/maps' component={MapsJSX} />
      <Route path='/app/editor' component={Editor} />

      <Route path='/app/ui-elements/buttons' component={Buttons} />
      <Route path='/app/ui-elements/dropdowns' component={Dropdowns} />
      <Route path='/app/ui-elements/tabs-and-navs' component={TabsAndNavs} />
      <Route path='/app/ui-elements/sliders' component={Sliders} />
      <Route path='/app/ui-elements/knobs' component={Knobs} />
      <Route path='/app/ui-elements/modals' component={Modals} />
      <Route path='/app/ui-elements/messenger' component={Messenger} />

      <Route path='/app/forms/controls' component={Controls} />
      <Route path='/app/forms/x-editable' component={XeditableJSX} />
      <Route path='/app/forms/wizard' component={Wizard} />

      <Route path='/app/tables/bootstrap-tables' component={BootstrapTables} />
      <Route path='/app/tables/datatables' component={Datatables} />
      <Route path='/app/tables/tablesaw' component={TableSaw} />

      <Route path='/app/grid' component={GridJSX} />
      <Route path='/app/calendar' component={Calendar} />
      <Route path='/app/lists' component={Lists} />

      <Route path='/app/file-utilities/dropzone' component={Dropzone} />
      <Route path='/app/file-utilities/crop' component={Crop} />

      <Route path='/app/fonts' component={Fonts} />

      <Route path='/app/login' component={Login} />
      <Route path='/app/signup' component={Signup} />
      <Route path='/app/lock' component={Lock} />
      <Route path='/app/invoice' component={Invoice} />
      <Route path='/app/pricing' component={Pricing} />

      <Route path='/app/docs/installation' component={Installation} />
      <Route path='/app/docs/rails_installation' component={RailsInstallation} />
      <Route path='/app/docs/gulpfile/basics' component={GulpfileBasics} />
      <Route path='/app/docs/gulpfile/sass' component={GulpfileSass} />
      <Route path='/app/docs/gulpfile/webfonts' component={GulpfileWebfonts} />
      <Route path='/app/docs/gulpfile/scaffolding' component={GulpfileScaffolding} />
      <Route path='/app/docs/gulpfile/externalplugins' component={GulpfileExternalPlugins} />

      <Route path='/app/docs/rubix/jsx' component={RubixJSX} />
      <Route path='/app/docs/rubix/sass' component={RubixSASS} />

      <Route path='/app/docs/bootstrap/grid' component={BootstrapGrid} />
      <Route path='/app/docs/bootstrap/typography' component={Typography} />
      <Route path='/app/docs/bootstrap/code' component={Code} />
      <Route path='/app/docs/bootstrap/tables' component={Tables} />
      <Route path='/app/docs/bootstrap/forms' component={Forms} />

      <Route path='/app/docs/bootstrap/form_controls/inputs' component={Inputs} />
      <Route path='/app/docs/bootstrap/form_controls/textarea' component={BootstrapTextArea} />
      <Route path='/app/docs/bootstrap/form_controls/checkradio' component={CheckRadio} />
      <Route path='/app/docs/bootstrap/form_controls/select' component={BootstrapSelect} />
      <Route path='/app/docs/bootstrap/form_controls/buttons' component={ButtonsDocs} />

      <Route path='/app/docs/bootstrap/components/dropdowns' component={DropdownsDocs} />
      <Route path='/app/docs/bootstrap/components/button_groups' component={ButtonGroups} />
      <Route path='/app/docs/bootstrap/components/input_groups' component={InputGroups} />
      <Route path='/app/docs/bootstrap/components/navs' component={NavDocs} />
      <Route path='/app/docs/bootstrap/components/navbar' component={NavbarDocs} />
      <Route path='/app/docs/bootstrap/components/breadcrumbs' component={BreadcrumbsDocs} />
      <Route path='/app/docs/bootstrap/components/pagination' component={PaginationDocs} />
      <Route path='/app/docs/bootstrap/components/labels_and_badges' component={LabelsBadgesDocs} />
      <Route path='/app/docs/bootstrap/components/jumbotron' component={JumbotronDocs} />
      <Route path='/app/docs/bootstrap/components/alerts' component={AlertDocs} />
      <Route path='/app/docs/bootstrap/components/progress-bars' component={ProgressDocs} />
      <Route path='/app/docs/bootstrap/components/media' component={MediaDocs} />
      <Route path='/app/docs/bootstrap/components/list-group' component={ListgroupDocs} />

      <Route path='/app/docs/l20n' component={L20ndocs} />
    </Router>
  );
};
