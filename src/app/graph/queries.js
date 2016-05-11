export const makeFetchConvosQuery = () => ({
  query: `
    {
      convos {
        id
        name
        updated_at
        created_at
        user_count
        access
      }
    }
  `
});
