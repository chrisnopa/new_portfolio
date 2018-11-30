import React, { Component } from 'react'
import Link from 'gatsby-link'
import { StyleSheet, css } from 'aphrodite'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            showModal: !prevState.showModal
        }));
    }

    render() {
    const styles = StyleSheet.create({
        cont: {
            display: 'none',
            '@media (min-width: 961px)': {
                display: 'flex',
            },
            zIndex: '99',
            position: 'fixed',
            top: '0px',
            bottom: '0px',
            width: '128px',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: 'rgba(26, 26, 26, 0.8)',
            color: 'rgba(255, 255, 255, 0.9)',
        },
        initials: {
            display: 'flex',
            justifyContent: 'center',
            flexGrow: '0',
            alignItems: 'center',
            textAlign: 'center',
            width: '64px',
            height: '64px',
            margin: '24px 0 0 0',
            backgroundColor: 'rgba(26, 26, 26, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: 'rgba(255, 255, 255, 0.9)',
            textDecoration: 'none',
        },
        links: {
            margin: '24px 0 24px 0',
        },
        link: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '72px',
            height: '72px',
            textAlign: 'center',
            fontSize: '10px',
            fontWeight: '300',
            color: '#FFF',
            textDecoration: 'none',
            transform: 'rotate(-90deg)',
        },
        sepone: {
            flexGrow: '1',
            width: '1px',
            height: '24px',
            margin: '24px 0 0 0',
            backgroundColor: 'rgba(255, 255, 255, 0.3)'
        },
        septwo: {
            flexGrow: '1',
            width: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.3)'
        },
        social: {
            margin: '24px 0 24px 0',
        },
        icon: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            fontSize: '12px',
            height: '32px',
            width: '32px',
            margin: '0 0 12px 0',
            color: 'rgba(255, 255, 255, 0.9)',
        }
    });
    
    return (
        <div className={css(styles.cont)}>
            <Link to="/" ><div className={css(styles.initials)}>MN</div></Link>
            <div className={css(styles.sepone)} />
            <div className={css(styles.links)}>
                <Link to="/about" ><div className={css(styles.link)}>ABOUT ME</div></Link>
                <Link to="/work" ><div className={css(styles.link)}>WORK</div></Link>
                <Link to="/blog" ><div className={css(styles.link)}>BLOG</div></Link>
            </div>
            <div className={css(styles.septwo)} />
            <div className={css(styles.social)}>
                <div className={css(styles.icon)}><i className="fab fa-behance"></i></div>
                <div className={css(styles.icon)}><i className="fab fa-dribbble"></i></div>
                <div className={css(styles.icon)}><i className="far fa-envelope"></i></div>
            </div>
        </div>
    );
    }
}

export default Sidebar;