import Link from "next/link"
import Image from "next/image"
import { Button } from "../ui/button"

const Header = () => {
    return (
        <header className="w-full border-b">
            <div className="wrapper flex items-center justify-between">
                <Link href='/' className="w-36">
                    <Image src='/assets/images/logo.svg' width={64} height={38} alt='Eventify Logo'/>
                </Link>
                <div className="flex w-32 justify-end gap-3">
                    <Button className=" rounded-full" size='lg'>
                        <Link href='/sign-in'>
                            Login
                        </Link>
                        
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header