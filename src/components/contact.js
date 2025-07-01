// Replace the contactdetails array and the JSX section in your existing component

// Keep the same variable name but restructure the data
const contactdetails = {
    website: 'www.accomateglobal.com',
    email: 'info@accomateglobal.com',
    phones: ['+91 8000494669', '+61 3 9917 7471'],
    locations: [
        { 
            country: 'Australia', 
            flag: Australia, 
            address: '203/2 Infinity Drive Truganina, VIC, Australia, 3029' 
        },
        { 
            country: 'Canada', 
            flag: Canada, 
            address: '1234051 Dunmow Crescent Mississauga Ontario L4Z1E1' 
        },
        { 
            country: 'India', 
            flag: India, 
            address: 'G-3,85, Madhuvan Building, Ellisbridge, Ahmedabad, INDIA – 380006' 
        }
    ]
};

// Replace the existing JSX section that renders the contact details
// Replace this entire section:
/*
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {contactdetails.map((i, index) => {
        // ... old code
    })}
</div>
*/

// With this new layout:
<div className="mt-10 flex justify-center">
    <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="100" className="rounded-lg p-8 border shadow-lg max-w-2xl w-full">
        <div className="space-y-6">
            {/* Website */}
            <div className="flex items-center space-x-4">
                <div className="text-[#1B2D9F] text-xl flex shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
                    </svg>
                </div>
                <span className="text-gray-800 font-medium">{contactdetails.website}</span>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
                <div className="text-[#1B2D9F] text-xl flex shrink-0">
                    <MdOutlineEmail size={24} />
                </div>
                <a href={`mailto:${contactdetails.email}`} className="text-gray-800 font-medium hover:text-[#1B2D9F] duration-300">
                    {contactdetails.email}
                </a>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start space-x-4">
                <div className="text-[#1B2D9F] text-xl flex shrink-0 mt-1">
                    <IoCallOutline size={24} />
                </div>
                <div className="space-y-1">
                    {contactdetails.phones.map((phone, index) => (
                        <div key={index}>
                            <a href={`tel:${phone}`} className="text-gray-800 font-medium hover:text-[#1B2D9F] duration-300">
                                {phone}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Locations with Flags */}
            {contactdetails.locations.map((location, index) => (
                <div key={index} className="flex items-start space-x-4">
                    <div className="flex shrink-0 mt-1">
                        <Image 
                            src={location.flag} 
                            alt={`${location.country} flag`} 
                            width={24} 
                            height={24} 
                            className="rounded-full object-cover"
                        />
                    </div>
                    <span className="text-gray-800 font-medium leading-relaxed">
                        {location.address}
                    </span>
                </div>
            ))}
        </div>
    </div>
</div>
