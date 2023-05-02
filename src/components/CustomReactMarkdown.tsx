import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import { MarkdownResult } from "../../utils";

export const CustomReactMarkdown = ({
  children,
}: {
  children: MarkdownResult;
}) => {
  let absoluteLinkPattern = /^https?:\/\//;

  return (
    <MDXRemote
      {...children}
      components={{
        a: ({ href, ...props }) => {
          if (!href) {
            return <a {...props}></a>;
          }
          if (href && absoluteLinkPattern.test(href)) {
            return <a href={href} {...props} rel="noopener noreferrer"></a>;
          }
          return (
            <Link href={href}>
              <a {...props}></a>
            </Link>
          );
        },
      }}
    />
  );
};
