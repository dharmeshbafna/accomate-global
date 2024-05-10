import { Breadcrumb } from "@/components/other";
import { Contact } from "@/components/contact";

export const metadata = {
    title: 'Contact | Accomate Global',
    icons: {
        icon: '/n_icon.png'
    }
}

export default function CONTACT() {
    return (
        <div>
            <Breadcrumb />
            <Contact />
        </div>
    )
}