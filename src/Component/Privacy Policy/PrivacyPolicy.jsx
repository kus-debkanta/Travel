import React, { useState } from 'react'
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {

    const [transport, setTransport] = useState(false)
    const transportHandler = () => {
        setTransport(!transport)
    }
    return (
        <div className=' privacy-policy'>
            <h2>Privacy Policy</h2>
            <div className='privacyandpolicy'>
                <div className='form-left'>
                    <h4>Categories</h4>
                    <div>
                        <ul>
                            <li>About the USA<i className="fa-solid fa-caret-down"></i></li>
                            <li>Visa & Entry<i className="fa-solid fa-caret-down"></i></li>
                            <li onClick={transportHandler}>Transportation<i className={transport ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></i></li>
                            <div className='' style={{ display: transport ? 'block' : 'none', backgroundColor: 'rgb(171, 171, 171)', marginTop: '0px', marginBottom: '10px' }}>
                                <ul>
                                    <li style={{ borderBottom: 'none', color: 'rgb(2, 2, 110)', fontWeight: '500', cursor: 'pointer' }}><a>Train Travel</a></li>
                                    <li style={{ borderBottom: 'none', color: 'rgb(2, 2, 110)', fontWeight: '500', cursor: 'pointer' }}><a>Rentals & Driving in the USA</a></li>
                                    <li style={{ borderBottom: 'none', color: 'rgb(2, 2, 110)', fontWeight: '500', cursor: 'pointer' }}><a>Public Transit & Ride Shares</a></li>
                                    <li style={{ borderBottom: 'none', color: 'rgb(2, 2, 110)', fontWeight: '500', cursor: 'pointer' }}><a>Bus Travel</a></li>
                                    <li style={{ borderBottom: 'none', color: 'rgb(2, 2, 110)', fontWeight: '500', cursor: 'pointer' }}><a>Boat Travel</a></li>
                                </ul>
                            </div>
                            <li>Accomodation<i className="fa-solid fa-caret-down"></i></li>
                            <li>Attractions & Tours<i className="fa-solid fa-caret-down"></i></li>
                            <li>Communication & Technology<i className="fa-solid fa-caret-down"></i></li>
                            <li>Health & Safety<i className="fa-solid fa-caret-down"></i></li>
                            <li>Accessible Travel<i className="fa-solid fa-caret-down"></i></li>
                        </ul>
                    </div>
                </div>
                <div className='form-right'>
                    <h1>Privacy Policy and Practices</h1>
                    <p>This statement outlines the policies and practices – last updated May 25, 2018 – of the Corporation for Travel Promotion dba Brand USA regarding the collection and use of your personal information. Brand USA is a Washington, DC based nonprofit corporation with the mission of increasing international visitation to the United States, educating travelers about exit and entry policies, and correcting misperceptions about the United States. Brand USA is a data controller in relation to information collected or received through your use of our websites or products. We reserve the right to make changes to this Policy at any time and we may notify you of changes by email our through messaging on our website. Your continued use of our site, particularly after you accept Cookies, constitutes your consent to this Policy. If after reviewing our privacy policy you have any questions or concerns please send an email to: webadministrator@thebrandusa.com or send a letter to the following address.
                        <br></br>
                        Brand USA<br></br>
                        1725 Eye (I) Street, NW, Suite 800<br></br>
                        Washington, DC 20006<br></br>
                        United States of America<br></br>
                        <br></br>
                        <strong>I. Information We Collect:</strong>
                        <br></br>
                        Brand USA may collect, use, store, and transfer different types of information about you via direct and automated methods.
                        <br></br>
                        (A) <strong>Identity Data</strong> includes first and last name, username or other identifiers, title, age, and gender.
                        <br></br>
                        (B) <strong>Contact Data</strong> includes billing, delivery, and email addresses, and telephone numbers.
                        <br></br>
                        (C) <strong>Financial Data</strong> includes bank account information
                        <br></br>
                        (D) <strong>Technical Data</strong> includes internet protocol (IP)
                        address, login data, browser information, time zone, geolocation, operating system and platform and other technology on devices you use to access Brand USA websites.
                        <br></br>
                        (E) <strong>Inquiry Data</strong> includes information you provide Brand USA when you contact us directly (by any means of communication including via our website) or when you visit us at trade shows or sales missions, participate in our surveys, competitions, or drawings. We may record and keep information about that particular communication, including name, reason you contacted us, and any information we provided.
                        <br></br>
                        (F) <strong>Profile Data</strong> includes username and password, interests, preferences, feedback and survey responses. We may also receive content that you upload or post, such as your name, address, telephone number, email address, pictures, gender, or other information.
                        <br></br>
                        (G) <strong>Usage Data</strong> includes information about how you use our website, including the frequency and pattern of your use.
                        <br></br>
                        (H) <strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and third parties and your communication preferences.
                        <br></br>
                        (I) We also collect, use, and share <strong>Aggregate Data</strong> such as statistical or demographic data for any purpose. Aggregated data may be derived from your personal data, but is not considered personal data by law as the data does not directly or indirectly reveal your identity. We may aggregate Usage Data to analyze page or feature use.
                        <br></br>
                        <strong>II. Collection</strong>
                        <br></br>
                        Brand USA uses different methods to collect data from and about you through:
                        <br></br>
                        (A) <strong>Direct</strong> – you may provide identity, contact, financial, and inquiry data by filling out forms, corresponding, providing business cards. This includes personal data when you attend one of our events, create an account, subscribe to one of our products (e.g., newsletters), complete a survey, etc.
                        <br></br>
                        (B) <strong>Automated</strong> – As you use our website we may automatically collect Technical Data about your equipment, browsing actions, and patterns. We collect this information by using Cookies (see below), server logs, and other similar technologies. We may also receive Technical Data about you if you visit other websites employing our cookies, which may include:
                        <br></br>
                        Details of your usage patterns, content (including advertisements) that you view and interact with including information on the services and applications you are using in-device to personalize services to your needs. This includes information about your visit, such as your browser software, pages you viewed and how long you spent on the site.<br></br>
                        Service product or server logs, which hold Technical Data about your use of our service or websites, such as your IP address, device ID(s), domain, device and application settings, errors and hardware activity. We may use your IP address to determine your location / country of origin.<br></br>
                        Device information such as your device ID(s), including information about where your device is physically located. For example, when you are using a geo-location service or application and have given your consent to your location being shared.
                        (C) This information will better enable Brand USA to deliver you the content that you enjoy in the language that you understand as fast as possible, increasing your enjoyment of the site.
                        <br></br>
                        (D) <strong>Third Parties</strong> We may receive personal data from a variety of third parties such as advertising networks, search information providers, analytics providers, data aggregators and specialist agencies, social media entities, including your interactions on such sites, and log-in information.
                        <br></br>
                        <strong>III. Usage</strong>
                        <br></br>
                        (A) We will only use your data to the extent permitted by law. We may use the information you provide to us or which we collect in the following ways:
                        <br></br>
                        <ul>
                            <li>To register you as a user on our website.</li>
                            <li>To manage our relationship with you by:</li>
                            <li>Notifying you of changes to policies</li>
                            <li>Asking you to participate in surveys</li>
                            <li>Engage in competitions, programs, or surveys</li>
                            <li>Administer and protect our business and the website including trouble shooting, data analysis, system maintenance, support, reporting, and hosting data.</li>
                            <li>Deliver relevant web content and advertisements to you and measure or understand the effectiveness of the advertising we serve you.</li>
                            <li>Use analytics to improve and enhance existing products, services, and applications and develop new offerings recommendations, advertisements and other communications and learn more about users’ preferences in general.</li>
                            <li>To make suggestions and recommendations to you about new Brand USA advertising products and content, including managing surveys to better understand your preferences.</li>
                            <li>Prevent Fraud</li>
                            <li>To create and manage customer relations management activity.</li>
                        </ul>
                        (B) We will only use your data for the purpose for which we collected it, unless we reasonably consider that we need to use it for another reason and that reason is compatible with original purpose for which we gained your consent. Please note that we may process your personal data without your knowledge, but still in compliance with the law. Brand USA’s legal basis for collecting this information is generally through some combination of your consent, contract law, to comply with legal obligations, or is necessary for our legitimate business interests.
                        <br></br>
                        <strong>IV. Marketing and Communications</strong>
                        <br></br>
                        (A) We may use your Identity, Contact, Technical, Usage, and Profile Data to provide you with product and service updates, newsletters and other communications about existing and new products and services by mail, phone, in-device messaging, and/or text message.
                        <br></br>
                        (B) You will only receive marketing communications from us if you have requested information from us; or if you provided us with your details when you entered a competition or registered for a promotion and, in each case, have opted in for such marketing.
                        <br></br>
                        (C) You can ask us or third parties to stop sending you marketing messages or communications at any time by clicking the unsubscribe button at the bottom of the emails or by contacting us or such third parties at any time.
                        <br></br>
                        <strong>V. Cookies and Pixel Tags</strong>
                        <br></br>
                        (A) Our websites use industry-wide technologies, such as cookies, to collect information about the use of our websites and email communications. For instance, these technologies tell us which visitors clicked on certain elements on a website or email and recognize your browser the next time you visit our websites.
                        <br></br>
                        (B) Cookies allow us to customize your experience to better match your interests and preferences, or to facilitate your signing in to use the services. Most browsers will all you to erase cookies from your computer hard drive, block acceptance of cookies or receive a warning before a cookie is stored. If you block or erase cookies, we may not be able to restore preferences or personalize your online experience.
                        <br></br>
                        (C) Pixel tags are not visible to the user of the website and consist of a few lines of computer code. Our website, advertisements, and email service provider use pixel tags to determine your ability to receive HTML-based email messages. This capability helps our service provider send email in a format you can read. The sensor does not collect or use any other information. Pixel tags also allow us to know how many users open an email and allow our service provider to compile aggregated statistics about an email campaign for us.
                        <br></br>
                        <strong>VI. Sharing and Third Parties</strong>
                        <br></br>
                        (A) Brand USA uses the services of third parties, such as interactive marketing agencies, market researchers and email service providers to assist us with marketing and promoting the website consistent with the purposes articulated in the Usage section above. These parties are contractually prohibited from using personally identifiable information for any purpose other than for the purpose Brand USA specifies. We do not permit the sale of Personal Information.
                        <br></br>
                        (B) Adara is one such third-party service provider. Adara is a data controller collecting information about your travel activities and preferences that allows Brand USA and/or approved 3rd parties to engage with you via personalized, relevant advertisements when you’re browsing other websites and social media platforms, and through ADARA analytics services. You can learn more about ADARA and opt out at: https://adara.com/privacy-promise/
                        <br></br>
                        (C) We also prepare anonymous, aggregate or generic data for a number of purposes as outlined above. As we consider that you cannot be reasonably identified from this information, we may share it with any third party, including partners, advertisers, industry bodies, the media and/or the general public.
                        <br></br>
                        <strong>VII. Security</strong>
                        <br></br>
                        (A) While we cannot guarantee that unauthorized access will never occur, we assure that we take care in maintaining the security of your personal data to prevent access to it through the use of technology and procedure. After Personal Information reaches Brand USA, it is stored on a secure server that resides behind firewalls designed to block unauthorized access.
                        <br></br>
                        <strong>VIII. Retention and Deletion</strong>
                        <br></br>
                        (A) Personal data that we collect for any purpose(s) shall not be kept for longer than is necessary for that purposes(s). Personal data can be retained for a period of twenty-four (24) months unless it is updated. Emails may be retained for a period of up to seven (7) years. There are some cases in which it is not possible to specify in advance the periods for which your personal data will be retained, but will only be kept in accordance with its collected purpose.
                        <br></br>
                        <strong>IX. Access and Your Rights</strong>
                        <br></br>
                        (A) Your principal rights under data protection law are:
                        <br></br>
                        <ul>
                            <li>The right to be informed;</li>
                            <li>The right to access;</li>
                            <li>The right to rectification;</li>
                            <li>The right to erasure;</li>
                            <li>The right to restrict processing;</li>
                            <li>The right to object to processing;</li>
                            <li>The right to data portability;</li>
                            <li>The right to complain to a supervisory authority;</li>
                            <li>And the right to withdraw consent.</li>
                        </ul>
                        {/* The right to be informed;<br></br>
                        The right to access;<br></br>
                        The right to rectification;<br></br>
                        The right to erasure;<br></br>
                        The right to restrict processing;<br></br>
                        The right to object to processing;<br></br>
                        The right to data portability;<br></br>
                        The right to complain to a supervisory authority;<br></br>
                        And the right to withdraw consent.<br></br> */}
                        (B) You have the right to confirm whether we process your personal data, and, where we do, access to the personal data along with certain other information. The additional information includes the details of the purpose of the processing, categories of details concerned, and the recipients of the personal data.
                        <br></br>
                        (C) You have the right to rectify inaccurate personal data we hold about you and, taking into account the purposes of the processing, to have any incomplete data about you completed.
                        <br></br>
                        (D) In certain circumstances, you have the right to erasure of your personal data without undue delay. Those circumstances include: when the personal data are no longer necessary in relation to the purposes for which they were collected or otherwise processed; you withdraw consent to consent-based processing; you object to the processing under certain rules of applicable data protection law; the process is for direct marketing purposes; and the personal data have been unlawfully processed. There are exceptions, generally where processing is necessary; for exercising the right to freedom of expression and information; for compliance with legal obligation; or for establishment, exercise or defense of legal claims.
                        <br></br>
                        (E) To the extent that the legal basis for our processing of your personal data is:
                        <br></br>
                        Consent; or
                        That the processing is necessary for the performance of a contract to which you are party or in order to take steps at your request prior to entering into a contract and such processing is carried out by automation, you have the right to receive your personal data from us in a reasonable and commonly used and machine-readable format. This right does not extend to situations where it would adversely affect the rights and freedoms of others.<br></br>
                        (F) To the extent that the legal basis for our processing of your personal information is consent, you have the right to withdraw that consent at any time. Withdrawal will not affect the lawfulness of processing before the withdrawal. It is our intention to only send you email communications that you want to receive. When you provide us with your email address by creating an account, we will periodically contact you via email about Brand USA, its programmes and services. Every time you receive an email, you will be provided the choice to opt-out of future emails by following the instructions provided in the email. You may also opt-out by emailing webadministrator@thebrandusa.com or sending a letter to:
                        <br></br>
                        Brand USA<br></br>
                        1725 Eye (I) Street, NW, Suite 800<br></br>
                        Washington, DC 20006<br></br>
                        United States of America
                        Please allow 10 business days for us to process your opt-out and include your email address if you opt-out via postal mail.
                        <br></br>
                        (G) Please note that Brand USA will never send you an email requesting your password, credit card number, social security number or other sensitive personal or private identification information. If you receive an email that looks like it is from Brand USA, but asks you for Personal Information, it is a fraudulent email and you should not reply or provide such information.
                        <br></br>
                        <strong>X. Other Sites</strong>
                        <br></br>
                        Brand USA is only responsible for the privacy policy statement and content of this website. We are not responsible for the privacy practices or the use of cookies on websites that you have accessed this website from, and to the non-Corporation for Travel Promotion websites that you may access from this website.
                        <br></br>
                        <strong>XI. Contacting Brand USA about Privacy Issues:</strong>
                        <br></br>
                        Comments, suggestions or questions about our privacy policy statement and Brand USA's privacy practices are welcome.
                        <br></br>
                        Please contact us:
                        <br></br>
                        By email, at webadministrator@thebrandusa.com.
                        <br></br>
                        By phone: (202) 536-2060
                        <br></br>
                        By mail at:
                        <br></br>
                        Brand USA<br></br>
                        1725 Eye (I) Street, NW, Suite 800<br></br>
                        Washington, DC 20006<br></br>
                        United States of America<br></br>

                        c/o Privacy Issues
                    </p>
                </div>
            </div>
        </div>
    )
}
