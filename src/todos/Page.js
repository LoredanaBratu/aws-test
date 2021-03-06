import React from "react";
import { Query } from "react-contentful";

const Page = props => (
  <Query
    contentType="blog"
    query={{
      "fields.slug[in]": `/${props.match.slug || ""}`
    }}
  >
    {({ data, error, fetched, loading }) => {
      if (loading || !fetched) {
        return null;
      }

      if (error) {
        console.error(error);
        return null;
      }

      if (!data) {
        return <p>Page does not exist.</p>;
      }

      // See the Contentful query response
      console.debug(data);

      // Process and pass in the loaded `data` necessary for your page or child components.
      return <div>Test</div>;
    }}
  </Query>
);

export default Page;
