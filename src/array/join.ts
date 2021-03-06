import { ArrayOps, StringOps } from '../'

declare module '../' {
  interface ArrayOps<A> {
    join: typeof join
  }
}

/**
 * Joins the items into a string, using a separator.
 */
export function join<A>(this: ArrayOps<A>, separator = ','): StringOps {
  return new StringOps(this.value().join(separator))
}


ArrayOps.prototype.join = join
