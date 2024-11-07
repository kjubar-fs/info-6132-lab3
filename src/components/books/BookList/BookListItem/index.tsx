/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 1:49:51 PM
 *  Last update: 7 Nov 2024, 12:37:33 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text, TouchableHighlight } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Book } from "../../../../data/firebase/config";

import { HomeStackParamList } from "../../../../screens/HomeScreen";

import styles from "./styles";

interface Props {
    book: Book,
    disableNav?: boolean,
}

export function BookListItem({ book, disableNav = false }: Props) {
    const nav = useNavigation<NativeStackNavigationProp<HomeStackParamList, "bookDetail">>();

    return (
        <TouchableHighlight
            style={styles.container}
            onPress={!disableNav ? () => {
                nav.navigate("bookDetail", { book });
            } : undefined}
            underlayColor="#F7F7F7"
        >
            <View style={styles.contentContainer}>
                <View style={styles.rowContainer}>
                    <View style={styles.flatContainer}>
                        <Text style={styles.source}>
                            {book.title}
                        </Text>
                        
                        <Text style={styles.date}>
                            {book.author}
                        </Text>
                    </View>
                </View>

                <View style={styles.disclosure}>
                    <MaterialIcons
                        name="arrow-forward-ios"
                        size={10}
                        color="#888"
                    />
                </View>
            </View>
        </TouchableHighlight>
    );
}