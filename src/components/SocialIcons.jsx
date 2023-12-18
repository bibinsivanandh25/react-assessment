import { FaFacebookF, FaGithubAlt, FaGoogle } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="mt-4 flex cursor-pointer items-center justify-evenly">
      <FaGithubAlt
        className="rounded-full bg-black p-2 text-4xl text-white
    "
      />
      <FaGoogle className="rounded-full bg-orange-700 p-2 text-4xl text-white" />
      <FaFacebookF className="rounded-full bg-blue-900 p-2 text-4xl text-white" />
    </div>
  );
};

export default SocialIcons;
