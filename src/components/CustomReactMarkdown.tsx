import Link from "next/link";
import ReactMarkdown from "react-markdown";

export const CustomReactMarkdown = ({ children }: { children: string }) => {
  let absoluteLinkPartsPattern = /(http|https|www)/;

  return (
    <ReactMarkdown
      components={{
        a: ({ href, ...props }) => {
          if (!href) {
            return <a {...props} data-at="test"></a>;
          }
          if (href && absoluteLinkPartsPattern.test(href)) {
            return <a href={href} {...props} data-at="test"></a>;
          }
          return <Link href={href} {...props}></Link>;
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
};
