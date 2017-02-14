
namespace WithoutStrictNullChecks {

  type Tag = {
    id: number
    title: string
  }

  type User = {
    name: string
    tags?: Tag[];
  }

  function getTags(user: User) {
    return user.tags.map(t => t.title).join(', ')
  }

}

