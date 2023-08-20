const people = [
    {
        name: 'Somer G. Anderson',
        role: 'Ph.D., CPA, CGMA, CFE\nFinance & Accounting',
        imageUrl:
            'https://www.thebalancemoney.com/thmb/TufmtW_a2tAgRRgvP25e1uzYUZI=/72x72/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/IMG_7291_Crop-SomerAnderson-934c393220f84cc4855a3ef0448b710d.jpg',
    },
    {
        name: 'Ebony Howard',
        role: 'CPA\nTaxes & Accounting',
        imageUrl:
            'https://www.thebalancemoney.com/thmb/TRbQ_KjBdugGSQS9hR0O1j_O4r4=/72x72/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Office2-EbonyHoward-bfcf94f429a1438081fbe922661b538c.jpg',
    },
    {
        name: 'Thomas J. Catalano',
        role: 'MBA, CFP\nFinancial Planning',
        imageUrl:
            'https://www.thebalancemoney.com/thmb/5SW4voufaMZO_jBiMnEjQIkhazA=/72x72/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/P2-ThomasCatalano-1d1189bf85d0470eb415291cb149a744.jpg',
    },
    {
        name: 'Marguerita Cheng',
        role: 'CFP, CRPC, RICP, CDFA\nFinancial Planning & Insurance',
        imageUrl:
            'https://www.thebalancemoney.com/thmb/Y_gdoMd0vqrGhAUmvhEYNisJZUA=/72x72/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20171011-Rita-Cheng-01-low-RitaCheng-3f7e01a82bd343d582d7fd40d5bf708a.JPG',
    },
    {
        name: 'Julius Mansa',
        role: 'M.Fin\nCorporate Finance & FinTech',
        imageUrl:
            'https://www.thebalancemoney.com/thmb/xvo_XncVHVlRf5YbwhmUAo9P6FA=/72x72/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/mansaPicture_08T-Copy-JuliusMansa-51a64a8a8bcb44a89b1b31e6e2db9c9b.jpg',
    },
    {
        name: 'Gordon Scott',
        role: 'CMT\nInvesting & Trading',
        imageUrl:
            'https://www.thebalancemoney.com/thmb/FG9Q32zyOjXuTsuqEf__sE2xJFg=/72x72/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gordonscottphoto-5bfc26c446e0fb00265b0ed4-d78ce48bf3bb4736a90cc4578e8557ed.jpg',
    },
    // More people...
];


export default function MyTeam() {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-8 sm:space-y-12">
                    <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Team</h2>
                    </div>
                    <ul
                        role="list"
                        className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"
                    >
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="space-y-4">
                                    <img className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src={person.imageUrl} alt="" />
                                    <div className="space-y-2">
                                        <div className="text-xs font-medium lg:text-sm">
                                            <h3>{person.name}</h3>
                                            <p className="text-indigo-600">{person.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
