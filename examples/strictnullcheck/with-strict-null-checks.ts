
namespace WithoutStrictNullChecks {

  type User = {
    name: string
    tags?: string[];
  }

  function getTags(user: User) {
    return user.tags.join(', ')
  }

  function getTagOK(user: User) {
    return user.tags && user.tags.join(', ')
  }

}

