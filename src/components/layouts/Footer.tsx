import React from "react";
import FooterComponent from "./FooterComponent";
import { getGlobalData } from "@/data/loader";

type Props = {};

export default async function Footer({}: Props) {
  const globalResponse = await getGlobalData();
  const footerData = globalResponse?.data?.footer;
  return (
    <div>
      <FooterComponent data={footerData} />
    </div>
  );
}
