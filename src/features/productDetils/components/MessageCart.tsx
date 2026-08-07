import { message } from "../../../images";
import type { MessageCartProps } from "../types/MessageCart.type";

const MessageCart = ({
  id,
  userImg,
  date,
  uMessage,
  author,
  unreadCount,
}: MessageCartProps) => {
  return (
    <div id={id.toString()} className="w-[732px] flex items-start gap-8 pb-4 ">
      <img
        src={userImg}
        alt=""
        className="w-[79px] aspect-square object-center object-cover rounded-[50%] "
      />
      <div className="w-full flex items-start justify-between border-b border-light-text pb-[20px]  ">
        <div className="">
          <p className="text-14 text-[#949494] ">
            {author} {date}
          </p>
          <p className="w-[420px] text-26 text-[#343434] ">{uMessage}</p>
        </div>
        <div className="relative w-[35.5px] ">
          <img
            src={message}
            alt=""
            className="w-[35.5px] aspect-square object-center object-cover "
          />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#B3B3B3] font-n-sb ">
            {unreadCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MessageCart;
