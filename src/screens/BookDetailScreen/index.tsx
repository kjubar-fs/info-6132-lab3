/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 11:00:26 AM
 *  Last update: 7 Nov 2024, 9:39:51 AM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Image, ScrollView, Text, View } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { HomeStackParamList } from "../HomeScreen";

import styles from "./styles";

// generate prop types for the route object for this screen
type Props = NativeStackScreenProps<HomeStackParamList, "bookDetail">;

export function BookDetailScreen({ route }: Props): JSX.Element {
    const book = route.params.book;
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.innerContainer}>
            <View style={styles.detailContainer}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
            </View>
            <Image src={book.coverURL} style={styles.coverImage} />
            <Text style={styles.description}>{book.description.replaceAll("\\n", "\n")}</Text>
        </ScrollView>
    );
}