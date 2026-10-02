import Link from "next/link";
import type { SfLinkAdapterProps } from "@silverfoxcloud/web-ui";

export default function WebUiLinkAdapter({ href, ...props }: SfLinkAdapterProps) {
  if (/^https?:\/\//i.test(href)) {
    return <a href={href} {...props} />;
  }
  return <Link href={href} {...props} />;
}
