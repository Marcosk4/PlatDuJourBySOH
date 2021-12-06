import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

export default function Call() {
    return (
        <View style={styles.callScreen}>
            <Pressable>
                <Text style={styles.textCall}> +961 3 653994 </Text>
            </Pressable>
            <Pressable>
                <Text style={styles.textCall}> +961 1 292056 </Text>
            </Pressable>

        </View>
    )
}

