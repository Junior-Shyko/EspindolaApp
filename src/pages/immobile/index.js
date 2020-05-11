import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ImmobileScreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Página de detalhe dos imóveis!</Text>
        <Button
            onPress={() => navigation.goBack()}
            title="Go to notifications"
            />
        </View>
    );
}
