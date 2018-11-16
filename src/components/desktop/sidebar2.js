import React, { Component } from 'react';
//import Link from 'gatsby-link';
import { StyleSheet, css } from 'aphrodite';




class Sidebar2 extends Component {
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
            position: 'fixed',
            top: '0px',
            left: '128px',
            bottom: '0px',
            width: '128px',
            display: 'flex',
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
            border: '1px solid rgba(255, 255, 255, 0.9)',
        },
        links: {
            margin: '24px 0 24px 0',
        },
        link: {
            textAlign: 'center',
            fontSize: '12px',
            padding: '6px 0 6px 0',
            fontWeight: '300'
        },
        sepone: {
            flexGrow: '0',
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
            fontSize: '16px',
            height: '32px',
            width: '32px',
            margin: '0 0 12px 0',
            color: 'rgba(255, 255, 255, 0.9)',
        },
        active: {
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '64px'
        }
    });
    
    return (
        <div className={css(styles.cont)}>
            <div className={css(styles.initials)}>MN</div>
            <div className={css(styles.sepone)} />
            <div className={css(styles.links)}>
                <div className={css(styles.icon, styles.active)}><i class="far fa-smile-wink"></i></div>
                <div className={css(styles.icon)}><i class="fas fa-briefcase"></i></div>
                <div className={css(styles.icon)}><i class="fas fa-rss"></i></div>
            </div>
            <div className={css(styles.septwo)} />
            <div className={css(styles.social)}>
                <div className={css(styles.icon)}><i class="fab fa-behance"></i></div>
                <div className={css(styles.icon)}><i class="fab fa-dribbble"></i></div>
                <div className={css(styles.icon)}><i class="far fa-envelope"></i></div>
            </div>
        </div>
    );
    }
}

export default Sidebar2;