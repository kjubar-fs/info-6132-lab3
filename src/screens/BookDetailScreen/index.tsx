/*
 *  Author: Kaleb Jubar
 *  Created: 6 Nov 2024, 11:00:26 AM
 *  Last update: 7 Nov 2024, 12:46:49 PM
 *  Copyright (c) 2024 Kaleb Jubar
 */
import { Image, ScrollView, Text, View } from "react-native";

import { useMemo } from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { HomeStackParamList } from "../HomeScreen";

import styles from "./styles";
import { CheckoutButton } from "../../components/books/CheckoutButton";

// generate prop types for the route object for this screen
type Props = NativeStackScreenProps<HomeStackParamList, "bookDetail">;

export function BookDetailScreen({ route }: Props): JSX.Element {
    const book = route.params.book;

    /**
     * Function to generate the rating display for this book.
     * @returns a View with the generated rating stars and text
     */
    const generateRatingStars = (): JSX.Element => {
        // number filled is the whole number for the rating
        let numFilled = Math.floor(book.rating);
        // number of empty is 5 minus rating (rounded up)
        let numEmpty = 5 - Math.ceil(book.rating);
        // get the decimal portion to determine if we have a half star
        let decimal = Math.round((book.rating % 1) * 100) / 100
        let showHalfStar = false;
        // we'll show a half star if the decimal portion is between 0.35 and 0.85
        // less than 0.35 is an empty star
        // more than 0.85 is a full star
        if (decimal < 0.35) {
            numEmpty++;
        } else if (decimal >= 0.35 && decimal <= 0.85) {
            showHalfStar = true;
        } else {
            numFilled++;
        }

        return (
            <View style={styles.ratingContainer}>
                <View style={styles.stars}>
                    {/*
                        generate arrays of star icons to render
                        adapted from this answer: https://stackoverflow.com/a/69878469
                    */}
                    {Array<JSX.Element>(numFilled).fill(<></>).map((_, ix) => <MaterialIcons key={ix} name="star" size={32} color="gold" />)}
                    {showHalfStar &&
                        <MaterialIcons name="star-half" size={32} color="gold" />}
                    {Array<JSX.Element>(numEmpty).fill(<></>).map((_, ix) => <MaterialIcons key={ix} name="star-outline" size={32} color="gold" />)}
                </View>
                <Text style={styles.rating}>{book.rating}</Text>
            </View>
        );
    };
    // calculate stars in a memo to optimize re-renders
    const stars = useMemo<JSX.Element>(generateRatingStars, [book.rating]);

    return (
        <>
        <ScrollView style={styles.container} contentContainerStyle={styles.innerContainer}>
            <View style={styles.detailContainer}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{book.author}</Text>
            </View>
            <Image src={book.coverURL} style={styles.coverImage} />
            <View style={styles.descriptionContainer}>
                {stars}
                <Text style={styles.description}>{book.description.replaceAll("\\n", "\n")}</Text>
            </View>
        </ScrollView>
        <CheckoutButton book={book} />
        </>
    );
}