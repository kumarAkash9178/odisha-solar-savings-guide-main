
import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Users, FileText, Globe, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-teal-600" />
                <h1 className="text-2xl font-bold text-slate-800">Privacy Policy</h1>
              </div>
            </div>
            <div className="text-sm text-slate-500">
              Last updated: June 28, 2025
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg text-teal-800">Table of Contents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <button 
                  onClick={() => scrollToSection('introduction')}
                  className="block w-full text-left text-sm text-slate-600 hover:text-teal-600 transition-colors py-1"
                >
                  Introduction
                </button>
                <button 
                  onClick={() => scrollToSection('definitions')}
                  className="block w-full text-left text-sm text-slate-600 hover:text-teal-600 transition-colors py-1"
                >
                  Definitions
                </button>
                <button 
                  onClick={() => scrollToSection('data-collection')}
                  className="block w-full text-left text-sm text-slate-600 hover:text-teal-600 transition-colors py-1"
                >
                  Data Collection
                </button>
                <button 
                  onClick={() => scrollToSection('cookies')}
                  className="block w-full text-left text-sm text-slate-600 hover:text-teal-600 transition-colors py-1"
                >
                  Cookies & Tracking
                </button>
                <button 
                  onClick={() => scrollToSection('data-use')}
                  className="block w-full text-left text-sm text-slate-600 hover:text-teal-600 transition-colors py-1"
                >
                  Data Usage
                </button>
                <button 
                  onClick={() => scrollToSection('data-retention')}
                  className="block w-full text-left text-sm text-slate-600 hover:text-teal-600 transition-colors py-1"
                >
                  Data Retention
                </button>
                <button 
                  onClick={() => scrollToSection('your-rights')}
                  className="block w-full text-left text-sm text-slate-600 hover:text-teal-600 transition-colors py-1"
                >
                  Your Rights
                </button>
                <button 
                  onClick={() => scrollToSection('security')}
                  className="block w-full text-left text-sm text-slate-600 hover:text-teal-600 transition-colors py-1"
                >
                  Security
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left text-sm text-slate-600 hover:text-teal-600 transition-colors py-1"
                >
                  Contact Us
                </button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Introduction */}
            <Card id="introduction">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-teal-600" />
                  <CardTitle className="text-xl text-slate-800">Introduction</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p className="text-slate-700 leading-relaxed">
                  This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Free Privacy Policy Generator.
                </p>
              </CardContent>
            </Card>

            {/* Definitions */}
            <Card id="definitions">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-teal-600" />
                  <CardTitle className="text-xl text-slate-800">Interpretation and Definitions</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Interpretation</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </p>
                
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Definitions</h3>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm text-slate-700"><strong>Account:</strong> means a unique account created for You to access our Service or parts of our Service.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm text-slate-700"><strong>Company:</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Clans, DCB 307, 3rd Floor, DLF, Cyber City, Patia, Bhuabneswar-751024.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm text-slate-700"><strong>Cookies:</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm text-slate-700"><strong>Personal Data:</strong> is any information that relates to an identified or identifiable individual.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm text-slate-700"><strong>Service:</strong> refers to the Website.</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm text-slate-700"><strong>Website:</strong> refers to Clans Machina, accessible from http://www.clansmachina.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card id="data-collection">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-teal-600" />
                  <CardTitle className="text-xl text-slate-800">Collecting and Using Your Personal Data</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Types of Data Collected</h3>
                
                <div className="mb-6">
                  <h4 className="text-md font-semibold text-teal-700 mb-3">Personal Data</h4>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2 text-slate-700">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span>Email address</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-700">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span>First name and last name</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-700">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span>Phone number</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-700">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span>Address, State, Province, ZIP/Postal code, City</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-md font-semibold text-teal-700 mb-3">Usage Data</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card id="cookies">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-teal-600" />
                  <CardTitle className="text-xl text-slate-800">Tracking Technologies and Cookies</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-6">
                  We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. The technologies We use may include:
                </p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-500 pl-6">
                    <h4 className="font-semibold text-slate-800 mb-2">Necessary / Essential Cookies</h4>
                    <p className="text-sm text-slate-600">Type: Session Cookies</p>
                    <p className="text-sm text-slate-700 mt-2">These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features.</p>
                  </div>
                  
                  <div className="border-l-4 border-teal-500 pl-6">
                    <h4 className="font-semibold text-slate-800 mb-2">Cookies Policy / Notice Acceptance Cookies</h4>
                    <p className="text-sm text-slate-600">Type: Persistent Cookies</p>
                    <p className="text-sm text-slate-700 mt-2">These Cookies identify if users have accepted the use of cookies on the Website.</p>
                  </div>
                  
                  <div className="border-l-4 border-teal-500 pl-6">
                    <h4 className="font-semibold text-slate-800 mb-2">Functionality Cookies</h4>
                    <p className="text-sm text-slate-600">Type: Persistent Cookies</p>
                    <p className="text-sm text-slate-700 mt-2">These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card id="data-use">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-teal-600" />
                  <CardTitle className="text-xl text-slate-800">Use of Your Personal Data</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The Company may use Personal Data for the following purposes:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <p className="text-slate-700">To provide and maintain our Service, including to monitor the usage of our Service.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <p className="text-slate-700">To manage Your Account: to manage Your registration as a user of the Service.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <p className="text-slate-700">To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <p className="text-slate-700">To provide You with news, special offers and general information about other goods, services and events.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card id="data-retention">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Lock className="w-5 h-5 text-teal-600" />
                  <CardTitle className="text-xl text-slate-800">Retention of Your Personal Data</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
                  The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card id="your-rights">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-teal-600" />
                  <CardTitle className="text-xl text-slate-800">Delete Your Personal Data</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-4">
                  You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Our Service may give You the ability to delete certain information about You from within the Service. You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section.
                </p>
              </CardContent>
            </Card>

            {/* Security */}
            <Card id="security">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Lock className="w-5 h-5 text-teal-600" />
                  <CardTitle className="text-xl text-slate-800">Security of Your Personal Data</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
                  The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card id="contact">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-teal-600" />
                  <CardTitle className="text-xl text-slate-800">Contact Us</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy, You can contact us:
                </p>
                <div className="bg-teal-50 p-6 rounded-lg">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-teal-600" />
                      <span className="text-slate-700">contact@clansmachina.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-teal-600" />
                      <span className="text-slate-700">www.clansmachina.com</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-teal-600 mt-0.5" />
                      <div>
                        <p className="text-slate-700">DCB 307, 3rd Floor, DLF, Cyber City</p>
                        <p className="text-slate-700">Patia, Bhuabneswar-751024</p>
                        <p className="text-slate-700">Orissa, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
