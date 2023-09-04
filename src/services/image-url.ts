import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string | null) => {
  if (!url) return noImage;

  const target = "media/";
  url;
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
