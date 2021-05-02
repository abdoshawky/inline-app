import React, { Component } from 'react';
import { 
    Container, 
    Content, 
    Form, 
    Item, 
    Label, 
    Input,
    Button,
    Text,
    Header,
    Body,
    Title
 } from 'native-base';


class Register extends Component
{
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Register</Title>
                    </Body>
                </Header>
                <Content>
                    <Form>
                        <Item fixedLabel>
                            <Label>Name</Label>
                            <Input />
                        </Item>

                        <Item fixedLabel>
                            <Label>Email</Label>
                            <Input />
                        </Item>

                        <Item fixedLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>

                        <Button block info>
                            <Text>Register</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

export default Register;