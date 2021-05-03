import React, { Component } from 'react';
import { 
    Body, 
    Container, 
    Content, 
    Title, 
    Header,
    Text,
    Button,
    Form,
    Item,
    Label,
    Input
 } from 'native-base';


class CreateLine extends Component
{
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Create Line</Title>
                    </Body>
                </Header>
                <Content>

                    <Form>
                        <Item fixedLabel>
                            <Label>Title</Label>
                            <Input />
                        </Item>

                        <Button block info>
                            <Text>Create</Text>
                        </Button>
                    </Form>

                </Content>
            </Container>
        );
    }
}

export default CreateLine;