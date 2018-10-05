import React from 'react';
import {Container, Content} from 'native-base';
import {StyleSheet, Text, View} from 'react-native';
import AppFooterContainer from './src/app/containers/AppFooterContainer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './src/app/reducers';
import {MODES} from './src/app/constants';

const initialState = {
	mode: MODES.ARTICLES
};

const store = createStore(reducers, initialState);

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
});

const App = () => (
	<Provider store={store}>
		<Container>
			<Content>
				<View style={styles.container}>
					<Text>
						Lorem ipsum...123 12
					</Text>
				</View>
			</Content>
			<AppFooterContainer/>
		</Container>
	</Provider>
);

export default App;

// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import events from './helper';
// import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
// import moment from 'moment'
 
// export default class App extends React.Component {
//   render() {
//     console.log(events);
//     var eventsList = JSON.parse(events);
//     console.log(eventsList);
//     return (


//         <Container>
//           <Header />
//           <Content>
//           {eventsList.events.map( (event) => {return(
//             <Card>
//         <CardItem>
//           <Left>
//             {/* <Thumbnail source={{uri: 'Image URL'}} /> */}
//             <Body>
//               <Text>{event.name}</Text>
//               <Text note>{moment(event.start).format('H:mm D.M.YY')} - {moment(event.end).format('H:mm D.M.YY')}</Text>
//               <Text>{event.category.name}</Text>
//             </Body>
//           </Left>
//         </CardItem>
//         <CardItem cardBody>
//           {/* <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/> */}
//         </CardItem>
//         <CardItem>
//           <Left>
//             <Button transparent>
//               <Icon active name="heart" />
//               <Text>избранное</Text>
//             </Button>
//           </Left>

//           <Right>
//           <Button transparent>
//               <Icon active name="add" />
//               <Text>Посетить</Text>
//             </Button>
//           </Right>
//         </CardItem>
//       </Card>
//           )}
        
//       )}
//           </Content>
//         </Container>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
