import { Breadcrumb } from "@/components/other";
import { Contact, Locations } from "@/components/contact";
// import WorldMap from "@/components/worlmap";

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
            {/* <Locations /> */}
            {/* <WorldMap /> */}
        </div>
    )
}