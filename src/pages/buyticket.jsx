import Head from "next/head";
import React from "react";
import { ToastContainer } from "react-toastify";
import { Heroes } from "../components/Heroes";
import { HeaderApps } from "../components/apps/HeaderApps";
const BuyTicket = () => {
  return (
    <>
      <Head>
        <title>NFT Ticketing Platform</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            reverseOrder={false}
            theme="light"
          />
          <HeaderApps />
          <Heroes />
        </div>
      </main>
    </>
  );
};

export default BuyTicket;