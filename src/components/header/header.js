import React, { Component } from 'react'
import { Link } from 'gatsby'

import compStyles from "./header.module.css"

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {sticky: false};
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 50 && !this.state.sticky) {
      this.setState({
        sticky: true
      })
    } else if (window.pageYOffset < 50 && this.state.sticky) {
      this.setState({
        sticky: false
      })
    }
  }

  render() {
    return (
      <div className={compStyles.cont}>
      <div className={this.state.sticky ? compStyles.hold : compStyles.scroll}>
        <div className={compStyles.wrap}>
            <Link to="/" >
                <div className={compStyles.logo}>
                    MN
                </div>
            </Link>
            <ul className={compStyles.links}>
            <li>
                <Link 
                to="/" 
                activeStyle={{borderBottom: '1px solid rgb(204, 204, 204)'}}
                >
                Home
                </Link>
            </li>
            <li>
                <Link
                to="/about"
                activeStyle={{borderBottom: '1px solid rgb(204, 204, 204)'}}
                >
                About
                </Link>
            </li>
            <li >
                <Link
                to="/portfolio"
                activeStyle={{borderBottom: '1px solid rgb(204, 204, 204)',}}
                >
                Portfolio
                </Link>
            </li>
            <li >
                <Link
                to="/contact"
                activeStyle={{borderBottom: '1px solid rgb(204, 204, 204)',}}
                >
                Contact
                </Link>
            </li>
            </ul>
        </div>
      </div>
    </div>
    );
  }
}

export default Header;
