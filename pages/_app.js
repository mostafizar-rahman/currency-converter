import Layout from "@/components/Layout";
import Navbar from "@/components/Shared/Navbar/Navbar";
import FormProvider from "@/context/FormProvider/FormProvider";
import "@/styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});
export default function App({ Component, pageProps }) {
  return (
    <>
      <FormProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FormProvider>
    </>
  );
}
