import React from 'react';
import { Card, CardItem, Body, Text } from 'native-base';

function Line({title, content}){
    return (
        <Card>
            <CardItem header bordered>
                <Text>{title}</Text>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>{content}</Text>
                </Body>
            </CardItem>
        </Card>
    );
}

export default Line;