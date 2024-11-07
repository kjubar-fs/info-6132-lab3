/*
 *  Author: Kaleb Jubar
 *  Created: 29 Oct 2024, 1:49:51 PM
 *  Last update: 7 Nov 2024, 1:07:55 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { View, Text, TouchableHighlight } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Book } from "../../../../data/firebase/config";

import { HomeStackParamList } from "../../../../screens/HomeScreen";
import { Card } from "../../../common/Card";
import { CheckoutButton } from "../../CheckoutButton";

import styles from "./styles";

interface Props {
    book: Book,
    disableNav?: boolean,
    showCheckOut?: boolean,
}

export function BookListItem({ book, disableNav = false, showCheckOut = false }: Props) {
    const nav = useNavigation<NativeStackNavigationProp<HomeStackParamList, "bookDetail">>();

    let actionItem = <></>;
    if (!disableNav || showCheckOut) {
        actionItem = (
            <View style={styles.actionItems}>
                {showCheckOut &&
                <CheckoutButton book={book} />}
                {!disableNav &&
                <MaterialIcons
                    name="arrow-forward-ios"
                    size={10}
                    color="#888"
                />}
            </View>
        );
    }

    return (
        <Card style={styles.card}>
            <TouchableHighlight
                style={styles.container}
                onPress={!disableNav ? () => {
                    nav.navigate("bookDetail", { book });
                } : undefined}
                underlayColor="#F7F7F7"
            >
                <>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>
                        {book.title}
                    </Text>
                    
                    <Text style={styles.author}>
                        {book.author}
                    </Text>
                </View>

                {actionItem}
                </>
            </TouchableHighlight>
        </Card>
    );
}