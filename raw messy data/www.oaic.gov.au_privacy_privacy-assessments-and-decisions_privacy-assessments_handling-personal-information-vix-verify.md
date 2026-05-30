---
url: "https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify"
title: "Handling personal information – VIX Verify | OAIC"
---

## We use cookies on this site

We use cookies to analyse traffic and to improve your browsing experience on our website. To find out more, read our [privacy policy](https://www.oaic.gov.au/about-the-OAIC/our-corporate-information/plans-policies-and-procedures/privacy-policy#section-collecting-through-the-oaic-website).

Close

[Skip to main content](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#main-content-area)

# Handling personal information – VIX Verify

[Listen](https://app-oc.readspeaker.com/cgi-bin/rsent?customerid=9755&lang=en_au&readclass=page-content&url=https%3A%2F%2Fwww.oaic.gov.au%2Fprivacy%2Fprivacy-assessments-and-decisions%2Fprivacy-assessments%2Fhandling-personal-information-vix-verify "Listen to this page using ReadSpeaker webReader")

- ## On this page

- [Part 1: Executive summary](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#part-1-executive-summary)
- [Part 2: Introduction](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#part-2-introduction)
- [Part 3: Findings](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#part-3-findings)
- [Part 4: Recommendations and responses](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#part-4-recommendations-and-responses)
- [Part 5: Description of assessment](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#part-5-description-of-assessment)
- [Appendix A: Privacy risk guidance](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#appendix-a-privacy-risk-guidance)
- [Footnotes](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#section-footnotes)

Publication date: 1 February 2018

Assessment undertaken: May 2017

Draft report issued: October 2017

Final report issued: February 2018

## Part 1: Executive summary

1.1 This report outlines the findings of the Office of the Australian Information Commissioner’s (OAIC) privacy assessment of VIX Verify’s handling of personal information as a gateway service provider (GSP) of the Document Verification Service (DVS).

1.2 The purpose of this assessment was to establish whether VIX Verify is:

- collecting personal information in accordance with Australian Privacy Principle (APP) 3
- notifying individuals of the collection of personal information in accordance with APP 5
- taking reasonable steps to secure the personal information collected and held in its systems and databases in accordance with APP 11.

1.3 This assessment finds that:

- VIX Verify has detailed policies and a clear governance structure relating to its information handling processes
- the VIX Verify staff that the OAIC interviewed demonstrated a strong understanding of their privacy and confidentiality responsibilities, and their information security obligations
- VIX Verify has varying methods of providing notification of the collection of personal information to individuals, and some of these methods could be improved
- VIX Verify’s approach to destroying or de-identifying personal information may, in time, leave that personal information exposed to some information security risks.

1.4 The OAIC has made one recommendation in this assessment to address a medium level privacy risk. The recommendation relates to the creation and implementation of a policy on the destruction or de-identification of personal information collected through the DVS arrangement.

## Part 2: Introduction

### Background

2.1 The DVS is a national online system that allows agencies or organisations to collect personal information from an identity document presented by an individual, with their consent, and compare it against the original record of the document held by the Government agency that issued the document (issuing agency). Identity documents that can be verified by the DVS include, but are not limited to, passports and visas, birth certificates, driver licences, and Medicare cards. These verifications are conducted in real time to inform decisions that rely upon the confirmation of a person’s identity.

2.2 The Attorney-General’s Department (AGD) is responsible for the development and operation of the core technical components of the DVS.

2.3 The DVS has been available to government agencies since 2009. Since that time, additional access arrangements have allowed limited commercial access for businesses operating under legislated business user identification requirements. In this assessment, the term ‘business user’ refers to both government and commercial users of the DVS.

2.4 All business users of the DVS must meet the eligibility criteria contained in the DVS Access Policy and Guidelines, [\[1\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftn1) and abide by the DVS Terms and Conditions of Use. [\[2\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftn2) Business users must access the DVS through an approved GSP, or successfully apply to the AGD to become a GSP in their own right.

2.5 VIX Verify is an approved GSP. As such, its responsibilities include:

- establishing a functional connection to the DVS which can be used by business users to match identity information
- assessing the eligibility of business users to use the DVS, and advising the AGD
- ensuring that business users meet the consent requirements for accessing the DVS
- attaching the DVS Terms and Conditions of Use to contracts with its business users.

### Overview of the document verification process

2.6 The primary components of the document verification process include an individual, a business user, a GSP, the DVS ‘Hub’, and an issuing agency.

2.7 An individual presents personal information to a business user as evidence of their identity. This is usually done as part of an application for goods or a service, such as applying for a bank loan or enrolling into an educational institution. This personal information includes the individual’s full name, date of birth, and a government related identifier. [\[3\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftn3) The government related identifier varies depending on the issuing agency relied on. For example, it may be a driver’s licence, passport, or Medicare number.

2.8 The business user enters the individual’s personal information into one of their computers. A GSP connects the business user to the DVS Hub, and directs the personal information to that Hub.

2.9 The DVS Hub securely directs that personal information to the issuing agency.

2.10 The issuing agency performs an automated check of its data to confirm whether the information provided to the business user matches the information it holds.

2.11 The issuing agency sends an automated response back to the DVS Hub, indicating that the information provided was matched, not matched, invalid, or that there was a system error of some kind.

2.12 The GSP transmits that response from the DVS Hub back to the business user. Figure 1 (below) sets out this document verification process.

#### VIX Verify

2.13 VIX Verify, formerly known as Edentiti, provides ‘verification solutions for government and businesses’ [\[4\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftn4) that have a need to verify an individual’s identity online.

2.14 In connecting its business users to the DVS Hub, VIX Verify allows them to choose which issuing agencies they want to rely on, based on their business needs and the purposes for which the verification is being made. For example, one business user may choose to verify an individual’s passport, birth certificate, and Medicare card. Another business user may only require the verification of a driver’s licence.

##### greenID

2.15 greenID is VIX Verify’s trademarked electronic verification platform that performs VIX Verify’s role in the document verification process. Once VIX Verify has approved a business user, the business user can collect the relevant personal information from individuals. This can be done through online forms, document scanning, biometric capture, [\[5\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftn5) document upload, or manual data entry. greenID then matches the personal information provided against the information held by the business user’s chosen issuing agencies.

2.16 There are two main ways a business user can integrate the greenID product into their identity verification process: greenID Web and greenID API.

2.17 Through greenID Web, an individual on the business user’s website is directed to a standardised greenID web page. The individual provides their personal information to the business user on that standardised page. VIX Verify, not business users, sets the wording on that page which notifies individuals their personal information is being collected and disclosed to the DVS.

2.18 greenID API [\[6\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftn6) allows the greenID product to be fully embedded into a business user’s website. This means that individuals stay entirely within the business user’s website during the verification process, and they are not redirected to any external standardised greenID pages. Business users are able to choose the wording that notifies individuals their personal information is being collected and disclosed to the DVS, however the wording must first be approved by VIX Verify.

2.19 Another VIX Verify product, greenID Mobile, enables the integration of either method (greenID Web or greenID API) into a business user’s mobile application.

##### Back end systems

###### greenID database

2.20 VIX Verify’s greenID processes personal information relating to the individuals being verified, such as their name and date of birth. It responds with an identity verification result, such as that their identity was matched or not matched by the issuing agency. The greenID database stores this information where required by legislation or business user specifications. The greenID database does not store government related identifiers.

2.21 The physical components of the greenID database are held in multiple datacentres that are hosted by VIX Verify’s third party providers.

###### Admin Panel

2.22 The Admin Panel is an interface that connects to the greenID database. The Admin Panel provides a way for greenID business users with certain system privileges to access records of their own identity verification activities. These records include logs of the individuals that have completed greenID identity verification transactions with that business user. greenID business users can search individual records, filter record searches, and export these search results for reporting, auditing, or other purposes.

2.23 VIX Verify staff with administrative privilege rights can also access data stored in the greenID database through their version of the Admin Panel. Figure 1 (below) sets out this Admin Panel access to the greenID database.

Figure 1 — The document verification process

![Figure 1 shows a row of 5 blue items with double-headed arrows between each: Individual, Business user, Gateway service provider (VIX Verify), DVS Hub and Issuing Agency. The scope of the assessment covers three items: Gateway service provider (VIX Verify), and two items under it: greenID Database (represented in yellow) and Admin Panel (represented in orange). A yellow arrow points from Gateway service provider (VIX Verify) to greenID Database. An orange arrow points from Admin Panel to greenID Database.](https://www.oaic.gov.au/__data/assets/image/0019/2179/vix-figure-1.png)

Scope of this assessment

Personal information (name, date of birth) and verification result (matched, not matched)

## Part 3: Findings

### Collection of personal information

3.1 Under APP 3, an APP entity may only collect solicited personal information where it is reasonably necessary for, or directly related to, the entity’s functions or activities. APP 3.6(b) states that an APP entity must collect personal information about an individual only from that individual, unless it is unreasonable or impracticable for the entity to do so.

#### Observations

3.2 VIX Verify’s business users may require an individual to provide their personal information. The purpose of this collection of personal information is to ‘easily, quickly and accurately verify an individual’s identity and to maximise electronic verifications’. [\[7\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftn7)

3.3 VIX Verify has due diligence procedures in place to consider whether the collection of solicited personal information is also reasonably necessary for, or directly related to, any business user’s functions or activities, prior to approving that business user as a new VIX Verify business user. VIX Verify also ensures that its business users meet the access criteria contained in the DVS Access Policy. One of these access criteria is that the business user is subject to the Privacy Act.

#### Analysis

3.4 The OAIC considers that VIX Verify’s collection of personal information is directly related to and consistent with its purposes and functions as a GSP. In addition, VIX Verify has processes in place to ensure that the collection of personal information by any of its business users will be reasonably necessary for, or directly related to, that business user’s functions or activities. VIX Verify also ensures that their business users meet the access criteria for the DVS.

3.5 As described at 2.16-2.18, business users transmit personal information in different ways with greenID Web or greenID API. It is arguable that VIX Verify collects personal information directly from the individual with greenID Web, and indirectly, via the business user’s website, with greenID API. However, in either case, the personal information is generally solicited by the business user, as part of their document verification requirements.

3.6 Due to the nature of the DVS, GSPs are not in direct contact with an individual. The OAIC considers that it would be unreasonable or impracticable for VIX Verify to collect personal information only and directly from the individual, without the involvement of the business user in the collection process.

### Notification of the collection of personal information

3.7 Under APP 5, an APP entity that collects personal information about an individual must take such steps (if any) as are reasonable in the circumstances either to notify the individual of the matters under APP 5.2 or to ensure the individual is aware of those matters. These matters include:

- the APP entity’s identity and contact details
- the fact and circumstances of collection
- whether the collection is required or authorised by law
- the purposes of collection
- the entity’s usual disclosures of personal information of the kind collected by the entity
- information about the entity’s APP Privacy Policy.

3.8 The APP entity must take reasonable steps at or before the time of collection, or, if that is not practicable, as soon as practicable after the collection. This applies to all personal information collected about an individual, either directly from the individual or from a third party.

3.9 The APP 5 requirement to notify individuals about the collection of their personal information is supported by the DVS Terms and Conditions of Use. Under these terms and conditions, GSPs and business users must be subject to the Privacy Act. Business users must also ensure that individuals are informed of the purpose for which their personal information is sought, and that the process of identity verification may involve the use of third party systems and services. Individuals must also provide their express consent for the use of their personal information for that purpose. GSPs are required to ensure that business users are following these consent requirements under the DVS Terms and Conditions of Use that apply to GSPs. [\[8\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftn8)

#### Observations

3.10 Personal information is first collected through a business user, as part of that business user’s requirements, before being collected by VIX Verify, as a GSP. Due to the different methods of integrating greenID, the OAIC observed a varied notification structure provided by VIX Verify and its business users.

3.11 The ways in which an individual is notified of the collection of their personal information, and its subsequent disclosure to the DVS, is dependent on the business user’s chosen method of integrating the greenID product. For example, with greenID Web, an individual is directed to a standard greenID webpage, which includes the greenID logo. The notification statement provided to the individual from that page includes the facts and circumstances of collection, including that the personal information will be submitted to the DVS, and checked against records held by the issuing agency. The statement also provides an explanation of the DVS, and includes a link to the DVS website. The individual must then provide consent that their personal information be checked with the issuing agency, before the identity verification transaction can proceed.

3.12 By comparison, greenID API is embedded into the business user’s website. Business users can choose not to display the greenID logo on their website. Additionally, business users can choose to vary the notification statement.

#### Analysis

3.13 APP Entities must take reasonable steps to notify individuals of the matters under APP 5.2. What is reasonable in VIX Verify’s circumstances involves a consideration of its purposes as a GSP, and the practicalities of notifying an individual through a business user’s platform.

3.14 VIX Verify must take such steps (if any) as are reasonable in the circumstances to notify the individual that it has collected their personal information. [\[9\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftn9) VIX Verify collects this information from business users, rather than from the individuals directly.

3.15 The notification provided to an individual depends on which greenID integration method the business user has chosen. Under greenID Web, the notification statement and consent box to indicate consent for collection ensures that the individual is aware of the purpose for which their information is being collected. There are not any explicit references to VIX Verify as the collecting entity.

3.16 There is a possibility that an individual may be aware of VIX Verify’s role in the collection because the greenID logo is present on the standardised webpage. However, because the greenID logo does not provide a link to the VIX Verify website or Privacy Policy, the OAIC considers that there is a limited chance that an individual will be aware of the extent of VIX Verify’s role, or the fact that it holds their personal information.

3.17 While the greenID logo may indicate the involvement of an entity to which the individual is providing personal information other than the business user, the OAIC considers that the presence of the logo is not, by itself, a reasonable step in accordance with APP 5.

3.18 Business users may choose not to display this logo if they have implemented greenID API. The OAIC understands that there is limited opportunity for an individual to be alerted to VIX Verify’s role in the collection process if they are transacting with a business user that has implemented greenID API.

3.19 An example of a privacy protective measure that VIX Verify could take so that business users notify the individual of the relevant APP 5 matters on its behalf would be forming enforceable contractual arrangements. Onboarding a new business users could be contingent on them disclosing VIX Verify’s role at some point in the identity verification process, for instance, in the business user’s privacy policy. This would assist individuals to understand how VIX Verify will handle their personal information, as collected by the business user. Another action VIX Verify could take would be to provide further information on its role in the collection of personal information, potentially linked to, or near, the greenID logo on the greenID Web interface.

3.20 The OAIC also notes that, under APP 5.1, it may be reasonable in some circumstances for an APP entity like VIX Verify to not take any steps to provide notification of all or some of the APP 5 matters.

3.21 The OAIC’s APP Guidelines note that one circumstance where taking no steps may be reasonable is where the individual is aware that personal information is being collected, of the purpose of collection, and that other APP 5 matters relating to the collection. Individuals who provide their personal information to a VIX Verify business user for the purposes of verifying their identity would generally be aware that the information is being collected and used for that purpose.

3.22 The OAIC also notes that, whether the individual interacts with greenID Web or green ID API, the DVS Terms and Conditions of Use specify that consent must be obtained from the individual before their personal information can be collected and used in an identity verification transaction.

3.23 During this assessment the OAIC also considered that VIX Verify, as a GSP, could be characterised as an intermediary in the overall identity verification process that involves the DVS. The OAIC recognises that, in general, there are limitations in notifying individuals of every intermediary through which their personal information passes in an interconnected network that supports a particular transaction.

3.24 Ultimately, however, the OAIC took the view that VIX Verify’s role as a GSP is more than an intermediary through which personal information passes because VIX Verify retains personal information in the greenID database. VIX Verify is retaining this personal information for legitimate business purposes.

3.25 The fact that VIX Verify retains some personal information about individuals from an identity verification transaction activates other obligations under the APPs, such as the obligation to provide an individual with access to personal information that VIX Verify holds about them under APP 12. While APP 12 was not directly within the scope of this assessment, an individual would not be aware of the rights available to them, such as the right to request access from VIX Verify under APP 12, unless they are proactively and adequately notified of VIX Verify’s role in the identity verification transaction under APP 5.

3.26 As a result, the OAIC considers that VIX Verify is under an obligation to notify individuals that they are collecting their personal information under APP 5. It follows that there is some risk that VIX Verify’s current notification practices may breach APP 5.

3.27 The OAIC considers that the level of risk relating to VIX Verify’s notification practices is low at the present time. While there is scope to enhance practices, the OAIC notes that, although VIX Verify may not be named in all instances where personal information is collected, the requirements of the DVS Terms and Conditions of Use ensure that individuals are aware of the purpose for which their personal information is being collected, and that consent is provided.

3.28 To improve its privacy practices in this area, the OAIC suggests that VIX Verify consider whether individuals can be more clearly notified of VIX Verify’s collection and retention of personal information, such as by taking the measures described in para 3.19. The OAIC also suggests that VIX Verify considers advising their business users to review any modified notification wording, in order to ensure that the appropriate notice regarding the DVS arrangement and process is provided to individuals. VIX Verify may also consider standardising the notification information that new business users apply to greenID API.

3.29 Finally, The _[Privacy Amendment (Notifiable Data Breaches) Act 2017 \- external site](https://www.legislation.gov.au/Details/C2017A00012)_ established a Notifiable Data Breaches (NDB) Scheme in Australia. The NDB Scheme takes effect on 22 February 2018. Under the NDB Scheme, organisations covered by the Privacy Act will be required to notify any individuals likely to be at risk of serious harm by a data breach, as well as the OAIC. The NDB Scheme may be another factor for VIX Verify to take into consideration in updating or improving its notification practices and documentation in this area, particularly with regard to establishing clear lines of communication and responsibility with its business users in the event that one or more links in the DVS information flow are subject to a data breach in the future.

### Security of personal information

3.30 The OAIC’s [Guide to Securing Personal Information](https://www.oaic.gov.au/_old/privacy/guidance-and-advice/guide-to-securing-personal-information) provides guidance on the steps and strategies entities may take to protect personal information in accordance with APP 11. The privacy analysis in this section of the report considers the way in which VIX Verify implements these steps and strategies when handling personal information collected for DVS purposes.

### Governance, culture and training

#### Observations

3.31 The responsibility for the development, operation, and maintenance of greenID is allocated to a number of teams within VIX Verify, which overall consists of approximately 60 employees. The senior management team includes the Chief Executive Officer and regional managers, and other teams include greenID system administrators, system engineers, and marketing and sales staff.

3.32 VIX Verify has a documented governance structure relating to its Information Security Management System (ISMS). [\[10\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftn10) Within that governance structure, the Chief Technology Officer (CTO) is assigned the overall responsibility and accountability for the management of information security. Reporting to the CTO is the Information Security Committee (ISC), which consists of a Regional Head, a Project Officer, and a Lead Engineer. The ISC is responsible for managing VIX Verify’s information security, and its policies and operation. The OAIC understands that the ISC meets once per month, and informally as required.

3.33 Staff training includes mandatory information security and awareness training, which VIX Verify staff must complete prior to commencing their role. In addition, all VIX Verify systems administrators who access the ICT environment must complete further specific training prior to commencing their role. All staff attend ongoing security awareness training as required. The ISC is responsible for ensuring that training material covers information security, that all staff have received training, and that regular security updates are sent to all relevant staff.

#### Analysis

3.34 The OAIC considers that there are clearly defined teams within VIX Verify that are responsible for the development, operation, maintenance and support of the greenID product and the data held within the greenID database.

3.35 The OAIC considers that VIX Verify’s creation and use of the ISC, with its clearly defined structure and security responsibilities, is good practice in ensuring accountability for potential information security risks.

3.36 The VIX Verify staff that the OAIC interviewed demonstrated a strong understanding of the greenID product, their privacy and confidentiality responsibilities, and their information security obligations.

### Internal practices, procedures and systems

#### Observations

3.37 VIX Verify provided the OAIC with a wide range of ICT security policies and procedure documents. For example, the OAIC has observed high-level, company-wide documentation, such as the Information Security Policy (ISP), Information Classification, Handling, and Labelling Policy, Anti-virus and Malware Policy, Asset Management and Disposal Policy, and an Information Security Governance Policy (which outlines the scope and governance of the ISMS).

3.38 VIX Verify has documented its approach to reviewing and updating its policies and procedures. For example, the Information Security Governance Policy is subject to regular, ongoing management review by the ISC, and will be reviewed at least annually or when significant changes to VIX Verify occur. The OAIC has viewed VIX Verify’s version control registers, which indicate that these documented schedules are adhered to in practice.

3.39 VIX Verify also provided the OAIC with greenID-specific documentation, such as procedures and plans relating to Change Control, Incident Management, Cryptographic Key Management, and Service Restoration. The OAIC also viewed examples of documentation that would be provided by VIX Verify to a potential or new VIX Verify business user, such as the Business User Application Form, and DVS Access Policy and Terms and Conditions of Use.

3.40 The OAIC also considered an Audit Report, relating to the second stage of an ISO 27001 [\[11\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftn11) certification process, and a Statement of Applicability, which self-reports VIX Verify’s compliance with the relevant ISO standards.

#### Analysis

3.41 The suite of VIX Verify’s documentation demonstrated its comprehensive approach to recording ICT policies, procedures and security controls.

### Third party providers

#### Observations

3.42 VIX Verify relies on a number of third party providers to assist with the physical and virtual hosting of the greenID product.

3.43 As noted at 2.21, the physical servers of the greenID product are hosted in multiple data centres, across different locations. VIX Verify has two primary third party providers that manage different aspects of the servers, as well as host the greenID virtual environment.

3.44 The OAIC understands that VIX Verify maintains formal service level agreements (SLAs) with these third party providers in relation to their services.

3.45 Under the existing SLAs, in the case of a physical failure of one of the datacentres, VIX Verify’s third party providers would be responsible for restoring or replacing greenID services. VIX Verify would be responsible for ensuring that the third party providers maintain the availability of services as outlined within the SLAs, including the restoration of services.

3.46 The Service Restoration Plan further details the recovery procedures in the case of a greenID system failure. The data centres, which host the technical components of the greenID system, have automatic failover processes. This means that, even if an entire data centre location was to fail, the greenID system would automatically switch its data handling procedures to a standby system, located in another data centre.

3.47 VIX Verify also contracts other third party providers, such as for services relating to cloud computing and data security. These are discussed further in the ‘ICT Security’ section of this report.

#### Analysis

3.48 The OAIC did not identify any issues in relation to VIX Verify’s use of third party providers in this assessment, and notes that the use of formal documentation, which outlines each party’s obligations, is good practice.

### ICT security

#### Observations

3.49 As noted at 3.37-3.40, VIX Verify provided the OAIC with a broad range of documentation, much of which relates to its ICT security infrastructure.

3.50 Briefly, the mechanisms that are used to secure the greenID product and the personal information that it handles include network security controls, anti-virus and malware protections, patching, encryption, backing up, whitelisting and blacklisting, and testing.

3.51 The servers that host VIX Verify’s ICT systems are protected by a range of security controls, such as:

- de-militarised zones and virtual local area networks (VLANs) [\[12\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftn12)
- Virtual Private Networks (VPNs) [\[13\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftn13)
- intrusion detection and prevention systems
- network and host-based database firewalls
- network security protocols [\[14\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftn14) (such as Secure Shell (SSH) [\[15\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftn15))
- security monitoring and Distributed Denial of Service (DDoS) [\[16\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftn16) protection
- load balancers [\[17\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftn17)
- Web Application Firewalls (WAFs). [\[18\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftn18)

3.52 Some of these security controls, such as DDoS, which help to protect greenID’s websites and other internet-facing applications from security incidents, are provided by third party providers to VIX Verify.

3.53 Networks are segregated into separate security zones, and apart from computer operations where possible. For example, the wireless network is segregated from the VIX Verify network by mechanisms such as firewalls and access restricted VLANs. Wireless Access Points (WAPs) [\[19\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftn19) connected to the VIX Verify network must be approved by the CTO prior to their installation. When an approved VIX Verify staff member attempts to enter the greenID ICT environment, they must access the VIX Verify VPN, enter the LAN, successfully pass through security protocols such as SSH, and then proceed to access their individual machine via a certificate, or login, specific to them (this is discussed further below in the ‘Access Controls’ section).

3.54 VIX Verify has policy documentation specific to anti-virus and malware. All VIX Verify devices that are able to connect to greenID are protected by the latest version of the relevant anti-virus software. A register of anti-virus software is maintained on the intranet, and regular staff meetings have agenda items, which act as reminders for all staff to update the register.

3.55 Anti-virus software also runs on all mail servers, and staff are required to send emails only from devices that use the VIX Verify server.

3.56 Patching is a security mechanism to address vulnerabilities in software applications as they arise. According to the ISP, servers that host greenID shall be patched at least fortnightly, and more frequently if specific security threats are reported. The OAIC understands that VIX Verify’s patching process is automated, with half of the technical systems being patched one week, and the other half being patched next week. Urgent patching updates are completed as soon as possible, and within 24 hours.

3.57 Encryption helps to protect stored data or data in transit from unauthorised disclosure or use. As formalised within the ISP and the Cryptographic Key Management Procedure documents, the aspects of VIX Verify’s ICT systems or networks that are protected by encryption include:

- data stored within, or communicated between, points of the system
- all critical or sensitive data transferred outside of VIX Verify’s systems, or through emails
- all removable media, such as USB drives
- laptop hard drives
- all wireless networks carrying information.

3.58 Data is encrypted by cryptographic algorithms, the functions and parameters of which are defined by cryptographic keys. VIX Verify uses a number of procedures designed to manage these cryptographic keys. For example, the Key Custodian is the Lead Engineer, who must maintain the security of the keys.

3.59 The Key Custodian must ensure that the keys themselves are stored in encrypted form, and that any access to the keys is logged. The keys are stored in approved locations, separate from the encrypted data. There are specified lifecycles for the different kinds of keys.

3.60 greenID data is held in datacentres that are hosted by third party providers, and there are a number of automatic failover processes in place to ensure that there is no significant data loss, should there be a greenID system failure.

3.61 Backup data is regularly tested to ensure that it is effectively protected, and access to backup data is restricted to authorised users in compliance with access control requirements.

3.62 VIX Verify uses whitelisting at some points in its ICT environment, such as allowing only approved communications to pass through firewalls. The OAIC understands there is no specific policy or procedure documentation relating to whitelisting or blacklisting, and there are no technical measures, such as software whitelisting, to prevent the unapproved installation of new software. However, staff understand they are not authorised to install new software without approval from the CTO.

3.63 greenID has a test environment and a production environment. All changes to the greenID system are first made to the test environment, before being implemented into the production environment. VIX Verify’s Change Control Procedure outlines the processes for receiving the appropriate approvals, and scheduling and implementing the changes.

3.64 When VIX Verify has approved a new business user that has opted for greenID API, this may involve deviations from the pre-approved DVS scripts and standard greenID interface. In this scenario, VIX Verify conducts mandatory reviews of the business user’s test environments.

3.65 In addition to separating its test and production environments, VIX Verify performs testing of its overall systems. For example, VIX Verify conducts penetration testing at least on a yearly basis. The ISC is responsible for coordinating this testing.

#### Analysis

3.66 The use and documentation of a number of security mechanisms, such as anti-virus, patching, encryption, and testing, represent good ICT security practice. In particular, the segregation of VIX Verify’s networks, and its use of VPNs and various types of firewalls, which help control the communication of data, help to protect greenID’s virtual network.

3.67 The OAIC notes the absence of formalised controls to whitelist the installation of new software. Application whitelisting is a control prioritised in the Australian Signals Directorate’s ‘Essential Eight’ strategies to mitigate cyber security incidents. [\[20\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftn20) The OAIC considers that the proactive security culture in VIX Verify’s small team and the otherwise sound information security practices helps to mitigate this risk to a low level. Nevertheless, the OAIC suggests that VIX Verify considers implementing application whitelisting as an additional security control.

### Access security

#### Observations

3.68 As outlined in the ISP, access to the greenID system and its data for VIX Verify staff is determined by role. All staff are assigned user identifiers, which they must use in combination with a password.

3.69 Access is granted by the Lead Engineer and CTO approving an access request form. Network access to VIX Verify systems is revoked if the individual no longer requires that access. The OAIC understands that VIX Verify keeps formal records relating to the addition, modification, and removal of access. In addition, the ISC formally reviews access every six months, to check for unused accounts or inappropriate access rights.

3.70 A privileged user has access privileges for system management purposes, including access to the virtual greenID ICT environment, operating system, and datacentres. Multi-factor authentication [\[21\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftn21) is used for all privileged access.

3.71 VIX Verify’s Password Policy outlines the minimum password length and complexity for all users, as well as a set of password protection guidelines. For example, passwords for privileged user access must be a minimum of 16 characters.

3.72 All remote access to VIX Verify systems is authorised as per the Remote Access section of the ISP document. Remote access is controlled using multi-factor authentication and a secure connection method, such as SSH.

3.73 Four staff have full privileged administrative access. Eight staff have other administrative rights, such as access to the Admin Panel. This access is primarily used to provide customer support to VIX Verify’s business users.

3.74 All new VIX Verify staff are subject to screening and background security checks. All system administrators undergo an additional vetting process.

3.75 VIX Verify performs system monitoring for all ICT systems and resources that support greenID. The key details that are logged include the type of activity and the date and time in which it occurred.

3.76 VIX Verify uses a monitoring program to filter and analyse logs. The program records activity by all users, and performs investigative and diagnostic processes to identify potential security incidents and review system access controls.

#### Issues

3.77 VIX Verify’s access controls, such as multi-factor authentication and activity logging, represent good security practice. The OAIC did not identify any issues in relation to VIX Verify’s access controls in this assessment.

### Data breaches

#### Observations

3.78 VIX Verify provided the OAIC with an ‘Incident Management Procedure’, which details the procedures for responding to a standard or security incident. A standard incident is not security related, but can be an unplanned interruption to an IT service. A security incident refers to an event that actually or potentially jeopardises an information system or its data. This includes a data breach.

3.79 While the Incident Management Procedure is detailed, the ISP also outlines the procedures for detecting, assessing, managing, reporting and reviewing an incident.

#### Analysis

3.80 The OAIC did not identify any issues in relation to VIX Verify’s data breach or incident response plans in this assessment.

### Physical security

#### Observations

3.81 The OAIC did not conduct physical inspections of the data centres, which host the greenID ICT environment during this assessment. As noted at 2.20, VIX Verify’s third party providers host the physical components of the greenID system. The OAIC understands that these providers also manage the datacentre’s physical security controls, which include a physical security perimeter (such as barriers), card key authorisation, closed-circuit television monitoring, security guards and patrols, and security procedures relating to authorised entry and visitor escorting.

3.82 The requirements for the physical protection of the greenID environment are outlined in the ISP. The OAIC also understands that these requirements are outlined in the relevant SLAs between VIX Verify and their third party providers.

3.83 The OAIC attended VIX Verify’s Sydney and Canberra offices. The VIX Verify Regional Head or CTO in each location is responsible for the management of physical security in that location. This includes establishing a secure physical security perimeter (such as secure access entry controls) and security-related processes, which control staff and visitor entry to the premises. The OAIC observed secure access entries at both locations.

#### Analysis

3.84  The OAIC did not identify any issues relating to the physical security surrounding either the datacentres or the VIX Verify offices in this assessment.

### Destruction and de-identification

3.85 An APP entity must take reasonable steps to destroy or de-identify personal information if it no longer needs the information for any purpose for which it may be used or disclosed.

3.86 The reasonable steps that an organisation should take to destroy or de-identify personal information depends on a number of circumstances, including the amount and sensitivity of the personal information, the nature of the organisation, the organisation’s information handling practices, and the practicability, including the time and cost involved, of doing so.

#### Observations

3.87 VIX Verify staff advised the OAIC that certain types of personal information collected during all identity verification transactions are retained in the greenID database, and can be accessed via the Admin Portal. The retained personal information includes names, dates of birth, and whether the individual was successfully matched or not. This does not include government related identifiers. As noted at 3.24, VIX Verify is entitled to do so.

3.88 VIX Verify has legislative obligations to retain certain records. For example, under s 286 of the _Corporations Act 2001_ (Cth), VIX Verify is obligated to keep financial records for a period of seven years. Under s 107 of the _Anti-Money Laundering and Counter-Terrorism Financing Act 2006_ (Cth), VIX Verify is also required to retain transaction records for seven years. These records include personal information relating to individuals.

3.89 The OAIC understands that VIX Verify currently holds personal information that it collected more than seven years ago. VIX Verify retains this information in accordance with individual business user requirements and contracts, and it may do so indefinitely.

#### Analysis

3.90 VIX Verify’s legislative obligations dictate the minimum length of time it needs to retain financial and transaction records that contain individuals’ personal information.

3.91 The OAIC acknowledges that VIX Verify’s retention of personal information beyond the legislated requirements may be useful for its business users’ needs. However, there is no mechanism by which a business user is required to inform VIX Verify that the business user’s need to retain the information has ceased.

3.92 VIX Verify does not destroy or de-identify personal information. VIX Verify also does not have a policy relating to destroying or de-identifying personal information. These information handling processes mean that personal information could be retained indefinitely, when there is no legislative or operational requirement to do so.

3.93 The OAIC understands that the proportion of VIX Verify’s current information holding that can be characterised as no longer needed is relatively small. However, VIX Verify does currently hold personal information that it collected more than seven years ago, in the absence of any policies or processes that address the destruction of information when it is no longer needed. The OAIC notes that the risk of attacks to personal information held within VIX Verify’s databases increases commensurately with the volume of personal information held in those databases.

3.94 Over time, and with an increasing volume of personal information, the OAIC considers that there is a medium risk of breaching APP 11 if the absence of controls for the retention of personal information is left unchecked. The OAIC recommends that VIX Verify creates and implements a destruction or de-identification policy that considers the appropriateness of retaining personal information beyond the legislative requirements and indefinitely, or retaining it for different amounts of time depending on the business user’s needs.

**Recommendation 1**

VIX Verify creates and implements a policy on the destruction or de-identification of personal information collected through the DVS arrangement.

## Part 4: Recommendations and responses

### Recommendation 1 – policy on the destruction or de-identification of personal information

#### OAIC recommendation

4.1 VIX Verify creates and implements a policy on the destruction or de-identification of personal information collected through the DVS arrangement.

#### Response by VIX Verify to the recommendation

4.2 VIX Verify with reference to the above Part 4, Recommendation 1 / 4.1. has escalated this matter to its Information Security Committee (InfoSec Committee) and have determined that we will create and implement a policy on the de-identification of personal information collected. VIX Verify has agreed this would relate to all data, not just data collected through the DVS arrangement. This agreed action has been documented as part of our Information Security Management Statement (ISMS) obligations (as required under our ISO 27001 accreditation). This task will be allocated and reviewed by the InfoSec Committee prior to broader distribution.

The InfoSec Committee has committed to completing and implementing the policy by 30 June 2018.

It is worth noting that the InfoSec Committee has agreed to revisit this topic late 2018 with a view to revisit the question of de-identification versus destruction.

The InfoSec Committee is consists of the following persons:

- The Chief Executive Officer
- The Chief Technology Officer
- The Head Developer/Programmer
- A senior representative of the owner of VIX Verify Pty Ltd
- The InfoSec Committee Executive Officer

And is reflective of the diligence that VIX Verify has applied to this matter.

4.3 \[Update\] In October 2018, VIX Verify provided the OAIC with a new retention policy for personal information retained in the greenID database, and advice about the implementation of that policy. On the basis of this information, the OAIC considers that VIX Verify has sufficiently addressed Recommendation 1.

## Part 5: Description of assessment

### Objective and scope

5.1 The objective of this assessment was to establish whether VIX Verify is handling personal information throughout the document verification process in accordance with the APPs.

5.2 The assessment examined whether VIX Verify is collecting personal information, and notifying individuals of that collection, in accordance with APPs 3 and 5. The assessment also considered whether VIX Verify’s personal information storage and security arrangements are reasonable in the circumstances to protect personal information from misuse, interference, loss, unauthorised access, modification or disclosure, in accordance with APP 11.

5.3 Apart from the DVS, there are other means through which an issuing agency can confirm the validity of documents. Some issuing agencies use GSPs to confirm the validity of documents both through the DVS and otherwise. The scope of this assessment was limited to VIX Verify’s handling of personal information only through the DVS.

### Privacy risks

5.4 The OAIC makes recommendations to address ‘high’ and ‘medium’ privacy risks. For more information about these privacy risk ratings, see the OAIC’s ‘Privacy risk guidance’ at Appendix A. Further detail on this approach can be found in Chapter 7 of the OAIC’s [Guide to privacy regulatory action](https://www.oaic.gov.au/about-us/our-regulatory-approach/guide-to-privacy-regulatory-action/chapter-7-privacy-assessments).

5.5 The OAIC has made one recommendation to address a medium privacy risk identified during this assessment. A recommendation is a suggested course of action or a control measure that, if put in place by VIX Verify, will (in the opinion of the OAIC) minimise the privacy risks identified around how it handles personal information.

### Timing, location and assessment techniques

5.6 VIX Verify provided the OAIC with copies of relevant policy and procedure documents in response to the OAIC’s information request. The OAIC then conducted the fieldwork component of the assessment at one of VIX Verify’s offices in Canberra and its head office in Sydney, on 18 and 19 April 2017. The OAIC interviewed staff in various roles at VIX Verify during the fieldwork.

### Reporting

5.7 The OAIC publishes final assessment reports in full, or in an abridged version, on its website. All or part of an assessment report may be withheld from publication due to statutory secrecy provisions, privacy, confidentiality, security or privilege. This report has been published in full.

## Appendix A: Privacy risk guidance

| Privacy risk rating | Entity action required | Likely outcome if risk is not addressed |
| --- | --- | --- |
| High risk<br>Entity must, as a high priority, take steps to address mandatory requirements of Privacy legislation | Immediate management attention is required. <br>This is an internal control or risk management issue that if not mitigated is likely to lead to the following effects | - Likely breach of relevant legislative obligations (for example, APP, TFN, Credit) or not likely to meet significant requirements of a specific obligation (for example, an enforceable undertaking)<br>- Likely adverse or negative impact upon the handling of individuals’ personal information<br>- Likely violation of entity policies or procedures<br>- Likely reputational damage to the entity, such as negative publicity in national or international media.<br>- Likely adverse regulatory impact, such as Commissioner Initiated Investigation (CII), enforceable undertakings, material fines<br>- Likely ministerial involvement or censure (for agencies) |
| Medium risk<br>Entity should, as a medium priority, take steps to address Office expectations around requirements of Privacy legislation | Timely management attention is expected. <br>This is an internal control or risk management issue that may lead to the following effects | - Possible breach of relevant legislative obligations (for example, APP, TFN, Credit) or meets some (but not all) requirements of a specific obligation<br>- Possible adverse or negative impact upon the handling of individuals’ personal information<br>- Possible violation of entity policies or procedures<br>- Possible reputational damage to the entity, such as negative publicity in local or regional media.<br>- Possible adverse regulatory impacts, such as Commissioner Initiated Investigation (CII), public sanctions (CII report) or follow up assessment activities.<br>- Possible ministerial involvement or censure (for agencies) |
| Low risk<br>Entity could, as a lower priority than for high and medium risks, take steps to better address compliance with requirements of Privacy legislation | Management attention is suggested. <br>This is an internal control or risk management issue, the solution to which may lead to improvement in the quality and/or efficiency of the entity or process being assessed. | - Risks are limited, and may be within acceptable entity risk tolerance levels<br>- Unlikely to breach relevant legislative obligations (for example, APP, TFN, Credit)<br>- Minimum compliance obligations are being met |

## Footnotes

[\[1\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftnref1) Can be downloaded at [www.dvs.gov.au/users/Documents/DVSPolicyandGuidelines.pdf](http://www.dvs.gov.au/users/Documents/DVSPolicyandGuidelines.pdf).

[\[2\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftnref2) Can be downloaded at [www.dvs.gov.au/users/Documents/BUtermsandconditions.pdf](http://www.dvs.gov.au/users/Documents/BUtermsandconditions.pdf).

[\[3\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftnref3) A government related identifier is a number, letter or symbol, or a combination of any or all of those things, that has been assigned by an agency, a State or Territory authority, an agent of an agency or authority, or a contracted service provider for

a Commonwealth or State contract.

[\[4\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftnref4) VIX Verify, Company History, 2017, VIX Verify website [www.vixverify.com/about-us/](http://www.vixverify.com/about-us).

[\[5\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftnref5) The types of biometrics that business users may use to verify identity include fingerprint identification or face or voice recognition. Biometric information is not verified via the DVS, and is outside the scope of this assessment.

[\[6\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftnref6) An API refers to an application programming interface, which here refers to a defined interface through which identity verification interactions will occur.

[\[7\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftnref7) VIX Verify, Verification of Identity, 2017, VIX Verify website [www.vixverify.com/greenid-services/#verification-of-identity](http://www.vixverify.com/greenid-services/#verification-of-identity).

[\[8\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftnref8) Available for download at [https://www.dvs.gov.au/users/Documents/DVSGatewayServiceProviderAgreement.pdf](https://www.dvs.gov.au/users/Documents/DVSGatewayServiceProviderAgreement.pdf).

[\[9\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftnref9) Refer to APP 5.2(b).

[\[10\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftnref10) An ISMS is a framework of documented policies, procedures, and manuals that include the information security controls involved in an organisation’s risk management process.

[\[11\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftnref11) ISO 27001 is a standard for an ISMS, published by the International Organisation for Standardisation.

[\[12\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftnref12) A VLAN provides the devices connected to it with direct access to one another, even if the devices are located on a number of different LAN segments.

[\[13\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftnref13) A VPN is a network which relies on public connections, such as the Internet, to connect to a private network, such as a company’s internal network.

[\[14\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftnref14) Network security protocols are a type of network protocol that define the processes that will be used to protect data in transit over network connections.

[\[15\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftnref15) SSH is a cryptographic network protocol which provides a secure channel which will connect an SSH client with an SSH server.

[\[16\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftnref16) A DDoS attack is when multiple systems direct high volumes of activity to a targeted system, usually with the aim of rendering that system unavailable or inaccessible to its legitimate users.

[\[17\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftnref17) A load balancer is a device that distributes network traffic across a number of servers.

[\[18\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftnref18) A WAF blocks HTTP traffic to and from a web application. It is different to a regular firewall in that it filters the content of specific web applications (and regular firewalls protect server-to-server communications).

[\[19\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftnref19) A WAP is a set of communication protocols that configures the way that wireless devices can access the internet.

[\[20\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftnref20) For more information, refer to [https://asd.gov.au/publications/protect/essential-eight-explained.htm](https://asd.gov.au/publications/protect/essential-eight-explained.htm).

[\[21\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify#ftnref21) Multi-factor authentication is a method of securing access to a system or its contents by requiring more than one type of authentication to verify a user’s identity. A common example is logging into a website with a password, and being requested to enter

an additional one-time password that the website sends to the user’s phone number or email address.

Did you find this helpful?

![](https://www.oaic.gov.au/__data/assets/git_bridge/0012/12063/mysource_files/thumbsup.svg)Yes

![](https://www.oaic.gov.au/__data/assets/git_bridge/0012/12063/mysource_files/thumbsdown.svg)No

![](https://www.oaic.gov.au/__data/assets/git_bridge/0012/12063/mysource_files/thumbsup.svg)We'd love to hear more!

![](https://www.oaic.gov.au/__data/assets/git_bridge/0012/12063/mysource_files/thumbsdown.svg)Please tell us more

Rate your experience

We'd love to hear more about your rating

What did you come here to do?

How can we improve this information?

reCAPTCHA

Recaptcha requires verification.

I'm not a robot

reCAPTCHA

⨯

Share

[Facebook](https://www.facebook.com/share.php?u=https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify) [Twitter](https://twitter.com/intent/tweet?url=https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify) [Linkedin](https://www.linkedin.com/sharing/share-offsite?url=https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/handling-personal-information-vix-verify)

reCAPTCHA