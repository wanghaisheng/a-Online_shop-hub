import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitterX,
  BsGithub,
} from "react-icons/bs";
import {  } from "react-icons/bs";


function SocialIcons() {
  return (
    <>
      <BsFacebook
        size={23}
        className="mr-4  h-[25px] w-[25px] cursor-pointer hover:fill-sky-500"
      />
      <BsInstagram
        size={23}
        className="mr-4 h-[25px] w-[25px] cursor-pointer hover:fill-pink-400"
      />
      <BsTwitterX
        size={23}
        className="mr-4 h-[25px] w-[25px] cursor-pointer hover:fill-amber-400"
      />
      <BsPinterest
        size={23}
        className="mr-4 h-[25px] w-[25px] cursor-pointer hover:fill-red-600"
      />
      <a href="https://github.com/RosinskaK" target="_blank">
        <BsGithub size={23} className="h-[25px] w-[25px] cursor-pointer" />
      </a>
    </>
  );
}

export default SocialIcons;
