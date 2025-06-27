import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";

import appStore from "../../utils/appStore";

const MOCK_MENU_DATA = {
    statusCode: 0,
    data: {
        statusMessage: "done successfully",
        cards: [
            {
                card: {
                    card: {
                        "@type":
                            "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
                        text: "Dev International",
                        headerStyling: {
                            textColor: "text_Highest_Emphasis",
                            textVariant: "header_H3_Black",
                        },
                    },
                },
            },
            {
                card: {
                    card: {
                        "@type":
                            "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
                        tabs: [
                            {
                                id: "Order Online",
                                title: "Order Online",
                            },
                        ],
                    },
                },
            },
            {
                card: {
                    card: {
                        "@type":
                            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        info: {
                            id: "151656",
                            name: "Dev International",
                            city: "Chhindwara",
                            slugs: {
                                restaurant:
                                    "dev-international-khajri-road-bararipura",
                                city: "chhindwara",
                            },
                            uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
                            cloudinaryImageId: "enj3srsnhbltbom2ovvh",
                            locality: "khajri road",
                            areaName: "Mohan Nagar",
                            costForTwo: "10000",
                            costForTwoMessage: "₹100 for two",
                            cuisines: ["North Indian", "Chinese"],
                            avgRating: 4.3,
                            feeDetails: {
                                restaurantId: "151656",
                                fees: [{}],
                            },
                            parentId: "71556",
                            avgRatingString: "4.3",
                            totalRatingsString: "530 ratings",
                            sla: {
                                restaurantId: "151656",
                                deliveryTime: 53,
                                minDeliveryTime: 50,
                                maxDeliveryTime: 55,
                                lastMileTravel: 13.6,
                                serviceability: "SERVICEABLE",
                                stressFactor: 1,
                                rainMode: "RAIN_MODE_NONE",
                                longDistance:
                                    "LONG_DISTANCE_IT_IS_LONG_DISTANCE",
                                zoneId: 2218,
                                slaString: "50-55 MINS",
                                lastMileTravelString: "13.6 km",
                                iconType: "ICON_TYPE_EMPTY",
                            },
                            availability: {
                                nextCloseTime: "2025-06-27 22:30:00",
                                visibility: true,
                                opened: true,
                                restaurantClosedMeta: {},
                            },
                            aggregatedDiscountInfo: {
                                header: "Flat ₹125 off",
                                shortDescriptionList: [
                                    {
                                        meta: "Flat ₹125 off on orders above ₹349",
                                        discountType: "Flat",
                                        operationType: "RESTAURANT",
                                    },
                                    {
                                        meta: "FLAT ₹150 off | Use SAVERDEAL",
                                        discountType: "Flat",
                                        operationType: "RESTAURANT",
                                    },
                                ],
                                descriptionList: [
                                    {
                                        meta: "Flat ₹125 off on orders above ₹349| Use code SWIGGYWEEKENDS",
                                        discountType: "Flat",
                                        operationType: "RESTAURANT",
                                    },
                                    {
                                        meta: "FLAT ₹150 off | Use SAVERDEAL",
                                        discountType: "Flat",
                                        operationType: "RESTAURANT",
                                    },
                                ],
                                visible: true,
                            },
                            badges: {},
                            slugString:
                                "dev-international-khajri-road-bararipura",
                            isOpen: true,
                            labels: [
                                {
                                    title: "Timings",
                                    message: "null",
                                },
                                {
                                    title: "Address",
                                    message: "vip road khajria chowk",
                                },
                                {
                                    title: "Cuisines",
                                    message: "North Indian,Chinese",
                                },
                            ],
                            totalRatings: 530,
                            aggregatedDiscountInfoV2: {
                                header: "Flat ₹125 off",
                                shortDescriptionList: [
                                    {
                                        meta: "Flat ₹125 off on orders above ₹349",
                                        discountType: "Flat",
                                        operationType: "RESTAURANT",
                                    },
                                    {
                                        meta: "FLAT ₹150 off | Use SAVERDEAL",
                                        discountType: "Flat",
                                        operationType: "RESTAURANT",
                                    },
                                ],
                                descriptionList: [
                                    {
                                        meta: "Flat ₹125 off on orders above ₹349| Use code SWIGGYWEEKENDS",
                                        discountType: "Flat",
                                        operationType: "RESTAURANT",
                                    },
                                    {
                                        meta: "FLAT ₹150 off | Use SAVERDEAL",
                                        discountType: "Flat",
                                        operationType: "RESTAURANT",
                                    },
                                ],
                                couponDetailsCta: "View coupon details",
                            },
                            type: "F",
                            nudgeBanners: [
                                {
                                    minValue: 244,
                                    maxValue: 349,
                                    priority: 1,
                                    couponCode: "SWIGGYWEEKENDS",
                                    discountInfo: {
                                        discountType: "Flat",
                                        value: 125,
                                    },
                                    lockedMessage:
                                        "Add items worth ₹<amount> to save ₹125 | Code SWIGGYWEEKENDS",
                                    unlockedMessage:
                                        "SWIGGYWEEKENDS Coupon Unlocked! Use it to save ₹125",
                                    logoCtx: {},
                                },
                                {
                                    minValue: 349,
                                    maxValue: 499,
                                    priority: 3,
                                    couponCode: "MEGASAVER",
                                    discountInfo: {
                                        discountType: "Flat",
                                        value: 175,
                                    },
                                    lockedMessage:
                                        "Add items worth ₹<amount> to save ₹175 | Code MEGASAVER",
                                    unlockedMessage:
                                        "MEGASAVER Coupon Unlocked! Use it to save ₹175",
                                    logoCtx: {},
                                },
                                {
                                    minValue: 559,
                                    maxValue: 799,
                                    priority: 4,
                                    couponCode: "NEWYEARPARTY",
                                    discountInfo: {
                                        discountType: "Flat",
                                        value: 300,
                                    },
                                    lockedMessage:
                                        "Add items worth ₹<amount> to save ₹300 | Code NEWYEARPARTY",
                                    unlockedMessage:
                                        "NEWYEARPARTY Coupon Unlocked! Use it to save ₹300",
                                    logoCtx: {},
                                },
                            ],
                            headerBanner: {
                                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/151656",
                            },
                            ratingSlab: "RATING_SLAB_5",
                            orderabilityCommunication: {
                                title: {},
                                subTitle: {},
                                message: {},
                                customIcon: {},
                                commsStyling: {},
                            },
                            hasBestsellerItems: true,
                            cartOrderabilityNudgeBanner: {
                                parameters: {},
                                presentation: {},
                            },
                            latLong: "22.06423902,78.93703949",
                            backgroundImageOverlayInfo: {},
                            featuredSectionInfo: {},
                        },
                        analytics: {},
                    },
                    relevance: {
                        type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
                        sectionId: "POP_UP_CROUTON_MENU",
                    },
                },
            },
            {
                card: {
                    card: {
                        "@type":
                            "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                        layout: {
                            rows: 1,
                            columns: 5,
                            horizontalScrollEnabled: true,
                            itemSpacing: 12,
                            lineSpacing: 10,
                            widgetPadding: {},
                            containerStyle: {
                                containerPadding: {
                                    left: 10,
                                    right: 10,
                                    bottom: 16,
                                },
                            },
                        },
                        id: "offerCollectionWidget_UX4",
                        gridElements: {
                            infoWithStyle: {
                                "@type":
                                    "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                                offers: [
                                    {
                                        info: {
                                            header: "FLAT ₹125 OFF",
                                            offerTag: "DEFAULT",
                                            offerTagColor: "#E46D47",
                                            offerIds: [
                                                "bc03c5b7-05a1-4041-a94d-198024807662",
                                            ],
                                            expiryTime: "1970-01-01T00:00:00Z",
                                            couponCode: "USE SWIGGYWEEKENDS",
                                            description: "ABOVE ₹349",
                                            offerType: "offers",
                                            restId: "151656",
                                            offerLogo: "offers/generic",
                                            descriptionTextColor: "#7302060C",
                                            primaryDescription:
                                                "USE SWIGGYWEEKENDS",
                                        },
                                        cta: {
                                            type: "OFFER_HALF_CARD",
                                        },
                                    },
                                    {
                                        info: {
                                            header: "FLAT ₹150 OFF",
                                            offerTag: "FLAT DEAL",
                                            offerTagColor: "#E46D47",
                                            offerIds: [
                                                "26f088ca-0aed-4656-b769-5f54a668f74c",
                                            ],
                                            expiryTime: "1970-01-01T00:00:00Z",
                                            couponCode: "USE SAVERDEAL",
                                            description: "ABOVE ₹399",
                                            offerType: "offers",
                                            restId: "151656",
                                            offerLogo: "offers/generic",
                                            descriptionTextColor: "#7302060C",
                                            primaryDescription: "USE SAVERDEAL",
                                        },
                                        cta: {
                                            type: "OFFER_HALF_CARD",
                                        },
                                    },
                                    {
                                        info: {
                                            header: "FLAT ₹175 OFF",
                                            offerTag: "DEFAULT",
                                            offerTagColor: "#E46D47",
                                            offerIds: [
                                                "d2b25baa-6282-4716-9281-6e36956f16e8",
                                            ],
                                            expiryTime: "1970-01-01T00:00:00Z",
                                            couponCode: "USE MEGASAVER",
                                            description: "ABOVE ₹499",
                                            offerType: "offers",
                                            restId: "151656",
                                            offerLogo: "offers/generic",
                                            descriptionTextColor: "#7302060C",
                                            primaryDescription: "USE MEGASAVER",
                                        },
                                        cta: {
                                            type: "OFFER_HALF_CARD",
                                        },
                                    },
                                    {
                                        info: {
                                            header: "FLAT ₹300 OFF",
                                            offerTag: "DEFAULT",
                                            offerTagColor: "#E46D47",
                                            offerIds: [
                                                "bfc638ce-327e-4679-a2f9-a42bef983068",
                                            ],
                                            expiryTime: "1970-01-01T00:00:00Z",
                                            couponCode: "USE NEWYEARPARTY",
                                            description: "ABOVE ₹799",
                                            offerType: "offers",
                                            restId: "151656",
                                            offerLogo: "offers/generic",
                                            descriptionTextColor: "#7302060C",
                                            primaryDescription:
                                                "USE NEWYEARPARTY",
                                        },
                                        cta: {
                                            type: "OFFER_HALF_CARD",
                                        },
                                    },
                                    {
                                        info: {
                                            header: "20% OFF UPTO ₹125",
                                            offerTagColor: "#E46D47",
                                            logoBottom:
                                                "MARKETING_BANNERS/IMAGES/OFFERS/2025/5/27/47401195-2e95-4f53-bb7c-367fa0316dc7_AMEXMenuLogo.png",
                                            offerIds: [
                                                "074600c5-3563-4463-ab24-aa22c3ea5a8d",
                                            ],
                                            expiryTime: "1970-01-01T00:00:00Z",
                                            couponCode: "USE AMEXCORP",
                                            description: "ABOVE ₹499",
                                            offerType: "offers",
                                            restId: "151656",
                                            offerLogo:
                                                "MARKETING_BANNERS/IMAGES/OFFERS/2025/5/27/47401195-2e95-4f53-bb7c-367fa0316dc7_AMEXMenuLogo.png",
                                            descriptionTextColor: "#7302060C",
                                            primaryDescription: "USE AMEXCORP",
                                        },
                                        cta: {
                                            type: "OFFER_HALF_CARD",
                                        },
                                    },
                                ],
                                habitMilestoneInfo: {
                                    callout: {},
                                },
                                loyaltyDiscoverPresentationInfo: {
                                    logoCtx: {},
                                },
                            },
                        },
                    },
                },
            },
            {
                groupedCard: {
                    cardGroupMap: {
                        REGULAR: {
                            cards: [
                                {
                                    card: {
                                        card: {
                                            "@type":
                                                "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                                            badges: {},
                                            vegOnlyDetails: {
                                                imageId: "AutoVegOnly_qkjowj",
                                                title: "Showing only vegetarian options.",
                                                description:
                                                    "Tap on the VEG ONLY button to turn off the setting",
                                            },
                                            topRatedFilter: {
                                                attributes: {
                                                    displayText: "Ratings 4.0+",
                                                },
                                            },
                                            kidsCategoryFilter: {
                                                attributes: {
                                                    displayText:
                                                        "Kids Favourites",
                                                    tooltip: {
                                                        enabled: true,
                                                        displayText:
                                                            "Kids Favourites Filter applied. Remove this filter to see the full Menu.",
                                                    },
                                                },
                                            },
                                            vegFilter: {
                                                attributes: {
                                                    displayText: "VEG",
                                                },
                                            },
                                            nonvegFilter: {
                                                attributes: {
                                                    displayText: "NONVEG",
                                                },
                                            },
                                        },
                                        relevance: {
                                            type: "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                                            sectionId: "MENU_FILTER_TOGGLE",
                                        },
                                    },
                                },
                                {
                                    card: {
                                        card: {
                                            "@type":
                                                "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel",
                                            title: "Top Picks",
                                            carousel: [
                                                {
                                                    type: "TopCarousel",
                                                    subtype: "image",
                                                    bannerId: "5349391",
                                                    creativeId:
                                                        "TopPicks2024/42148879E.png",
                                                    title: "Paneer Butter Masala",
                                                    description: " ",
                                                    fontColor: "#FFFFFF",
                                                    dish: {
                                                        info: {
                                                            id: "42148879",
                                                            name: "Paneer Butter Masala",
                                                            category:
                                                                "Main Course (Veg)",
                                                            imageId:
                                                                "xkd0k3a2qs42ebklkvkj",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 25900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {
                                                                text: "Bestseller",
                                                                textColor:
                                                                    "#ffffff",
                                                                topBackgroundColor:
                                                                    "#d53d4c",
                                                                bottomBackgroundColor:
                                                                    "#b02331",
                                                            },
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            isBestseller: true,
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    type: "TopCarousel",
                                                    subtype: "image",
                                                    bannerId: "5445441",
                                                    creativeId:
                                                        "TopPicks2024/42148810E.png",
                                                    title: "Butter Chicken",
                                                    description: " ",
                                                    fontColor: "#FFFFFF",
                                                    dish: {
                                                        info: {
                                                            id: "42148810",
                                                            name: "Butter Chicken",
                                                            category:
                                                                "Main Course (Non Veg)",
                                                            imageId:
                                                                "nathguichvgc4orpaic3",
                                                            inStock: 1,
                                                            price: 35900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {
                                                                text: "Bestseller",
                                                                textColor:
                                                                    "#ffffff",
                                                                topBackgroundColor:
                                                                    "#d53d4c",
                                                                bottomBackgroundColor:
                                                                    "#b02331",
                                                            },
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            isBestseller: true,
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    type: "TopCarousel",
                                                    subtype: "image",
                                                    bannerId: "5448991",
                                                    creativeId:
                                                        "TopPicks2024/42148857E.png",
                                                    title: "Mutton Biryani",
                                                    description: " ",
                                                    fontColor: "#FFFFFF",
                                                    dish: {
                                                        info: {
                                                            id: "42148857",
                                                            name: "Mutton Biryani",
                                                            category:
                                                                "Rice & Noodles (Non Veg)",
                                                            imageId:
                                                                "84d2a4768e87ed0eb19741f4b9e5b7d4",
                                                            inStock: 1,
                                                            price: 38900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {
                                                                text: "Bestseller",
                                                                textColor:
                                                                    "#ffffff",
                                                                topBackgroundColor:
                                                                    "#d53d4c",
                                                                bottomBackgroundColor:
                                                                    "#b02331",
                                                            },
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            isBestseller: true,
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                            ],
                                        },
                                    },
                                },
                                {
                                    card: {
                                        card: {
                                            "@type":
                                                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            title: "Recommended",
                                            itemCards: [
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "127750818",
                                                            name: "Mix Veg Raita",
                                                            category:
                                                                "Curd Prepairation",
                                                            imageId:
                                                                "FOOD_CATALOG/IMAGES/CMS/2024/5/15/f186bba3-fa72-417b-bbb6-1f6edbd86deb_9a288cdc-9612-4954-8018-3b68d3c013f2.JPG",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 10000,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            showImage: true,
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148711",
                                                            name: "Boondi Raita",
                                                            category:
                                                                "Curd Prepairation",
                                                            imageId:
                                                                "1860f85a7cd1276e7a4a9247a06f13c4",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 10000,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            showImage: true,
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "5.0",
                                                                        ratingCount:
                                                                            "3 ratings",
                                                                        ratingCountV2:
                                                                            "3",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097504",
                                                            name: "Fruit Raita",
                                                            category:
                                                                "Curd Prepairation",
                                                            imageId:
                                                                "9fbbc13a5722fe8ffbd455bc4980c5c9",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 10900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            showImage: true,
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.6",
                                                                        ratingCount:
                                                                            "3 ratings",
                                                                        ratingCountV2:
                                                                            "3",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097506",
                                                            name: "French Fries",
                                                            category:
                                                                "Tit Bits",
                                                            imageId:
                                                                "efa06aedf35c477f118e782ee1832914",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 9900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            showImage: true,
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.2",
                                                                        ratingCount:
                                                                            "10 ratings",
                                                                        ratingCountV2:
                                                                            "10",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097508",
                                                            name: "Veg Sandwich",
                                                            category:
                                                                "Tit Bits",
                                                            imageId:
                                                                "171c3d5eaab6281069bec1301adceec6",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 13900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            showImage: true,
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097510",
                                                            name: "Chicken Sandwich",
                                                            category:
                                                                "Tit Bits",
                                                            imageId:
                                                                "5f062bd98a1ba17fec3e40c6495883ba",
                                                            inStock: 1,
                                                            price: 16900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            showImage: true,
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "127750838",
                                                            name: "Chicken Manchow",
                                                            category:
                                                                "Soup Non Veg",
                                                            imageId:
                                                                "2c6c1ceda0b62724850f3f7ef7c8307b",
                                                            inStock: 1,
                                                            price: 15900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            showImage: true,
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148814",
                                                            name: "Hara Bhara Kebab",
                                                            category:
                                                                "Veg Starters",
                                                            imageId:
                                                                "yvzwflnewimzh2zafbui",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 21900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            showImage: true,
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.4",
                                                                        ratingCount:
                                                                            "5 ratings",
                                                                        ratingCountV2:
                                                                            "5",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148809",
                                                            name: "Tandoori Mushroom",
                                                            category:
                                                                "Veg Starters",
                                                            imageId:
                                                                "01619f44db38d95d79637c1256bc8785",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 27900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            showImage: true,
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148803",
                                                            name: "Paneer Tikka",
                                                            category:
                                                                "Veg Starters",
                                                            imageId:
                                                                "acxdfhd3jly8n3psjz7o",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 26900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            showImage: true,
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.5",
                                                                        ratingCount:
                                                                            "14 ratings",
                                                                        ratingCountV2:
                                                                            "14",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097527",
                                                            name: "Paneer Pahadi Tikka",
                                                            category:
                                                                "Veg Starters",
                                                            imageId:
                                                                "42b25655188a1daf63357731b76e08fe",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 26900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            showImage: true,
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148755",
                                                            name: "Paneer Chilli",
                                                            category:
                                                                "Veg Starters",
                                                            imageId:
                                                                "72462950f5f0d3d0333cc3a01e4722af",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 26900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            showImage: true,
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.8",
                                                                        ratingCount:
                                                                            "7 ratings",
                                                                        ratingCountV2:
                                                                            "7",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148822",
                                                            name: "Chicken Tikka",
                                                            category:
                                                                "Non Veg Starters",
                                                            imageId:
                                                                "zqcotadqk1rfzcryoaiy",
                                                            inStock: 1,
                                                            price: 33900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            showImage: true,
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.8",
                                                                        ratingCount:
                                                                            "6 ratings",
                                                                        ratingCountV2:
                                                                            "6",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148801",
                                                            name: "Chicken Manchurian",
                                                            category:
                                                                "Non Veg Starters",
                                                            imageId:
                                                                "08ed62a21d11fbd69179f5d7a338110a",
                                                            inStock: 1,
                                                            price: 32900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            showImage: true,
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.7",
                                                                        ratingCount:
                                                                            "5 ratings",
                                                                        ratingCountV2:
                                                                            "5",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148686",
                                                            name: "Malai Kofta",
                                                            category:
                                                                "Main Course (Veg)",
                                                            imageId:
                                                                "xu9kgrriyome55roaww2",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 26500,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            showImage: true,
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "2.9",
                                                                        ratingCount:
                                                                            "6 ratings",
                                                                        ratingCountV2:
                                                                            "6",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#FFF0CD",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_low",
                                                                        ratingTextColor:
                                                                            "rating_low",
                                                                        ratingCountTextColor:
                                                                            "rating_low",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148873",
                                                            name: "Paneer Tikka Masala",
                                                            category:
                                                                "Main Course (Veg)",
                                                            imageId:
                                                                "foal8qzmtdsertbldblo",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 23500,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {
                                                                text: "Bestseller",
                                                                textColor:
                                                                    "#ffffff",
                                                                topBackgroundColor:
                                                                    "#d53d4c",
                                                                bottomBackgroundColor:
                                                                    "#b02331",
                                                            },
                                                            showImage: true,
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            isBestseller: true,
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.2",
                                                                        ratingCount:
                                                                            "78 ratings",
                                                                        ratingCountV2:
                                                                            "78",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148879",
                                                            name: "Paneer Butter Masala",
                                                            category:
                                                                "Main Course (Veg)",
                                                            imageId:
                                                                "xkd0k3a2qs42ebklkvkj",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 25900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {
                                                                text: "Bestseller",
                                                                textColor:
                                                                    "#ffffff",
                                                                topBackgroundColor:
                                                                    "#d53d4c",
                                                                bottomBackgroundColor:
                                                                    "#b02331",
                                                            },
                                                            showImage: true,
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            isBestseller: true,
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.4",
                                                                        ratingCount:
                                                                            "31 ratings",
                                                                        ratingCountV2:
                                                                            "31",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148875",
                                                            name: "Kadhai Paneer",
                                                            category:
                                                                "Main Course (Veg)",
                                                            imageId:
                                                                "qwpkwixq9rc8tqhobmkj",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 24900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {
                                                                text: "Bestseller",
                                                                textColor:
                                                                    "#ffffff",
                                                                topBackgroundColor:
                                                                    "#d53d4c",
                                                                bottomBackgroundColor:
                                                                    "#b02331",
                                                            },
                                                            showImage: true,
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            isBestseller: true,
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.4",
                                                                        ratingCount:
                                                                            "32 ratings",
                                                                        ratingCountV2:
                                                                            "32",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097502",
                                                            name: "Paneer Handi",
                                                            category:
                                                                "Main Course (Veg)",
                                                            imageId:
                                                                "5ad59ca5572adfe606f28cdbc2968d61",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 24900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {
                                                                text: "Bestseller",
                                                                textColor:
                                                                    "#ffffff",
                                                                topBackgroundColor:
                                                                    "#d53d4c",
                                                                bottomBackgroundColor:
                                                                    "#b02331",
                                                            },
                                                            showImage: true,
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            isBestseller: true,
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.3",
                                                                        ratingCount:
                                                                            "39 ratings",
                                                                        ratingCountV2:
                                                                            "39",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097505",
                                                            name: "Mushroom Masala",
                                                            category:
                                                                "Main Course (Veg)",
                                                            imageId:
                                                                "d34c42bc4e9911c3c065b26c32d1d004",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 26900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            showImage: true,
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.7",
                                                                        ratingCount:
                                                                            "14 ratings",
                                                                        ratingCountV2:
                                                                            "14",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                            ],
                                            type: "CATEGORY_TYPE_RECOMMENDED",
                                            subtitleSuffix: {},
                                            categoryId: "-1",
                                        },
                                    },
                                },
                                {
                                    card: {
                                        card: {
                                            "@type":
                                                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            title: "Salad",
                                            itemCards: [
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148758",
                                                            name: "Green Salad",
                                                            category: "Salad",
                                                            imageId:
                                                                "FOOD_CATALOG/IMAGES/CMS/2024/10/1/58f77422-f966-4e3d-b84f-bfc13ac26622_19e5b442-4a8d-4dbf-a697-274d065c7bc6.JPG",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 6500,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148764",
                                                            name: "Tossed Salad",
                                                            category: "Salad",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 8500,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097500",
                                                            name: "Kachumber Salad",
                                                            category: "Salad",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 7500,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "127750817",
                                                            name: "Aloo Chana Chat",
                                                            category: "Salad",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 8500,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.1",
                                                                        ratingCount:
                                                                            "3 ratings",
                                                                        ratingCountV2:
                                                                            "3",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                            ],
                                            subtitleSuffix: {},
                                            image: "FOOD_CATALOG/IMAGES/CMS/2024/10/1/58f77422-f966-4e3d-b84f-bfc13ac26622_19e5b442-4a8d-4dbf-a697-274d065c7bc6.JPG",
                                            categoryId: "42262920",
                                        },
                                    },
                                },
                                {
                                    card: {
                                        card: {
                                            "@type":
                                                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            title: "99 Store",
                                            itemCards: [
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "174633718",
                                                            name: "Chicken Fried Rice                                                ",
                                                            category:
                                                                "99 Store",
                                                            imageId:
                                                                "FOOD_CATALOG/IMAGES/CMS/2024/3/9/f392a8ec-06b8-43d0-b720-99b0de3eb2e1_6bede81c-a402-465f-9740-8f78347c74ea_compressed",
                                                            inStock: 1,
                                                            price: 31900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "174642409",
                                                            name: "Chicken Pulao                                                  ",
                                                            category:
                                                                "99 Store",
                                                            description:
                                                                "Chicken Pulao",
                                                            imageId:
                                                                "26e9deceb30f964dd92b31734a98f2a7",
                                                            inStock: 1,
                                                            price: 31900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "174642418",
                                                            name: "Chicken Schezwan Fried Rice                                                  ",
                                                            category:
                                                                "99 Store",
                                                            description:
                                                                "Chicken Schezwan Fried Rice",
                                                            imageId:
                                                                "FOOD_CATALOG/IMAGES/CMS/2024/3/9/ce830551-2117-46ab-8c16-dc0359e16987_a6e1e048-7405-4d3f-b834-9d8e5c457481_compressed",
                                                            inStock: 1,
                                                            price: 31900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                            ],
                                            subtitleSuffix: {},
                                            image: "FOOD_CATALOG/IMAGES/CMS/2024/3/9/f392a8ec-06b8-43d0-b720-99b0de3eb2e1_6bede81c-a402-465f-9740-8f78347c74ea_compressed",
                                            categoryId: "63480454",
                                        },
                                    },
                                },
                                {
                                    card: {
                                        card: {
                                            "@type":
                                                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            title: "Curd Prepairation",
                                            itemCards: [
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "127750818",
                                                            name: "Mix Veg Raita",
                                                            category:
                                                                "Curd Prepairation",
                                                            imageId:
                                                                "FOOD_CATALOG/IMAGES/CMS/2024/5/15/f186bba3-fa72-417b-bbb6-1f6edbd86deb_9a288cdc-9612-4954-8018-3b68d3c013f2.JPG",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 10000,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148711",
                                                            name: "Boondi Raita",
                                                            category:
                                                                "Curd Prepairation",
                                                            imageId:
                                                                "1860f85a7cd1276e7a4a9247a06f13c4",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 10000,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "5.0",
                                                                        ratingCount:
                                                                            "3 ratings",
                                                                        ratingCountV2:
                                                                            "3",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148706",
                                                            name: "Pineapple Raita",
                                                            category:
                                                                "Curd Prepairation",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 10900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097504",
                                                            name: "Fruit Raita",
                                                            category:
                                                                "Curd Prepairation",
                                                            imageId:
                                                                "9fbbc13a5722fe8ffbd455bc4980c5c9",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 10900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.6",
                                                                        ratingCount:
                                                                            "3 ratings",
                                                                        ratingCountV2:
                                                                            "3",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                            ],
                                            subtitleSuffix: {},
                                            image: "FOOD_CATALOG/IMAGES/CMS/2024/5/15/f186bba3-fa72-417b-bbb6-1f6edbd86deb_9a288cdc-9612-4954-8018-3b68d3c013f2.JPG",
                                            categoryId: "56640124",
                                        },
                                    },
                                },
                                {
                                    card: {
                                        card: {
                                            "@type":
                                                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            title: "Tit Bits",
                                            itemCards: [
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097506",
                                                            name: "French Fries",
                                                            category:
                                                                "Tit Bits",
                                                            imageId:
                                                                "efa06aedf35c477f118e782ee1832914",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 9900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.2",
                                                                        ratingCount:
                                                                            "10 ratings",
                                                                        ratingCountV2:
                                                                            "10",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097508",
                                                            name: "Veg Sandwich",
                                                            category:
                                                                "Tit Bits",
                                                            imageId:
                                                                "171c3d5eaab6281069bec1301adceec6",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 13900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097509",
                                                            name: "Veg Cheese Sandwich",
                                                            category:
                                                                "Tit Bits",
                                                            imageId:
                                                                "FOOD_CATALOG/IMAGES/CMS/2024/10/1/e351b6a3-7b10-4fce-a5fa-1486270ec4d3_643ea89a-0fef-4aea-9823-fd0dc6218a4a.JPG",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 14900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "3.7",
                                                                        ratingCount:
                                                                            "3 ratings",
                                                                        ratingCountV2:
                                                                            "3",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#D9EFEC",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_medium",
                                                                        ratingTextColor:
                                                                            "rating_medium",
                                                                        ratingCountTextColor:
                                                                            "rating_medium",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097510",
                                                            name: "Chicken Sandwich",
                                                            category:
                                                                "Tit Bits",
                                                            imageId:
                                                                "5f062bd98a1ba17fec3e40c6495883ba",
                                                            inStock: 1,
                                                            price: 16900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                            ],
                                            subtitleSuffix: {},
                                            image: "efa06aedf35c477f118e782ee1832914",
                                            categoryId: "33664807",
                                        },
                                    },
                                },
                                {
                                    card: {
                                        card: {
                                            "@type":
                                                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            title: "Refreshment Drink",
                                            itemCards: [
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "127750821",
                                                            name: "Butter Milk",
                                                            category:
                                                                "Refreshment Drink",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 8000,
                                                            variants: {
                                                                variantGroups: [
                                                                    {
                                                                        groupId:
                                                                            "52400318",
                                                                        name: "Choice",
                                                                        variations:
                                                                            [
                                                                                {
                                                                                    name: "Plain",
                                                                                    default: 1,
                                                                                    id: "163937842",
                                                                                    inStock: 1,
                                                                                    isVeg: 1,
                                                                                    isEnabled: 1,
                                                                                },
                                                                                {
                                                                                    name: "Masala",
                                                                                    id: "163937843",
                                                                                    inStock: 1,
                                                                                    isVeg: 1,
                                                                                    isEnabled: 1,
                                                                                },
                                                                            ],
                                                                    },
                                                                ],
                                                            },
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "158569998",
                                                            name: "Lassi",
                                                            category:
                                                                "Refreshment Drink",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 8000,
                                                            variants: {
                                                                variantGroups: [
                                                                    {
                                                                        groupId:
                                                                            "52400319",
                                                                        name: "Choice",
                                                                        variations:
                                                                            [
                                                                                {
                                                                                    name: "Sweet",
                                                                                    default: 1,
                                                                                    id: "163937844",
                                                                                    inStock: 1,
                                                                                    isVeg: 1,
                                                                                    isEnabled: 1,
                                                                                },
                                                                                {
                                                                                    name: "Salt",
                                                                                    id: "163937845",
                                                                                    inStock: 1,
                                                                                    isVeg: 1,
                                                                                    isEnabled: 1,
                                                                                },
                                                                                {
                                                                                    name: "Masala",
                                                                                    id: "163937846",
                                                                                    inStock: 1,
                                                                                    isVeg: 1,
                                                                                    isEnabled: 1,
                                                                                },
                                                                            ],
                                                                    },
                                                                ],
                                                            },
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "127750825",
                                                            name: "Milk Shake",
                                                            category:
                                                                "Refreshment Drink",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 14900,
                                                            variants: {
                                                                variantGroups: [
                                                                    {
                                                                        groupId:
                                                                            "52400320",
                                                                        name: "Choice",
                                                                        variations:
                                                                            [
                                                                                {
                                                                                    name: "Choco",
                                                                                    default: 1,
                                                                                    id: "163937847",
                                                                                    inStock: 1,
                                                                                    isVeg: 1,
                                                                                    isEnabled: 1,
                                                                                },
                                                                                {
                                                                                    name: "Vanilla",
                                                                                    id: "163937848",
                                                                                    inStock: 1,
                                                                                    isVeg: 1,
                                                                                    isEnabled: 1,
                                                                                },
                                                                                {
                                                                                    name: "Strawbeery",
                                                                                    id: "163937849",
                                                                                    inStock: 1,
                                                                                    isVeg: 1,
                                                                                    isEnabled: 1,
                                                                                },
                                                                            ],
                                                                    },
                                                                ],
                                                            },
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097521",
                                                            name: "Cold Coffee",
                                                            category:
                                                                "Refreshment Drink",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 10000,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097522",
                                                            name: "Cold Coffee With Ice Cream",
                                                            category:
                                                                "Refreshment Drink",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 14900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                            ],
                                            subtitleSuffix: {},
                                            categoryId: "56640125",
                                        },
                                    },
                                },
                                {
                                    card: {
                                        card: {
                                            "@type":
                                                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            title: "Soup Veg",
                                            itemCards: [
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "158570000",
                                                            name: "Cr.Of Tomato",
                                                            category:
                                                                "Soup Veg",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 13900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "127750832",
                                                            name: "Cream Of Mushroom",
                                                            category:
                                                                "Soup Veg",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 13900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "127750833",
                                                            name: "Veg Manchow",
                                                            category:
                                                                "Soup Veg",
                                                            imageId:
                                                                "FOOD_CATALOG/IMAGES/CMS/2024/9/30/356e5e63-20a1-4bbd-92d4-1fecc76c771f_bb22bb0d-b1f4-40ac-ba0b-d07f266e0fb0.JPG",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 13900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "158570002",
                                                            name: "Veg Hot N Sour",
                                                            category:
                                                                "Soup Veg",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 13900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "127750835",
                                                            name: "Veg Sweet Corn",
                                                            category:
                                                                "Soup Veg",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 13900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "158570003",
                                                            name: "Veg Lemon Coriander",
                                                            category:
                                                                "Soup Veg",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 13900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                            ],
                                            subtitleSuffix: {},
                                            image: "FOOD_CATALOG/IMAGES/CMS/2024/9/30/356e5e63-20a1-4bbd-92d4-1fecc76c771f_bb22bb0d-b1f4-40ac-ba0b-d07f266e0fb0.JPG",
                                            categoryId: "7072462",
                                        },
                                    },
                                },
                                {
                                    card: {
                                        card: {
                                            "@type":
                                                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            title: "Soup Non Veg",
                                            itemCards: [
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "127750838",
                                                            name: "Chicken Manchow",
                                                            category:
                                                                "Soup Non Veg",
                                                            imageId:
                                                                "2c6c1ceda0b62724850f3f7ef7c8307b",
                                                            inStock: 1,
                                                            price: 15900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "158570004",
                                                            name: "Chicken Hot N Sour",
                                                            category:
                                                                "Soup Non Veg",
                                                            inStock: 1,
                                                            price: 15900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "127750841",
                                                            name: "Chicken Sweet Corn",
                                                            category:
                                                                "Soup Non Veg",
                                                            inStock: 1,
                                                            price: 15900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "158570007",
                                                            name: "Chicken Lemon Coriander",
                                                            category:
                                                                "Soup Non Veg",
                                                            inStock: 1,
                                                            price: 15900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                            ],
                                            subtitleSuffix: {},
                                            image: "2c6c1ceda0b62724850f3f7ef7c8307b",
                                            categoryId: "7072463",
                                        },
                                    },
                                },
                                {
                                    card: {
                                        card: {
                                            "@type":
                                                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            title: "Veg Starters",
                                            itemCards: [
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148814",
                                                            name: "Hara Bhara Kebab",
                                                            category:
                                                                "Veg Starters",
                                                            imageId:
                                                                "yvzwflnewimzh2zafbui",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 21900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.4",
                                                                        ratingCount:
                                                                            "5 ratings",
                                                                        ratingCountV2:
                                                                            "5",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148809",
                                                            name: "Tandoori Mushroom",
                                                            category:
                                                                "Veg Starters",
                                                            imageId:
                                                                "01619f44db38d95d79637c1256bc8785",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 27900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148803",
                                                            name: "Paneer Tikka",
                                                            category:
                                                                "Veg Starters",
                                                            imageId:
                                                                "acxdfhd3jly8n3psjz7o",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 26900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.5",
                                                                        ratingCount:
                                                                            "14 ratings",
                                                                        ratingCountV2:
                                                                            "14",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097527",
                                                            name: "Paneer Pahadi Tikka",
                                                            category:
                                                                "Veg Starters",
                                                            imageId:
                                                                "42b25655188a1daf63357731b76e08fe",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 26900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "127750847",
                                                            name: "Veg Manchurian",
                                                            category:
                                                                "Veg Starters",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 24900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148762",
                                                            name: "Veg Spring Roll",
                                                            category:
                                                                "Veg Starters",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 24900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097532",
                                                            name: "Crispy Corn",
                                                            category:
                                                                "Veg Starters",
                                                            imageId:
                                                                "FOOD_CATALOG/IMAGES/CMS/2024/10/1/c6d49df5-d2da-42f6-b94b-45301bc2b839_5f4f9b2a-a294-4a00-ac77-25994fd10363.JPG",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 24900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "3.7",
                                                                        ratingCount:
                                                                            "3 ratings",
                                                                        ratingCountV2:
                                                                            "3",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#D9EFEC",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_medium",
                                                                        ratingTextColor:
                                                                            "rating_medium",
                                                                        ratingCountTextColor:
                                                                            "rating_medium",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148755",
                                                            name: "Paneer Chilli",
                                                            category:
                                                                "Veg Starters",
                                                            imageId:
                                                                "72462950f5f0d3d0333cc3a01e4722af",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 26900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.8",
                                                                        ratingCount:
                                                                            "7 ratings",
                                                                        ratingCountV2:
                                                                            "7",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                            ],
                                            subtitleSuffix: {},
                                            image: "yvzwflnewimzh2zafbui",
                                            categoryId: "33664809",
                                        },
                                    },
                                },
                                {
                                    card: {
                                        card: {
                                            "@type":
                                                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            title: "Non Veg Starters",
                                            itemCards: [
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148822",
                                                            name: "Chicken Tikka",
                                                            category:
                                                                "Non Veg Starters",
                                                            imageId:
                                                                "zqcotadqk1rfzcryoaiy",
                                                            inStock: 1,
                                                            price: 33900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.8",
                                                                        ratingCount:
                                                                            "6 ratings",
                                                                        ratingCountV2:
                                                                            "6",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "127750857",
                                                            name: "Chicken Hariyali Tikka",
                                                            category:
                                                                "Non Veg Starters",
                                                            inStock: 1,
                                                            price: 33900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148830",
                                                            name: "Chicken Malai Kebab",
                                                            category:
                                                                "Non Veg Starters",
                                                            inStock: 1,
                                                            price: 33900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "127750859",
                                                            name: "Chilli Chicken",
                                                            category:
                                                                "Non Veg Starters",
                                                            imageId:
                                                                "FOOD_CATALOG/IMAGES/CMS/2024/10/1/e09f5372-05d6-4ec5-b6d1-c79186b7dc5c_98e531af-422f-4836-b775-1e382b12091d.JPG",
                                                            inStock: 1,
                                                            price: 32900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {
                                                                text: "Bestseller",
                                                                textColor:
                                                                    "#ffffff",
                                                                topBackgroundColor:
                                                                    "#d53d4c",
                                                                bottomBackgroundColor:
                                                                    "#b02331",
                                                            },
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            isBestseller: true,
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "3.7",
                                                                        ratingCount:
                                                                            "7 ratings",
                                                                        ratingCountV2:
                                                                            "7",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#D9EFEC",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_medium",
                                                                        ratingTextColor:
                                                                            "rating_medium",
                                                                        ratingCountTextColor:
                                                                            "rating_medium",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148801",
                                                            name: "Chicken Manchurian",
                                                            category:
                                                                "Non Veg Starters",
                                                            imageId:
                                                                "08ed62a21d11fbd69179f5d7a338110a",
                                                            inStock: 1,
                                                            price: 32900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.7",
                                                                        ratingCount:
                                                                            "5 ratings",
                                                                        ratingCountV2:
                                                                            "5",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "127750816",
                                                            name: "Chicken Lemon",
                                                            category:
                                                                "Non Veg Starters",
                                                            inStock: 1,
                                                            price: 32900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                            ],
                                            subtitleSuffix: {},
                                            image: "zqcotadqk1rfzcryoaiy",
                                            categoryId: "33664810",
                                        },
                                    },
                                },
                                {
                                    card: {
                                        card: {
                                            "@type":
                                                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            title: "Main Course (Veg)",
                                            itemCards: [
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "158570020",
                                                            name: "Veg Kadai",
                                                            category:
                                                                "Main Course (Veg)",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 24900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097540",
                                                            name: "Veg Kolhapuri",
                                                            category:
                                                                "Main Course (Veg)",
                                                            imageId:
                                                                "FOOD_CATALOG/IMAGES/CMS/2024/10/1/53d7e0b9-888e-47e5-9278-47006700af5e_82fb2263-dbb0-472d-bc71-048143ef9bd7.JPG",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 24900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "2.1",
                                                                        ratingCount:
                                                                            "3 ratings",
                                                                        ratingCountV2:
                                                                            "3",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#FFF0CD",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_low",
                                                                        ratingTextColor:
                                                                            "rating_low",
                                                                        ratingCountTextColor:
                                                                            "rating_low",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148686",
                                                            name: "Malai Kofta",
                                                            category:
                                                                "Main Course (Veg)",
                                                            imageId:
                                                                "xu9kgrriyome55roaww2",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 26500,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "2.9",
                                                                        ratingCount:
                                                                            "6 ratings",
                                                                        ratingCountV2:
                                                                            "6",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#FFF0CD",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_low",
                                                                        ratingTextColor:
                                                                            "rating_low",
                                                                        ratingCountTextColor:
                                                                            "rating_low",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148873",
                                                            name: "Paneer Tikka Masala",
                                                            category:
                                                                "Main Course (Veg)",
                                                            imageId:
                                                                "foal8qzmtdsertbldblo",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 23500,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {
                                                                text: "Bestseller",
                                                                textColor:
                                                                    "#ffffff",
                                                                topBackgroundColor:
                                                                    "#d53d4c",
                                                                bottomBackgroundColor:
                                                                    "#b02331",
                                                            },
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            isBestseller: true,
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.2",
                                                                        ratingCount:
                                                                            "78 ratings",
                                                                        ratingCountV2:
                                                                            "78",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148879",
                                                            name: "Paneer Butter Masala",
                                                            category:
                                                                "Main Course (Veg)",
                                                            imageId:
                                                                "xkd0k3a2qs42ebklkvkj",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 25900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {
                                                                text: "Bestseller",
                                                                textColor:
                                                                    "#ffffff",
                                                                topBackgroundColor:
                                                                    "#d53d4c",
                                                                bottomBackgroundColor:
                                                                    "#b02331",
                                                            },
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            isBestseller: true,
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.4",
                                                                        ratingCount:
                                                                            "31 ratings",
                                                                        ratingCountV2:
                                                                            "31",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148875",
                                                            name: "Kadhai Paneer",
                                                            category:
                                                                "Main Course (Veg)",
                                                            imageId:
                                                                "qwpkwixq9rc8tqhobmkj",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 24900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {
                                                                text: "Bestseller",
                                                                textColor:
                                                                    "#ffffff",
                                                                topBackgroundColor:
                                                                    "#d53d4c",
                                                                bottomBackgroundColor:
                                                                    "#b02331",
                                                            },
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            isBestseller: true,
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.4",
                                                                        ratingCount:
                                                                            "32 ratings",
                                                                        ratingCountV2:
                                                                            "32",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097502",
                                                            name: "Paneer Handi",
                                                            category:
                                                                "Main Course (Veg)",
                                                            imageId:
                                                                "5ad59ca5572adfe606f28cdbc2968d61",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 24900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {
                                                                text: "Bestseller",
                                                                textColor:
                                                                    "#ffffff",
                                                                topBackgroundColor:
                                                                    "#d53d4c",
                                                                bottomBackgroundColor:
                                                                    "#b02331",
                                                            },
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            isBestseller: true,
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.3",
                                                                        ratingCount:
                                                                            "39 ratings",
                                                                        ratingCountV2:
                                                                            "39",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097503",
                                                            name: "Paneer Saoji",
                                                            category:
                                                                "Main Course (Veg)",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 24900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097507",
                                                            name: "Mutter Paneer",
                                                            category:
                                                                "Main Course (Veg)",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 24900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "3.6",
                                                                        ratingCount:
                                                                            "7 ratings",
                                                                        ratingCountV2:
                                                                            "7",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#D9EFEC",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_medium",
                                                                        ratingTextColor:
                                                                            "rating_medium",
                                                                        ratingCountTextColor:
                                                                            "rating_medium",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097505",
                                                            name: "Mushroom Masala",
                                                            category:
                                                                "Main Course (Veg)",
                                                            imageId:
                                                                "d34c42bc4e9911c3c065b26c32d1d004",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 26900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.7",
                                                                        ratingCount:
                                                                            "14 ratings",
                                                                        ratingCountV2:
                                                                            "14",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                            ],
                                            subtitleSuffix: {},
                                            image: "FOOD_CATALOG/IMAGES/CMS/2024/10/1/53d7e0b9-888e-47e5-9278-47006700af5e_82fb2263-dbb0-472d-bc71-048143ef9bd7.JPG",
                                            categoryId: "56640126",
                                        },
                                    },
                                },
                                {
                                    card: {
                                        card: {
                                            "@type":
                                                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            title: "Choice Of Dal",
                                            itemCards: [
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148835",
                                                            name: "Dal Fry",
                                                            category:
                                                                "Choice Of Dal",
                                                            imageId:
                                                                "1253b5d17caad58749eb39d5a9f05a66",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 14900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "5.0",
                                                                        ratingCount:
                                                                            "9 ratings",
                                                                        ratingCountV2:
                                                                            "9",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148838",
                                                            name: "Dal Tadka",
                                                            category:
                                                                "Choice Of Dal",
                                                            imageId:
                                                                "d5xt3l3ey7kcjksbphqd",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 15900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.4",
                                                                        ratingCount:
                                                                            "13 ratings",
                                                                        ratingCountV2:
                                                                            "13",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148839",
                                                            name: "Dal Makhani",
                                                            category:
                                                                "Choice Of Dal",
                                                            imageId:
                                                                "FOOD_CATALOG/IMAGES/CMS/2024/4/9/5fb1b0df-db04-4777-879d-06bc105668e6_7106e3f7-277d-49e7-b315-7e7e5192d276.JPG",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 22900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                            ],
                                            subtitleSuffix: {},
                                            image: "1253b5d17caad58749eb39d5a9f05a66",
                                            categoryId: "33664812",
                                        },
                                    },
                                },
                                {
                                    card: {
                                        card: {
                                            "@type":
                                                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            title: "Main Course (Non Veg)",
                                            itemCards: [
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148810",
                                                            name: "Butter Chicken",
                                                            category:
                                                                "Main Course (Non Veg)",
                                                            imageId:
                                                                "nathguichvgc4orpaic3",
                                                            inStock: 1,
                                                            price: 35900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {
                                                                text: "Bestseller",
                                                                textColor:
                                                                    "#ffffff",
                                                                topBackgroundColor:
                                                                    "#d53d4c",
                                                                bottomBackgroundColor:
                                                                    "#b02331",
                                                            },
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            isBestseller: true,
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.3",
                                                                        ratingCount:
                                                                            "49 ratings",
                                                                        ratingCountV2:
                                                                            "49",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148817",
                                                            name: "Chicken Saoji",
                                                            category:
                                                                "Main Course (Non Veg)",
                                                            inStock: 1,
                                                            price: 34900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.6",
                                                                        ratingCount:
                                                                            "3 ratings",
                                                                        ratingCountV2:
                                                                            "3",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148782",
                                                            name: "Chicken Tikka Masala",
                                                            category:
                                                                "Main Course (Non Veg)",
                                                            imageId:
                                                                "d12d837ecbf8084614490afdd6054f1b",
                                                            inStock: 1,
                                                            price: 35900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.7",
                                                                        ratingCount:
                                                                            "10 ratings",
                                                                        ratingCountV2:
                                                                            "10",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097519",
                                                            name: "Mutton Curry",
                                                            category:
                                                                "Main Course (Non Veg)",
                                                            imageId:
                                                                "d50d612dde1139c948e62f98183bb12c",
                                                            inStock: 1,
                                                            price: 45900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.4",
                                                                        ratingCount:
                                                                            "13 ratings",
                                                                        ratingCountV2:
                                                                            "13",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148747",
                                                            name: "Mutton Rogan Josh",
                                                            category:
                                                                "Main Course (Non Veg)",
                                                            imageId:
                                                                "418e0bc1c91f289ea570a6dd06147f95",
                                                            inStock: 1,
                                                            price: 45900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "3.2",
                                                                        ratingCount:
                                                                            "4 ratings",
                                                                        ratingCountV2:
                                                                            "4",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#D9EFEC",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_medium",
                                                                        ratingTextColor:
                                                                            "rating_medium",
                                                                        ratingCountTextColor:
                                                                            "rating_medium",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148776",
                                                            name: "Mutton Saoji",
                                                            category:
                                                                "Main Course (Non Veg)",
                                                            inStock: 1,
                                                            price: 45900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097523",
                                                            name: "Egg Curry",
                                                            category:
                                                                "Main Course (Non Veg)",
                                                            imageId:
                                                                "d5bf20e29bf5399414e68fb8bd749898",
                                                            inStock: 1,
                                                            price: 27900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "EGG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "3.6",
                                                                        ratingCount:
                                                                            "3 ratings",
                                                                        ratingCountV2:
                                                                            "3",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#D9EFEC",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_medium",
                                                                        ratingTextColor:
                                                                            "rating_medium",
                                                                        ratingCountTextColor:
                                                                            "rating_medium",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097525",
                                                            name: "Egg Saoji",
                                                            category:
                                                                "Main Course (Non Veg)",
                                                            inStock: 1,
                                                            price: 27900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "EGG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                            ],
                                            subtitleSuffix: {},
                                            image: "nathguichvgc4orpaic3",
                                            categoryId: "56640127",
                                        },
                                    },
                                },
                                {
                                    card: {
                                        card: {
                                            "@type":
                                                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            title: "Rice & Noodles (Veg)",
                                            itemCards: [
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148844",
                                                            name: "Jeera Rice",
                                                            category:
                                                                "Rice & Noodles (Veg)",
                                                            imageId:
                                                                "e92df002b02b3326b43fcdc178a2c1f0",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 13900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.6",
                                                                        ratingCount:
                                                                            "29 ratings",
                                                                        ratingCountV2:
                                                                            "29",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "127750844",
                                                            name: "Veg Pulao",
                                                            category:
                                                                "Rice & Noodles (Veg)",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 17900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "127750845",
                                                            name: "Veg Biryani",
                                                            category:
                                                                "Rice & Noodles (Veg)",
                                                            imageId:
                                                                "FOOD_CATALOG/IMAGES/CMS/2024/4/9/5f74ca6a-2a92-4810-a6a0-ace38aa6cc31_886af383-53f2-4ee0-8393-10ec944f21c7.JPG",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 23900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {
                                                                text: "Bestseller",
                                                                textColor:
                                                                    "#ffffff",
                                                                topBackgroundColor:
                                                                    "#d53d4c",
                                                                bottomBackgroundColor:
                                                                    "#b02331",
                                                            },
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            isBestseller: true,
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.6",
                                                                        ratingCount:
                                                                            "19 ratings",
                                                                        ratingCountV2:
                                                                            "19",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "127750846",
                                                            name: "Dal Khichdi",
                                                            category:
                                                                "Rice & Noodles (Veg)",
                                                            imageId:
                                                                "FOOD_CATALOG/IMAGES/CMS/2024/10/1/e3518f78-12cb-41b6-a79c-036b59386be2_f2aee924-1b64-4580-8a9a-860925fe2802.JPG",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 18900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.9",
                                                                        ratingCount:
                                                                            "7 ratings",
                                                                        ratingCountV2:
                                                                            "7",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "127750848",
                                                            name: "Veg Fried Rice",
                                                            category:
                                                                "Rice & Noodles (Veg)",
                                                            imageId:
                                                                "FOOD_CATALOG/IMAGES/CMS/2024/9/30/fd1f858f-15d9-42cc-8994-dff0d8cd3cb9_f48dc0f1-e124-4204-99c3-90e1ad19db67.JPG",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 21900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "127750849",
                                                            name: "Veg Schezwan Fried Rice",
                                                            category:
                                                                "Rice & Noodles (Veg)",
                                                            imageId:
                                                                "FOOD_CATALOG/IMAGES/CMS/2024/10/1/03d71720-9be8-406a-adfc-4cde9ab59307_117e9b84-1574-41b9-be08-82dd50fb794b.JPG",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 21900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "158570008",
                                                            name: "Veg Hakka Noodle",
                                                            category:
                                                                "Rice & Noodles (Veg)",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 20900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "158570009",
                                                            name: "Veg Schezwan Hakka Noodle",
                                                            category:
                                                                "Rice & Noodles (Veg)",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 20900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                            ],
                                            subtitleSuffix: {},
                                            image: "e92df002b02b3326b43fcdc178a2c1f0",
                                            categoryId: "56640128",
                                        },
                                    },
                                },
                                {
                                    card: {
                                        card: {
                                            "@type":
                                                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            title: "Rice & Noodles (Non Veg)",
                                            itemCards: [
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148861",
                                                            name: "Egg Biryani",
                                                            category:
                                                                "Rice & Noodles (Non Veg)",
                                                            imageId:
                                                                "ec7e64bc8a40399279d529155939de35",
                                                            inStock: 1,
                                                            price: 27900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "EGG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.8",
                                                                        ratingCount:
                                                                            "6 ratings",
                                                                        ratingCountV2:
                                                                            "6",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097526",
                                                            name: "Chicken Pulao",
                                                            category:
                                                                "Rice & Noodles (Non Veg)",
                                                            inStock: 1,
                                                            price: 31900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148859",
                                                            name: "Chicken Biryani",
                                                            category:
                                                                "Rice & Noodles (Non Veg)",
                                                            imageId:
                                                                "fyubs4fywivonmhbv8zw",
                                                            inStock: 1,
                                                            price: 35900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {
                                                                text: "Bestseller",
                                                                textColor:
                                                                    "#ffffff",
                                                                topBackgroundColor:
                                                                    "#d53d4c",
                                                                bottomBackgroundColor:
                                                                    "#b02331",
                                                            },
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            isBestseller: true,
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.6",
                                                                        ratingCount:
                                                                            "45 ratings",
                                                                        ratingCountV2:
                                                                            "45",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148857",
                                                            name: "Mutton Biryani",
                                                            category:
                                                                "Rice & Noodles (Non Veg)",
                                                            imageId:
                                                                "84d2a4768e87ed0eb19741f4b9e5b7d4",
                                                            inStock: 1,
                                                            price: 38900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {
                                                                text: "Bestseller",
                                                                textColor:
                                                                    "#ffffff",
                                                                topBackgroundColor:
                                                                    "#d53d4c",
                                                                bottomBackgroundColor:
                                                                    "#b02331",
                                                            },
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            isBestseller: true,
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "3.8",
                                                                        ratingCount:
                                                                            "17 ratings",
                                                                        ratingCountV2:
                                                                            "17",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#D9EFEC",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_medium",
                                                                        ratingTextColor:
                                                                            "rating_medium",
                                                                        ratingCountTextColor:
                                                                            "rating_medium",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097528",
                                                            name: "Chicken Fried Rice",
                                                            category:
                                                                "Rice & Noodles (Non Veg)",
                                                            imageId:
                                                                "3356b0d342bddfe140dadbb086892e5f",
                                                            inStock: 1,
                                                            price: 31900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.3",
                                                                        ratingCount:
                                                                            "4 ratings",
                                                                        ratingCountV2:
                                                                            "4",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097529",
                                                            name: "Chicken Schezwan Fried Rice",
                                                            category:
                                                                "Rice & Noodles (Non Veg)",
                                                            imageId:
                                                                "aeb1143dcd4f99bc0e98f380678cd541",
                                                            inStock: 1,
                                                            price: 31900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "127750852",
                                                            name: "Chicken Hakka Noodle",
                                                            category:
                                                                "Rice & Noodles (Non Veg)",
                                                            inStock: 1,
                                                            price: 30900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "127750853",
                                                            name: "Chicken Schezwan Hakka Noodle",
                                                            category:
                                                                "Rice & Noodles (Non Veg)",
                                                            inStock: 1,
                                                            price: 30900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "NONVEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                            ],
                                            subtitleSuffix: {},
                                            image: "ec7e64bc8a40399279d529155939de35",
                                            categoryId: "56640129",
                                        },
                                    },
                                },
                                {
                                    card: {
                                        card: {
                                            "@type":
                                                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            title: "Indian Breads",
                                            itemCards: [
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "127750854",
                                                            name: "Tandoori Roti",
                                                            category:
                                                                "Indian Breads",
                                                            imageId:
                                                                "0ebfd665e59b4ed2763025bad72b1270",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 2200,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.0",
                                                                        ratingCount:
                                                                            "64 ratings",
                                                                        ratingCountV2:
                                                                            "64",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "127750855",
                                                            name: "Tandoori Roti Butter",
                                                            category:
                                                                "Indian Breads",
                                                            imageId:
                                                                "f76a8db240cfe9f144c6879a64e2c4d5",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 2700,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.6",
                                                                        ratingCount:
                                                                            "22 ratings",
                                                                        ratingCountV2:
                                                                            "22",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148871",
                                                            name: "Lachha Paratha",
                                                            category:
                                                                "Indian Breads",
                                                            imageId:
                                                                "b85ed4f300d122ae59fd7c6becea5dd3",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 4500,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.3",
                                                                        ratingCount:
                                                                            "26 ratings",
                                                                        ratingCountV2:
                                                                            "26",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "158570012",
                                                            name: "Naan (Plain)",
                                                            category:
                                                                "Indian Breads",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 4900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "158570013",
                                                            name: "Naan (Butter)",
                                                            category:
                                                                "Indian Breads",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 4900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.3",
                                                                        ratingCount:
                                                                            "5 ratings",
                                                                        ratingCountV2:
                                                                            "5",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "42148695",
                                                            name: "Garlic Naan",
                                                            category:
                                                                "Indian Breads",
                                                            imageId:
                                                                "058921814047e24631cee7f9a6036903",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 6500,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {
                                                                text: "Bestseller",
                                                                textColor:
                                                                    "#ffffff",
                                                                topBackgroundColor:
                                                                    "#d53d4c",
                                                                bottomBackgroundColor:
                                                                    "#b02331",
                                                            },
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            isBestseller: true,
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.3",
                                                                        ratingCount:
                                                                            "26 ratings",
                                                                        ratingCountV2:
                                                                            "26",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097537",
                                                            name: "Mix Stuffed Kulcha",
                                                            category:
                                                                "Indian Breads",
                                                            imageId:
                                                                "e7424b20241ea7eda7a3423123339c7c",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 6500,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.2",
                                                                        ratingCount:
                                                                            "10 ratings",
                                                                        ratingCountV2:
                                                                            "10",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "114097538",
                                                            name: "Mix Stuffed Paratha",
                                                            category:
                                                                "Indian Breads",
                                                            imageId:
                                                                "4bb2b61f5e51d11eb73a0a3e54ec10d7",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 6500,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {
                                                                        rating: "4.3",
                                                                        ratingCount:
                                                                            "8 ratings",
                                                                        ratingCountV2:
                                                                            "8",
                                                                    },
                                                                ratingsPresentationConfig:
                                                                    {
                                                                        bgGradient:
                                                                            {
                                                                                colours:
                                                                                    [
                                                                                        "#C8F9E5",
                                                                                        "#FFFFFF",
                                                                                    ],
                                                                                gradientDirection:
                                                                                    "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
                                                                            },
                                                                        ratingIconColor:
                                                                            "rating_very_good",
                                                                        ratingTextColor:
                                                                            "rating_very_good",
                                                                        ratingCountTextColor:
                                                                            "rating_very_good",
                                                                        ratingFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                        ratingCountFontName:
                                                                            "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                                                    },
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                            ],
                                            subtitleSuffix: {},
                                            image: "0ebfd665e59b4ed2763025bad72b1270",
                                            categoryId: "7072470",
                                        },
                                    },
                                },
                                {
                                    card: {
                                        card: {
                                            "@type":
                                                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            title: "Desserts",
                                            itemCards: [
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "158570014",
                                                            name: "Gulab Jamun",
                                                            category:
                                                                "Desserts",
                                                            imageId:
                                                                "FOOD_CATALOG/IMAGES/CMS/2024/4/8/8015440d-3661-420e-b1e0-45d5d4487350_4cb0439f-f71e-49a8-aac0-6016bfb8a528.jpg",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 5900,
                                                            variants: {},
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                            ],
                                            subtitleSuffix: {},
                                            image: "FOOD_CATALOG/IMAGES/CMS/2024/4/8/8015440d-3661-420e-b1e0-45d5d4487350_4cb0439f-f71e-49a8-aac0-6016bfb8a528.jpg",
                                            categoryId: "7072479",
                                        },
                                    },
                                },
                                {
                                    card: {
                                        card: {
                                            "@type":
                                                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            title: "Bakery",
                                            itemCards: [
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "158570015",
                                                            name: "Cookies (250 Gms)",
                                                            category: "Bakery",
                                                            description:
                                                                "(Choco Chips, Pista, Almond, Jeera, Sweet & Salted)",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 13500,
                                                            variants: {
                                                                variantGroups: [
                                                                    {
                                                                        groupId:
                                                                            "52400322",
                                                                        name: "Choice",
                                                                        variations:
                                                                            [
                                                                                {
                                                                                    name: "Choco Chips",
                                                                                    default: 1,
                                                                                    id: "163937852",
                                                                                    inStock: 1,
                                                                                    isVeg: 1,
                                                                                    isEnabled: 1,
                                                                                },
                                                                                {
                                                                                    name: "Pista",
                                                                                    id: "163937853",
                                                                                    inStock: 1,
                                                                                    isVeg: 1,
                                                                                    isEnabled: 1,
                                                                                },
                                                                                {
                                                                                    name: "Almond",
                                                                                    id: "163937854",
                                                                                    inStock: 1,
                                                                                    isVeg: 1,
                                                                                    isEnabled: 1,
                                                                                },
                                                                                {
                                                                                    name: "Jeera",
                                                                                    id: "163937855",
                                                                                    inStock: 1,
                                                                                    isVeg: 1,
                                                                                    isEnabled: 1,
                                                                                },
                                                                                {
                                                                                    name: "Sweet",
                                                                                    id: "163937856",
                                                                                    inStock: 1,
                                                                                    isVeg: 1,
                                                                                    isEnabled: 1,
                                                                                },
                                                                                {
                                                                                    name: "Salted",
                                                                                    id: "163937857",
                                                                                    inStock: 1,
                                                                                    isVeg: 1,
                                                                                    isEnabled: 1,
                                                                                },
                                                                            ],
                                                                    },
                                                                ],
                                                            },
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                                {
                                                    card: {
                                                        "@type":
                                                            "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        info: {
                                                            id: "158570019",
                                                            name: "Mousse [Eggless]",
                                                            category: "Bakery",
                                                            description:
                                                                "(Choco, P/A, Mango, Strawbeery)",
                                                            inStock: 1,
                                                            isVeg: 1,
                                                            price: 4500,
                                                            variants: {
                                                                variantGroups: [
                                                                    {
                                                                        groupId:
                                                                            "52400325",
                                                                        name: "Choice",
                                                                        variations:
                                                                            [
                                                                                {
                                                                                    name: "Choco",
                                                                                    default: 1,
                                                                                    id: "163937869",
                                                                                    inStock: 1,
                                                                                    isVeg: 1,
                                                                                    isEnabled: 1,
                                                                                },
                                                                                {
                                                                                    name: "Pineapple",
                                                                                    id: "163937870",
                                                                                    inStock: 1,
                                                                                    isVeg: 1,
                                                                                    isEnabled: 1,
                                                                                },
                                                                                {
                                                                                    name: "Mango",
                                                                                    id: "163937871",
                                                                                    inStock: 1,
                                                                                    isVeg: 1,
                                                                                    isEnabled: 1,
                                                                                },
                                                                                {
                                                                                    name: "Strawbeery",
                                                                                    id: "163937872",
                                                                                    inStock: 1,
                                                                                    isVeg: 1,
                                                                                    isEnabled: 1,
                                                                                },
                                                                            ],
                                                                    },
                                                                ],
                                                            },
                                                            variantsV2: {},
                                                            itemAttribute: {
                                                                vegClassifier:
                                                                    "VEG",
                                                            },
                                                            ribbon: {},
                                                            type: "ITEM",
                                                            itemBadge: {},
                                                            badgesV2: {},
                                                            ratings: {
                                                                aggregatedRating:
                                                                    {},
                                                            },
                                                        },
                                                        analytics: {},
                                                        hideRestaurantDetails: true,
                                                    },
                                                },
                                            ],
                                            subtitleSuffix: {},
                                            categoryId: "56640130",
                                        },
                                    },
                                },
                                {
                                    card: {
                                        card: {
                                            "@type":
                                                "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                                            type: "FSSAI",
                                            imageId: "fssai_final_edss9i",
                                            text: [
                                                "License No. 11416210000094",
                                            ],
                                        },
                                    },
                                },
                                {
                                    card: {
                                        card: {
                                            "@type":
                                                "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                                            name: "Dev International",
                                            area: "Mohan Nagar",
                                            completeAddress:
                                                "vip road khajria chowk",
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },
            },
        ],
        firstOffsetRequest: true,
        isQCLink: false,
    },
    tid: "69951f20-b7c2-4008-8845-9ff5e527fd3b",
    sid: "lela0465-b42e-4ae5-bcc1-317abecafa6d",
    deviceId: "80134633-05fa-3ffb-e190-01a2bc12d170",
    csrfToken: "9Z36rW0ovWTx-ReL0TxIGxBgFCZY-DNRRKWMwdQ0",
};

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_MENU_DATA),
    })
);

describe("RestaurantMenu Component", () => {
    it("should load RestaurantMenu component and display menu items", async () => {
        await act(
            async () =>
                await render(
                    <BrowserRouter>
                        <Provider store={appStore}>
                            <RestaurantMenu />
                            <Header />
                            <Cart />
                        </Provider>
                    </BrowserRouter>
                )
        );

        // verify restaurant details and items
        expect(screen.getByText("Dev International")).toBeInTheDocument();
        expect(screen.getByText("Recommended (20)")).toBeInTheDocument();
        expect(screen.getByTestId("cartItemCount").textContent).toEqual("0");

        // add to cart
        const addBtns = screen.getAllByRole("button", { name: "+ Add" });
        fireEvent.click(addBtns[0]);
        expect(screen.getByTestId("cartItemCount").textContent).toEqual("1");
        fireEvent.click(addBtns[1]);
        expect(screen.getByTestId("cartItemCount").textContent).toEqual("2");

        // verify cart items
        const cartItems = screen.getAllByTestId("cartItem");
        expect(cartItems.length).toBe(2);

        // clear cart
        expect(
            screen.getByRole("button", { name: "Clear Cart" })
        ).toBeInTheDocument();
        const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });
        fireEvent.click(clearCartBtn);
        expect(screen.getByTestId("cartItemCount").textContent).toEqual("0");
    });
});
