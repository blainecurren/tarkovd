import { request, gql } from "graphql-request";

const query = gql`
  {
    items(name: "m55a1") {
      id
      name
      shortName
    }
  }
`;

request("https://api.tarkov.dev/graphql", query).then((data) =>
  console.log(data)
);
