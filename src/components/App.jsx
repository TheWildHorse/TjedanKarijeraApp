import React, {PropTypes, Component} from 'react';

import Cookies from 'js-cookie';

import {
	Framework7App, Statusbar, View, Navbar, Pages, Page,
	Views, Link, NavCenter, NavRight,
	LoginScreen, Tab, Tabs, Toolbar
} from 'framework7-react';

import {routes} from '../routes';
import {Login} from './pages/Login';

let framework7;
let currentRoute;

export const getFramework7 = () => framework7;
export const getCurrentRoute = () => currentRoute;

const MainViews = (props, context) => {
	return (
		<Views>
			<View id="main-view" navbarThrough dynamicNavbar={true} main url="/tabs/program">
				<Navbar>
					<NavCenter sliding>FOI Tjedan Karijera</NavCenter>
					<NavRight>
						<Link onClick={props.signOut} iconFa="sign-out" ></Link>
					</NavRight>
				</Navbar>
				<Pages>
					<Page>
						<Tabs>
							<Tab id="program" />
							<Tab id="bodovi" />
							<Tab id="scan" />
						</Tabs>

						<Toolbar tabbar labels>
							<Link iconFa="calendar" href="/tabs/program" routeTabLink="#program" text="Program" />
							<Link iconFa="star" href="/tabs/bodovi" routeTabLink="#bodovi" text="Bodovi" />
							<Link iconFa="qrcode" href="/tabs/scan" routeTabLink="#scan" text="Scan" />
						</Toolbar>

					</Page>
				</Pages>
			</View>
		</Views>
	);
};

MainViews.contextTypes = {
	framework7AppContext: PropTypes.object
};

export class App extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			loginScreenOpened: false,
			user: null,
			rang: null
		};
	}
	componentDidMount() {
		getFramework7().mainView.router.loadPage('/tabs/program')
		if(Cookies.get('email') === undefined) {
			this.setState({loginScreenOpened: true});
		}
	}
	signOut() {
		Cookies.remove('email');
		Cookies.remove('password');
		this.setState({loginScreenOpened: true});
	}
	closeLogin() {
		if(Cookies.get('email') !== undefined) {
			this.setState({loginScreenOpened: false});
		}
	}
	render() {
		return (
			<Framework7App themeType="ios" routes={routes} onFramework7Init={f7 => framework7 = f7} onRouteChange={route => currentRoute = route}>
				<Statusbar />
				<MainViews user={this.state.user} rang={this.state.rang} signOut={this.signOut.bind(this)} />
				<LoginScreen id="login-screen" opened={this.state.loginScreenOpened}>
					<View>
						<Pages>
							<Login closeLogin={this.closeLogin.bind(this)}/>
						</Pages>
					</View>
				</LoginScreen>
			</Framework7App>
		);
	}
};
