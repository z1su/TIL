import Layout from "@/components/layout/layout";
import MainHeader from "@/components/layout/main-header";
import "@/styles/globals.css";

export default function App(props) {
  return (
    <Layout>
      <MainHeader />
      <main>{props.children}</main>
    </Layout>
  );
}
