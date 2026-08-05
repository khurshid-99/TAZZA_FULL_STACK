type InstagramFeedProps = {
  image: string;
};

const InstagramFeedCart = ({ image }: InstagramFeedProps) => {
  console.log(image);
  return (
    <div className="w-81.25 aspect-325/248 bg-[pink] ">
      <img
        src={image}
        alt=""
        className="w-81.25 aspect-325/248 object-cover object-center "
      />
    </div>
  );
};

export default InstagramFeedCart;
