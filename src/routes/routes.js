import React, { lazy } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import About from "../pages/About";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Contact from "../pages/Contact";
export const routes = [
    {
        path: '/',
        component: Home,
        layout: DefaultLayout,
        title: "Biocoder Teknoloji A.Ş",
    },
    {
        path: '/about',
        component: About,
        layout: DefaultLayout,
        title: "Hakkımızda",
    },
    {
        path: '/products',
        component: Products,
        layout: DefaultLayout,
        title: "Ürünler",
    },
    {
        path: '/products/:productId',
        component: ProductDetail,
        layout: DefaultLayout,
        title: "Ürünler",
    },
    {
        path: '/blog',
        component: Blog,
        layout: DefaultLayout,
        title: "Blog",
    },
    {
        path: '/contact',
        component: Contact,
        layout: DefaultLayout,
        title: "İletişim",
    }
]