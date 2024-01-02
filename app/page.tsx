import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import ImageGallery from "./components/ImageGallery";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  // return <SliceZone slices={page.data.slices} components={components} />;
  return <ImageGallery/>
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

