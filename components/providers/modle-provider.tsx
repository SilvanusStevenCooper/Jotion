"use client";

import { useEffect, useState } from "react";
import SettingsModle from "@/components/modles/settings-modle";
import CoverImageModle from "@/components/modles/cover-image-modle";

const ModleProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <SettingsModle />
      <CoverImageModle />
    </>
  );
};

export default ModleProvider;
