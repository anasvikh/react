import React from 'react';
import {Footer, FooterTab, Button, Text} from 'native-base';
import {MODES} from "../constants";

const AppFooter = ({mode = MODES.HOME, setMode = () => {}}) => (
	<Footer>
		<FooterTab>
			<Button
				active={mode === MODES.HOME}
				onPress={
                                  () => setMode(MODES.HOME)}>
				<Text>Home</Text>
			</Button>
			<Button
				active={mode === MODES.EVENTS}
				onPress={
                                  () => setMode(MODES.EVENTS)}>
				<Text>Events</Text>
			</Button>
            <Button
				active={mode === MODES.SETTINGS}
				onPress={
                                  () => setMode(MODES.SETTINGS)}>
				<Text>Settings</Text>
			</Button>
		</FooterTab>
	</Footer>
);

export default AppFooter;