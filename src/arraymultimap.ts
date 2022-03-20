export class ArrayMultimap<K, V> extends Map<K, V[]> {
  /**
   * Adds value to the multimap
   *
   * @param key Map key
   * @param value Value to set
   * @returns ArrayMultimap
   */
  add(key: K, value: V) {
    if (!this.has(key)) {
      Map.prototype.set.call(this, key, []);
    }
    this.get(key)?.push(value);
    return this;
  }
}
