import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }
  toggleCollapse(filter) {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed,selected  : filter});
  }
  isActive(value){
    return 'btn '+((value===this.state.selected) ?'active':'default');
  }
  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    // const featuredClass = location.pathname === "/" ? "active" : "";
    // const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    // const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <div>
      <nav className="navbar navbar-default navbar-fixed-top upperNav" role="navigation">
          <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">FOOD MENU</a>
              </div>
          </div>
      </nav>
      <nav className="navbar navbar-default lowerNav" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li activeClassName="active" onlyActiveOnIndex={true}>
                <IndexLink to="/" className={this.isActive('chicken')} onClick={this.toggleCollapse.bind(this,'chicken')}>Signature Chicken sandwiches</IndexLink>
              </li>
              <li activeClassName="active">
                <Link to="archives" className={this.isActive('specialty')} onClick={this.toggleCollapse.bind(this,'specialty')}>Signature specialty sandwiches</Link>
              </li>
              <li activeClassName="active">
                <Link to="settings" className={this.isActive('burger')} onClick={this.toggleCollapse.bind(this,'burger')}>Signature Burger</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    );
  }
}
