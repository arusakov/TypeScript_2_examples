
namespace WithoutStrictNullChecks {

  type User = {
    name: string
    tags?: string[]
  }

  function getTags(user: User) {
    return user.tags.join(', ')
  }

}

