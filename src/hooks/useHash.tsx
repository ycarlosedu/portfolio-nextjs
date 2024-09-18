"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const getHash = () =>
  typeof window !== "undefined" ? window.location.hash : "";

const useHash = () => {
  const [isClient, setIsClient] = useState(false);
  const [hash, setHash] = useState<string>(getHash());
  const params = useParams();

  useEffect(() => {
    setIsClient(true);
    setHash(getHash());
  }, [params]);

  return isClient ? hash : "";
};

export default useHash;
