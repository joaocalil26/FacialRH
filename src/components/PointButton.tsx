import { Pressable, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { Platform, StyleSheet } from 'react-native';


export function BaterPonto() {

    const [pointRegistered, setPointRegistered] = useState('idle');

    return (
        <Pressable>
            Bater Ponto
        </Pressable>
    );
}