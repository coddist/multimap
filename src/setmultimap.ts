export class SetMultimap<K, V> extends Map<K, Set<V>> {
  /**
   * Adds value to the multimap
   *
   * @param key Map key
   * @param value Value to set
   * @returns SetMultimap
   */
  add(key: K, value: V) {
    if (!this.has(key)) {
      Map.prototype.set.call(this, key, new Set());
    }
    this.get(key)?.add(value);
    return this;
  }
}
