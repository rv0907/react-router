import { useContext } from "react";
import Usercontext from "./Usercontext";

export default function Footer() {
  const { NAME } = useContext(Usercontext);
  return <>hello {NAME}</>;
}
