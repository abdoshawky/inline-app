import React, { Component } from 'react';
import { 
    Body, 
    Container, 
    Content, 
    Title, 
    Header,
    Text,
    Card,
    CardItem,
    Button
 } from 'native-base';

import Line from '../components/Line'; 

class Home extends Component
{
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Home</Title>
                    </Body>
                </Header>
                <Content>

                    <Line title={'ATM Line'} content={'14 person waiting'} />
                    <Line title={'Bus'} content={'25 person waiting'} />

                    <Button>
                        <Text>Scan QR code</Text>
                    </Button>

                    <Button>
                        <Text>Create new line</Text>
                    </Button>

                </Content>
            </Container>
        );
    }
}

export default Home;