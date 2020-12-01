/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGuesture = /* GraphQL */ `
  query GetGuesture($id: ID!) {
    getGuesture(id: $id) {
      id
      name
      category
      type
      gifUrl
      stillUrl
      mp3Url
      drawingUrl
      createdAt
      updatedAt
    }
  }
`;
export const listGestures = /* GraphQL */ `
  query ListGestures(
    $filter: ModelGestureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGestures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        category
        type
        gifUrl
        stillUrl
        mp3Url
        drawingUrl
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
