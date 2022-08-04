import Link from "next/link";
import dynamic from "next/dynamic";
const DynamicComponentWithNoSSR = dynamic(() => import("../components/App"), {
  ssr: false
});

export default function IndexPage() {
  return (
    <div>
      <DynamicComponentWithNoSSR />
    </div>
  );
}
