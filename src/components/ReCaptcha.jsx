import ReCAPTCHA from 'react-google-recaptcha';

const site_key = '6Lft0jQpAAAAACO-XweXfA6qP1o10M0EWBJvBmMM';

const ReCaptcha = ({ setCapVal }) => {
  return (
    <ReCAPTCHA sitekey={site_key} onChange={(value) => setCapVal(value)} />
  );
};

export default ReCaptcha;
