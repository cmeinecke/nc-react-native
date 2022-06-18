import { useState } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-elements';
import { PARTNERS } from '../shared/partners';

const AboutScreen = () => {
    const [partners, setPartners] = useState(PARTNERS);

    const Mission = () => {
        return (
            <Card>
                <Card.Title>Our Mission</Card.Title>
                <Card.Divider />
                    <Text
                        style={{ margin: 10 }}>
                            We present a curated database of the best campsites in the vast woods
                            and backcountry of the World Wide Web Wilderness.
                    </Text>
            </Card>
        )
    };

    return ( 
        <ScrollView>
            <Mission />
            <Card>
                <Card.Title>Community Partners</Card.Title>
                <Card.Divider />
                { partners.map((partner) => {
                    return (
                        <ListItem key={partner.id}>
                            <Avatar rounded source={partner.image} />
                            <ListItem.Content>
                                <ListItem.Title>{partner.name}</ListItem.Title>
                                <ListItem.Subtitle>{partner.description}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    )
                })}
            </Card>
        </ScrollView>
    )
};

export default AboutScreen;