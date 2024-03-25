import GithubSVG from "./icons/GithubIcon";
import LinkedinSVG from "./icons/LinkedinIcon";
import TwitterSVG from "./icons/TwitterIcon";
import WebsiteSVG from "./icons/WebisteIcon";

export default function SocialImage(params: any) {
  const { type, width, height } = params;
  const fillColor = "fill-[rgb(var(--foreground-rgb))]";
  let returnIcon = null;
  switch (type) {
    case "github":
      returnIcon = (
        <GithubSVG width={width} height={height} fillColor={fillColor} />
      );
      break;
    case "linkedin":
      returnIcon = (
        <LinkedinSVG width={width} height={height} fillColor={fillColor} />
      );
      break;
    case "twitter":
      returnIcon = (
        <TwitterSVG width={width} height={height} fillColor={fillColor} />
      );
      break;
    default:
      returnIcon = (
        <WebsiteSVG width={width} height={height} fillColor={fillColor} />
      );
      break;
  }

  return returnIcon;
}
