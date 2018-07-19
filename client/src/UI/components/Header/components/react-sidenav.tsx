import * as React from 'react';


class SideNav extends React.Component<any> {

    private startX: any;
    private currentX: any;
    private touchingSideNav: any;
    private Nnav: any;


    constructor(props: any) {
        super(props);
        this.Nnav = React.createRef();
        this.hideNav = this.hideNav.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.getDefaultContent = this.getDefaultContent.bind(this);
        this.update = this.update.bind(this);
        this.getStyle = this.getStyle.bind(this);
    }

    public hideNav() {
        const { onHideNav } = this.props;
        if (onHideNav) {
            onHideNav()
        };
    }

    public onTouchStart(evt: any) {
        this.startX = evt.touches[0].pageX;
        this.currentX = this.startX;
        this.touchingSideNav = true;
        requestAnimationFrame(this.update);
    }

    public onTouchMove(evt: any) {
        // let { openFromRight } = this.props;
        if (!this.touchingSideNav) { return };
        this.currentX = evt.touches[0].pageX;
        // const translateX = Math[openFromRight ? 'max' : 'min'](0, this.currentX - this.startX);
    }

    public onTouchEnd(evt: any) {
        const { openFromRight } = this.props;
        if (!this.touchingSideNav) { return };
        this.touchingSideNav = false;
        const translateX = Math[openFromRight ? 'max' : 'min'](0, this.currentX - this.startX);
        this.Nnav.current.style.transform = '';
        if (!openFromRight && translateX < 0) { this.hideNav() };
        if (openFromRight && translateX > 0) { this.hideNav() };
    }

    public update() {
        const { openFromRight } = this.props;
        if (!this.touchingSideNav) { return };
        requestAnimationFrame(this.update);
        const translateX = Math[openFromRight ? 'max' : 'min'](0, this.currentX - this.startX);
        this.Nnav.current.style.transform = `translateX(${translateX}px)`;
    }



    public getDefaultContent() {
        const styles = {
        title: {
            background: '#E91E63',
            color: '#fff',
            fontWeight: 400,
            margin: 0,
            lineHeight: '82px',
            padding: 22,
        },
        li: {
            padding: 22,
            cursor: 'pointer',
            backgroundColor: '#fff',
        },
        };

        Object.assign(styles.li, this.props.itemStyle);
        Object.assign(styles.title, this.props.titleStyle);

        const handleItemHover = (e: any, enter: any) => {
            if (enter) {
                Object.assign(e.currentTarget.style, styles.li, (this.props.itemHoverStyle || {backgroundColor: '#f5f5f5'}))
            } else {
                Object.assign(e.currentTarget.style, styles.li)
            }
        };

        const test1 = (e: any) => handleItemHover(e, true);
        const test2 = (e: any) => handleItemHover(e, false);

        return (
            <div>
                <h1 style={styles.title}>{this.props.title || 'Simple SideNav'}</h1>
                <ul>
                { this.props.items
                    ? this.props.items.map((item: any, key: any) => {
                        return (
                            <li 
                                key={'item' + key} 
                                style={styles.li} 
                                onMouseOver={test1} 
                                onMouseOut={test2}
                            >
                                {item}
                            </li>
                        )
                    })
                    : <li key='item1' style={styles.li}>Item 1</li>
                }
                </ul>
            </div>
        )
    }

    public getStyle() {
        const { openFromRight, showNav } = this.props;
        
        const root: React.CSSProperties = {
            left     : 0,
            top      : 0,
            width    : '100%',
            height   : '100%',
            position : 'fixed',
            overflow : 'hidden',
            zIndex   : 8,
            pointerEvents : showNav ? 'auto' : 'none'
        }

        const nav: React.CSSProperties = {
            position   : 'relative',
            width      : '90%',
            maxWidth   : 400,
            height     : '100%',
            background : '#FFF',
            boxShadow  : '2px 0 12px rgba(0,0,0,0.4)',
            transform  : showNav ? 'none' : `translateX(${openFromRight ? 102 : -102}%)`,
            transition : `transform ${showNav ? '0.33s' : '0.13s' } cubic-bezier(0,0,0.3,1)`,
            display    : 'flex',
            willChange : 'transform',
            flexDirection: 'column',
            float: openFromRight ? 'right' : 'left',
        }

        const overlay: React.CSSProperties = {
            position : 'absolute',
            width    : '100%',
            height   : '100%',
            top      : 0,
            left     : 0,
            opacity  : showNav ? 1 : 0 ,
            background : 'rgba(0,0,0,0.4)',
            transition : 'opacity 0.3s cubic-bezier(0, 0, 0.3, 1)',
            willChange : 'opacity',
        }

        const styles = {
            root,
            nav,
            overlay,
        };

        Object.assign(styles.root, this.props.style);
        Object.assign(styles.nav, this.props.navStyle);
        return styles;
    }



    public render() {
        const styles = this.getStyle();

        const test = (e: any) => { e.target.style.transition = 'none' }
        return(
            <aside style={styles.root}>
                <div style={styles.overlay} onClick={this.hideNav}/>
                <nav style={styles.nav}
                    onTransitionEnd={test}
                    onTouchStart={this.onTouchStart}
                    onTouchMove={this.onTouchMove}
                    onTouchEnd={this.onTouchEnd}
                    ref={this.Nnav}
                >
                    {this.props.children || this.getDefaultContent()}
                </nav>
            </aside>
        )
    }
}

export default SideNav;