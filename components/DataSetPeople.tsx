import Image from "next/image";
import Link from "next/link";
import SocialImage from "./SocialImage";
import DangerMessage from "./DangerMessage";

export default function DataSetPeople({
  publishers,
  submitted,
  title,
  body,
  titleMessage,
}: any) {
  return (
    <div className="flex flex-col mb-8">
      <h4>
        {title} {submitted}
      </h4>
      <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {publishers.map((submitter: any, key: any) => (
          <div key={key} className="flex flex-row items-center mr-2">
            <div
              style={{
                backgroundImage: `url(${submitter.avatar})`,
                height: 50,
                width: 50,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
              className="border-2 border-[rgb(var(--accent-sec))] border-white mr-2 rounded-full"
            ></div>

            <div>
              <div>{submitter.name}</div>
              <div className="flex flex-row">
                {submitter.links.map((link: any, key: any) => {
                  return (
                    <Link
                      href={link.url}
                      target="_blank"
                      key={key}
                      className="mr-2"
                    >
                      <SocialImage type={link.type} width={15} height={15} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
      {publishers.length === 0 && (
        <DangerMessage body={body} title={titleMessage} />
      )}
    </div>
  );
}
