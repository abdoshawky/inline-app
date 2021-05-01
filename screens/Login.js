import React, { Component } from 'react';
import { 
    Container, 
    Content, 
    Form, 
    Item, 
    Label, 
    Input,
    Button,
    Text
 } from 'native-base';


class Login extends Component
{
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item fixedLabel>
                            <Label>Email</Label>
                            <Input />
                        </Item>
                        <Item fixedLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>

                        <Button block info>
                            <Text>Login</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

export default Login;