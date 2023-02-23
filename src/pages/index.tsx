import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "../Components/Navigation/NavBar";
import SideBar from "../Components/Navigation/SideBar";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: any) {
  const router = useRouter();

  useEffect(() => {
    router.push("/MainScreen");
  }, []);

  return <></>;
}
