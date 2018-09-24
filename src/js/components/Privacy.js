import * as React from 'react';
import styled from 'styled-components';

const FormDiv = styled.div`
    width: 80%;
    padding-left: 20%;
`;
const Title = styled.h1`
    font-family: Open Sans;
`;

const Paragraph = styled.p`
    font-family: Open Sans;
`;

const SubTitle = styled.h3`
    font-family: Open Sans;
`;

class Privacy extends React.Component {
    render() {
        return (
            <FormDiv>
                <Title>
                    Privacy Policy
        </Title>
                <Paragraph>
                    This Privacy Policy sets forth the policies of Chinese Women in Computing (CWiC) with respect to nonpublic personal information you provide to us through this web site (the “Site”). These policies may be changed at any time, in which case the revised Privacy Policy will apply to information collected after the date the Privacy Policy is changed and posted. By using our Site, you consent to the terms and conditions of this Privacy Policy.
        </Paragraph>
                <SubTitle>
                    1. PERSONAL INFORMATION COLLECTED.
        </SubTitle>
                <Paragraph>
                    CWiC is committed to respecting and protecting the privacy of visitors to our website. We do not collect personal information from a visitor unless it is submitted voluntarily and knowingly for specified purposes. You can have general access to our Site and browse pages describing our organization without providing any personal information or being required to register at our Site. However, you may not be able to access all parts of our Site or interact with us online without supplying personal information.  We also will receive your personal information if you submit it to us when you e-mail comments to the Site or if you complete surveys on our Site.
        </Paragraph>
                <SubTitle>
                    2. USE OF INFORMATION.
        </SubTitle>
                <Paragraph>
                    The personal information you provide may be entered into our constituent database and you may be contacted in order to supply you with additional information about CWiC, its programs, events, fund-raising drives or volunteer opportunities. We do not disclose or release any of your personal information to anyone, other than to our affiliates (i.e., service providers, web site hosts), except as permitted or required by law, such as to our attorneys or the government.
        </Paragraph>
                <SubTitle>
                    3. HYPERLINKS.
        </SubTitle>
                <Paragraph>
                    This Privacy Policy applies only to the use of this Site. This Site may contain hyperlinks or “links” to other third-party web sites, and other web sites may “link” to this Site. Web sites linking to and from this Site may have different privacy practices from the ones described here. We are not responsible for the data collection, privacy and information sharing policies and procedures or the content of such web sites. You should refer to the privacy policies of each individual linked site to determine how your privacy is protected.
        </Paragraph>
                <SubTitle>
                    4. SECURITY.
        </SubTitle>
                <Paragraph>
                    We are very concerned with the safety and security of your sessions on our Site, the information you provide us online, and any transactions you conduct with us online. We have implemented and maintain physical, electronic and procedural safeguards consistent with industry standard protocol to help guard your nonpublic personal information and protect against the loss, misuse, interception, access and alteration of information you send us. We restrict access to nonpublic personal information about you to those of our employees and our agents who need to know the information to enable us to provide our services to you and we emphasize to them the importance of maintaining the security, confidentiality and integrity of your personal information.
        </Paragraph>
                <SubTitle>
                    5. CHILDREN’S ONLINE PRIVACY PROTECTION ACT.
        </SubTitle>
                <Paragraph>
                    We comply with the Children’s Online Privacy Protection Act of 1998 (“COPPA”). COPPA requires that web site operators never knowingly request personally identifiable information from anyone under the age of 13 without requesting verifiable parental consent.
        </Paragraph>
                <Paragraph>
                    In accordance with COPPA, we do not knowingly collect any personally identifiable information from children under the age of 13. We recommend that no one under the age of 18 submit personally identifiable information to our Site. In the event that we determine that a user of this Site is under the age of 13, we will not maintain or use his or her personally identifiable information.
        </Paragraph>
                <SubTitle>
                    6. CONTACTING THE WEB MANAGER.
        </SubTitle>
                <Paragraph>
                    If you have questions or comments about this Privacy Policy, or your dealings with this Site, you may send an email to <a href="mailto:chinesewic.us@gmail.com">chinesewic.us@gmail.com</a>.
        </Paragraph>
                <Paragraph>
                    Thank you for visiting our Site and telling others about Chinese Women in Computing.
        </Paragraph>
            </FormDiv>
        );
    }
}

export default Privacy;
