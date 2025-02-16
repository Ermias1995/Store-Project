import {Button} from "@/components/ui/button";
import Link from "next/link";
import { IoMdAppstore } from "react-icons/io";


function Logo() {
  return (
    <Button size='icon' asChild>
      <Link href="/">
        <IoMdAppstore className="w-6 h-6"/>
      </Link>
    </Button>
  )
}
export default Logo