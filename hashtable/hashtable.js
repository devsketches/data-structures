const DEFAULT_SIZE = 32;
class HashTable {
  #table = [];
  constructor(capacity) {
    this.capacity = capacity ?? DEFAULT_SIZE;
    this.#table = new Array(this.capacity);
    this.size = 0; // number of elements inserted to the table
  }

  get(key) {
    throw new Error("Not implemented");
  }

  put(key, value) {
    console.log(`Putting ${key}->${value} in hash table`);
    const hashCode = this.#hashCode(key);
    const bucket = this.#table[hashCode];
    if (!bucket) {
      // This is the first element in the bucket
      this.#table[hashCode] = [[key, value]];
      console.log(`Added ${key}->${value} to new bucket ${hashCode}`)
    } else {
      // There are already elements in the bucket
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        // Replace old value with new value
        console.log(`Replacing ${key}->${sameKeyItem[1]} with ${key}->${value} in bucket ${hashCode}`)
        sameKeyItem[1] = value;
      } else {
        // Add new key-value pair to the bucket
        bucket.push([key, value]);
        console.log(`Added ${key}->${value} to existing bucket ${hashCode}`)
      }
    }
    this.size++;
    this.log();
  }

  remove(key) {
    throw new Error("Not implemented");
  }

  containsKey(key) {
    return false;
  }

  getSize() {
    return this.size;
  }

  clear() {
    throw new Error("Not implemented");
  }

  log() {
    console.log("================ Hash Table ================")
    for (let i = 0; i < this.#table.length; i++) {
      const element = this.#table[i];
      console.log(element ?? "NO_BUCKET");
    }
    console.log("============================================")
  }

  #hashCode(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    const ret = total % this.capacity;
    console.log(`Hash code for ${key} is ${ret}`);
    return ret;
  }
}

const hashTable = new HashTable();

hashTable.put("key123", "Yotam");
hashTable.put("key456", "Adam");
hashTable.put("key789", "Aviv");
hashTable.put("key123", "Gal");
hashTable.put("key456", "Yoav");
hashTable.put("key321", "Meir");

hashTable.log();
