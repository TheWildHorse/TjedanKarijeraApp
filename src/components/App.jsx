import React, {PropTypes} from 'react';

import {
	Framework7App, Statusbar, View, Navbar, Pages, Page,
	List, ListItem, Views, Link, NavCenter, NavRight,
	LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput, Tab, Tabs, Toolbar
} from 'framework7-react';

import {routes} from '../routes';

const MainViews = (props, context) => {
	return (
		<Views>
			<View id="main-view" navbarThrough dynamicNavbar={true} main url="/tabs/program">
				{/* Navbar */}
				{context.framework7AppContext.theme.ios ? (
					<Navbar>
						<NavCenter sliding>Tjedan Karijera</NavCenter>
						<NavRight>
							<Link iconFa="sign-out" openPanel="right"></Link>
						</NavRight>
					</Navbar>
				) : null}
				{/* Pages */}
				<Pages>
					<Page>
						<Tabs>
							<Tab id="program" />
							<Tab id="bodovi" />
						</Tabs>

						<Toolbar tabbar labels>
							<Link iconFa="calendar" href="/tabs/program" routeTabLink="#program" text="Program" />
							<Link iconFa="star" href="/tabs/bodovi" routeTabLink="#bodovi" text="Bodovi" />
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

const AppLoginScreen = () => (
	<LoginScreen id="login-screen">
		<View>
			<Pages>
				<Page loginScreen>
					<LoginScreenTitle>Login</LoginScreenTitle>
					<List form>
						<ListItem>
							<FormLabel>Username</FormLabel>
							<FormInput name="username" placeholder="Username" type="text" />
						</ListItem>
						<ListItem>
							<FormLabel>Password</FormLabel>
							<FormInput name="password" type="password" placeholder="Password" />
						</ListItem>
					</List>
					<List>
						<ListButton title="Sign In" closeLoginScreen />
						<ListLabel>
							<p>Click Sign In to close Login Screen</p>
						</ListLabel>
					</List>
				</Page>
			</Pages>
		</View>
	</LoginScreen>
);

export const App = () => (	
	//Change themeType to "material" to use the Material theme
	<Framework7App themeType="ios" routes={routes}>		
		<Statusbar />
		<MainViews />
		<AppLoginScreen />
	</Framework7App>  
);
