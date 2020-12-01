/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGuesture = /* GraphQL */ `
  mutation CreateGuesture(
    $input: CreateGuestureInput!
    $condition: ModelguestureConditionInput
  ) {
    createGuesture(input: $input, condition: $condition) {
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
export const updateGuesture = /* GraphQL */ `
  mutation UpdateGuesture(
    $input: UpdateGuestureInput!
    $condition: ModelguestureConditionInput
  ) {
    updateGuesture(input: $input, condition: $condition) {
      id
      name
      category
      type
      gifUrl
      stillUrl
      mp3Url
      drawingUrl
      updatedAt
    }
  }
`;
export const deleteGuesture = /* GraphQL */ `
  mutation DeleteGuesture(
    $input: DeleteGuestureInput!
    $condition: ModelguestureConditionInput
  ) {
    deleteGuesture(input: $input, condition: $condition) {
      id
    }
  }
`;
