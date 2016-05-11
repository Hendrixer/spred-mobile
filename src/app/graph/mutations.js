export const makeCreateConvoMutation = ({ name, tags }) => ({
  query: `
    mutation createNewConvo {
      convo: createConvo (name: "${name}", tags: "${tags}") {
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
