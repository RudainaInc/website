﻿import * as React from 'react';

class SubscribeFr extends React.Component<{}, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            email: "",
            className: "",
            button: "OK"
        }

        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    public onChange(e: any) {
        const prev = {...this.state };
        prev[e.target.name] = e.target.value;

        const email = e.target.value;

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(email).toLowerCase())) {
            prev.className = "is-active";
        } else {
            prev.className = "";
        }
        this.setState(prev);
    }

    public onClick(e: any) {
        const prev = {...this.state };
        prev.className = "is-active is-done";
        this.setState(prev);
        setTimeout(() => { this.setState({ button: "Thanks! Check Your Email!" }) }, 500)
    }

    public render() {
        return (
            <div className="subscribe">
                <div className="container">
                    <div className="section-header">
                        <span className="text" >Subscribe Now french</span>
                    </div>

                    <div className="row">
                        <div className="col-md-1"/>

                        <div className="col-sm-10 col-md-10">
                            <form onSubmit={this.onClick}>
                                <input type="email" id="email" name="email" value={this.state.email} onChange={this.onChange}/>
                                <label htmlFor="email">email address</label>
                                <button className={this.state.className} type="submit">{this.state.button}</button>
                            </form>
                        </div>
                        <div className="col-md-1"/>
                    </div>
                </div>
            </div>

        )
    }

}

export default SubscribeFr;