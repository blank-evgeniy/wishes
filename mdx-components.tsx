import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  wrapper: (props) => (
    <div className="prose-sm prose-purple mx-auto mt-10 font-mono" {...props} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
