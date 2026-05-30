---
url: "https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities"
title: "Securing personal information: Services Australia (formerly Department of Human Services), data matching activities | OAIC"
---

## We use cookies on this site

We use cookies to analyse traffic and to improve your browsing experience on our website. To find out more, read our [privacy policy](https://www.oaic.gov.au/about-the-OAIC/our-corporate-information/plans-policies-and-procedures/privacy-policy#section-collecting-through-the-oaic-website).

Close

[Skip to main content](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#main-content-area)

# Securing personal information: Services Australia (formerly Department of Human Services), data matching activities

[Listen](https://app-oc.readspeaker.com/cgi-bin/rsent?customerid=9755&lang=en_au&readclass=page-content&url=https%3A%2F%2Fwww.oaic.gov.au%2Fprivacy%2Fprivacy-assessments-and-decisions%2Fprivacy-assessments%2Fsecuring-personal-information-services-australia-formerly-department-of-human-services%2C-data-matching-activities "Listen to this page using ReadSpeaker webReader")

- ## On this page

- [Part 1: Executive summary](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#part-1-executive-summary)
- [Part 2: Introduction](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#part-2-introduction)
- [Part 3: Findings](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#part-3-findings)
- [Part 4: Recommendations and responses](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#part-4-recommendations-and-responses)
- [Part 5: Description of assessment](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#part-5-description-of-assessment)
- [Appendix A: Privacy risk guidance](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#appendix-a-privacy-risk-guidance)
- [Footnotes](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#footnotes)

Publication date: 20 July 2020

Assessment undertaken: August 2018

Draft report issued: 24 February 2020

Report published: 20 July 2020

## Part 1: Executive summary

1.1 This report outlines the findings of the Office of the Australian Information Commissioner’s (OAIC) privacy assessment of the Department of Human Services’ (DHS) handling of personal information under the _Privacy Act 1988_, conducted in August 2018.

1.2 This assessment was conducted under s 33C(1)(a) of the Privacy Act, which allows the OAIC to assess whether an entity maintains and handles the personal information it holds in accordance with the Australian Privacy Principles (APPs).

1.3 The purpose of this assessment was to establish whether DHS is taking reasonable steps to secure personal information under the Pay-As-You-Go (PAYG) and Non-Employment Income Data Matching (NEIDM) programs, in accordance with APP 11. APP 11 requires an entity to take reasonable steps to protect personal information it holds from misuse, interference and loss, as well as unauthorised access, modification or disclosure.

1.4 The assessment found that DHS has taken steps to secure personal information it holds. However, the OAIC also identified privacy risks associated with the PAYG and NEIDM programs and has made four recommendations in the report to address these risks.

1.5 The OAIC recommends that DHS:

- regularly reviews its cyber security policy documentation to ensure that documents are up-to-date and accurately reflect current practices
- ensures that it is applying appropriate ICT security controls by:
  - conducting risk-based assessments of whether hard disks of database servers holding personal information should be encrypted and whether internal traffic between web servers and databases should be encrypted
  - documenting the outcomes of these considerations
  - sharing the record of personal information holdings, maintained by DHS’s Operational Privacy Section, with the Cyber Security Branch to ensure that appropriate protections are applied to this information
- strengthens access controls to its systems by:
  - introducing dedicated workstations for privileged users performing privileged tasks, particularly for privileged users with high levels of administrative access
  - implementing multi-factor authentication (MFA) for all internal users, and especially for privileged users
  - documenting the decision and/or including details of alternative approaches to managing the risks associated with non-implementation of certain [Information Security Manual \- external site](https://acsc.gov.au/infosec/ism/) (ISM) controls
- establishes formal communication channels between the Cyber Security and Privacy teams, including documenting the relationship between the two areas as well as the roles and responsibilities of each area in the event of a cyber security incident or eligible data breach.

## Part 2: Introduction

### Background

2.1 Data matching is the bringing together of at least two data sets that contain personal information from different sources, and the comparison of those data sets with the intention of producing a match. [\[1\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn1) Agencies must comply with the Privacy Act and this encompasses the data matching related activities that they undertake. In addition to their Privacy Act obligations, government agencies such as DHS that conduct data matching activities can voluntarily adopt the OAIC’s [Guidelines on Data Matching in Australian Government Administration](https://www.oaic.gov.au/_old/privacy/guidance-and-advice/guidelines-on-data-matching-in-australian-government-administration).

2.2 The OAIC was funded to provide regulatory oversight of privacy implications arising from DHS’s increasing data matching activities using new methodologies, for the period 1 January 2016 to 30 June 2019. This funding is part of the ‘Enhanced Welfare Payment Integrity – non-employment income data matching’ 2015-16 budget measure.

2.3 DHS [\[2\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn2) undertakes compliance activities through data matching programs to ensure ongoing eligibility for entitlements and to maintain the integrity of customer payments and services.

### Overview of data matching

2.4 The scope of this assessment focuses on the privacy risks associated with the secure handling of personal information for the following two data matching programs undertaken by DHS:

- the PAYG program, which matches PAYG taxation data from the Australian Taxation Office (ATO) with information that DHS collects from customers about their income. The PAYG program began with a pilot program in 2001, and formally commenced in 2004. The PAYG program focuses on identifying discrepancies between the employment income that customers report to DHS, and the PAYG payment summary information that employers provide to the ATO. [\[3\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn3) Where a discrepancy is identified, compliance action may be taken.

- the NEIDM program, which matches non-employment income data from the ATO with information that DHS collects from customers about their income. The NEIDM program began in 2016 and focuses on identifying discrepancies between income reported by customers to Centrelink and to the ATO. This includes declared earnings, compensation payments and real estate income. [\[4\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn4) Where a discrepancy is identified, compliance action may be taken.


#### Systems used for data matching

2.5 The main systems used by the PAYG and NEIDM programs include:

- DHS’s Income Security Integrated System (ISIS) database, the primary database for Centrelink customer records, which includes details of DHS payments made to customers
- DHS’s SAP HANA [\[5\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn5) database, which includes general information about DHS customers such as:
  - names, addresses and dates of birth. SAP HANA receives real time updates from ISIS.
  - matched data received from the ATO.
- ATO databases, containing customer information and tax information.

2.6 The OAIC understands that DHS houses all raw Centrelink customer data in the Enterprise Data Warehouse (EDW). Information required for the PAYG and NEIDM programs is extracted from the EDW and sent as data files to the ATO in the form of an ‘ATO Compliance Extract’ (ACE). Twice a year, DHS sends these files to the ATO for matching via an encrypted Optus Evolve link.

2.7 While the focus of this assessment is on the PAYG and NEIDM data matching programs, both programs leverage department-wide systems. For example, personal information contained in the ISIS and SAP HANA databases referred to above is used for the PAYG and NEIDM programs, as well as other unrelated purposes.

2.8 For this reason, department-wide documentation and systems are referred to, where appropriate, in this report. Department-wide documentation and systems were considered in this assessment only in relation to functions that contribute to the PAYG and NEIDM programs.

#### How data is used

2.9 The ATO uses the customer’s personal information in the data file to match it to any data that the ATO holds about that customer. The ATO assigns a confidence level to the quality of the data to indicate to DHS the accuracy of the match.

2.10 Once matched, the ATO sends a response data file to DHS. The data received will differ depending on the program. Under the PAYG program, the data will contain:

- PAYG payment summary – payer record
- PAYG payment summary – payee record.

Under the NEIDM program, this will contain the customer’s file with their:

- income tax return data set for the past five years
- PAYG data set for the past five years. [\[6\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn6)

2.11 DHS is not aware of the specific process used within the ATO to match the DHS file to the ATO income data. This assessment did not consider the ATO’s personal information handling practices.

2.12 Data files from the ATO flow into DHS’s SAP HANA database. DHS performs data quality and integrity checks on the data files received from the ATO, such as ensuring recognisable dates appear in date fields. The ICT team registers each row of data and validates them before pushing the records through the standardisation process, which prepares the data for identity matching. After completion of the standardisation process, the identity matching process is run. This is where identities are matched with Centrelink records.

2.13 Since July 2016, the income compliance review processes under the PAYG program have been in an online platform using the Online Compliance Intervention (OCI) system, later renamed the Employment Income Confirmation (EIC) system in February 2017. DHS undertakes a manual compliance process for the NEIDM program.

## Part 3: Findings

### Our approach

3.1 The key findings of the assessment are set out below under the following headings:

- governance, culture and training
- internal practices, procedures and systems
- ICT security
- access security
- third party providers
- data breach response
- physical security
- destruction and de-identification.

3.2 For each issue, we have outlined a summary of the OAIC’s observations, the privacy risks arising from these observations, followed by recommendations or suggestions to address those risks.

3.3 As part of this assessment the OAIC has considered the:

- [APP Guidelines](https://www.oaic.gov.au/_old/privacy/australian-privacy-principles-guidelines), which outline the mandatory requirements of the Australian Privacy Principles (APPs), the way in which the OAIC will interpret the APPs and matters the OAIC may take into account when exercising functions and powers under the Privacy Act in the privacy analysis below.

- OAIC’s [Guide to Securing Personal Information](https://www.oaic.gov.au/_old/privacy/guidance-and-advice/guide-to-securing-personal-information), which provides guidance on reasonable steps and strategies entities may take to protect personal information in accordance with APP 11. The privacy analysis in this section of the report considers the way in which DHS implements these steps and strategies when handling personal information collected for data matching purposes.

- OAIC’s [Data breach preparation and response](https://www.oaic.gov.au/_old/privacy/guidance-and-advice/data-breach-preparation-and-response) guide, when assessing DHS’s data breach response plan. This guide assists Australian Government agencies, such as DHS, with the management of data breaches in accordance with the Privacy Act

- Australian Government’s [Information Security Manual \- external site](https://acsc.gov.au/infosec/ism/) (ISM), which is issued by the Australian Signals’ Directorate, and is designed to assist Australian Government agencies such as DHS in ‘using their risk management framework to protect their information and systems from cyber threats’. [\[7\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn7) The OAIC considers that complying with relevant standards, such as the ISM, is a reasonable step for an entity to take to meet its obligations under APP 11. Where an entity decides not to adopt a widely used standard, the reasons for this decision should be clearly documented. [\[8\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn8) This assessment was conducted with reference to the 2017 edition of the ISM, which was the most recent edition at the time of fieldwork.

- What is ‘reasonable’ for the purposes of APP 11 is a question of fact in each individual case. Given the scale and sensitivity of personal information that DHS collects and retains, the OAIC considers it is reasonable to expect that DHS will have a robust and comprehensive approach to protecting personal information.


### Governance, culture and training

#### Observations

##### Oversight, accountability and decision-making

3.4 The Chief Counsel, Legal Services Division, has responsibility and oversight of the centralised support function for privacy within DHS. The Operational Privacy Section (Privacy team) sits within the Programme Advice and Privacy Branch, which is one of the branches within the Legal Services Division. The Privacy team carries out centralised privacy support functions. The team was comprised of 14 Privacy Advisors and five Legal Officers at the time of the assessment.

3.5 DHS has appointed a Privacy Officer and Privacy Champion who oversee privacy matters.

3.6 The National Manager for Cyber Security assumes the role of Chief Information Security Officer (CISO) for the organisation and is responsible for coordinating communication between security and business functions, as well as managing and understanding the application of controls and security risk management processes.

3.7 The Director responsible for Cyber Security Operations within DHS has been appointed the Information Technology Security Adviser (ITSA) with the responsibility for information technology security management across DHS.

3.8 For each system used by the PAYG and NEIDM programs, a system owner has been identified who is responsible for the operation of the system. Each system owner is a Senior Executive Services (SES) officer and is responsible for ensuring that the system obtains and maintains accreditation to operate (discussed further in the ‘Risk management’ section below).

##### Data-matching relationship between DHS and ATO

3.9 DHS and the ATO broadly manage their overarching service delivery arrangements through a Head Agreement. This is supported by a number of Service Schedules, which detail the governance and management of specific arrangements, including data exchange. DHS advised that clauses are reviewed by its Cyber Security team.

3.10 The Service Schedule for Data Exchange manages data transfers between DHS and the ATO, and outlines terms for complaints handling, reporting responsibilities, information management and risk management. This is accompanied by Abridged Arrangements, where specific details of data exchange arrangements are documented.

3.11 At an operational level, DHS has a Data Management Forum (Forum) that manages day to day issues, such as assisting parties to monitor their performance and meet the obligations under the Service Schedule. The Forum reports to the Governance Committee, also known as the Consultative Forum, established under the Head Agreement.

##### Personnel security, training and culture

3.12 DHS advised that while it is not mandatory for all new employees to obtain a Baseline security clearance, background screening and police checks are completed as a minimum.

3.13 DHS incorporates security access and awareness training in the employee induction program, which explains the process of gaining access to systems, what is considered inappropriate use of data, and the expectations DHS has of personnel using their systems.

3.14 DHS advised that there is a requirement for staff to undertake annual refresher training for cyber security. This is checked as a part of their annual Individual Performance Agreement (IPA) review.

3.15 In terms of privacy training, DHS staff underwent training when the [Australian Government Agencies Privacy Code](https://www.oaic.gov.au/_old/privacy/privacy-registers/privacy-codes-register/australian-government-agencies-privacy-code) (the Code) and the [Notifiable Data Breaches scheme](https://www.oaic.gov.au/_old/privacy/notifiable-data-breaches) (NDB scheme) were introduced.

3.16 DHS provided a copy of the privacy training module and quiz for new starters and refresher training to the OAIC, entitled Privacy Fundamentals (January 2018). The module covers DHS’s privacy framework, legislative obligations around the handling of individual’s information, secrecy and privacy provisions, the APPs, the NDB scheme as well as the identification and reporting of suspected privacy incidents. Staff are required to undertake annual privacy refresher training.

3.17 DHS engages with Privacy Awareness Week, during which the Chief Executive Officer or Privacy Champion messages staff about privacy.

#### Analysis

3.18 Entities should establish clear procedures for oversight, accountability and lines of authority for decisions regarding personal information security. DHS appears to have privacy and security governance processes in place, with the appointment of Privacy Officers and a Privacy Champion. There are also clear decision-making channels driven by senior management. However, interactions between the Privacy and Cyber Security teams on the management of security incidents are unclear and this is discussed later in the ‘Data breach response’ section of this report.

3.19 It is good privacy practice that DHS has signed agreements with the ATO which manages the relationship between the two agencies on data exchange matters. The OAIC encourages DHS to actively review these arrangements to ensure that the agreements remain current and effective.

3.20 Personal information security includes ensuring that all staff are aware of their privacy and security obligations (including senior management). Based on the OAIC’s review of DHS documents and interviews with DHS staff, there is a general awareness of privacy and security issues.

3.21 DHS incorporates privacy and security training in their induction programs for new staff as well as regular refresher courses for existing staff.

3.22 The OAIC did not identify any privacy risks with DHS’s governance, culture or training as they relate to the PAYG and NEIDM programs.

### Internal practices, procedures and systems

#### Observations

##### Cyber security and privacy documentation

3.23 The OAIC reviewed a number of cyber security documents, which relate to systems used for the PAYG and NEIDM programs before, during and after fieldwork. These documents included policies, standards and frameworks relating to access controls, ICT security, incident management and system accreditation. In accordance with ISM controls 0047 and 1154, DHS’s security documentation is formally approved by a person with an appropriate level of seniority and authority, with the date of the most recent review recorded on each information security document.

3.24 ISM control 0888 states that agencies should review information security documentation at least annually or in response to significant changes in the environment, business or system. The OAIC found that, at the time of the assessment, most of the documentation had not been updated since 2016.

3.25 In preparation for the commencement of the Code, DHS updated its internal Operational Privacy Policy (OPP). [\[9\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn9) DHS also provided a draft Data Breach Response Plan (DBRP), which is discussed in further detail later in this report, and a copy of its personal information holding register.

#### Analysis

3.26 Entities should document the internal practices, procedures, and systems that they use to protect personal information. This documentation should outline the personal information security measures that are established and maintained against the risks and threats to personal information. These documents should be regularly reviewed and updated to ensure they reflect the entity’s current acts and practices.

3.27 The OAIC notes that DHS has a comprehensive suite of security policies and procedures, including those relating to ICT, access and physical security, which support the protection of personal information.

3.28 However, while due dates for review of the documents are clearly marked, all of the documents that the OAIC viewed appeared to be overdue. At the time of the assessment, most of DHS’s documentation had not been updated since 2016. This is non-compliant with ISM control 0888.

3.29 Whilst annual reviews of security documentation do not always result in a need for amendment, they are necessary to confirm that documentation is still relevant. Most of the documents provided to the OAIC did not appear to have been reviewed in the 12 months before the assessment. The OAIC considers that a failure to comply with ISM control 0888 and the due dates for review noted in the documents themselves is a medium privacy risk that will increase over time, especially if DHS makes significant environment, business or system changes. It is also considered a reasonable step under APP 11 to regularly review and update documents to ensure that they reflect current information handling practices. Therefore, the OAIC recommends that DHS regularly reviews its cyber security policy documents to ensure that they are up-to-date and accurately reflect current practices.

##### Recommendation 1

The OAIC recommends that DHS regularly reviews its cyber security policy documents to ensure that they are up-to-date and accurately reflect current practices.

### Risk management

#### Observations

3.30 DHS’s department-wide risk management approach is detailed in its Enterprise Risk Management Policy. This document sets out its scope, objectives, risk governance arrangements and key roles and responsibilities for managing risk across the Department, including data matching activity conducted under the PAYG and NEIDM programs. The policy also identifies that DHS risks fall into either strategic or operational risk categories.

3.31 DHS provided the OAIC with an excerpt of a strategic risk assessment conducted in April 2018, which identifies a risk that information may not be protected against unauthorised collection, access, use or disclosure. The document identifies a range of mitigating controls, such as user access controls, logging and monitoring, training, personnel security measures and a variety of other processes.

3.32 There are several risk registers within the Department. The Compliance Assurance Division, which is the business area that accesses PAYG and NEIDM data through SAP HANA, maintains a risk register and a business and risk plan.

##### Security risk assessments

3.33 DHS’s Electronic Information Security Risk Management Approach document describes risk tolerance and appetite and the process for treating security risks deemed to be unacceptable. Ownership for DHS security risks is allocated based on the severity of the risk. For example, risks with a medium rating are owned by the General Manager or Project Senior Responsible Official, while risks with a low rating are owned by the National Manager, Service Leader or Project Manager.

3.34 DHS has developed and implemented an accreditation framework, which is intended to provide a level of assurance that a system is operated in a defined manner in order to manage the risks to that system. DHS requires that systems be accredited before they have authority to operate. In certain situations, DHS provides provisional accreditation where authority to operate is given under the condition that certain remediation activities are completed within a specified period, usually 3-6 months. The DHS System Accreditation Standard describes the processes for accrediting systems. There are four levels of accreditation, which involve different types of system assessment, these are:

- self-assessment — where the accreditation requirements include an accreditation plan, completion of a security questionnaire by the System Owner, acceptance of operating security risk by the Business Owner, and penetration testing (for internet facing systems only)

- standard assessment — where the accreditation requirements include an accreditation plan, system design, Threat and Risk Assessment (TRA), risk treatment plan, and penetration testing (for internet facing systems only)

- comprehensive assessment — where the accreditation requirements include an accreditation plan, system design, TRA, risk treatment plan, System Security Plan (SSP), Standard Operating Procedures (SOPs), Configuration Baseline, and penetration testing (for internet facing systems only)

- rigorous assessment — where the accreditation requirements include an accreditation plan, system design, Statement of Applicability (SoA), TRA, risk treatment plan, SSP, SOPs, compliance audit against SoA, Configuration Baseline, penetration testing (for internet facing systems only), and IRAP assessment (optional).


3.35 The standard assessment process was applied to systems involved in the PAYG and NEIDM programs, which included the undertaking of a TRA. For the PAYG program, changes from the OCI system to the EIC system in February 2017 were preceded by a TRA. The TRA noted that the EIC system had not previously been risk assessed. The TRA identified seven risks, and key risk treatments. Some of the treatments were marked as in progress, others completed, and others not implemented.

##### Privacy impact assessments (PIAs)

3.36 DHS’s OPP requires its staff to undertake a privacy threshold assessment (PTA) for all new projects, and for any other activities that involve changes to the way DHS manages (i.e. collects, discloses, stores or uses) any personal information.

3.37 The Privacy team has implemented a process for DHS staff to undertake PTAs, with information and guidance on how to complete a PTA available on DHS’s intranet. PTAs are conducted by officers in the relevant business area, and the Privacy team manages the completion of PTAs.

3.38 Paragraph 10 of the OPP states that if the PTA identifies that the project or activity involves a significant change to DHS’s management of the personal information involved or has a significant impact on the privacy of individuals, a PIA is required, unless otherwise authorised by the Secretary or a Deputy Secretary of DHS.

3.39 If a PIA is determined to be necessary, these are often conducted by external firms. Before such a PIA is signed off by DHS, they will determine whether to accept the recommendations in the PIA, and also whether it is appropriate to put the name of the PIA on an external online PIA register. DHS also maintains an internal PIA register.

3.40 The Privacy team also ensures a closure report has been completed when the project is implemented, which should show whether the relevant manager has accepted and implemented all of the recommendations in the PIA. Where a recommendation has not been implemented, the Privacy team requests an explanation as to why this is the case.

3.41 A PIA was conducted for the NEIDM program in November 2016. While a PIA was not conducted for the PAYG program or prior to the introduction of the OCI system, the OAIC was advised that a PTA was completed prior to the changes from the OCI to the EIC system in February 2017.

#### Analysis

3.42 The implementation of privacy and security risk management processes is integral to establishing robust and effective privacy and security practices, procedures and systems. These risk management processes allow an entity to identify, assess, treat and monitor privacy risks related to its activities. Good privacy risk management informs and triggers changes to practices, procedures and systems to better manage privacy risks.

3.43 A PIA, especially one conducted at the early stage of a proposal’s development, can assist an entity to identify any personal information security risks and the reasonable steps that could be taken to protect personal information.

3.44 Section 12 of the Code states that an agency must conduct a PIA for all high-risk projects. A project may be a high privacy risk project if the agency reasonably considers that the project involves any new or changed ways of handling personal information that are likely to have a significant impact on the privacy of individuals.

3.45 DHS has implemented a number of processes to assist with the management of privacy and security risks. While these processes are not specific to individual programs, they assist in managing risks identified within the PAYG and NEIDM programs. These include TRAs, PTAs, PIAs and other security assessments. However, the OAIC suggests that DHS amend paragraph 10 of its OPP to remove references to the Secretary or a Deputy Secretary of DHS as the Code does not allow for the Secretary or Deputy Secretary to make alternative decisions regarding PIAs for high risk projects.

3.46 DHS appears to have strong and mature security certification and accreditation processes with regards to the systems used for the PAYG and NEIDM programs. However, in view of the complexity of DHS’s current risk environment and framework, the OAIC suggests that DHS continues to regularly evaluate its risk management policies and practices to ensure their continued effectiveness. Additionally, where new practices evolve, the OAIC suggests that these practices, and the reasons behind them, are appropriately documented. For example, the OAIC suggests that the TRA and risk treatment plans for the changes to the EIC be reviewed, updated and completed to clearly show which treatments have been implemented and the reasons for not adopting any risk treatments.

### ICT security

#### Observations

##### Software security and testing

3.47 DHS’s Standard Operating Environment document covers the ISM requirements for Standard Operating Environments (SOEs) [\[10\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn10) and software patching [\[11\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn11) including:

- using the latest releases of software applications such as PDF readers, web browsers, web browser plug-ins, [\[12\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn12) email clients [\[13\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn13) and software platforms within SOEs
- removing or disabling unneeded operating system accounts, software, components, services and functionality
- developing and implementing a patch management strategy covering the patching of vulnerabilities in operating systems, applications, drivers [\[14\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn14) and hardware devices
- adopting an approach for patching operating systems, applications, drivers and hardware devices that ensures the integrity and authenticity of patches as well as the processes used to apply them.

3.48 DHS does not use data from production environments [\[15\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn15) (including databases) for the PAYG and NEIDM programs in development or testing environments unless the development/testing environments are accredited to the same level as the production environment.

3.49 DHS conducts their own internal network vulnerability scanning. [\[16\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn16) External third parties are contracted to conduct penetration tests. [\[17\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn17) For identified vulnerabilities that pose a potential threat, Cyber Security Branch (Cyber Security team) receives notification. Following a triage process, if the threat is determined to be an incident, the Cyber Security Operations Centre (CSOC) receives an alert to trigger incident response procedures.

3.50 Vulnerabilities are recorded in a register and managed until they are rectified. Risk levels for each vulnerability are assigned so that they may be prioritised. Identified vulnerabilities also have problem tickets raised against them with a description of the vulnerability, the date the problem ticket was opened, the due date for closure, and the change management release reference for the fix.

3.51 Penetration tests and dynamic code [\[18\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn18) inspections are conducted on all external facing on-line service applications before they go-live (and after any major changes).

3.52 Queries made against production data used in data matching are via stored procedures [\[19\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn19) and are scheduled to run at particular times or as part of the data ingestion pipeline. [\[20\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn20) Stored procedures are tested in the System Integration Testing (SIT) and User Acceptance Testing (UAT) environments. DHS customer data used in testing environments is obscured and modified to create dummy data sets. Access controls to the testing environments is the same as access to production environments.

##### Encryption

3.53 ISM control 1425 states that ’hard disks [\[21\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn21) of database servers [\[22\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn22) should be encrypted using full disk encryption’. [\[23\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn23) The OAIC found that DHS does not encrypt hard disks of database servers.

3.54 For ISM control 1425, DHS implements the following:

- access controls to the database servers for both users and database administrators
- physical controls of database servers to prevent theft
- data loss prevention controls on the movement of large attachments
- monitoring of traffic by personnel in the CSOC.

3.55 ISM control 1277 mandates that ’sensitive or classified information communicated between database system and web applications [\[24\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn24) must be encrypted’. The OAIC found that DHS encrypts traffic between database systems and web applications over the internet but does not encrypt internal traffic between web servers [\[25\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn25) and databases.

3.56 For ISM control 1277, DHS implements the following:

- access controls to the network for both users and administrators
- mechanisms to detect malicious software that could be used in ‘man-in-the-middle’ attacks [\[26\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn26) such as vulnerability and antivirus scanning.

3.57 DHS advised that data is not encrypted at rest (when not being used) in databases.

##### Network security

3.58 For the SAP HANA database, which contains data matching data, the Database Management System (DBMS) [\[27\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn27) and underlying operating systems are on virtually separate servers to DHS’s web servers. Additionally, database servers are separate networks to DHS’s workstations.

3.59 Network access controls restrict database servers’ communications to strictly defined network resources, with specific rules in place to address exactly with what network resources such as web servers, application servers [\[28\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn28) and storage area networks [\[29\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn29) SAP HANA needs to communicate.

3.60 ISM control 1243 states that ‘an accurate inventory of all deployed databases and their contents should be maintained and regularly audited’. In addition to the ISM, under the Code, an agency must have a process in place to ensure that it maintains a centralised record of the personal information that it holds. During fieldwork, DHS provided the OAIC with a copy of DHS’s record of personal information holdings, maintained by the Privacy team. The Privacy team advised that the Cyber Security team does not have visibility of these records.

#### Analysis

3.61 ICT security measures help mitigate the risks of internal and external attackers and the damage caused by malicious software such as malware, computer viruses and other harmful programs. ICT security measures should also ensure that the hardware, software and personal information stored on it remain accessible and useful to authorised users.

##### Software security and testing

3.62 Software security requires that entities implement policies, processes and procedures governing the hardening of operating systems and applications as well as promote greater software security through secure software development practices.

3.63 Entities should consider whether the software they use is sufficiently secure. DHS appears to have robust procedures and processes in place to detect and manage information security vulnerabilities that relate to the PAYG and NEIDM programs.

3.64 The OAIC suggests that DHS continues to regularly monitor the operation and effectiveness of their software security measures to ensure that they remain responsive to changing threats and vulnerabilities and other issues that may impact the security of personal information.

3.65 The OAIC notes that regular vulnerability scanning and penetration tests by DHS are effective in identifying threats caused by system misconfigurations, bugs or flaws. These are examples of good privacy protective practices that minimise the risk of personal information being mishandled.

##### Encryption

3.66 Encryption is an important security measure to ensure that information is stored in a form that cannot be easily understood by unauthorised individuals or entities. Encryption methods should be reviewed regularly to ensure they continue to be relevant and effective and are used where necessary.

3.67 While ISM controls 1425 and 1277 have not been implemented, the OAIC found that DHS has some measures in place to mitigate the risk of non-compliance. However, it is a reasonable step under APP 11 to assess the risks around not adopting specific security controls recommended by relevant standards and to document the processes and outcomes of these decisions. There is a medium risk that DHS has not assessed and documented the risks associated with non-compliance of ISM controls 1425 and 1277. Given the volume and sensitivity of the information that DHS holds, it is important that DHS documents decisions not to implement ISM controls 1425 and 1277. In particular, risks should be considered for the database servers used in the PAYG and NEIDM data matching programs such as SAP HANA.

3.68 The OAIC recommends that DHS assesses the need for encryption for its hard disks of database servers holding personal information and for internal traffic between web servers and databases. DHS should also document the process and outcome of the risk-based assessment. If it decides not to implement encryption then DHS should also include in its risk assessment the alternative approaches to managing the risks associated with non-implementation, such as other controls that are already in place.

3.69 The OAIC also notes that DHS does not currently encrypt data at rest. Data-at-rest encryption is considered a good security measure to protect data in the event of a malicious attack as it provides an additional layer of security between customer records and the attacker, as a last line of defence. Therefore, the OAIC suggests that as part of the risk assessment recommended above, the DHS assesses the need for encryption for data at rest.

##### Network security

3.70 Entities must have appropriate security controls in place to protect their network.

3.71 The OAIC notes that databases and operating systems are on separate servers and networks, which decreases the risk of compromise by external and internal adversaries.

3.72 While the Privacy team maintains a record of personal information holdings at DHS, the Cyber Security team’s lack of visibility of this record means there is a medium risk that appropriate information security protections are not being applied to all personal information held on DHS databases and systems. The OAIC recommends that DHS’s Operational Privacy Section shares the record of personal information holdings with the Cyber Security Branch. In addition, sharing this record with the Cyber Security team may also assist with DHS implementing ISM control 1243 (discussed in paragraph 3.60).

##### Recommendation 2

The OAIC recommends, noting that it has other measures in place to protect personal information, that DHS:

- conducts risk-based assessments of whether hard disks of database servers holding personal information should be encrypted and whether internal traffic between web servers and databases should be encrypted. If DHS decides not to implement encryption then it should also include in its risk assessment the alternative approaches to managing the risks associated with non-implementation.
- documents the processes and outcomes of these considerations
- shares the record of personal information holdings, maintained by DHS’s Operational Privacy Section, with the Cyber Security Branch to ensure that appropriate protections are applied to this information.

### Access security

#### Observations

##### Trusted insider risk

3.73 Procedures regarding user identification, authentication and authorisation are covered in DHS’s Standard for User Access Control for IT Systems document. The document details the controls that the Department has in place to limit standard and privileged user access to systems. For a user to access DHS systems, their manager must register a request for access which is forwarded to the Product Manager for the system(s) to approve. Approval is only granted if deemed appropriate by the Product Manager. Access is approved against the position number and not the individual.

3.74 Some roles or additional access requirements, such as access to DHS’s PROTECTED network, will need specific access approval from senior management. Privileged access [\[30\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn30) and administrative privileges [\[31\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn31) automatically expire after 12 months. Staff receive reminders about the expiration of access.

3.75 For staff moving positions within or leaving DHS, access to systems previously granted is automatically removed by DHS’s identity management tool, the Internal Provisioning Security (IPS) platform. For personnel moving positions, requests for access to systems required for the new role are to be made by managers using the employee’s new position number and approval must again be obtained from the Product Managers for access to be granted.

3.76 The IPS platform is integrated with DHS’s Active Directory which holds personal information of DHS personnel and ensures that only individuals with the appropriate security clearances may:

- have access to certain sensitive and/or protected systems within DHS
- be granted administrative privileges that require a security clearance to perform functions associated with such roles.

3.77 Files cannot be transferred or extracted via standard USB devices. [\[32\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn32) Encrypted USB devices are strictly monitored for distribution and usage. Data is extracted from IT systems by encrypting a person’s ID and storing the information on a shared drive with restricted access.

3.78 DHS has a dedicated Fraud team that deals with internal investigations. These investigations can commence after a complaint made by another staff member or a third party, as well as following internal detection of suspicious activity, such as a staff member accessing their own record, records belonging to family members and associates or records of high-profile customers like public figures. Suspicious searches can also be uncovered through audit logs (discussed in paragraphs 3.87-3.89).

3.79 DHS determines whether suspicious activities require further action, which may include internal action and/or involvement of external parties such as the Director of Public Prosecutions.

##### Administrator access

3.80 The OAIC observed the following administrator access practices at DHS which are applied to systems used for the PAYG and NEIDM programs:

- no shared Database Administrator (DBA) [\[33\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn33) accounts
- database administrator accounts are used exclusively for administrative tasks, with standard database accounts used for general purpose interactions with databases
- database administrator access is restricted to defined roles rather than accounts with default administrative permissions
- the ability to access, insert, modify and remove content in databases is based on work duties – not all DBAs have access to all of DHS
- default, shared and anonymous DBA accounts are not allowed and any anonymous database accounts are removed.

3.81 DBAs log on first as standard users and then as DBAs. Standard user passwords are hashed, while DBA passwords are hashed and salted. [\[34\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn34) DBA accounts are used exclusively for administrative tasks.

3.82 Standard administrator accounts are role-based with subsequent DBA accounts being resource-based. [\[35\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn35)

3.83 ISM control 1380 states that ‘privileged users should use a dedicated workstation when performing privileged tasks’. DHS’s privileged users do not perform privileged activities from dedicated workstations. Instead, privileged users connect to DHS’s Gateway management zone [\[36\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn36) from a standard user workstation over a virtual session. [\[37\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn37)

3.84 For ISM control 1380, DHS advised that it has:

- access controls at workstations
- implemented multi-factor authentication (MFA) [\[38\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn38) for selected privileged users
- prevented users from logging in as a privileged user via remote access.

##### Identity management and authentication

3.85 DHS advised the OAIC that administrators with access to DHS’s Internet Gateway are the only personnel required to have MFA. However, MFA is being considered for additional account users as well as standard users. For those staff with MFA, the RSA key [\[39\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn39) is applied as their second factor.

##### Passwords

3.86 Account passwords have a minimum length of 10 characters, and staff must update their passwords every three months. Staff are locked out of the system after five unsuccessful login attempts, and staff are not able to reuse their last five passwords. The password needs to be re-entered once the desktop screen locks, as the session times out after 15 minutes, in accordance with the ISM. [\[40\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn40)

##### Audit logging and monitoring

3.87 DHS conducts audit and event logging of user activities across all systems and networks. According to DHS’s Policy & Standard for Cyber Security Event Logging, Monitoring and Auditing document, DHS’s CSOC captures log events from all its systems as soon after the event as possible and stores them in a secure centralised logging facility. This allows for DHS to conduct proactive, or real time, monitoring of audit logs and when necessary to alert the relevant teams for any information security incidents that they should respond to or investigate further.

3.88 Access to SAP HANA and the data used in the PAYG and NEIDM programs is limited. Actions by staff in SAP HANA are logged and administrator privileges monitored. Laptops have asset tracking software, which give alerts when they are being used overseas. Alerts from SAP HANA are raised and sent to the ‘Security Information and Event Management’ (SIEM) [\[41\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn41) tool for investigation.

3.89 DHS system owners ensure that event logs are protected from modification and unauthorised access, and whole or partial loss within their seven-year retention period, or 18-month retention period for Domain Name System (DNS) [\[42\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn42) and proxy logs. [\[43\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn43) Following the relevant retention period, logs are archived.

#### Analysis

3.90 Access security and monitoring controls help entities protect against internal and external risks by ensuring that personal information is only accessed by authorised persons. Entities need to guard against internal threats such as unauthorised access or misuse of personal information by staff, including contractors. To minimise this risk entities should, when possible, limit internal access to personal information to those who require access to do their job.

##### Trusted insider risk and administrator access

3.91 DHS’s role-based system access and use of an active directory are good privacy protective controls to ensure that only authorised persons have access to data on a need-to-know basis. This is supported by the termination of access procedures in place when a staff member changes roles or leaves DHS.

3.92 Under ISM control 1380, which states that ‘privileged users should use a dedicated workstation when performing privileged tasks’, the OAIC notes that DHS has some protections in place, such as access controls of users to workstations and MFA for selected privileged users, to make it more difficult for an unauthorised person to gain privileged access to DHS’s networks (noted at paragraphs 3.83-3.84). However, the OAIC identified some gaps in relation to DHS’s user access controls, which present a medium risk that DHS may not have fully mitigated all the risks associated with ISM control 1380. Therefore, the OAIC recommends that DHS considers introducing dedicated workstations for privileged users performing privileged tasks, particularly for privileged users with high levels of administrative access.

##### Identity management and authentication

3.93 Authentication is a key part of the process to ensure that only authorised persons have access to particular systems.

3.94 The OAIC notes that DHS has some processes in place to identify individuals accessing particular systems and control their access by associating user rights and restrictions with their identity. However, more stringent controls can be implemented in the identity management and authentication space, such as expanding the usage of MFA.

3.95 ISM control 0974 notes that ‘agencies should use multi-factor authentication for all users’ and mandatory ISM control 1173 stipulates that ’multi-factor authentication must be used to authenticate privileged users and other positions of trust’. The OAIC found that, except for system administration personnel with access to DHS’s Gateway, MFA is not used. This is non-compliant with ISM control 1173. Despite plans to widen the implementation of MFA usage, at this point its lack of widespread use, especially among privileged users, represents a medium risk that access security could be compromised. The implementation of MFA is also considered a reasonable step under APP 11 to limit and control access to a system or network, and also to the information contained within it. [\[44\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn44) Therefore, the OAIC recommends that DHS increases the use of MFA across the Department, especially for privileged/ higher-risk users.

3.96 It is a reasonable step under APP 11 to assess the risks around not adopting certain ISM controls, such as MFA, and to document the processes and outcomes of these decisions. The OAIC also recommends that DHS includes details of alternative approaches to managing the risks associated with non-implementation, such as other controls that are already in place.

##### Passwords

3.97 Entities should use passwords and passphrases to identify that users requesting access to any particular systems are authorised users. DHS’s use and enforcement of complex passwords to identify that users requesting access to its systems are authorised users is a good privacy protective measure.

##### Audit logging and monitoring

3.98 Unauthorised access of personal information can be detected by reviewing a record of system activities, such as an audit log. Maintaining a chronological record of system activities (by both internal and external users) is often the best way for reviewing activity on a computer system to detect and investigate privacy incidents.

3.99 The OAIC notes that DHS has a CSOC, which provides proactive real time monitoring and audit logging. This is also supported by the monitoring of internal unauthorised access through the internal Fraud team, which feeds into relevant business areas as appropriate, including the CSOC and Privacy teams.

3.100 DHS appears to have processes in place across the Department to monitor access to the systems used for the PAYG and NEIDM programs.

##### Recommendation 3

The OAIC recommends that DHS:

- considers introducing dedicated workstations for privileged users performing privileged tasks, particularly for privileged users with high levels of administrative access
- considers implementing MFA for all users, and especially for privileged users
- documents the processes and decisions and/or includes details of alternative approaches to managing the risks associated with non-implementation of certain ISM controls.

### Third party providers

#### Observations

3.101 This assessment did not focus on DHS’s relationship with third party providers. However, the OAIC made some brief observations during fieldwork where appropriate.

3.102 DHS advised that cabling and infrastructure for systems used for data matching are outsourced to third party providers. Disposal of hardware, such as cabinets, are also outsourced. Contracts with third party providers stipulate oversight processes such as the regular auditing of their activities.

3.103 The Cyber Security team receives some third-party support from independent vendors to conduct penetration testing (as noted at 3.49).

#### Analysis

3.104 APP 11 imposes obligations on DHS to protect personal information it holds, including where that personal information is being handled by a third party. Reasonable steps can include influencing the third party’s conduct. Section 95B of the Privacy Act also imposes obligations for agencies to ensure that a contracted service provider (as defined in s 6 of the Privacy Act) does not do an act, or engage in a practice, that would breach an APP.

3.105 Based on the limited observations made by the OAIC, DHS appears to have some controls in place to manage the handling of personal information by third parties, such as regular audit checks. In the context of the PAYG and NEIDM programs, the OAIC did not identify any privacy risks associated with DHS’s management of third-party providers.

### Data breach response

#### Observations

##### Cyber response

3.106 DHS’s CSOC is used to detect and respond to cyber security alerts and incidents. Alerts are investigated and, if required, escalated to DHS’s senior executive and external agencies such as the Australian Federal Police and the Australian Cyber Security Centre. The CSOC constantly monitors DHS’s systems and networks and displays relevant security information to staff in the CSOC on overhead dashboards including network data usage, attempted breaches and external threats.

3.107 DHS maintains policies and procedures around how data is to be handled such as through the DHS Records Management Policy, DHS Information Handling Guide and DHS Information Management Governance Policy Statement.There are also policies and procedures for how to respond if data is removed from systems without authorisation including a Policy & Standard for Cyber Security Incident Management and a Cyber Security Incident Response Plan.

3.108 Cyber security incidents are managed by the Incident Response Team within the Cyber Security Branch. If an incident was the result of a failure of an ICT technical control then the response is managed by Cyber, otherwise incidents that are the result of other types of failures (e.g. human error) are handed to the appropriate business area for follow-up and further investigation. Incidents are reported to both the individual client(s) concerned and where data originated from other agencies (e.g. ATO).

##### Privacy response

3.109 DHS has organisation-wide methods for identifying, assessing, containing, remediating and reporting data breaches. The OAIC has reviewed DHS’s OPP and draft DBRP, which outline the staff roles and responsibilities for these processes. The draft DBRP was updated to reflect DHS’s obligations under the NDB scheme, which commenced on 22 February 2018.

3.110 All staff are required to report any potential breaches to the Privacy team, which is responsible for the initial response and investigation of the activity. Incidents deemed as serious are raised with the Escalation Coordination Team, where a separate policy guides the incident management process.

##### Analysis

3.111 In the event of a data breach, having a response plan that includes procedures and clear lines of authority can assist an entity to contain the breach and manage the response. Ensuring that staff (including contractors) are aware of the plan and understand the importance of reporting breaches is essential for the plan to be effective.

3.112 DHS’s DBRP includes procedures and clear lines of authority, such as its incident reporting system. The DBRP also sets out how the plan will apply to various types of data breaches, and circumstances where external entities, such as the OAIC, may need to be involved. The OAIC suggests that DHS continues to raise staff awareness of DHS’s incident response and reporting process, which could include testing the plan to help key stakeholders practise their roles. The OAIC also suggests that the plan be regularly reviewed and updated.

3.113 The OAIC also suggests that DHS considers ways it can ensure corporate knowledge about processes, procedures and systems is preserved and made available to new staff (e.g. consulting Cyber Security and Privacy teams following an incident).

3.114 The OAIC found that DHS has mature cyber security incident management response procedures, maintained by the Cyber Security team. However, while the Privacy team’s draft DBRP identifies the Cyber Security team as a stakeholder, the Cyber Security team’s Incident Response Plan does not mention the Privacy team. Given the overlap between the two business areas in terms of breach management and mitigation, there is a medium risk that appropriate action and escalation processes are not followed. Therefore, the OAIC recommends that DHS establishes formal communication channels between the Cyber Security and Privacy teams, including documenting the relationship between the two areas as well as the roles and responsibilities of each area in the event of a cyber security incident or eligible data breach.

##### Recommendation 4

The OAIC recommends that DHS establishes formal communication channels between the Cyber Security and Privacy teams, including documenting the relationship between the two areas as well as the roles and responsibilities of each area in the event of a cyber security incident or eligible data breach.

### Physical security

#### Observations

3.115 The OAIC was shown one of DHS’s server rooms and observed:

- the physical security measures in place to control access to the room
- the closed-circuit TV (CCTV) system within the room to monitor activities within the room from a remote location
- the locked racks to prevent unauthorised access to the switches and other computing devices in the racks.

3.116 DHS advised that its buildings meet, at a minimum, Zone 2 requirements, in accordance with the Australian Government’s Protective Security Policy Framework (PSPF). [\[45\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn45) This includes CCTV, access controls, key schedules and guarding arrangements. No internal CCTV is installed. Physical security certification certificates were viewed for DHS restricted zones that house sensitive ICT systems including third-party data centres. [\[46\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn46)

3.117 The CSOC is a restricted Zone 3 area with a segregated Zone 4 area for special investigations. The security measures of the CSOC that prevent unauthorised access were observed during fieldwork, including shading that can be applied to the windows between the CSOC and the CSOC observation platform to prevent unauthorised viewing of activities and information within the CSOC.

3.118 DHS advised that the certification of zones is determined internally and is reviewed every two years.

3.119 DHS has a clear desk policy, and the OAIC was advised that nightly checks take place to ensure it is enforced. Signs advertising the policy were observed in common areas during fieldwork.

#### Analysis

3.120 Physical security is an important part of ensuring that personal information is not inappropriately accessed. Entities should consider whether their workplace is designed to facilitate good privacy practices.

3.121 Physical security of the server room and CSOC were found to adequately restrict access to authorised personnel.

3.122 Based on the limited observations made by the OAIC, no privacy risks were identified with regards to DHS’s physical security measures.

### Destruction and de-identification

#### Observations

3.123 APP 11.2 requires an APP entity to take reasonable steps in the circumstances to destroy personal information that it holds about an individual or to ensure that the information is de-identified, if:

- the entity no longer needs the information for any purpose for which the information may be used or disclosed by the entity under the APPs
- the information is not contained in a Commonwealth record [\[47\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn47)
- the entity is not required by or under an Australian law, or a court/tribunal order, to retain the information.

3.124 If the personal information is contained in a Commonwealth record, the agency is not required to destroy or de-identify the personal information under APP 11.2. The agency will instead be required to comply with the provisions of the _Archives Act 1983_ (Archives Act) in relation to those Commonwealth records. A Commonwealth record can, as a general rule, only be destroyed or altered in accordance with s 24 of the Archives Act.

3.125 At the time of the assessment, Guideline 7 of the OAIC’s Guidelines on Data Matching in Australian Government Administration (Guidelines), specifically advised agencies that in order to comply with the Guidelines they should destroy records collected for the purpose of data matching in accordance with the National Archives of Australia’s General Disposal Authority 24 – Records Relating to Data Matching (GDA 24). [\[48\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftn48) GDA 24 stated that unmatched records and matched records not selected for investigation or where a decision was made not to proceed with investigation should be destroyed within 90 days of the completion of the data matching activity unless extension of time was approved by the Privacy Commissioner.

3.126 DHS provided the OAIC with updated copies of the PAYG and NEIDM program protocols. Both protocols state that DHS destroys all data that is not required, in line with Guideline 7.

#### Analysis

3.127 The OAIC did not identify any privacy risks associated with DHS’s destruction and de-identification processes of the PAYG and NEIDM data.

## Part 4: Recommendations and responses

### Recommendation 1

#### OAIC recommendation

4.1 The OAIC recommends that DHS regularly reviews its cyber security policy documents to ensure that they are up-to-date and accurately reflect current practices.

#### Response by DHS to the recommendation

4.2 Services Australia will conduct an audit of its policy documentation.

- A comprehensive audit of all cyber security documentation has been completed.
- The monthly ISM changes as published by ACSC are reviewed to identify impacted policies and required actions. Policies are updated, where required.
- With regards to reflecting current operational practice, policy updates are regularly triggered by relevant events:
  - ISM monthly updates;
  - Cyber security incidents;
  - Threat and risk assessments; and
  - Vulnerability assessments.

### Recommendation 2

#### OAIC recommendation

4.3 The OAIC recommends, noting that it has other measures in place to protect personal information, that DHS:

- conducts risk-based assessments of whether hard disks of database servers holding personal information should be encrypted and whether internal traffic between web servers and databases should be encrypted. If DHS decides not to implement encryption then it should also include in its risk assessment the alternative approaches to managing the risks associated with non-implementation
- documents the processes and outcomes of these considerations
- shares the record of personal information holdings, maintained by DHS’s Operational Privacy Section, with the Cyber Security Branch to ensure that appropriate protections are applied to this information.

#### Response by DHS to the recommendation

4.4 Services Australia will conduct the recommended assessments and document the outcomes.

Services Australia agrees it will document and have accepted the risk(s) of not using hard disk encryption for the PAYG an NEIDM databases.

Cyber Security has now been provided with access to the record of personal information.

### Recommendation 3

#### OAIC recommendation

4.5 The OAIC recommends that DHS:

- considers introducing dedicated workstations for privileged users performing privileged tasks, particularly for privileged users with high levels of administrative access
- considers implementing MFA for all users, and especially for privileged users
- documents the processes and decisions and/or includes details of alternative approaches to managing the risks associated with non-implementation of certain ISM controls.

#### Response by DHS to the recommendation

4.6 Services Australia accepts this recommendation and will consider these items and where required implement the capability or document alternate action.

Services Australia will document and accept the risks of using virtual rather than dedicated workstations for admin functions.

Multi-Factor authentication for Services Australia staff, especially privileged users, is currently being implemented.

### Recommendation 4

#### OAIC recommendation

4.7 The OAIC recommends that DHS establishes formal communication channels between the Cyber Security and Privacy teams, including documenting the relationship between the two areas and the roles and responsibilities of each area in the event of a cyber security incident or eligible data breach.

#### Response by DHS to the recommendation

4.8 Services Australia accepts this recommendation. Cyber Security’s Incident Management plan will be updated to include privacy teams. In addition a roles and responsibilities document will be developed.

Services Australia’s Cyber Security Incident Management plan has been updated and a formal communications channel has been established between Cyber Security and Privacy teams, including documenting the relationship between the two areas and the roles and responsibilities of each area in the event of a cyber security incident or eligible data breach. Examples can be seen in take downs of fake myGov websites when using government branding.

## Part 5: Description of assessment

### Objective and scope of the assessment

5.1  This assessment was conducted under s 33 C(1)(a) of the Privacy Act, which allows the OAIC to assess whether an entity maintains and handles the personal information it holds in accordance with the APPs.

5.2 The objective of this assessment was to determine whether DHS is taking reasonable steps to secure personal information, in relation to the PAYG and NEIDM programs, in accordance with its obligations under APP 11 (security of personal information).

5.3 The scope of this assessment was limited to the consideration of DHS’s handling of personal information with regards to the PAYG and NEIDM programs. Department-wide systems were considered where both programs leveraged those systems.

### Privacy risks

5.4 Where the OAIC identified privacy risks and considered those risks to be high or medium risks, according to OAIC guidance (Appendix A refers), the OAIC made recommendations to DHS about how to address those risks. These recommendations are set out in Part 4 of this report.

5.5 The OAIC assessments are conducted as a ‘point in time’ assessment; that is, our observations and opinion are only applicable to the time period in which the assessment was undertaken.

5.6 For more information about privacy risk ratings, refer to the OAIC’s ‘Risk based assessments – privacy risk guidance’. Chapter 7 of the OAIC’s [Guide to privacy regulatory action](https://www.oaic.gov.au/_old/about-us/our-regulatory-approach/guide-to-privacy-regulatory-action) provides further detail on this approach.

### Timing, location and assessment techniques

5.7 The OAIC conducted a risk-based assessment of DHS’s data matching programs and focused on identifying privacy risks to the secure handling of personal information in its relation to the APPs.

5.8 The assessment involved the following:

- review of relevant policies and procedures provided by DHS
- fieldwork, which included interviewing key members of staff and reviewing further documentation, at the DHS office in Canberra on 1 August and 2 August 2018.

5.9 The OAIC retained the services of an ICT consulting firm, Shearwater Solutions, to assist with assessing the technical aspects of this assessment. The OAIC considered Shearwater Solutions’ findings and recommendations in the process of writing this report.

### Reporting

5.10 The OAIC publishes final assessment reports in full, or in an abridged version, on its website. All or part of an assessment report may be withheld from publication due to statutory secrecy provisions, privacy, confidentiality, security or privilege. This report has been published in full.

## Appendix A: Privacy risk guidance

| Privacy risk rating | Entity action required | Likely outcome if risk is not addressed |
| --- | --- | --- |
| High risk<br>Entity must, as a high priority, take steps to address mandatory requirements of Privacy legislation | Immediate management attention is required.<br>This is an internal control or risk management issue that if not mitigated is likely to lead to the following effects | - Likely breach of relevant legislative obligations (for example, APP, TFN, Credit) or not likely to meet significant requirements of a specific obligation (for example, an enforceable undertaking)<br>- Likely adverse or negative impact upon the handling of individuals’ personal information<br>- Likely violation of entity policies or procedures<br>- Likely reputational damage to the entity, such as negative publicity in national or international media.<br>- Likely adverse regulatory impact, such as Commissioner Initiated Investigation (CII), enforceable undertakings, material fines<br>- Likely ministerial involvement or censure (for agencies) |
| Medium risk<br>Entity should, as a medium priority, take steps to address Office expectations around requirements of Privacy legislation | Timely management attention is expected.<br>This is an internal control or risk management issue that may lead to the following effects | - Possible breach of relevant legislative obligations (for example, APP, TFN, Credit) or meets some (but not all) requirements of a specific obligation<br>- Possible adverse or negative impact upon the handling of individuals’ personal information<br>- Possible violation of entity policies or procedures<br>- Possible reputational damage to the entity, such as negative publicity in local or regional media.<br>- Possible adverse regulatory impacts, such as Commissioner Initiated Investigation (CII), public sanctions (CII report) or follow up assessment activities.<br>- Possible ministerial involvement or censure (for agencies) |
| Low risk<br>Entity could, as a lower priority than for high and medium risks, take steps to better address compliance with requirements of Privacy legislation | Management attention is suggested.<br>This is an internal control or risk management issue, the solution to which may lead to improvement in the quality and/or efficiency of the entity or process being assessed. | - Risks are limited, and may be within acceptable entity risk tolerance levels<br>- Unlikely to breach relevant legislative obligations (for example, APP, TFN, Credit)<br>- Minimum compliance obligations are being met |

## Footnotes

[\[1\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref1) Office of the Australian Information Commissioner’s [Guidelines on Data Matching in Australian Government Administration](https://www.oaic.gov.au/_old/privacy/guidance-and-advice/guidelines-on-data-matching-in-australian-government-administration), June 2014, Key terms section.

[\[2\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref2) The Department of Human Services (DHS) has since been renamed Services Australia. However, this report refers to DHS throughout, as it was known at the time this assessment was conducted.

[\[3\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref3) Department of Human Services, [Pay-As-You-Go (PAYG) Data-Matching program protocol](https://www.humanservices.gov.au/sites/default/files/2017/05/program-protocol-payg-data-matching-may-2017.docx), May 2017, p.4. The OAIC previously conducted an assessment on the PAYG program and the report is published at [Handling of personal information — Department of Human Services PAYG data matching program](https://www.oaic.gov.au/_old/privacy/privacy-assessments/handling-of-personal-information-department-of-human-services-payg-data-matching-program).

[\[4\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref4) Department of Human Services, [NEIDM Data-Matching program protocol](https://www.humanservices.gov.au/sites/default/files/2017/05/program-protocol-neidm-august-2016.docx), August 2016, p.22. The OAIC previously conducted an assessment on the NEIDM program and the report is published at [Handling of personal information — Department of Human Services NEIDM data matching program](https://www.oaic.gov.au/_old/privacy/privacy-assessments/handling-of-personal-information-department-of-human-services-neidm-data-matching-program).

[\[5\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref5) SAP HANA is a data management platform that converges databases with analytical processing, application development capabilities, data integration, and data quality. See [SAP HANA](https://www.sap.com/australia/products/hana.html).

[\[6\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref6) For the full list of information fields sent from the ATO to DHS, please refer to the technical standards section of the [DHS NEIDM program protocol](https://www.humanservices.gov.au/sites/default/files/2017/05/program-protocol-neidm-august-2016.docx).

[\[7\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref7) See [Australian Government Information Security Manual](https://acsc.gov.au/publications/ism/Australian_Government_Information_Security_Manual.pdf), 2019, p.6.

[\[8\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref8) See the ‘Standards’ section in the OAIC’s [Guide to Securing Personal Information](https://www.oaic.gov.au/_old/privacy/guidance-and-advice/guide-to-securing-personal-information).

[\[9\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref9) Version 3 – approved 12 May 2017.

[\[10\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref10) Standard Operating Environment (SOE) refers to a computer’s operating system and its associated hardware and software applications.

[\[11\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref11) Patching involves making changes to software which is designed to update, fix or improve it, for example to fix bugs or security vulnerabilities.

[\[12\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref12) Plug-ins are software that add specific functions to an existing computer program, for example adding a plug- in such as Adobe Flash to a web browser in order to view certain multimedia content.

[\[13\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref13) Email client is a web application that allows email addresses to receive, read, compose and send emails e.g. Gmail, Hotmail and Outlook.

[\[14\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref14) A device driver is a software program that controls a hardware device that is attached to a computer.

[\[15\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref15) The development environment is where changes to software are developed. Once the developer thinks it is ready, the product is copied to a testing environment, to verify it works as expected. If testing is successful, the product is deployed to a production environment, making it available to all users of the system.

[\[16\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref16) Vulnerability scanning is an inspection of the potential system weaknesses on a computer or network.

[\[17\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref17) Penetration testing is the practice of testing a computer system, network or web application to find security weaknesses that a hacker could exploit and identify areas to improve.

[\[18\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref18) Dynamic code analysis is a procedure that is used to evaluate a program during its development phase.

[\[19\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref19) Stored procedures are a set of instructions designed to perform a frequently used operation within a program, in this case accessing a program that allows a user to create, update, administer and interact with a database used in data matching.

[\[20\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref20) The data ingestion pipeline refers to the process that is implemented on SAP HANA (as stored procedures) and orchestrated by SAP Data Services to perform the data validation, standardisation and identity matching functions. This process is executed automatically upon receipt of a file from the ATO.

[\[21\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref21) Hard disk is a magnetic disk on which you can store computer data. The term hard is used to distinguish it from a soft, or floppy, disk.

[\[22\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref22) A database server refers to the hardware or software used to run a database.

[\[23\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref23) Full disk encryption is a security control used to protect data at rest (i.e. when not being used) on storage devices and provides a level of protection against loss of data if the device itself is lost or stolen.

[\[24\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref24) A web application is any program that is accessed over a network connection rather than existing within a device’s memory. Web-based applications often run inside a web browser, examples include online forms and email programs.

[\[25\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref25) A web server is a computer program that runs websites.

[\[26\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref26) A ‘man-in-the-middle’ attack is a form of eavesdropping where communication between two users is monitored and modified by an unauthorised party.

[\[27\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref27) Database Management System (DBMS) is software that handles the creation, storage, retrieval, updating and management of data held in a database.

[\[28\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref28) An application server is a software program that facilitates the creation and running of web applications.

[\[29\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref29) A storage area network is a type of local area network (a network that connects computers within a limited area such as a building) designed to handle large data transfers and bulk storage of digital information.

[\[30\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref30) Privileged access is access to a system that is above and beyond that which a ‘normal’ user has access to.

[\[31\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref31) Administrative privileges are the ability to make major changes to a system and install software.

[\[32\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref32) USB device refers to any device that is usually small in size, removable, rewritable, can store data in the absence of a power supply (known as flash memory) and connects to a computer with a USB interface.

[\[33\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref33) Database Administrator (DBA) is a specialised role that is responsible for the maintenance and operation of databases.

[\[34\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref34) ‘Salting’ is basically where an additional string of data, such as random numbers or text, is added to the password to make it less predictable and harder to attack, and ‘hashing’ is where passwords are processed through cryptographic algorithms that convert them into seemingly random characters. See [Guide to securing personal information](https://www.oaic.gov.au/_old/privacy/guidance-and-advice/guide-to-securing-personal-information), p. 31.

[\[35\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref35) A resource-based strategy is based on the view that an entity relies on the effective and efficient application of its resources to gain and sustain a competitive advantage.

[\[36\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref36) Gateway refers to the hardware which is used to connect two different networks for example the connection between an internal network and the Internet. DHS’s Gateway Management Zone is a space on DHS’s network separated from other DHS systems and is used to access and manage devices which connect DHS to other networks (such as the Internet). This zone is a secure area which is locked down, i.e. no internet access, no email, no sending and receiving of traffic that is not related to administrative purposes.

[\[37\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref37) A virtual session involves real-time interactions between people on the internet.

[\[38\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref38) ‘Multi-factor authentication’ (MFA) is a process used to identify and control access of individuals by associating user rights and restrictions with their identity. MFA requires two of three factors to be presented — something one knows (such as a password or code), something one has (a physical token, such as a bank card, security pass, or a mobile phone to receive SMS confirmation), or something one is (biometric information such as a fingerprint). See [Guide to securing personal information](https://www.oaic.gov.au/_old/privacy/guidance-and-advice/guide-to-securing-personal-information), p. 29.

[\[39\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref39) RSA key is a two-factor authentication technology which usually involves a user having a security token which can take the form of software or a small hardware device (something one has) and a password or PIN (something one knows) in order to gain access to a protected system.

[\[40\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref40) For further information on the Informational Security Manual, refer to [Australian Government Information Security Manual (ISM)](https://acsc.gov.au/infosec/ism/).

[\[41\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref41) Security Information and Event Management (SIEM) is a security management software solution used for threat detection, real-time proactive monitoring, reporting and long-term analysis of security logs, incidents and events.

[\[42\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref42) Domain Name System (DNS) is a collection of databases that translate hostnames like www.google.com, to IP addresses like 216.58.217.46. This takes place behind the scenes after an individual enters a URL into a web browser’s address bar.

[\[43\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref43) A proxy server is a system that acts as an intermediary between the user’s computer and the Internet. Proxy logs contain a record of the requests made by the user that goes through the proxy server.

[\[44\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref44) See [Guide to securing personal information](https://www.oaic.gov.au/_old/privacy/guidance-and-advice/guide-to-securing-personal-information), p. 29.

[\[45\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref45) For further information on security zones and physical security requirements for Australian Government facilities, refer to [Policy 16 Entity facilities](https://www.protectivesecurity.gov.au/physical/entity-facilities/Pages/default.aspx).

[\[46\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref46) Canberra Data Centres in Fyshwick and Hume, ACT. These facilities meet ASIO T4 standards for Zone 4 security as a minimum. This is delivered in conjunction with Security Construction and Equipment Committee (SCEC) endorsed consultants to ensure the PSPF requirements are met for physical security, access control and Type 1 alarms. 24 hour a day on-site guards are trained in emergency and continuity processes. They conduct regular patrols both inside and outside of the facility. Individual clients only have access to their POD or custom room.

[\[47\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref47) Archives Act 1983 (Cth), s 3.

[\[48\]](https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities#ftnref48) GDA 24 was revoked in July 2019. It authorised the disposal of Commonwealth records as required by the Archives Act. Agencies were legally bound to comply with GDA 24 prior to its revocation.

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

[Facebook](https://www.facebook.com/share.php?u=https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities) [Twitter](https://twitter.com/intent/tweet?url=https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities) [Linkedin](https://www.linkedin.com/sharing/share-offsite?url=https://www.oaic.gov.au/privacy/privacy-assessments-and-decisions/privacy-assessments/securing-personal-information-services-australia-formerly-department-of-human-services,-data-matching-activities)

reCAPTCHA