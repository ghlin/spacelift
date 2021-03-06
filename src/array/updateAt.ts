import { ArrayOps, getValue, Wrapper } from '../'

declare module '../' {
  interface ArrayOps<A> {
    updateAt: typeof updateAt
  }
}

/**
 * Updates an item at the specified index.
 */
export function updateAt<A>(this: ArrayOps<A>, index: number, updater: (item: A) => A | Wrapper<A>): ArrayOps<A> {
  const result = this.value().slice()

  if (result.length > index)
    result[index] = getValue(updater(result[index]))

  return new ArrayOps(result)
}

ArrayOps.prototype.updateAt = updateAt
